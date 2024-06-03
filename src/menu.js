const loadMenuContent = (contentContainer) => {
    const menuItem1 = document.createElement('div');
    const menuDesc1 = document.createElement('div');
    const menuPrice1 = document.createElement('div');

    const menuItem2 = document.createElement('div');
    const menuDesc2 = document.createElement('div');
    const menuPrice2 = document.createElement('div');

    const menuItem3 = document.createElement('div');
    const menuDesc3 = document.createElement('div');
    const menuPrice3 = document.createElement('div');

    contentContainer.appendChild(menuItem1);
    contentContainer.appendChild(menuDesc1);
    contentContainer.appendChild(menuPrice1);

    contentContainer.appendChild(menuItem2);
    contentContainer.appendChild(menuDesc2);
    contentContainer.appendChild(menuPrice2);

    contentContainer.appendChild(menuItem3);
    contentContainer.appendChild(menuDesc3);
    contentContainer.appendChild(menuPrice3);

    menuItem1.textContent = "Rice con Beans";
    menuDesc1.textContent = "Basmati rice with beans seasoned in indian spices.";
    menuPrice1.textContent = "$5.00";

    menuItem2.textContent = "Mofongo de Platano Relleno con Chana Saag";
    menuDesc2.textContent = "Plantain mofongo filled with Chana Saag curry.";
    menuPrice2.textContent = "$20.00";

    menuItem3.textContent = "Chana Saag";
    menuDesc3.textContent = "Garbanzo beans in a spinach sauce with indian spices. Comes with Basmati rice."
    menuPrice3.textContent = "$14.00";
}

export default loadMenuContent;