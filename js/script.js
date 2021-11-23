function createProduct(parent, imgUrl, productTitle, textPrice) {
  const product = document.createElement("div");
  product.className = "product";

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}

// fetch("https://fakestoreapi.com/products") // <== importare la lista prodotti in modo remoto
//   .then((response) => response.json())
//   .then((data) => {
//     products = data;
//     renderProducts();
//   });

const wrapperProducts = document.querySelector(".wrapper__products");

function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(wrapperProducts, product.image, product.title, product.price);
  });
}

// Async await
const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return renderProducts(data);
};

getProductsList();




const bgWrapper = document.querySelector(".overlay");

const f = bgWrapper.classList.contains("overlay");


console.log('is contained? ' + f);

  
var urls = [
  'url(https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80)',
  'url(https://images.unsplash.com/photo-1573879500655-98f2012dd1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
  'url(https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
  
 
];


const interval = setInterval(() => {
  var active = Math.floor(Math.random() * (urls.length));
  const bgWrapper = document.querySelector(".overlay");
  bgWrapper.style.background = urls[active];
     active++;
     if (active == urls.length) {active = 0;}
}, 3000);

/*
var urls = [
  'url(http://placekitten.com/g/150/150)',
  'url(http://placekitten.com/g/200/200)',
  'url(http://placekitten.com/g/250/250)',
  'url(http://placekitten.com/g/300/300)',
  'url(http://placekitten.com/g/350/350)',
  'url(http://placekitten.com/g/400/400)',
  'url(http://placekitten.com/g/450/450)'
];
var active = Math.floor(Math.random() * (urls.length));
setInterval(function() {
  const bgWrapper = document.querySelector(".overlay");
  let logos = document.querySelectorAll('.logo');
  logos.forEach(function(item) {
     item.style.background = urls[active];
     active++;
     if (active == urls.length) active = 0;
  })
}, 2000);
*/