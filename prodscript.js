// Sample product data

const products = [
    {
        name: "Tulsi",
        image: "prod1.jpg",
        price: "Rs. 200",
        
    }, 
    {
        name: "Berry",
        image: "prod2.jpg",
        price: "Rs. 200",
        
    },
    {
        name: "Pink rose",
        image: "prod3.jpg",
        price: "Rs. 200",
        
    },
    {
        name: "Periwinkle",
        image: "prod4.jpg",
        price: "Rs. 200",
        
    },
    {
        name: "Orange",
        image: "prod5.jpg",
        price: "Rs. 200",
        
    },
    {
        name: "Neem",
        image: "prod6.jpg",
        price: "Rs. 200",
        
    },
];

const productCardsContainer = document.querySelector(".product-cards");
function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <div style="background-color:  rgba(128, 128, 128, 0.274); padding:2%; color:white">
        <img src="${product.image}" alt="${product.name}"><br>
        <h2>${product.name}</h2><br>
        <p>${product.price}</p><br>
       <a href="https://rzp.io/l/uOYEsWaWZ" > <button class="add-to-cart" style="align:center; margin-left:37%">BUY</button></a>
    </div>`;
    return card;
}


function displayProductCards() {
    products.forEach((product) => {
        const card = createProductCard(product);
        productCardsContainer.appendChild(card);
    });
}

displayProductCards();
