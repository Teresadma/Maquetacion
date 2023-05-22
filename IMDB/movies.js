class Movie {
    //CONSTRUCTOR
    constructor (title, releaseYear, nacionality, genre, photo){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.photo = photo;
    }
}

let hp1 = new Movie ("Harry Potter y la piedra filosofal", 2001, "Londres", "Fantasía", "./hp1.jpg");
let gdlg = new Movie ("Guardianes de la galaxia VOL I", 2014, "EEUU", "Fantasía","./gdlg.jpg")
let viw = new Movie ("Los vengadores: Infinity War", 2018, "EEUU", "Ciencia ficción","./lv.jpg");
let ironman = new Movie ("Iron Man",2008,"EEUU","Ciencia ficción","./ironman.jpg");
let grease = new Movie ("Grease",1978,"EEUU","Romance", "./grease.jpg");
let primos = new Movie ("Primos",2011,"España","Comedia","./primos.jpg")
let xmen = new Movie ("X-Men: Primera generación",2011,"EEUU","Ciencia ficción","./xmen.jpg")
let hp2 = new Movie ("Harry Potter y la cámara secreta",2002,"Londres","Fantasía","./hp4.jpg")
let pelis = [hp1,gdlg,viw,ironman,primos,grease,xmen,hp2];

let movies = "";
    for (let i=0; i < pelis.length;i++){
        movies += `<div class="pelicula">
                    <div class="book">
                    <div class="info">
                        <p>${pelis[i].title}</p>
                        <p>${pelis[i].releaseYear}</p>
                        <p>${pelis[i].nacionality}</p>
                    </div>
                    <div class="cover">
                        <img class= "imagen" src="${pelis[i].photo}">
                        </div>
                    </div>
                    </div>` 

    }
    $("#movies").html(movies);

function newMovie(){
    let titulo = $(`#title`).val();
    let estreno = $(`#releaseYear`).val();
    let pais = $(`#nacionality`).val();
    let genero = $(`genre`).val();
    let foto = $(`photo`).val();

    let newMovie = new Movie (titulo,estreno,pais,genero,foto)
    pelis.push(newMovie)
}

