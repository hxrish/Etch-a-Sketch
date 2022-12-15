let parent = document.getElementById('container')


function createGrid(){
let Number = parseInt(prompt()); //get the number of rows
//  let columnNumber = parseInt(prompt()); //get the number of columns

for(let i=0; i<Number; i++){
    let row = document.createElement('div');

    row.classList.add('row');

    parent.appendChild(row);

    for(let a=0; a<Number; a++){

    let column = document.createElement('div');

    column.classList.add('column');
    
    row.appendChild(column);
    }
} //create rows according to rowNumber

// let row = Array.from(document.querySelectorAll('.row'));

// for(let i = 0; i<columnNumber; i++){

// console.log(row);



// row.forEach(e => {
//     e.appendChild(column);
// })
// }

}

createGrid()




