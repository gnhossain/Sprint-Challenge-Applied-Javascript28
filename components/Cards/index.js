// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get(" https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data);
    
    const cards = document.querySelector('.cards-container');

    response.data.articles.javascript.forEach(item => cards.appendChild(createCard(item)));
    response.data.articles.bootstrap.forEach(item => cards.appendChild(createCard(item)));
    response.data.articles.technology.forEach(item => cards.appendChild(createCard(item)));
    response.data.articles.jquery.forEach(item => cards.appendChild(createCard(item)));
    response.data.articles.node.forEach(item => cards.appendChild(createCard(item)));
    
    })

  .catch(error => {
    console.log("The data was not returned", error);
  });

  function createCard(item){
    //elements
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardImgContent = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardName = document.createElement('span');

    //stucture
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgContent);
    cardAuthor.appendChild(cardName);
    cardImgContent.appendChild(cardImage);

    //class
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgContent.classList.add('img-container');

    //content
    cardHeadline.textContent = item.headline;
    cardImage.src = item.authorPhoto;
    cardName.textContent = item.auhorName;

    return card;

  }