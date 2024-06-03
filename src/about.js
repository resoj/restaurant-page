const loadAboutContent = (contentContainer) => {
    const aboutTitle = document.createElement('div');
    const aboutContent = document.createElement('div');
    
    contentContainer.appendChild(aboutTitle);
    contentContainer.appendChild(aboutContent);

    aboutTitle.textContent = 'About us';
    aboutContent.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, sunt? Eius reiciendis natus fugit incidunt commodi, veritatis id earum asperiores voluptatibus non, nesciunt magni temporibus porro eum vitae molestiae adipisci.';
}

export default loadAboutContent;