function generateProduct() {
	const color = ['Red', 'Black', 'Pink', 'Green', 'Yellow', 'White']
	const category = ['Roses', 'Lilys', 'Cactus', 'Orchids', 'Petunia']
	const name = ['Love', 'Hate', 'Happy', 'Sad', 'Wonderful', 'Sweet', 'Fantastic']

	function randomFlower(list) {
		let r = Math.random() * list.length;
		return list[Math.floor(r)];
	}

	let plantColor = randomFlower(color);
  let plantName = randomFlower(name);
	let plantCategory = randomFlower(category);

	return {
    color: plantColor,
    name: plantName,
    category: plantCategory,
    price: Math.floor((Math.random() * 200))
  };
}

function getAllProducts() {
  let flowersList = [];
  let i = 0;
  while (i < 1000000) {
    flowersList.push(generateProduct())
    i++;
  }
  return flowersList;
}

module.exports = {
  getAllProducts,
}
