import util from '../helpers/util.js';
import breadData from '../helpers/data/cheeseData.js';
const selectCheese = (e) =>{ 
    const cheeseId =e.target.id;
    cheeseData.setSelectedCheese(cheeseId);
}

// const radioButtonEvent =(e) => {
//     const radioButtons = document.getElementsByClassName('breadRadio');
//     for(let i=0; i<radioButtons.length; i++){
//         radioButtons[i].addEventListener('click', selectBread);
//     }
// }

const 
// const makeBreadRadioButtons = () =>{
//     const allBreads = breadData.getBreads();
//     let domString ='';
//     domString += `<h2>Bread</h2>`;
//     allBreads.forEach((bread) => {
//     domString += '<div class="form-check form-check-inline">';
//     domString += `<input class="form-check-input breadRadio" type="radio" name="exampleRadios" id="${bread.id}">`;
//     domString += `<label class="form-check-label" for="${bread.id}">${bread.type}</label>`;
//     domString += '</div>';
//     });
    
//   util.printToDom('bread-container', domString);  
//   radioButtonEvent();

}




export default { makeCheeseButtons };