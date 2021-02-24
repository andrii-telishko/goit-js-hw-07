const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];


    const listRef = document.querySelector('#ingredients')
    ingredients.forEach(element => {
        const item = document.createElement('li')
        item.textContent = element;
        console.log(item);
        listRef.append(item)
    });
    







