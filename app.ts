// 1. Inheritance ----------------------------------------------------------------------------------------------------------------------------------------------------------
// Inheritance - bir sinfdan boshqa sinflar meros olinishiga aytiladi
class Animal{
    name: string
    constructor(name: string){
        this.name = name
    }
}

class TypeOfAnimal extends Animal{
    type: string
    constructor(name: string, type: string){
        super(name)
        this.type = type
    }
}

class AverageLifespan extends TypeOfAnimal{
    lifeTime: number
    constructor(name: string, type: string, lifeTime: number){
        super(name, type)
        this.lifeTime = lifeTime
    }
    getInfo(): string{
        return `Animal name: ${this.name}. Type of animal: ${this.type}. Average lifespan: ${this.lifeTime} year`
    }
}

let animal = new AverageLifespan("Cat", "Domestic animal", 15)
console.log(animal.getInfo());


// 2. Encapsulation---------------------------------------------------------------------------------------------------------------------------------------------------------
// Encapsulation - ma'lumotlarni yashirish va faqat kerakli funksiyalar orqali ularga kirishni ta'minlashni anglatadi. TypeScript-da bu private, protected va public kirish modifikatorlari yordamida amalga oshiriladi.
class Smartphone{
    private name: string // write va read qila olmaymiz
    constructor(nomi: string){
        this.name = nomi
    }
}


class PriceSmartphone extends Smartphone{
    public price: number // default holat 'write va read qila olamiz'
    constructor(nomi: string, narxi: number){
        super(nomi)
        this.price = narxi
    }
}

class SmartphoneYear extends PriceSmartphone{
    readonly year: number // faqatgina read qila olamiz
    constructor(nomi: string, narxi: number, yil: number){
        super(nomi, narxi)
        this.year = yil
    }
}


let smartphoneInfo = new SmartphoneYear("Samsung S22 ULTRA", 400, 2020)
console.log(smartphoneInfo);


//3. Abstraction------------------------------------------------------------------------------------------------------------------------------------------------------------
// Abstraction -  sinflar va usullarning faqat interfeysini belgilab, ularga aniqlik berishni keyingi sinflarga qoldiradi. Va keyyingi sinflarda ulardan foydalanish majburiy
abstract class Fruits{
    abstract fruitType(): string
}

class Banan extends Fruits{
    type: string
    constructor(nom: string){
        super()
        this.type = nom
    }
    fruitType(): string {
        return ` Banan is a type of ${this.type}`
    }
}
let banan = new Banan("berry")
console.log(banan.fruitType());


class Corn extends Fruits{
    type: string
    constructor(nom: string){
        super()
        this.type = nom
    }
    fruitType(): string {
        return `Corn is a type of ${this.type}`
    }
}
let corn = new Corn("seeded fruit")
console.log(corn.fruitType());


class Walnut extends Fruits{
    type: string
    constructor(nom: string){
        super()
        this.type = nom
    }
    fruitType(): string {
        return  `Walnut is a type of ${this.type}`
    }
}

let walnut = new Walnut("decomposer")
console.log(walnut.fruitType());


// 4. Polymorphism----------------------------------------------------------------------------------------------------------------------------------------------------------
// Polymorphism - bir xil usullarni turli sinflar tomonidan turlicha bajarishni anglatadi. Bu override yordamida amalga oshiriladi.
class Shape{
    draw(): string{
        return `Shakl chizilmoqda`
    }
}

class Circle extends Shape{
    draw(): string {
        return `Doira chizilmoqda`
    }
}

class Square extends Shape{
    draw(): string {
        return `Kvadrat chizilmoqda`
    }
}

class Rectangle extends Shape{
    draw(): string {
        return `To'rtburchak chizilmoqda`
    }
}

let circle = new Circle()
let square = new Square()
let rectangle = new Rectangle()
console.log(rectangle.draw());
console.log(square.draw());
console.log(circle.draw());
