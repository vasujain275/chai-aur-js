// Arrays in Js
// Array is a data structure
// Array is a special type of object
// Array is a reference type


const arr = [0, 1, 2, 3, 4, 5]

// console.log(arr)
// console.log("A ", arr)

const marvel_heros = ["Ironman", "Spiderman", "Thor", "Hulk"];
const dc_heros = ["Batman", "Superman", "Flash", "Aquaman"];
const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros)

const another_arr = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12, [13, 14, 15]]]]
const flat_another_arr = another_arr.flat(Infinity);
console.log(flat_another_arr)


