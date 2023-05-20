"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    //CONSTRUCTOR
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
    //MÉTODOS
    Professional.prototype.printAll = function () {
        console.log(this.name, this.age, this.weight, this.height, this.isRetired, this.nationality, this.oscarsNumber, this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
