function loadContent() {

    const contentDiv = document.getElementById('content');
    
    let title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Welcome to El Alma del Sabor";

    let para = document.createElement("p");
    para.textContent = "Immerse yourself in the vibrant flavors and rich traditions that have made Mexican cuisine a beloved culinary experience worldwide. El Alma del Sabor, our enchanting restaurant, invites you on a journey to discover the true essence of Mexico's culinary soul. From the moment you step through our doors, the vibrant colors, lively ambiance, and tantalizing aromas will transport you to the bustling streets and lively markets of Mexico. Our menu is a celebration of Mexico's diverse culinary heritage, featuring iconic dishes that have been perfected over generations. Indulge in the mouthwatering Tacos al Pastor, where marinated pork is slowly cooked on a vertical spit and topped with pineapple, onions, and cilantro. Savor the flavors of our Chiles Rellenos, roasted poblano peppers stuffed with melted cheese and enveloped in a light, crispy batter. Explore the complex and rich flavors of Mole Poblano, a traditional sauce made with a blend of chili peppers, chocolate, and a myriad of spices, perfectly complementing tender chicken. For a heartier experience, dive into our Pozole, a comforting soup brimming with hominy, shredded pork or chicken, and a flavorful broth infused with chili peppers and aromatic herbs. Delight in our enchiladas, rolled corn tortillas filled with your choice of savory fillings and smothered in a vibrant chili sauce. And no Mexican culinary journey would be complete without indulging in our authentic tamales, steamed pockets of masa dough filled with succulent meats, vegetables, or cheese, wrapped in fragrant corn husks. At El Alma del Sabor, we take pride in using only the freshest ingredients and time-honored techniques to create dishes that transport you to the heart of Mexico's rich culinary traditions. Join us on this flavorful adventure and experience the true soul of Mexican cuisine.";

    contentDiv.appendChild(title);
    contentDiv.appendChild(para);
}

export default loadContent;