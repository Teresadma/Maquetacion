    let arrayPrenda=[];

    jQuery(() =>  {
        $("#prenda1").on("click", () => {
            let prenda1 = {
                prenda: "PRENDA: Pantalon suelto gris",
                precio: 20,
            }
            arrayPrenda.push(prenda1);
            console.log(arrayPrenda);
        });
        $("#prenda2").on("click", () => {
            let prenda2 = {
                prenda: "PRENDA: Vestido túnico",
                precio: 18,
            }
            arrayPrenda.push(prenda2);
            console.log(arrayPrenda);
        });
        $("#prenda3").on("click", () => {
            let prenda3 = {
                prenda: "PRENDA: Falda Mid Print",
                precio: 12,
            }
            arrayPrenda.push(prenda3);
            console.log(arrayPrenda);
        });
        $("#prenda4").on("click", () => {
            let prenda4 = {
                prenda: "PRENDA: Cardigan largo rayas",
                precio: 22,
            }
            arrayPrenda.push(prenda4);
            console.log(arrayPrenda);
        });
        $("#prenda5").on("click", () => {
            let prenda5 = {
                prenda: "PRENDA: Falda Zebra",
                precio: 14,
            }
            arrayPrenda.push(prenda5);
            console.log(arrayPrenda);
        });
        $("#prenda6").on("click", () => {
            let prenda6 = {
                prenda: "PRENDA: Mono",
                precio: 25,
            }
            arrayPrenda.push(prenda6);
            console.log(arrayPrenda);
        });
        $("#prenda7").on("click", () => {
            let prenda7 = {
                prenda: "PRENDA: Vestido Jersey",
                precio: 16,
            }
            arrayPrenda.push(prenda7);
            console.log(arrayPrenda);
        });
        $("#prenda8").on("click", () => {
            let prenda6 = {
                prenda: "PRENDA: Pantalones Talle Alto",
                precio: 20,
            }
            arrayPrenda.push(prenda6);
            console.log(arrayPrenda);
        });
         
    });
    jQuery(() => {
        $("#carrito").on("click", () => {
            
            for (let i=0;i<arrayPrenda.length;i++){
                    $("#cesta").append(`<li>${arrayPrenda[i].prenda} ${arrayPrenda[i].precio} </li>`) ;
            }
            let suma = 0;
            for (let i=0;i<arrayPrenda.length;i++) {
                suma += arrayPrenda[i].precio;
                      
            }
            $("#total").append(`PRECIO TOTAL: ${suma}`) 
            arrayPrenda = [];
        });
    });

