---
# Jekyll Site Development Instructions

To ensure the website you create is fully compatible with Jekyll and can be seamlessly integrated into the repository, please follow these instructions:

1. **Directory Structure**
   - Organize the content and assets into the following structure:
     - `_layouts/`: HTML templates for the site's structure.
     - `_includes/`: Reusable snippets of code (like headers or footers).
     - `_posts/`: Blog posts named in the format `YYYY-MM-DD-title.md`.
     - `assets/`: For styles, scripts, and images (e.g., `assets/css/` and `assets/js/`).
   - Ensure all site-related configuration files (like `_config.yml`) are at the root of the project.

2. **File Formats**
   - All content pages (e.g., home, about) should be written as Markdown (`.md`) or HTML (`.html`).
   - Add YAML front matter at the top of each content file to define the page’s metadata. Example:
     ```
     ---
     layout: default
     title: About Us
     ---
     ```

3. **Layouts and Includes**
   - Create reusable templates (e.g., header, footer) and store them in `_layouts` and `_includes`.
   - Use the `layout:` metadata in each content file’s front matter to apply these templates.

4. **Asset Integration**
   - Place site assets (CSS, JavaScript, images) in the `assets/` directory.
   - Reference these assets with relative URLs in your code. Example:
     ```html
     <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
     <script src="{{ '/assets/js/script.js' | relative_url }}"></script>
     ```

5. **Config File (_config.yml)**
   - Add a `_config.yml` file with the necessary site-wide settings. Example:
     ```
     title: My New Site
     baseurl: ""
     url: "https://your-site-url.com"
     ```

6. **Naming Blog Posts**
   - Blog posts should be located inside `_posts/` and named using the format `YYYY-MM-DD-title.md`. Example:
     ```
     _posts/2026-03-05-welcome-to-my-site.md
     ```

7. **Testing Locally**
   - Test the site locally to verify compatibility. Use the following commands:
     ```bash
     bundle exec jekyll serve
     ```
   - Access `http://localhost:4000` in a browser to ensure all pages and assets work as intended.

### Final Steps
Once the site is complete, share the entire structured project with the repository owner for integration.
