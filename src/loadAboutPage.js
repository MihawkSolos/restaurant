export {loadAboutPage};

const loadAboutPage = () => {

    const contentDiv = document.querySelector('#content');

    // clearing the div first
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-info');
    contentDiv.appendChild(contactDiv);

    const contactMessage = document.createElement('h5');
    contactMessage.classList.add('contact-message');
    contactMessage.innerHTML = 'Contact us @'

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('number');
    phoneNumber.innerHTML = '(000)000-0000';

    const email = document.createElement('p');
    email.classList.add('email');
    email.innerHTML = 'burgers&fries@example.com';

    contactDiv.appendChild(contactMessage);
    contactDiv.appendChild(phoneNumber);
    contactDiv.appendChild(email);
};