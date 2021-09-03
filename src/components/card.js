import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cards = document.createElement("div");
  const headlines = document.createElement("div");
  const authors = document.createElement("div");
  const imgs = document.createElement("div");
  const authorImgs = document.createElement("img");
  const authorNames = document.createElement("span");

  cards.classList.add("card");
  headlines.classList.add("headline");
  authors.classList.add("author");
  imgs.classList.add("img-container");

  cards.appendChild(headlines);
  cards.appendChild(authors);
  authors.appendChild(imgs);
  authors.appendChild(authorNames);
  imgs.appendChild(authorImgs);

  headlines.textContent = article.headline;
  authorImgs.src = article.authorPhoto;
  authorNames.textContent = article.authorName;

  return cards;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get("https://localhost:5000/api/articles").then(res => {
    const bootstrap = res.data.articles.bootstrap
    const javascript = res.data.articles.javascript
    const jquery = res.dataarticles.jquery
    const node = res.data.articles.node
    const technology = res.data.articles.technology
  })
}

export { Card, cardAppender }
