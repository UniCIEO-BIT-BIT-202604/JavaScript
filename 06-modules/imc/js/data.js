// Data: Datos que se necesitan para resolver el problema
const people = [
    { name: 'Juan', lastName: 'Jimenez', age: 48, height: 1.67, weight: 54 },
    { name: 'Ana', lastName: 'Castro', age: 25, height: 1.69, weight: 60 },
    { name: 'Carlos', lastName: 'Bautista', age: 31, height: 1.75, weight: 85 }
];

// Exportamos el arreglo de personas para que pueda ser utilizado en otros archivos
// module.exports = people;   // CommonJS
export default people;        // ES Modules