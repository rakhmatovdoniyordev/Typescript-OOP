var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Inheritance ----------------------------------------------------------------------------------------------------------------------------------------------------------
// Inheritance - bir sinfdan boshqa sinflar meros olinishiga aytiladi
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var TypeOfAnimal = /** @class */ (function (_super) {
    __extends(TypeOfAnimal, _super);
    function TypeOfAnimal(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    return TypeOfAnimal;
}(Animal));
var AverageLifespan = /** @class */ (function (_super) {
    __extends(AverageLifespan, _super);
    function AverageLifespan(name, type, lifeTime) {
        var _this = _super.call(this, name, type) || this;
        _this.lifeTime = lifeTime;
        return _this;
    }
    AverageLifespan.prototype.getInfo = function () {
        return "Animal name: ".concat(this.name, ". Type of animal: ").concat(this.type, ". Average lifespan: ").concat(this.lifeTime, " year");
    };
    return AverageLifespan;
}(TypeOfAnimal));
var animal = new AverageLifespan("Cat", "Domestic animal", 15);
console.log(animal.getInfo());
// 2. Encapsulation---------------------------------------------------------------------------------------------------------------------------------------------------------
// Encapsulation - ma'lumotlarni yashirish va faqat kerakli funksiyalar orqali ularga kirishni ta'minlashni anglatadi. TypeScript-da bu private, protected va public kirish modifikatorlari yordamida amalga oshiriladi.
var Smartphone = /** @class */ (function () {
    function Smartphone(nomi) {
        this.name = nomi;
    }
    return Smartphone;
}());
var PriceSmartphone = /** @class */ (function (_super) {
    __extends(PriceSmartphone, _super);
    function PriceSmartphone(nomi, narxi) {
        var _this = _super.call(this, nomi) || this;
        _this.price = narxi;
        return _this;
    }
    return PriceSmartphone;
}(Smartphone));
var SmartphoneYear = /** @class */ (function (_super) {
    __extends(SmartphoneYear, _super);
    function SmartphoneYear(nomi, narxi, yil) {
        var _this = _super.call(this, nomi, narxi) || this;
        _this.year = yil;
        return _this;
    }
    return SmartphoneYear;
}(PriceSmartphone));
var smartphoneInfo = new SmartphoneYear("Samsung S22 ULTRA", 400, 2020);
console.log(smartphoneInfo);
//3. Abstraction------------------------------------------------------------------------------------------------------------------------------------------------------------
// Abstraction -  sinflar va usullarning faqat interfeysini belgilab, ularga aniqlik berishni keyingi sinflarga qoldiradi. Va keyyingi sinflarda ulardan foydalanish majburiy
var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    return Fruits;
}());
var Banan = /** @class */ (function (_super) {
    __extends(Banan, _super);
    function Banan(nom) {
        var _this = _super.call(this) || this;
        _this.type = nom;
        return _this;
    }
    Banan.prototype.fruitType = function () {
        return " Banan is a type of ".concat(this.type);
    };
    return Banan;
}(Fruits));
var banan = new Banan("berry");
console.log(banan.fruitType());
var Corn = /** @class */ (function (_super) {
    __extends(Corn, _super);
    function Corn(nom) {
        var _this = _super.call(this) || this;
        _this.type = nom;
        return _this;
    }
    Corn.prototype.fruitType = function () {
        return "Corn is a type of ".concat(this.type);
    };
    return Corn;
}(Fruits));
var corn = new Corn("seeded fruit");
console.log(corn.fruitType());
var Walnut = /** @class */ (function (_super) {
    __extends(Walnut, _super);
    function Walnut(nom) {
        var _this = _super.call(this) || this;
        _this.type = nom;
        return _this;
    }
    Walnut.prototype.fruitType = function () {
        return "Walnut is a type of ".concat(this.type);
    };
    return Walnut;
}(Fruits));
var walnut = new Walnut("decomposer");
console.log(walnut.fruitType());
// 4. Polymorphism----------------------------------------------------------------------------------------------------------------------------------------------------------
// Polymorphism - bir xil usullarni turli sinflar tomonidan turlicha bajarishni anglatadi. Bu override yordamida amalga oshiriladi.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        return "Shakl chizilmoqda";
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        return "Doira chizilmoqda";
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        return "Kvadrat chizilmoqda";
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.draw = function () {
        return "To'rtburchak chizilmoqda";
    };
    return Rectangle;
}(Shape));
var circle = new Circle();
var square = new Square();
var rectangle = new Rectangle();
console.log(rectangle.draw());
console.log(square.draw());
console.log(circle.draw());
