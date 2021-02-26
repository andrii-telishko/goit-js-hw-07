const ref = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
    incrementBtn: document.querySelector('[data-action="increment"]')
};

ref.decrementBtn.addEventListener('click', onBtnDecrementClc);
ref.incrementBtn.addEventListener('click', onIncrementBtnClc);

let counterValue = 0;

function onBtnDecrementClc ()  {


        counterValue -= 1
        ref.counter.textContent = counterValue;
    

};

function onIncrementBtnClc ()  {
    counterValue += 1;
    ref.counter.textContent = counterValue;
};



