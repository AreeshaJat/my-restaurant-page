import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
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
    let menuTwo = new Menu(img3, 'Tacos al Pastor', 'Tacos al Pastor are a quintessential Mexican street food, featuring marinated pork cooked on a vertical spit.', 'Thinly sliced pork, achiote paste, pineapple, onion, cilantro, lime, corn tortillas.');

    let menuItem = [menuOne, menuTwo];

    for (let i = 0; i < menuItem.length; i++) {
        let recipeDiv = document.createElement("div");
        recipeDiv.classList.add('recipeDiv'); //adding class to div
        contentDiv.appendChild(recipeDiv);

        let menu = new Image();
        menuImg.src = menuImg[i].img;
        recipeDiv.appendChild(menuImg);

        let menuTitle = document.createElement('h2');
        menuTitle.classList.add('menuTitle');
        menuTitle.textContent = menuItem[i].menuTitle;
        recipeDiv.appendChild(menuTitle);

        let menuDescription = document.createElement('p');
        menuDescription.classList.add('menuDescription');
        menuDescription.textContent = menuItem[i].menuDescription;
        recipeDiv.appendChild(menuDescription);

        let menuIngredients = document.createElement('p');
        menuIngredients.classList.add('menuIngredients');
        menuIngredients.textContent = menuItem[i].menuIngredients;
        recipeDiv.appendChild(menuIngredients);
    }
}

export default menuContent;