 const products =   [
        {name: "Camera", Price: 9000, brand: "casio", color:"Black"},
        {name: "Laptop", Price: 2000, brand: "Dell", color:"Gray"},
        {name: "Watch", Price: 5000, brand: "HP", color:"White"},
        {name: "Casio", Price: 3000, brand: "Sony", color:"Black"}
    ];


//using map
 const brands = products.map(product => product.brand);
    console.log(brands);
    const prices = products.map(pricess => pricess.color)
    console.log(prices); 


// use forEach
products.forEach(product => console.log(product));
const cheap = products.filter(product => product.Price <= 5000);
console.log(cheap);
/* products.forEach({
    
});
 */

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);

// Destruturig
// const myObj = [2 , 3] = [1 , 2];
// console.log(document.getElementById());

const emlpoyee = {
    ide: "VS Code",
    designation : "developer",
    machine: "machine",
    languages: ['html', 'css', 'js'],
    specification: {
        weight: 51,
        height: 6,
        address: "Kumar Khali",
        watch: {
            color: 'black',
            price: 3000,
            brand: 'garmin',
        }
    }

};

const {machine, ide} = emlpoyee;
const {weight, address} = emlpoyee.specification;
const {brand} = emlpoyee.specification.watch;
console.log(brand, address, weight);

// array destructuring
const [x, y, z, a] = [10, 20, 30, 40, 50];
console.log(x, y, z, a);

// object destructuring start
const {name, age} = {name: 'Nayan', age: 22};
const {namee, agee, id} = {id: 2106, name: 'Alu', salary: 12000, age: 22};
console.log(id);
console.log(name);




// start Spread Operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(arr1, ...arr2, ...arr3);