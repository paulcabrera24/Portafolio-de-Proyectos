fetch("json/paisesEU.json")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            llenarTabla(data);
        })
function llenarTabla(data){
    $(data).each(function(index,value){  
      var modales = `<div class="col-md-11">
                                
      <h3 style="color: rgb(27, 27, 27);" id="presidente-nombre-modal">${value.presidente}</h3>
      <h4 style="color: rgb(53, 51, 51);" id="pais-modal">${value.pais}</h4>
      <img src="${value.foto}" alt="" class="" id="presidente-foto">
      </div>`;

      $("#modales").append(modales);
              
        console.log(value);
        
        var fila = "<tr>";

        fila += "<td>" + value.cod + "</td>";
        fila += "<td>" + value.pais + "</td>";
        fila += "<td>" + value.capital + "</td>";
        fila += "<td>" + value.continente + "</td>";
        fila += "<td>" + value.subregion + "</td>";
    
        fila += "<td>" + value.moneda + "</td>";
        fila += "<td>" + value.presidente + "</td>";
  
        fila += "</tr>";
        $("#tbody-paises").append(fila);
    });
    $("#tbody-paises tr").click(function(){
        $("#tbody-paises tr").removeClass("table-info");
        $(this).addClass("table-info");
    
    }) 

    $("#tbody-paises tr").click(function(){
        var posicion = $(this).index();
        console.log(posicion);
        console.log(data[posicion].pais);
        console.log(data[posicion].cod);
       
 
        fetch("json/paisesEU.json")
         .then(function(response){
             return response.json();
         })
         .then(function(datapais){
             console.log(datapais);
             mostrarDatosPais(datapais);
         })
     })
     function mostrarDatosPais(datapais){
         var nombre = datapais.pais;
         var capital = datapais.capital;
         var bandera = datapais.foto;
         
         $("#pais-nombre").text(nombre);
         $("#pais-capital").text(capital);
         $("#pais-bandera").attr("src",bandera);
     }
     
    
}




// $("#tbody-paises tr").click(function(){
    
//     var posicion = $(this).index();
//     // index() indica la posicion del obejeto con respecto a su padre contenedor(tbody-colaboradres)
//     console.log(posicion);
//     var presidentes = fetch("json/paisesEU.json")[posicion].presidente
//     console.log(pais);
//     var paiss = fetch("json/paisesEU.json").[posicion].pais;
//     $("#presidente-nombre-modal").text(presidentes);
//     $("#pais-modal").text(paiss);

//     var foto = fetch("json/paisesEU.json")[posicion].foto;
//     $("#presidente-foto").attr("src",foto);
// })
