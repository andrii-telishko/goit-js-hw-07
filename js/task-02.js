const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const creatingElements = (array) => {
    const listRef = document.querySelector('#ingredients')
    array.forEach(element => {
        const item = document.createElement('li')
        item.textContent = element;
        console.log(item);
        listRef.append(item)
    });
    
}

creatingElements(ingredients);





