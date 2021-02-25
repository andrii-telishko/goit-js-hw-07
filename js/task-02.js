const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const productsListRef = document.querySelector('#ingredients')

const productList = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  console.log(item);
  return item
})
   

productsListRef.append(...productList);







