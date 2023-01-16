const initialQuestions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let puntos;
let contador;
const arrUsers = [];
let userName;
const tiempoMaximo = 130; // tiempo en segundos

let questions = initialQuestions;

function pasapalabra() {
  contador = 0;
  puntos = 0;
  let initialTime = Date.now();
  askForNameAndGreet();
  next(questions, initialTime);
  console.log("arreglo Correcto", correcto());
  console.log("arreglo Incorrecto", incorrecto());
  console.log("arreglo pasapalabra", pasapalabraFind());
  const user = {
    name: userName,
    points: puntos,
    ordenar() {
      arrUsers.sort((a, b) => b.points - a.points);
    },
  };
  arrUsers.push(user);
  user.ordenar();
  console.log("Ranking Usuarios");
  let mostrar = arrUsers.filter((user) =>
    console.table(`El usuario ${user.name}, ha ganado ${user.points} puntos`)
  );
}

function askForNameAndGreet() {
  userName = prompt("Bienvenido al PASAPALABRA, introducca su nombre");
  if (userName === null || userName === "") {
    askForNameAndGreet();
  } else {
    alert(`Hola ${userName} Comencemos el Juego!`);

    return userName;
  }
}

function next(questions, initialTime) {
  for (let i = 0; i < questions.length; i++) {
    let now = Date.now();

    if (now >= initialTime + tiempoMaximo * 1000) {
      debugger;
      return;
    }

    let answer = window.prompt(`responda: ${questions[i].question}`);

    if (answer.toLowerCase() === questions[i].answer.toLowerCase()) {
      alert("Correcto!, ha ganado 1 punto");
      puntos++;

      questions[i].status = 1;
    } else if (answer.toLowerCase() === "pasapalabra".toLowerCase()) {
      alert(
        "pregunta que se le volvera a  hacer al terminar con el abecedario"
      );

      questions[i].status = 2;
    } else if (answer === "exit") {
      alert("adios");
      return;
    } else {
      alert("respuesta incorrecta!");

      questions[i].status = 3;
    }
    contador++;
    console.log(contador, "contador");
  }
  let pasapalabraArr = pasapalabraFind(questions);
  console.log(pasapalabraArr.length);
  console.log(pasapalabraArr);

  if (contador >= questions.length && pasapalabraArr.length > 0) {
    next(pasapalabraArr, initialTime);
  } else {
    alert(`has llegado al final del juego, has ganado ${puntos} puntos"`);
  }
}

function correcto() {
  let correcto = questions.filter((element) => element.status === 1);
  return correcto.length;
}

function incorrecto() {
  let incorrectArr = questions.filter((element) => element.status === 3);
  return incorrectArr;
}

function pasapalabraFind() {
  let pasapalabraArr = questions.filter((element) => element.status === 2);
  return pasapalabraArr;
}

/*

const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: "pasapalabra",
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: "pasapalabra",
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: "pasapalabra",
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: "pasapalabra",
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 1,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 1,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 1,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let contador = 0;
let puntos = 0;
let correctoCounter = 0;
let incorrectoCounter = 0;
let pasapalabraCounter = 0;

function pasapalabra() {
  let initialTime = Date.now();

  
    //let arrResult = questions.map((element) => {
    //if (tiempo actual-tiempoInicio<=0){
    //return}

    //let answer = window.prompt(`responda: ${element.question}`);
    let answer = window.prompt(`responda: ${questions[i].question}`);
    let later = Date.now();
    if (later >= initialTime + 20 * 1000) {
      debugger;

      console.log("questionsArr", questions);
      console.log("arreglo Correcto",correcto());
      console.log("arreglo Incorrecto", incorrecto());
      console.log("arreglo pasapalabra", pasapalabraFind());
      return;
    }
    //if (answer === element.answer) {
    if (answer === questions[i].answer) {
      alert("Correcto!, ha ganado 1 punto");
      puntos++;
      //element.status = 1;
      questions[i].status = 1;
    } else if (answer === "pasapalabra") {
      alert(
        "pregunta que se le volvera a  hacer al terminar con el abecedario"
      );
      //element.status = 2;
      questions[i].status = 2;
    } else if (answer === "exit") {
      debugger;

      alert("adios");
      console.log("questionsArr", questions.status);
      /*
      correctoCounter = arrResult.filter(
        (element) => element.status === "correcto"
      );
      console.log("correctoCounter", correctoCounter);

      incorrectoCounter = arrResult.filter((element) => element.status === 1);
      console.log("incorrectoCounter", incorrectoCounter);

      pasapalabraCounter = arrResult.filter((element) => element.status === 2);
      console.log("pasapalabraCounter", pasapalabraCounter);

      return;
    } else {
      alert("respuesta incorrecta!");
      //element.status = 0;
      questions[i].status = 0;
    }
    //});
  }
}

let correcto = () => {
  let correctoz = questions.filter((element) => element.status === 1);
  return correctoz;
};
let incorrecto = () => {
  let incorrectArr = questions.filter((element) => element.status === 0);
  return incorrectArr;
};

let pasapalabraFind = () => {
  let pasapalabraArr = questions.filter((element) => element.status === "2");
  return pasapalabraArr;
};

/*function contador(t) {
  var initialTime = Date.now();
  var interval;

  interval = setInterval(() => {
    var now = Date.now();
    if (now >= initialTime + t * 1000) {
      console.log("Tiempo!");
      clearInterval(interval);
    }
  }, true);
}
contador(5); //segundos
*/
/*
let horaActual = new Date();
console.log(
   horaActual.getHours(),
  horaActual.getMinutes(),
  horaActual.getSeconds()
);
if (60 - horaActual.getMinutes() > 3) {
  let ahora = horaActual.getMinutes() + 2;
  let segundos = horaActual.getSeconds() + 10;
  console.log(ahora, "minutos");
  console.log(segundos, "segundos");
}

    
    else {
      questions.forEach((question) => {
        if (question.status === 1) {
          correctoCounter++;
        }
      });

      questions.forEach((question) => {
        if (question.status === 0) {
          incorrectoCounter++;
        }
      });

      questions.forEach((question) => {
        if (question.status === 2) {
          pasapalabraCounter++;
        }
      });

      alert(`hay ${incorrectoCounter} palabras incorrectas`);
      alert(`hay ${correctoCounter} palabras correctas`);
      alert(`hay ${pasapalabraCounter} pasapalabras`);
      return;
    }
  }
}

const salida = perros.map(({ nombre, edad }) => {
  return `El perror se llama ${nombre} y tiene ${edad} años`;
});

  for ((i = arguments[0]) || (i = 0); i < questions.length; i++) {
    let pregunta = window.prompt(`responda: ${questions[i].question}`);
    if (pregunta !== null) {
      if (pregunta === questions[i].answer) {
        arrCorrecto.push(questions[i]);
        alert("Correcto!, has ganado 1 punto");
        puntos++;
      } else if (pregunta === "pasapalabra") {
        arrPasapalabra.push(questions[i]);
      } else if (
        pregunta !== questions[i].answer &&
        pregunta !== "Exit" &&
        pregunta !== " "
      ) {
        arrIncorrecto.push(questions[i]);
        alert("Incorrecto!");
        pasapalabra(i + 1);
      } else if (pregunta === " ") {
        alert("no puede dejar el campo vacio, si desea terminar escriba Exit");
        pasapalabra(i);
      } else if (pregunta === "Exit") {
        alert("adios!!!!");
        alert(`acertaste ${arrCorrecto.length}veces`);
        alert(`fallaste ${arrIncorrecto.length}veces`);
        console.log("correcto", arrCorrecto[0]);
        console.log("incorrecto", arrIncorrecto[0]);
        console.log("correcto", arrPasapalabra[0]);

        break;
      }
    } else {
      pasapalabra(i);
    }
  }









  t = 5;
var initialTime = Date.now();
console.log(initialTime);
var later = initialTime + t * 1000;
console.log(later.getMinutes());
*/
