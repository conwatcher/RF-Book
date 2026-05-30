---
layout: default
title: The Books
permalink: /book/
description: The Red Foundations Universe — a hard science-fiction series by P.J. Cereste. Explore Book One and Book Two of the series.
---

<style>
  .series-hub-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .series-hub-header .series-label {
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #cc3333;
    margin-bottom: 0.75rem;
  }

  .series-hub-header h1 {
    font-size: 2rem;
    margin: 0 0 0.75rem 0;
    color: #ffffff;
  }

  .series-hub-header p {
    color: #aaaaaa;
    font-size: 0.95rem;
    max-width: 560px;
    margin: 0 auto;
  }

  .book-grid {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .book-card {
    flex: 0 0 320px;
    max-width: 340px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .book-card:hover {
    border-color: rgba(204, 51, 51, 0.4);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  }

  .book-card-cover {
    width: 100%;
    aspect-ratio: 2 / 3;
    overflow: hidden;
    background: #111;
  }

  .book-card-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .book-card:hover .book-card-cover img {
    transform: scale(1.02);
  }

  .book-card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .book-card-body .book-number {
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #cc3333;
    margin-bottom: 0.4rem;
  }

  .book-card-body h2 {
    font-size: 1.3rem;
    color: #ffffff;
    margin: 0 0 1rem 0;
    line-height: 1.3;
  }

  .book-card-body p {
    color: #cccccc;
    font-size: 0.88rem;
    line-height: 1.75;
    margin-bottom: 1.5rem;
    flex: 1;
  }

  .book-card-body .btn {
    display: inline-block;
    align-self: flex-start;
  }

  @media (max-width: 720px) {
    .book-grid {
      flex-direction: column;
      align-items: center;
    }
    .book-card {
      flex: 0 0 auto;
      width: 100%;
      max-width: 380px;
    }
  }
</style>

<main class="page-content">
  <article>

    <div class="series-hub-header">
      <p class="series-label">Red Foundations Universe &bull; P.J. Cereste</p>
      <h1>The Series</h1>
      <p>Hard science fiction grounded in real physics, real politics, and the extraordinary difficulty of building something that lasts.</p>
    </div>

    <div class="book-grid">

      <!-- BOOK ONE -->
      <div class="book-card">
       <div class="book-card-cover">
  <a href="/books/red-foundations/">
    <img src="/assets/images/Book1_cover.PNG" alt="Red Foundations book cover" />
  </a>
</div>
<div class="book-card-body">
          <p class="book-number">Book One</p>
          <h2>Red Foundations</h2>
          <p>A comet that should not exist strikes Mars and leaves it breathable. Humanity has forty-three days to decide whether to go. It goes. What follows is not exploration — it is the grinding, politically treacherous work of building a civilization from nothing on a world that was never supposed to be habitable.</p>
          <a href="/books/red-foundations/" class="btn">Learn More</a>
        </div>
      </div>

      <!-- BOOK TWO -->
      <div class="book-card">
       <div class="book-card-cover">
  <a href="/books/the-red-meridian/">
    <img src="/assets/images/Book2_Cover.PNG" alt="The Red Meridian book cover" />
  </a>
</div>
        <div class="book-card-body">
          <p class="book-number">Book Two</p>
          <h2>The Red Meridian</h2>
          <p>Cal Calloway reads rock for a living. He knows what holds and what doesn't, what bears weight and what will eventually fail. He's never spoken to a room larger than a shift crew. Then he says one sentence at a rally, and nothing stays the same.</p>
          <a href="/books/the-red-meridian/" class="btn">Learn More</a>
        </div>
      </div>

    </div>

  </article>
</main>
