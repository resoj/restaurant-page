const loadHomeContent = (contentContainer) => {
    const headline = document.createElement('div');
    const headlineImage = document.createElement('img');
    const contentInfo = document.createElement('div');

    contentContainer.appendChild(headline);
    contentContainer.appendChild(headlineImage);
    contentContainer.appendChild(contentInfo);
    headline.textContent = "Jose's Puerto-Indian Cuisine";
    headlineImage.src = '../src/images/food-image.jpg';
    contentInfo.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, eaque? Fugiat expedita rem a. Tenetur molestiae in laudantium quaerat corporis maiores. Quos itaque ad unde placeat. Dolores amet in neque!'
}

export default loadHomeContent;