class Professional {
    //CONSTRUCTOR
    constructor (name, age, nacionality,photo){
        this.name = name;
        this.age = age;
        this.nacionality = nacionality;
        this.photo = photo;
    }
}

let actor = new Professional("Daniel Jacob Radcliffe",33,"Británica", "./hp2.jpg")
let actor2 = new Professional("Emma Watson",33,"Británica","./hp3.jpg")
let actor3 = new Professional("Robert Downey Jr.",58,"Estadounidense","./lv1.jpg")
let actor4 = new Professional("Zoe Saldaña",44,"Estadounidense","./gdlg1.jpg")
let actores = [actor,actor2,actor3,actor4]

let actors="";
    for(let i=0;i<actores.length;i++){
        actors += `<div class="card">
                        <div class="first-content">
                            <span><img src=${actores[i].photo} class="imagen2"></span>
                        </div>
                        <div class="second-content">
                            <span>${actores[i].name}</span>
                            <span>${actores[i].age}</span>
                            <span>${actores[i].nacionality}</span>
                        </div>                   
                    </div>`
    }
    $("#professionals").html(actors);
    

