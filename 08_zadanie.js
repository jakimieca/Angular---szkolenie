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
var plcie;
(function (plcie) {
    plcie[plcie["KOBIETA"] = 0] = "KOBIETA";
    plcie[plcie["MEZCZYZNA"] = 1] = "MEZCZYZNA";
})(plcie || (plcie = {}));
var Personlmpl = /** @class */ (function () {
    function Personlmpl(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    Personlmpl.prototype.print = function () {
        return this.nazwisko;
    };
    return Personlmpl;
}());
var Studentlmpl = /** @class */ (function (_super) {
    __extends(Studentlmpl, _super);
    function Studentlmpl(imie, nazwisko, lista_ocen) {
        var _this = _super.call(this, imie, nazwisko) || this;
        _this.lista_ocen = lista_ocen;
        return _this;
    }
    Studentlmpl.prototype.srednia_ocen = function (lista_ocen) {
        var sum = 0;
        var srednia = 0;
        for (var i = 0; i < lista_ocen.length; i++) {
            sum += lista_ocen[i];
        }
        srednia = sum / lista_ocen.length;
        return srednia;
    };
    return Studentlmpl;
}(Personlmpl));
var Pracowniklmpl = /** @class */ (function (_super) {
    __extends(Pracowniklmpl, _super);
    function Pracowniklmpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pracowniklmpl;
}(Personlmpl));
var s = new Studentlmpl("Agata", "Jakimiec", [2, 4, 5, 3]);
s.srednia = s.srednia_ocen(s.lista_ocen);
console.log(s);
