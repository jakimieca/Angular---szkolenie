

enum plec_enum {
    KOBIETA = 'female',
    MEZCZYZNA = 'male',
}

interface Person {
    imie: string;
    nazwisko: string;
    wiek: number;
    plec: plec_enum;
    print(): string;
}

interface Student extends Person {
    lista_ocen: number[];
}

interface Pracownik extends Person {
    zarobki: number;
}

class Personlmpl implements Person {
    imie: string;
    nazwisko: string;
    wiek: number;
    plec: plec_enum;
    constructor(imie: string, nazwisko: string){
        this.imie = imie;
        this.nazwisko = nazwisko;

    }
    print(): string {
        return this.nazwisko;
    }
}

class Studentlmpl extends Personlmpl implements Student {
    lista_ocen: number[];
    srednia:number;
    constructor(imie:string, nazwisko:string, lista_ocen: number[]) {
        super(imie, nazwisko);
        this.lista_ocen = lista_ocen;
    }

    srednia_ocen(lista_ocen): number {
        let sum = 0;
        let srednia = 0;

        for (let i = 0; i < lista_ocen.length; i++) {
            sum += lista_ocen[i];
        }
        srednia = sum / lista_ocen.length;
        return srednia;
    }

}

class Pracowniklmpl extends Personlmpl implements Pracownik {
    zarobki: number;
}

const s = new Studentlmpl("Agata","Jakimiec", [2, 4, 5, 3]);
s.srednia = s.srednia_ocen(s.lista_ocen);
console.log(s);