const container = document.querySelector('.container');
const containersize = 500;
const btnNbSquare = document.querySelector('#nbSquares');
const size = 50
const sizesquare = containersize/size;

let divline=[]
for(let j=0;j<size;j++){
    divline[j] = document.createElement('div');
    let div = [];
    for(let i=0; i<size; i++){
        div[i] = document.createElement('div');
        divline[j].appendChild(div[i]);
        
        div[i].setAttribute ('style', `border: solid;border-width :1px ; width : ${sizesquare}px; height : ${sizesquare}px`); 
        div[i].style.backgroundColor = "white";
        div[i].classList.add('square'); 
    }
    container.appendChild(divline[j]);
    divline[j].classList.add('line');
}


const squares = Array.from(document.querySelectorAll('.square'));

btnNbSquare.addEventListener('click', makenewgrid);
squares.forEach(square => square.addEventListener('mouseover',changeBGColor));

function makenewgrid(){
    let k =prompt("How many squares per side ? (Max 100)");
    if (typeof(parseInt(k)) !== 'number' || k<=0) { let k =prompt("Please, enter a (positive number) ? (Max 100)"); console.log(parseInt(k)) }
    else if (k>100) { k =100}

    while (container.firstChild) {
        container.firstChild.remove()
    }
    const size = k
    const sizesquare = containersize/size;

    

    let divline=[]
    for(let j=0;j<size;j++){
        divline[j] = document.createElement('div');
        let div = [];
        for(let i=0; i<size; i++){
            div[i] = document.createElement('div');
            divline[j].appendChild(div[i]);
            
            div[i].setAttribute ('style', `border: solid;border-width :1px ; width : ${sizesquare}px; height : ${sizesquare}px`); 
            div[i].style.backgroundColor = "white";
            div[i].classList.add('square'); 
        }
        container.appendChild(divline[j]);
        divline[j].classList.add('line');
    }
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.addEventListener('mouseover',changeBGColor));
}

function changeBGColor(e){
    e.target.style.backgroundColor ="green";
    //e.target.attributes["style"]
    //e.target.backgrounColor = green;

}


