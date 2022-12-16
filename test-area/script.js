let parent = document.getElementById('container')

function clearGrid(){
    parent.replaceChildren();
}


let fiveByFive = document.getElementById('fiveByFive');
let tenByTen = document.getElementById('tenByTen');
let fifteenByFifteen = document.getElementById('fifteenByFifteen');
let twentyByTwenty = document.getElementById('twentyByTwenty');

fiveByFive.addEventListener('click', clicked_fiveByFive); //Add click event listener to fiveByFive and create function 'clicked_fiveByFive'

tenByTen.addEventListener('click', clicked_tenByTen); //Add click event listener to tenByTen and create function 'clicked_tenByTen'

fifteenByFifteen.addEventListener('click', clicked_fifteenByFifteen); //Add click event listener to fifteenByFifteen and create function 'clicked_fifteenByFifteen'

twentyByTwenty.addEventListener('click', clicked_twentyByTwenty); //Add click event listener to twentyByTwenty and create function 'clicked_twentyByTwenty'


function clicked_fiveByFive(){
    Number = 5;
    createGrid(Number);
}

function clicked_tenByTen(){
    Number = 10;
    createGrid(Number);
}

function clicked_fifteenByFifteen(){
    Number = 15;
    createGrid(Number);
}

function clicked_twentyByTwenty(){
    Number = 20;
    createGrid(Number);
}



function createGrid(Number){

    clearGrid()

for(let i=0; i<Number; i++){
    let row = document.createElement('div');

    row.classList.add('row');

    parent.appendChild(row);

    for(let a=0; a<Number; a++){

    let column = document.createElement('div');

    column.classList.add('column');
    
    row.appendChild(column);
    }
}

let column = Array.from(document.querySelectorAll('.column'));

console.log(column);

column.forEach(element => {
    element.addEventListener('mouseover', e => {
        element.setAttribute("style", "background-color: blue;");  
    })
})

//create rows according to rowNumber

// let row = Array.from(document.querySelectorAll('.row'));

// for(let i = 0; i<columnNumber; i++){

// console.log(row);



// row.forEach(e => {
//     e.appendChild(column);
// })
// }

}





