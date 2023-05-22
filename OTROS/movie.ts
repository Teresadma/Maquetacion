export class Movie {
    //ATRIBUTOS
    public title: string;
    public releaseYear: number;
    public actors: string[];
    public nacionality: string;
    public director: string;
    public writer: string;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;
    public photo: string;
    //CONSTRUCTOR
    constructor (title:string, releaseYear:number, nacionality:string, genre:string){
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
    public printMovie(){
        console.log("El título de la película es: ", this.title ,"\n","El año de lanzamiento es: ",this.releaseYear,"\n","Los actores son: ", this.actors,"\n","La película ha sido firlmada en: ", this.nacionality,"\n","El director es: ",
        this.director,"\n","El guionista es: " ,this.writer,"\n","El idioma original es: ", this.language,"\n","Está en la plataforma de: " ,this.platform,"\n","forma parte de Marvel: ", this.isMCU,"\n","El protagonista es: ",
        this.mainCharacterName,"\n","El productor es: ", this.producer,"\n","La distribuidora es: ", this.distributor,"\n","El género es: ", this.genre)
    }
}

let pelicula: Movie = new Movie ("Voy a llorar", 2023, "España", "Acción");
pelicula.actors = ["Luis","Jorge","Lucia"];
pelicula.director = "Sofia";
pelicula.writer = "Clara";
pelicula.language = "Español";
pelicula.platform = "Netflix";
pelicula.isMCU = false;
pelicula.mainCharacterName = "Paco";
pelicula.producer = "Pablo";
pelicula.distributor = "Walt Disney";
// console.log(pelicula.actors)

// pelicula.printMovie()
// document.getElementById("title").innerHTML = pelicula.title;
let titulo = document.getElementById("title")
titulo.innerHTML = pelicula.title;
console.log(titulo)
// let padre = document.createElement("div")
// padre.appendChild(titulo)

