$("#contacto-btn").click(function(){
    
    fetch("menu-nav/contacto.html")
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        $("#main-content").html(data);
    })
});

$("#acerca").click(function(){
    
    fetch("menu-nav/acerca.html")
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        $("#main-content").html(data);
    })
});