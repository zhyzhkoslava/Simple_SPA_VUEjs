
// function car(name, model, owner, year, phone, image) {
//     return{
//         name, model, owner, year, phone, image
//     }
// }

const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});

const cars = [
    car('Ford', 'Mustang', 'Max', 2018, '+3 890 678 45 67', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJ6Du2wscVnn8NEjSsPyD5Z0fJRp0jZ-AfKqbeAKSvuN_D9HL'),
    car('Audi', 'A8', 'Slava', 2019, '+3 890 678 45 67', 'https://avto-russia.ru/autos/audi/photo/audi_a8_1.jpg'),
    car('Lamborghini', 'Aventador', 'Rim', 2018, '+3 890 678 45 67', 'https://auto.ndtvimg.com/car-images/big/lamborghini/aventador/lamborghini-aventador.jpg?v=5'),
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        model: cars[0],
        selectCarIndex: 0,
        phoneHide: false,
        search: ''
    },
    methods: {
        selectCar: function (index) {
            this.model = cars[index]
            this.selectCarIndex = index
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneHide ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    }
});