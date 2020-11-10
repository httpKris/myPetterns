class Car {
	constructor(model, price) {
		this.model = model
		this.price = price
	}
}
class CarFactory {
	constructor() {
		this.cars = []
	}
	create(model, price) {
		const candidate = this.getCar(model)
		if (candidate) {
			return candidate
		}
		const newCar = new Car(model, price)
		this.cars.push(newCar)
		return newCar
	}
	getCar(model) {
		return this.cars.find(car => car.model === model)
	}
}

const factory = new CarFactory()

const bmwX6 = factory.create('X6', '1000')

const honda = factory.create('Accord', '2000')

const mazda = factory.create('CX-8', '500')

const mazdanew = factory.create('CX-8', '5000')



console.log(bmwX6)
console.log(honda)
console.log(mazda)
console.log(mazdanew)