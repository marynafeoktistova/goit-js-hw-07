const category = document.querySelector("#categories");
const listCategory = document.querySelectorAll('.item');

listCategory.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElementsCount = item.querySelectorAll('ul li').length;
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryElementsCount}`);
});





