import breads from './components/breads.js';

//div in html - id="bread-container"
//printToDom function in utils
//breadData will have array of bread objects, export a getBreads function
//each bread object = type, color, price, id  
//breads.js component - with domString builder use getBreads functions
//import breads components into main
//event listener on radio button - call breadData.setSelectedBread(breadId)
//setSelectedBread = assign a variable (selectedBreadId) to the id pass
const init = () => {
    breads.makeBreadRadioButtons();
}

init();

