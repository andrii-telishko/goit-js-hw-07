const boxesRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('[data-action="render"]')
const removeBtnRef = document.querySelector('[data-action="destroy"]')
const inputRef = document.querySelector('#controls input')

let amount;

function createBoxes () {
    const arr = [];
    let width = 20;
    let height = 20;
    
    
    for (let i = 0; i < amount; i += 1) {
        width += 10;
        height += 10;
        const randomColor ='#' + Math.floor(Math.random()*16777215).toString(16);
        arr[i] =  `<div class = 'child'
                     style="background-color: 
                            ${randomColor};  
                            width: ${width}px; height: ${height}px" >
                </div>`;
    }

    const string = arr.join('');
    return boxesRef.innerHTML = string;
}

createBtnRef.addEventListener('click', () => {
    amount = inputRef.value;
    createBoxes(amount);
})

removeBtnRef.addEventListener('click', () => {
    amount = 0
    inputRef.value = 0;
    createBoxes(amount);
});