interface Person{
    name: string;
    lastname?: string; // pole opcjonalne
    age: number;
    fullname(): string;
}

const p: Person = {
    name: "Mateusz",
    lastname: "Lewandowski",
    age: 19,
    fullname(): string{
       // return this.name + ' ' + this.lastname;
       return `Fullname: ${this.name} ${this.lastname || ""}`;
    }
}

const p2: Person = {
    name: "Agata",
    age: 19,
    fullname(): string{
       // return this.name + ' ' + this.lastname;
       return `Fullname: ${this.name} ${this.lastname || ""}`;
    }
}

console.log(p.fullname());
console.log(p);
console.log(p2.fullname());
console.log(p2);