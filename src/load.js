function loadContent() {

    const contentDiv = document.getElementById('content');

    let imgAndtextDiv = document.createElement("div");
    imgAndtextDiv.className = "paraImg";
    let newImage = new Image();
    newImage.src = '../images/img1.png';
    newImage.style.width = '35vw';
    newImage.style.height = '60vh';
    newImage.style.borderRadius = '50%';
    newImage.style.marginLeft = '5%';

    let rightSide = document.createElement("div");
    rightSide.className = "rightSide";
    
    let title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Welcome to El Alma del Sabor";

    let para = document.createElement("p");
    para.textContent = "Immerse yourself in the vibrant flavors and rich traditions that have made Mexican cuisine a beloved culinary experience worldwide. El Alma del Sabor, our enchanting restaurant, invites you on a journey to discover the true essence of Mexico's culinary soul. From the moment you step through our doors, the vibrant colors, lively ambiance, and tantalizing aromas will transport you to the bustling streets and lively markets of Mexico.";

    rightSide.appendChild(title);
    rightSide.appendChild(para);

    imgAndtextDiv.appendChild(newImage);
    imgAndtextDiv.appendChild(rightSide);

    contentDiv.appendChild(imgAndtextDiv);
}

export default loadContent;