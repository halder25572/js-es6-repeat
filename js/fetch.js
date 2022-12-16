const student = {
    name: "Nayan Halder",
    roll: 44,
    book: ['Bangla', 'English', 'Math'],
};

const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);

const products =   [
    {name: "Camera", Price: 9000, brand: "casio", color:"Black"},
    {name: "Laptop", Price: 2000, brand: "Dell", color:"Gray"},
    {name: "Watch", Price: 5000, brand: "HP", color:"White"},
    {name: "Casio", Price: 3000, brand: "Sony", color:"Black"}
];

const newProduct = {
    name: 'web came',
    price: 700,
    brand: 'green'
}
const newProducts = [...products, newProduct];
console.log(newProducts);

const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);