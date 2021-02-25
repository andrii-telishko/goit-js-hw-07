const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.input.value === ''
        ? refs.name.textContent = 'незнайомець'
        : refs.name.textContent = refs.input.value;
      
}
