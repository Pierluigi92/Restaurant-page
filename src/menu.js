export function renderMenu() {
    const divContent = document.getElementById('content');

    const divTitle = document.createElement('div');
    divTitle.classList.add ('container-menu-title');
    divContent.append(divTitle);
    const h1 = document.createElement('h1');
    h1.classList.add('h1Menu');
    h1.innerText = "Menu";
    divTitle.append(h1);

    const divMenu = document.createElement('div');
    divMenu.classList.add('container-menu-card');
    divContent.append(divMenu);

    const divBruschette = document.createElement('div');
    divBruschette.classList.add('menuCard', 'bruschette');
    divMenu.append(divBruschette);
    const divImgBruschette = document.createElement('div');
    divImgBruschette.classList.add('imgBruschette');
    divBruschette.append(divImgBruschette);
    const h2Bruschette = document.createElement('h2');
    const pBruschette = document.createElement('p');
    h2Bruschette.classList.add('h2Menu');
    pBruschette.classList.add('pMenu');
    h2Bruschette.innerText = "Tomato Bruschetta";
    pBruschette.innerText = "Toasted bread, fresh tomatoes, and basil";
    divBruschette.append(h2Bruschette, pBruschette);

    const divTagliatelle = document.createElement('div');
    divTagliatelle.classList.add('menuCard', 'tagliatelle');
    divMenu.append(divTagliatelle);
    const divImgTagliatelle = document.createElement('div');
    divImgTagliatelle.classList.add('imgTagliatelle');
    divTagliatelle.append(divImgTagliatelle);
    const h2Tagliatelle = document.createElement('h2');
    const pTagliatelle = document.createElement('p');
    h2Tagliatelle.classList.add('h2Menu');
    pTagliatelle.classList.add('pMenu');
    h2Tagliatelle.innerText = "Tagliatelle with ragù";
    pTagliatelle.innerText = "Pasta with slow-cooked meat ragù..";
    divTagliatelle.append(h2Tagliatelle, pTagliatelle);
    
    const divPizza = document.createElement('div');
    divPizza.classList.add('menuCard', 'pizza');
    divMenu.append(divPizza);
    const divImgPizza = document.createElement('div');
    divImgPizza.classList.add('imgPizza');
    divPizza.append(divImgPizza);
    const h2Pizza = document.createElement('h2');
    const pPizza = document.createElement('p');
    h2Pizza.classList.add('h2Menu');
    pPizza.classList.add('pMenu');
    h2Pizza.innerText = "Pizza Margherita";
    pPizza.innerText = "Tomato, mozzarella, and basil";
    divPizza.append(h2Pizza, pPizza);

    const divTiramisu = document.createElement('div');
    divTiramisu.classList.add('menuCard', 'tiramisu');
    divMenu.append(divTiramisu);
    const divImgTiramisu = document.createElement('div');
    divImgTiramisu.classList.add('imgTiramisu');
    divTiramisu.append(divImgTiramisu);
    const h2Tiramisu = document.createElement('h2');
    const pTiramisu = document.createElement('p');
    h2Tiramisu.classList.add('h2Menu');
    pTiramisu.classList.add('pMenu');
    h2Tiramisu.innerText = "Tiramisu";
    pTiramisu.innerText = "Mascarpone cream, coffee, and cocoa.";
    divTiramisu.append(h2Tiramisu, pTiramisu);
}