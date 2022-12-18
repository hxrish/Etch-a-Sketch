/* Fetch elements and assign variables to them */
let parent = document.getElementById('canvas')

let five = document.getElementById('fiveByFive'); //Fetches fiveByFive button

let ten = document.getElementById('tenByTen'); //Fetches tenByTen button

let fifteen = document.getElementById('fifteenByFifteen'); //Fetches fifteenByFifteen button

let twenty = document.getElementById('twentyByTwenty'); //Fetches twentyByTwenty button

let twentyFive = document.getElementById('twentyFiveByTwentyFive'); //Fetches twentyFiveByTwentyFive button

let thirty = document.getElementById('thirtyByThirty'); //Fetches thirtyByThirty button

let thirtyFive = document.getElementById('thirtyFiveByThirtyFive'); //Fetches thirtyFiveByThirtyFive button

let eraser = document.getElementById('eraser');

let rainbow =document.getElementById('rainbow');

/* Getting elements and assigning variables to them complete */




/*Adding events*/

five.addEventListener('click', fiveByFive);

ten.addEventListener('click', tenByTen);

fifteen.addEventListener('click', fifteenByFifteen);

twenty.addEventListener('click', twentyByTwenty);

twentyFive.addEventListener('click', twentyFiveByTwentyFive);

thirty.addEventListener('click', thirty30);

thirtyFive.addEventListener('click', thirtyFiveByThirtyFive);


/* Added events */



/*Adding function to variable that had event assigned to them */

function fiveByFive(e){
    Number = five.value;
    createGrid(Number);
}

function tenByTen(e){
    Number = ten.value;
    createGrid(Number)
}

function fifteenByFifteen(e){
    Number = fifteen.value;
    createGrid(Number)
}

function twentyByTwenty(e){
    Number = twenty.value;
    createGrid(Number)
}

function twentyFiveByTwentyFive(e){
    Number = twentyFive.value;
    createGrid(Number)
}

function thirty30(e){
    Number = thirty.value;
    createGrid(Number);
}

function thirtyFiveByThirtyFive(e){
    Number = thirtyFive.value;
    createGrid(Number);
}

/*Added function to event assigned variables */

function clearGrid(){
    parent.replaceChildren();
} //Clears the grid after every input



/* Create grid */

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

let colours = document.getElementById('colors');

let colors = colours.value;

colours.addEventListener('change', e => {
    colors = colours.value;
})

eraser.addEventListener('click', erase) //Add click event listener to erase

function erase(e){
    colors = '#fff';
} //Change color to #fff whenever eraser is clicked on

let column = Array.from(document.querySelectorAll('.column'));


let isMouseDown = false;

console.log(column);

column.forEach(element => {
    element.addEventListener('mouseover', e => {
        // if(isMouseDown != true){return}
        element.setAttribute("style", `background-color: ${colors};`);  
    })
})

column.forEach(element => {
    element.addEventListener('mousedown', e => {
        // isMouseDown = true; 
        element.setAttribute("style", `background-color: ${colors};`);  
    })
})

column.forEach(element => {
    element.addEventListener('mouseup', e => {
        // isMouseDown = false; 
    })
})

}