function createElement(element, content, tag){
    descriptionElement = document.createElement (element);
    descriptionElement.textContent = content;
    document.querySelector(tag).appendChild(descriptionElement);
}

async function fetchOffers() {
    const response = await fetch("https://corsproxy.io/?url=https://codepassport.dev/api/offers");
    const offers = await response.json();
    
    offers.forEach(element => {
        createElement("h2", element.titre, "body");
        createElement("p", element.technologie, "body");
        createElement("p", element.description, "body");
    });
}
fetchOffers();