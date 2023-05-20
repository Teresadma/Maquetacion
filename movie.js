"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    //CONSTRUCTOR
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.platform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
        this.photo;
    }
    Movie.prototype.printMovie = function () {
        console.log("El título de la película es: ", this.title, "\n", "El año de lanzamiento es: ", this.releaseYear, "\n", "Los actores son: ", this.actors, "\n", "La película ha sido firlmada en: ", this.nacionality, "\n", "El director es: ", this.director, "\n", "El guionista es: ", this.writer, "\n", "El idioma original es: ", this.language, "\n", "Está en la plataforma de: ", this.platform, "\n", "forma parte de Marvel: ", this.isMCU, "\n", "El protagonista es: ", this.mainCharacterName, "\n", "El productor es: ", this.producer, "\n", "La distribuidora es: ", this.distributor, "\n", "El género es: ", this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
