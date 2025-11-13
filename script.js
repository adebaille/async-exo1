async function fetchOffers() {
    const response = await fetch("https://corsproxy.io/?url=https://codepassport.dev/api/offers");
    const offers = await response.json();
    console.log(offers)
}
fetchOffers();

const titleElement = document.createElement ('h2');
const descriptionElement = document.createElement ('p');