const about = () => {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-content');

    const titleText = document.createElement('p');
    titleText.classList.add('title-accent');
    titleText.textContent = "La pizzeria"

    const headerText = document.createElement('h2');
    headerText.textContent = "ABOUT";

    const hrDiv = document.createElement('div');
    hrDiv.classList.add('gradient-underline');

    const boxDiv = document.createElement('div');
    boxDiv.classList.add('flex');

    const aboutImg = document.createElement('img');
    aboutImg.src = "../src/img/pexels-anna-tarazevich-6937431.jpg";

    const descriptionBox = document.createElement('div');
    descriptionBox.classList.add('box2');

    const descriptionTitle = document.createElement('h3')
    descriptionTitle.textContent = 'Who are we?';

    const descriptionPara = document.createElement('p')
    descriptionPara.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sunt commodi nam dignissimos? Quisquam, suscipit, temporibus tempore rem eaque fugit quo laborum sit error, nostrum aperiam? Dolore nam rem recusandae fugit minima totam reiciendis deleniti, minus quaerat laboriosam nemo vero quibusdam veniam culpa, perferendis facilis officia in cum possimus sit.'

    descriptionBox.append(descriptionTitle, descriptionPara)
    boxDiv.append(aboutImg, descriptionBox)
    aboutDiv.append(titleText, headerText, hrDiv, boxDiv)

    return aboutDiv
}

export default about