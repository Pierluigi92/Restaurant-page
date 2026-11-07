export function renderContact() {
    const divContent = document.getElementById('content');

    const containerContact = document.createElement('div');
    containerContact.classList.add('container-contact');
    divContent.append(containerContact);

    const divImg = document.createElement('div');
    divImg.classList.add('imgContact');
    containerContact.append(divImg);

    const containerText = document.createElement('div');
    containerText.classList.add('container-contact-text');
    containerContact.append(containerText);

    const h1 = document.createElement('h1');
    h1.innerText = "Contact Us";
    containerText.append(h1);

    const p = document.createElement('p');
    p.innerText = `We are happy to welcome you to La Tavola Italiana.
                Via Roma 25, Milan
                Phone: +39 02 1234 5678
                Email: info@latavolaitaliana.it`;
    containerText.append(p);

    const h2 = document.createElement('h2');
    h2.innerText = "Opening Hours";
    containerText.append(h2);
    
    const pHours = document.createElement('p');
    pHours.innerText = `Tuesday – Sunday
                12:00 PM – 3:00 PM
                7:00 PM – 11:00 PM
                Closed on Monday.`
    containerText.append(pHours);
}