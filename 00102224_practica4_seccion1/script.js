console.assert("Legolas" > "Gimli");

console.clear();

const marvel = ['Spider-Man', 'Iron Man', 'Thor', 'Hulk'];

console.group("Marvel");
marvel.forEach( hero => console.log(hero) );
console.groupEnd();
