/* MailerLite embedded form -> GA4 conversion tracking.
   The form submits over JSONP and swaps in an inline success message without
   changing the URL, so there is no pageview GA4 could hang a conversion on.
   Two detection paths, both funnelling through one guarded sender:
     1. ml_webform_success_<id>() — MailerLite calls this on a successful post.
        Each page's callback calls window.rfFormSubmission().
     2. A MutationObserver on the success panel, as a fallback for the case
        where MailerLite reveals it without invoking the page callback.
   The `sent` guard means at most one form_submission event per page load. */
(function () {
  var sent = false;

  function send(source) {
    if (sent) return;
    sent = true;

    if (typeof gtag !== 'function') return;

    gtag('event', 'form_submission', {
      form_name: 'colonist-application-wave-3',
      form_location: window.location.pathname,
      detection_method: source || 'callback'
    });
  }

  // Called from each page's ml_webform_success_* callback.
  window.rfFormSubmission = function () { send('callback'); };

  function isVisible(el) {
    return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
  }

  function watchSuccessPanels() {
    var panels = document.querySelectorAll('.ml-form-successBody');
    if (!panels.length) return;

    // Covers a success panel already shown before this script ran.
    for (var i = 0; i < panels.length; i++) {
      if (isVisible(panels[i])) { send('observer'); return; }
    }

    var observer = new MutationObserver(function () {
      for (var j = 0; j < panels.length; j++) {
        if (isVisible(panels[j])) {
          send('observer');
          observer.disconnect();
          return;
        }
      }
    });

    for (var k = 0; k < panels.length; k++) {
      observer.observe(panels[k], {
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchSuccessPanels);
  } else {
    watchSuccessPanels();
  }
})();
