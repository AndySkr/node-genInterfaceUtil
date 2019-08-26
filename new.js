function fn(array) {
	if (array.length >= 5) return array;
	array.push(Math.floor(Math.random() * 31 + 2))
	return [...new Set(array.concat(fn([...new Set(array)])))]
}
console.log(fn([]))