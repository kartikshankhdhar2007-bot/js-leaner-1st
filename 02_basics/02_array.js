const marvel=["iron-man","spidermen","hulk"]
const dc=["flash","supermen","batman"]
const combineheros=marvel.concat(dc);  //it combines the 2 or more array and store in the new array
console.log(combineheros);


///// anotehr way easy way to combine array

const all_heros=[...marvel,...dc]
console.log(all_heros)

//// nesteed array into simple single array

const nested_array=[1,2,3,[4,5,6],7,[8,[4,3,2]]]
const flat_array=nested_array.flat(2);
console.log(flat_array)


console.log(Array.isArray("Hitech"))
console.log(Array.from("Hitesh")) 
