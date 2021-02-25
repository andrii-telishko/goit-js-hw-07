const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() { 
    inputRef.value.length === Number(inputRef.getAttribute('data-length'))
        ? inputRef.classList.add('valid')
        : inputRef.classList.add('invalid');
}

