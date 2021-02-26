const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')


textRef.style.fontSize = `${rangeRef.value}px`;
console.log(textRef.style.fontSize);

rangeRef.addEventListener('input', onInputRange);

function onInputRange() {
    console.log(rangeRef.value);
    textRef.style.fontSize = `${rangeRef.value}px`;
}





