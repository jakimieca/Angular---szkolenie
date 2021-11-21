var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        //address;
        //pesel;
        //sex;
        //phoneNumber;
        //constructor(opts: Partial<Person>) {
        // this.name = opts.name;
        // this._lastname = opts.lastname;
        // this.age = opts.age;
        //this.address = opts.address || {};
        //this.pesel = opts.pesel || null;
        // }
        set: function (name) {
            this._lastname = name.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        return "".concat(this.fullname(), ", Wiek: ").concat(this.age);
    };
    Person.prototype.fullname = function () {
        return "".concat(this.name, " ").concat(this.lastname);
    };
    return Person;
}());
var p = new Person();
p.name = "Agata";
p._lastname = "Jakimiec";
p.age = 22;
console.log("Fullname: ".concat(p.print()));
