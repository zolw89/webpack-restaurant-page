import './style.css';
import home from "./pages/home"
import menu from './pages/menu'
import about from './pages/about'


const mainContainer = document.createElement('div');
const liHome = document.createElement('li');
const liMenu = document.createElement('li');
const liAbout = document.createElement('li');


const firstLoad = () => {

    //header render

    const contentDiv = document.querySelector('.content');
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    contentDiv.appendChild(headerDiv);

    const ul = document.createElement('ul');
    headerDiv.appendChild(ul);

    liHome.classList.add('home', 'active');
    ul.appendChild(liHome)
    liHome.textContent = "Home";

    liMenu.classList.add('menu');
    ul.appendChild(liMenu)
    liMenu.textContent = "Menu";

    liAbout.classList.add('about');
    ul.appendChild(liAbout)
    liAbout.textContent = "About";

    //main container 

    mainContainer.classList.add('main-container');
    contentDiv.appendChild(mainContainer);
    mainContainer.appendChild(home())


    //fotter render

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');
    const footerText = document.createElement('p');
    footerText.textContent = "dummy text"
    contentDiv.appendChild(footerDiv)
    footerDiv.appendChild(footerText)

}

firstLoad()

//menu list item on click renders corresponding page

liMenu.addEventListener('click', () => {
    mainContainer.innerHTML = '';
    mainContainer.appendChild(menu())
    liMenu.classList.add('active')
    liAbout.classList.remove('active');
    liHome.classList.remove('active')
})

liHome.addEventListener('click', () => {
    mainContainer.innerHTML = '';
    mainContainer.appendChild(home())
    liMenu.classList.remove('active')
    liAbout.classList.remove('active');
    liHome.classList.add('active')
})

liAbout.addEventListener('click', () => {
    mainContainer.innerHTML = '';
    mainContainer.appendChild(about())
    liMenu.classList.remove('active')
    liAbout.classList.add('active');
    liHome.classList.remove('active')
})

//home page button renders menu page

document.addEventListener('click', (e) => {
    if(e.target.textContent === 'Check our menu') {
        mainContainer.innerHTML = '';
        mainContainer.appendChild(menu())
        liMenu.classList.add('active')
        liAbout.classList.remove('active');
        liHome.classList.remove('active')
    }
})








