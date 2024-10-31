export {loadMenuPage};

const loadMenuPage = () => {

    const contentDiv = document.querySelector('#content');

    // clearing the div first
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    

    const menu = document.createElement('div');
    menu.classList.add('menu');
    contentDiv.appendChild(menu);

    //burger1
    const burger1 = document.createElement('div');
    burger1.classList.add('burger1');
    const burger1Image = document.createElement('img');
    burger1Image.classList.add('burger1-img', 'menu-img');
    burger1Image.src = 'https://arteflame.com/cdn/shop/articles/Perfectly-seared-smashed-cheeseburger.webp?v=1723827320&width=1600';
    burger1Image.alt = 'Cheeseburger';
    burger1.appendChild(burger1Image);
    const desc1 = document.createElement('p');
    desc1.classList.add('desc1', 'desc');
    desc1.innerHTML = 'Lettuce, Tomato, Onion, Beef, American Cheese, Special Sauce';
    burger1.appendChild(desc1);
    menu.appendChild(burger1);

    //burger2
    const burger2 = document.createElement('div');
    burger2.classList.add('burger2');
    const burger2Image = document.createElement('img');
    burger2Image.classList.add('burger2-img', 'menu-img');
    burger2Image.src = 'https://eatsdelightful.com/wp-content/uploads/2022/02/crispy-chicken-sandwich-assembled-in-plate-1.jpg';
    burger2Image.alt = 'Grilled Chicken Burger';
    burger2.appendChild(burger2Image);
    const desc2 = document.createElement('p');
    desc2.classList.add('desc2', 'desc');
    desc2.innerHTML = 'Lettuce, Tomato, Onion, Grilled Chicken, American Cheese, Special Sauce';
    burger2.appendChild(desc2);
    menu.appendChild(burger2);

    //fry1
    const fry1 = document.createElement('div');
    fry1.classList.add('fry1');
    const fry1Image = document.createElement('img');
    fry1Image.classList.add('fry1-img', 'menu-img');
    fry1Image.src = 'https://waynesburgpizza.com/wp-content/uploads/2017/12/regular-fries.jpg';
    fry1Image.alt = 'Regular Fries';
    fry1.appendChild(fry1Image);
    const desc3 = document.createElement('p');
    desc3.classList.add('desc3', 'desc');
    desc3.innerHTML = 'Regular/ Cajun Fries';
    fry1.appendChild(desc3);
    menu.appendChild(fry1);

    //fry1
    const fry2 = document.createElement('div');
    fry2.classList.add('fry2');
    const fry2Image = document.createElement('img');
    fry2Image.classList.add('fry1-img', 'menu-img');
    fry2Image.src = 'https://www.devourdinner.com/wp-content/uploads/2023/03/Bacon-Cheese-Fries_Devour-Dinner-201.jpg';
    fry2Image.alt = 'Cheese Fries';
    fry2.appendChild(fry2Image);
    const desc4 = document.createElement('p');
    desc4.classList.add('desc4', 'desc');
    desc4.innerHTML = 'Cheese Fries';
    fry2.appendChild(desc4);
    menu.appendChild(fry2);
};