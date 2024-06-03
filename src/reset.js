const resetContent = (contentContainer) => {

    while(contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
}

export default resetContent;