const escribirSobreMi = () => {
  var i = 0;
  var txt = `
    Desde mi infancia, he sentido una profunda fascinación por comprender la tecnología, lo que me condujo,
    durante mi adolescencia, a sumergirme en el mundo de la informática a través
    del soporte técnico y el ensamblaje de computadoras, tanto para
    amigos como para la mía propia.Actualmente, soy estudiante de la
    Tecnicatura Superior en Desarrollo de Software en el ISFD Felix
    Atilio Cabrera.Me considero una persona responsable y proactiva,
    con la capacidad de aprender fácilmente, ya sea de forma
    autodidacta o en entornos más formales.En mi búsqueda constante
    de crecimiento y desarrollo, aspiro a formar parte de una empresa
    que me brinde la oportunidad de desempeñarme en diversas tareas,
    desafiándome a adquirir nuevos conocimientos y perfeccionar mis
    habilidades.Mi enfoque en las buenas prácticas de desarrollo me
    permite colaborar eficazmente tanto en equipos de trabajo como de
    manera independiente.
    `;
  var speed = 10; /* The speed/duration of the effect in milliseconds */
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed );
    }
  }
  typeWriter();
};

const card1 = () => {
  var i = 0;
  var txt = `
  En esta sección encontrarás información personal que destaca quién soy. Es una ventana para conocernos mejor y entender cómo mi trayectoria ha influido en mi desarrollo.`;
  var speed = 10; /* The speed/duration of the effect in milliseconds */
  function typeWriterCard1() {
    if (i < txt.length) {
      document.getElementById("carta1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriterCard1, speed);
    }
  }
  typeWriterCard1();
};

const card2 = () => {
  var i = 0;
  var txt = `
  En esta sección encontrarás información personal que destaca quién soy. Es una ventana para conocernos mejor y entender cómo mi trayectoria ha influido en mi desarrollo.`;
  var speed = 10; /* The speed/duration of the effect in milliseconds */
  function typeWriterCard2() {
    if (i < txt.length) {
      document.getElementById("carta2").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriterCard2, speed);
    }
  }
  typeWriterCard2();
};

const card3 = () => {
  var i = 0;
  var txt = `
  Esta sección destaca los proyectos en los que he trabajado, es decir, los desafios que he superado.
`;
  var speed = 10; /* The speed/duration of the effect in milliseconds */
  function typeWriterCard3() {
    if (i < txt.length) {
      document.getElementById("carta3").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriterCard3, speed);
    }
  }
  typeWriterCard3();
};

const card4 = () => {
  var i = 0;
  var txt = `
  ¿Listo para conectarnos? Aquí encontrarás información para enviarme un mensaje, preguntar sobre oportunidades de colaboración o simplemente saludar..`;
  var speed = 10; /* The speed/duration of the effect in milliseconds */
  function typeWriterCard4() {
    if (i < txt.length) {
      document.getElementById("carta4").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriterCard4, speed);
    }
  }
  typeWriterCard4();
};

window.onload = function () {
  escribirSobreMi();
  card1();
  card2();
  card3();
  card4();

  var v = document.getElementById("inicio");
  var w = document.getElementById("acercademi");
  var x = document.getElementById("skills");
  var y = document.getElementById("proyectos");
  var z = document.getElementById("formulario");

  document.getElementById("home").className = "active";
  document.getElementById("acerca").className = "desactive";
  document.getElementById("skill").className = "desactive";
  document.getElementById("proy").className = "desactive";
  document.getElementById("contacto").className = "desactive";
};
function show(param_div_id) {
  var v = document.getElementById("inicio");
  var w = document.getElementById("acercademi");
  var x = document.getElementById("skills");
  var y = document.getElementById("proyectos");
  var z = document.getElementById("formulario");
  if (param_div_id === "inicio") {
    v.style.display = "block";
    w.style.display = "block";
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "block";
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
    escribirSobreMi();
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
  } else if (param_div_id === "formulario") {
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
  } else if (param_div_id === "proyectos") {
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
}
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var footer = document.querySelector("footer");

  window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
      header.style.display = "none";
      footer.style.display = "none";
    } else {
      header.style.display = "block";
      footer.style.display = "block";
    }
  });

  window.addEventListener("scroll", function () {
    if (window.innerWidth < 768) {
      header.style.display = "none";
      footer.style.display = "none";
    }
  });
});
