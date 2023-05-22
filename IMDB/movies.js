class Movie {
    //CONSTRUCTOR
    constructor (title, releaseYear, nacionality, genre){
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
    printMovie(){
        console.log("El título de la película es: ", this.title ,"\n","El año de lanzamiento es: ",this.releaseYear,"\n","Los actores son: ", this.actors,"\n","La película ha sido firlmada en: ", this.nacionality,"\n","El director es: ",
        this.director,"\n","El guionista es: " ,this.writer,"\n","El idioma original es: ", this.language,"\n","Está en la plataforma de: " ,this.platform,"\n","forma parte de Marvel: ", this.isMCU,"\n","El protagonista es: ",
        this.mainCharacterName,"\n","El productor es: ", this.producer,"\n","La distribuidora es: ", this.distributor,"\n","El género es: ", this.genre)
    }
}

let hp1 = new Movie ("Harry Potter y la piedra filosofal", 2001, "Londres", "Fantasía");
hp1.actors = ["Daniel Radcliffe"," Emma Watson"," Rupert Grint"];
hp1.director = "Chris Columbus";
hp1.writer = "Steve Kloves";
hp1.language = "Inglés";
hp1.platform = "HBO";
hp1.isMCU = false;
hp1.mainCharacterName = "Daniel Radcliffe";
hp1.producer = "David Heyman";
hp1.distributor = "Warner Bros";
hp1.photo = "./harrypotter_.jpg"

// console.log(pelicula.actors)

// pelicula.printMovie()
// document.getElementById("title").innerHTML = pelicula.title;
// let padre = document.createElement("div")
// padre.appendChild(titulo)

//Primera película
document.getElementById("title").innerHTML = hp1.title;
document.getElementById("releaseYear").innerHTML = "Año de estreno: " + hp1.releaseYear;
document.getElementById("actors").innerHTML = "Actores principales: " + hp1.actors;
document.getElementById("nacionality").innerHTML = "Origen: " + hp1.nacionality;
document.getElementById("director").innerHTML = "Director:" + hp1.director;
document.getElementById("writer").innerHTML = "Guionista" + hp1.writer;
document.getElementById("language").innerHTML = "Idioma original: " + hp1.language;
document.getElementById("platform").innerHTML = "Disponible en: " + hp1.platform;
document.getElementById("mainCharacterName").innerHTML = "Protagonista: " + hp1.mainCharacterName;
document.getElementById("producer").innerHTML = "Productor: " + hp1.producer;
document.getElementById("distributor").innerHTML = "Productora: " + hp1.distributor;
document.getElementById("genre").innerHTML = "Género: " + hp1.genre;
document.getElementById("photo").innerHTML = hp1.photo;

//Segunda película
let gdlg = new Movie ("Guardianes de la galavia VOL I", 2014, "EEUU", "Fantasía");
gdlg.actors = ["Chris Pratt", " Zoe Saldaña"," Dave Bautista"," Vin Diesel"," Bradley Cooper"];
gdlg.director = "James Gunn";
gdlg.writer = "Nicole Perlman y James Gunn";
gdlg.language = "Inglés";
gdlg.platform = "Disney+";
gdlg.isMCU = true;
gdlg.mainCharacterName = "Chris Pratt";
gdlg.producer = "Kevin Feige";
gdlg.distributor = "Walt Disney Studios Motion Pictures";

document.getElementById("title2").innerHTML = gdlg.title;
document.getElementById("releaseYear2").innerHTML = "Año de estreno: " + gdlg.releaseYear;
document.getElementById("actors2").innerHTML = "Actores principales: " + gdlg.actors;
document.getElementById("nacionality2").innerHTML = "Origen: " + gdlg.nacionality;
document.getElementById("director2").innerHTML = "Director:" + gdlg.director;
document.getElementById("writer2").innerHTML = "Guionista" + gdlg.writer;
document.getElementById("language2").innerHTML = "Idioma original: " + gdlg.language;
document.getElementById("platform2").innerHTML = "Disponible en: " + gdlg.platform;
document.getElementById("mainCharacterName2").innerHTML = "Protagonista: " + gdlg.mainCharacterName;
document.getElementById("producer2").innerHTML = "Productor: " + gdlg.producer;
document.getElementById("distributor2").innerHTML = "Productora: " + gdlg.distributor;
document.getElementById("genre2").innerHTML = "Género: " + gdlg.genre;
document.getElementById("photo2").innerHTML = "./fotos/harrypotter.jpg";

//Tercera película
let viw = new Movie ("Los vengadores: Infinity War", 2018, "EEUU", "Fantasía");
viw.actors = ["Daniel Radcliffe"," Emma Watson"," Rupert Grint"];
viw.director = "Chris Columbus";
viw.writer = "Steve Kloves";
viw.language = "Inglés";
viw.platform = "HBO";
viw.isMCU = false;
viw.mainCharacterName = "Daniel Radcliffe";
viw.producer = "David Heyman";
viw.distributor = "Warner Bros";
viw.photo = "./harrypotter_.jpg"

document.getElementById("title3").innerHTML = viw.title;
document.getElementById("releaseYear3").innerHTML = "Año de estreno: " + viw.releaseYear;
document.getElementById("actors3").innerHTML = "Actores principales: " + viw.actors;
document.getElementById("nacionality3").innerHTML = "Origen: " + viw.nacionality;
document.getElementById("director3").innerHTML = "Director:" + viw.director;
document.getElementById("writer3").innerHTML = "Guionista" + viw.writer;
document.getElementById("language3").innerHTML = "Idioma original: " + viw.language;
document.getElementById("platform3").innerHTML = "Disponible en: " + viw.platform;
document.getElementById("mainCharacterName3").innerHTML = "Protagonista: " + viw.mainCharacterName;
document.getElementById("producer3").innerHTML = "Productor: " + viw.producer;
document.getElementById("distributor3").innerHTML = "Productora: " + viw.distributor;
document.getElementById("genre3").innerHTML = "Género: " + viw.genre;
document.getElementById("photo3").innerHTML = viw.photo;


