var p = {
    name: "Mateusz",
    lastname: "Lewandowski",
    age: 19,
    fullname: function () {
        // return this.name + ' ' + this.lastname;
        return "Fullname: ".concat(this.name, " ").concat(this.lastname || "");
    }
};
var p2 = {
    name: "Agata",
    age: 19,
    fullname: function () {
        // return this.name + ' ' + this.lastname;
        return "Fullname: ".concat(this.name, " ").concat(this.lastname || "");
    }
};
console.log(p.fullname());
console.log(p);
console.log(p2.fullname());
console.log(p2);
