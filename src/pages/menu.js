const menu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('main-content');

    const pizzaArray = ['Margherita', 'Salami', 'Capriciosa', 'Pepperoni', 'Venecia', 'Hawaii'];

    //create n pizza boxes

    let n = 6
    for(let i = 0; i < n; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        menuDiv.appendChild(box);

        const boxImg = document.createElement('img')
        boxImg.src = "../src/img/pngegg (1).png";
        const boxTitle = document.createElement('h2');
        boxTitle.textContent = `Pizza ${pizzaArray[i]}`;
        const boxText = document.createElement('p');
        boxText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste quas quo explicabo ipsam ut expedita nisi similique labore? Quidem!"
        const boxBtn = document.createElement('button');
        boxBtn.textContent = 'ORDER NOW';

        box.append(boxImg, boxTitle, boxText, boxBtn)
    }

    
    return menuDiv
}

export default menu