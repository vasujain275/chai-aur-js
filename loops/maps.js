// Maps in JS are like objects, but the keys can be any type, not just strings.
// Maps are iterable, so we can use for-of loop to iterate over them.
// No duplicate keys allowed.
// Order of insertion is maintained in maps.

const map = new Map();

map.set('IN', 'India');
map.set('US', 'United States');
map.set('GB', 'United Kingdom');
map.set('RU', 'Russia');


// Loop over the map

for (const [key, value] of map) {
    console.log(value);
}