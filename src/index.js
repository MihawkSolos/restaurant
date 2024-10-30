import './styles.css';

const contentDiv = document.querySelector('#content');

const mainContentDiv = document.createElement('div');
mainContentDiv.classList.add('main-content');
contentDiv.appendChild(mainContentDiv);

// main div content
const imageDiv = document.createElement('div');
imageDiv.classList.add('img-div');
mainContentDiv.appendChild(imageDiv);

// image div content
const h1Title = document.createElement('h1');
h1Title.classList.add('title');
h1Title.innerHTML = 'Burgers & Fries';
imageDiv.appendChild(h1Title);

// image div content
const image = document.createElement('img');
image.classList.add('home-img');
image.src = 'https://friendlysrestaurants.com/assets/live/img/production/detail/menu/lunch-dinner_999-combohs_all-american-burger-fries.jpg';
image.alt = 'Burger and Fries';
imageDiv.appendChild(image);

// main div content
const schedule = document.createElement('div');
schedule.classList.add('schedule');
mainContentDiv.appendChild(schedule);

// schedule div content
const info1 = document.createElement('p');
const info2 = document.createElement('p');
const info3 = document.createElement('p');
const info4 = document.createElement('p');

info1.classList.add('schedule-title');
info1.innerHTML = 'SCHEDULE';
schedule.appendChild(info1);

info2.classList.add('days');
info2.innerHTML = 'Saturday - Sunday';
schedule.appendChild(info2);

info3.classList.add('times');
info3.innerHTML = '9:00.a.m. - 11:00.p.m.';
schedule.appendChild(info3);

info4.classList.add('address');
info4.innerHTML = '1111 Burger Ave, Detroit, MI';
schedule.appendChild(info4);





