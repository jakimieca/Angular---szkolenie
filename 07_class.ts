class Person {
    name: string;
    _lastname: string;
    age: number;
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

    public set lastname(name: string){
      this._lastname = name.toUpperCase();
    }

    public get lastname(): string{
        return this._lastname;
    }

    public print(): string{
        return`${this.fullname()}, Wiek: ${this.age}`;
    }

    private fullname(): string {
        return`${this.name} ${this.lastname}`;   
    }

}


const p: Person = new Person(); 
p.name = "Agata";
p._lastname = "Jakimiec";
p.age = 22;
console.log(`Fullname: ${p.print()}`);

