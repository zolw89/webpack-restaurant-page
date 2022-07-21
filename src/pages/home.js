//Home content

const home = () => {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-content');

    const titleText = document.createElement('p');
    titleText.classList.add('title-accent');
    titleText.textContent = "La pizzeria"

    const headerText = document.createElement('h1');
    headerText.textContent = "Pizza Italiano";

    const hrDiv = document.createElement('div');
    hrDiv.classList.add('gradient-underline');

    const descriptionPara = document.createElement('p');
    descriptionPara.classList.add('italic');
    descriptionPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ipsa.";

    const mainBtn = document.createElement('button');
    mainBtn.classList.add('xl');
    mainBtn.textContent = "Check our menu"

    homeDiv.append(titleText, headerText, hrDiv, descriptionPara, mainBtn);
    
    return homeDiv
}

export default home