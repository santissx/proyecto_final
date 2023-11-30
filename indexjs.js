
window.onload = function(){
    var v = document.getElementById("inicio");
    var w = document.getElementById("acercademi");
    var x = document.getElementById("skills");
    var y = document.getElementById("proyectos");
    var z = document.getElementById("formulario");
    v.style.display = "block";
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    document.getElementById("home").className = "active";
    document.getElementById("acerca").className = "desactive";    
    document.getElementById("skill").className = "desactive";
    document.getElementById("proy").className = "desactive";
    document.getElementById("contacto").className = "desactive";
}
function show(param_div_id) {
    var v = document.getElementById("inicio");
    var w = document.getElementById("acercademi");
    var x = document.getElementById("skills");
    var y = document.getElementById("proyectos");
    var z = document.getElementById("formulario");
    if (param_div_id === "inicio") {
        v.style.display = "block";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        document.getElementById("home").className = "active";
        document.getElementById("acerca").className = "desactive";
        document.getElementById("habilidades").className = "desactive";
        document.getElementById("proy").className = "desactive";
        document.getElementById("contacto").className = "desactive";
    } else if (param_div_id === "acercademi") {
        v.style.display = "none";
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        document.getElementById("home").className = "desactive";
        document.getElementById("acerca").className = "active";
        document.getElementById("habilidades").className = "desactive";
        document.getElementById("proy").className = "desactive";
        document.getElementById("contacto").className = "desactive";
    } else if (param_div_id === "skills") {
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        document.getElementById("home").className = "desactive";
        document.getElementById("acerca").className = "desactive";
        document.getElementById("habilidades").className = "active";
        document.getElementById("proy").className = "desactive";
        document.getElementById("contacto").className = "desactive";
    }
    else if (param_div_id === "formulario") {
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    
        document.getElementById("home").className = "desactive";
        document.getElementById("acerca").className = "desactive";
        document.getElementById("habilidades").className = "desactive";
        document.getElementById("proy").className = "desactive";
        document.getElementById("contacto").className = "active";
    }
    else if (param_div_id === "proyectos") {
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        
        document.getElementById("home").className = "desactive";
        document.getElementById("acerca").className = "desactive";
        document.getElementById("habilidades").className = "desactive";
        document.getElementById("proy").className = "active";
        document.getElementById("contacto").className = "desactive";
    }
};
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var footer = document.querySelector("footer");

    window.addEventListener("resize", function() {
        if (window.innerWidth < 768) {
            header.style.display = "none";
            footer.style.display = "none";
        } else {
            header.style.display = "block";
            footer.style.display = "block";
        }
    });

    window.addEventListener("scroll", function() {
        if (window.innerWidth < 768) {
            header.style.display = "none";
            footer.style.display = "none";
        }
    });
});