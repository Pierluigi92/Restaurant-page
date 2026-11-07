export function renderHome() {
    const divContent = document.getElementById('content');

    const containerHome = document.createElement('div');
    containerHome.classList.add('container-home');
    divContent.append(containerHome);

    const h1 = document.createElement('h1');
    h1.classList.add('h1Home');

    const p = document.createElement('p');
    p.classList.add('pHome');

    h1.innerText = "Welcome to La Tavola Italiana";;
    p.innerText = "Authentic flavors, simple ingredients, and recipes that tell the story of Italy. From carefully crafted pasta to traditional desserts, every dish is designed to make you feel as though you are in Italy.";

    containerHome.append(h1, p);
}