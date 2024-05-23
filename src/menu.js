import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';

function menuContent() {
    console.log('Menu button clicked');

    const contentDiv = document.getElementById('content');

    class Menu {
        constructor(img, title, description, ingredients) {
            this.img = img;
            this.title = title;
            this.description = description;
            this.ingredients = ingredients;
        }
    }

    let menuOne = new Menu(img2, 'Tacos al Pastor', 'Tacos al Pastor are a quintessential Mexican street food, featuring marinated pork cooked on a vertical spit.', 'Thinly sliced pork, achiote paste, pineapple, onion, cilantro, lime, corn tortillas.');
    let menuTwo = new Menu(img3, 'Chiles Rellenos', 'Chiles Rellenos are flavorful poblano peppers stuffed with gooey cheese, dipped in a light batter, and fried until golden brown.', 'Poblano peppers, cheese (usually Oaxaca or Chihuahua), egg batter, tomato sauce.');
    let menuThree = new Menu(img4, 'Mole Poblano', 'A complex chili-chocolate sauce for chicken.', 'Chili peppers, chocolate, various spices (such as cinnamon, cumin, cloves), chicken broth, garlic, onion, nuts (such as almonds or peanuts).');
    let menuFour = new Menu(img5, 'Pozole', 'Pozole is a hearty soup made with hominy, meat (usually pork or chicken), and seasoned broth.', 'Hominy, pork shoulder (or chicken), onion, garlic, chili peppers, oregano, bay leaves, lime, radish, lettuce, tostadas.');
    let menuFive = new Menu(img6, 'Enchiladas', 'Enchiladas are delicious rolled tortillas filled with savory meat, cheese, or beans and topped with spicy chili sauce.', 'Corn tortillas, shredded chicken or beef, cheese, chili sauce, onion, sour cream, lettuce, avocado.');
    let menuSix = new Menu(img7, 'Tamales', 'Tamales are a traditional Mexican dish made of masa filled with meat, cheese, or vegetables, then wrapped in a corn husk and steamed.', 'Masa harina, lard or vegetable shortening, chicken or pork, chili sauce, corn husks.');

    let menuItem = [menuOne, menuTwo, menuThree, menuFour, menuFive, menuSix];

    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipeDiv');
    contentDiv.appendChild(recipeDiv);

    for (let i = 0; i < menuItem.length; i++) {
        const mainMenu = document.createElement("div");
        mainMenu.classList.add('mainMenu'); //adding class to div
        recipeDiv.appendChild(mainMenu);

        let menuImg = new Image();
        menuImg.src = menuItem[i].img;
        mainMenu.appendChild(menuImg);
        menuImg.style.width = '20vw';
        menuImg.style.margin = '0';

        let menuTitle = document.createElement('h2');
        menuTitle.classList.add('menuTitle');
        menuTitle.textContent = menuItem[i].title;
        mainMenu.appendChild(menuTitle);

        let menuDescription = document.createElement('p');
        menuDescription.classList.add('menuDescription');
        menuDescription.textContent = menuItem[i].description;
        mainMenu.appendChild(menuDescription);

        let menuIngredients = document.createElement('p');
        menuIngredients.classList.add('menuIngredients');
        menuIngredients.textContent = menuItem[i].ingredients;
        mainMenu.appendChild(menuIngredients);
    }
}

export default menuContent;