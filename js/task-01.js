const categoriesRef = document.querySelectorAll('.item');

const countItems = array => console.log(`У списку ${array.length} категорії.`);
countItems(categoriesRef);



[...categoriesRef].forEach(item => {
    console.log(`Категорія: ${item.firstElementChild.textContent}`);
    const categoriesItemsRef = item.querySelectorAll('li')
    console.log(`Кількість елементів: ${categoriesItemsRef.length}`);
})



