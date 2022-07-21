import './style.css';
import home from "./pages/home"
import menu from './pages/menu'


const mainContainer = document.createElement('div');
const liHome = document.createElement('li');
const liMenu = document.createElement('li');
const liAbout = document.createElement('li');


const firstLoad = () => {

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

    
    mainContainer.classList.add('main-container');
    contentDiv.appendChild(mainContainer);
    mainContainer.appendChild(home())

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');
    const footerText = document.createElement('p');
    footerText.textContent = "dummy text"
    contentDiv.appendChild(footerDiv)
    footerDiv.appendChild(footerText)

}

firstLoad()

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

document.addEventListener('click', (e) => {
    if(e.target.textContent === 'Check our menu') {
        mainContainer.innerHTML = '';
        mainContainer.appendChild(menu())
        liMenu.classList.add('active')
        liAbout.classList.remove('active');
        liHome.classList.remove('active')
    }
})








