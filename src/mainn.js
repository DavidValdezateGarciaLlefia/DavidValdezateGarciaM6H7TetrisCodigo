import './style.css'
function modificaNick(nick) {
  // Comprovem si la cadena està buida
  if (nick == "") {
    // Mostrem un missatge d'error
    alert("El nick no pot estar en blanc")
    // Retornem null
    return null;
  }

  // Eliminem els espais per davant i/o darrera
  nick = nick.trim()

  // Substituïm els espais centrals per barra_baixa
  nick = nick.replace(" ", "_")

  // Convertim la cadena en majúscules
  nick = nick.toUpperCase()

  // Retornem la cadena modificada
  return nick
}

// Función para modificar una cadena de fecha en el formato "yy/mm/ddThh:mm:ss" a "dd mes año - hh:mm:ss"
function modificaData(data) {
  // Define un array para los nombres de los meses
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ]

  // Divide la cadena en sus partes
  const splitFecha = data.split('T')
  const fechaSplit = splitFecha[0].split('/')
  const horaSplit = splitFecha[1].split(':')

  // Extrae las partes de la fecha
  const dia = fechaSplit[2];
  const mes = meses[parseInt(fechaSplit[1]) - 1]
  const año = `20${fechaSplit[0]}`
  const hora = horaSplit[0]
  const minuto = horaSplit[1]
  const segundo = horaSplit[2]

  // Formatea la fecha en el formato deseado
  const fechaFormateada = `${dia} ${mes} ${año} - ${hora}:${minuto}:${segundo}`

  return fechaFormateada;
}
function modificaData2(objecteDate) {
    //aqui cada variable la obtendremos y la convertiremos en un date y depende lo que nos den si nos lo dan correctamente nos devolveran...
  const any = objecteDate.getFullYear().toString().slice(-2)
  const mes = (objecteDate.getMonth() + 1).toString().padStart(2, '0')
  const dia = objecteDate.getDate().toString().padStart(2, '0')
  const hora = objecteDate.getHours().toString().padStart(2, '0')
  const minut = objecteDate.getMinutes().toString().padStart(2, '0')
  const segon = objecteDate.getSeconds().toString().padStart(2, '0')
//nos devolveran todas las variables si estan bien puestas nos devolveria todo bien de esta forma
  return `${any}/${mes}/${dia}T${hora}:${minut}:${segon}`
}

function dias(dataText) {
  const parts = dataText.split('T')
  
  if (parts.length === 2) {
    // Separem les parts de la data i de l'hora
    const datePart = parts[0].split('/')
    const timePart = parts[1].split(':')
    
    if (datePart.length === 3 && timePart.length === 3) {
      // Verifiquem que hi hagi tres parts en la data i en l'hora
      const year = parseInt(datePart[0])
      const month = parseInt(datePart[1]) - 1;
      // Restem 1 perquè els mesos comencen des de 0
      const day = parseInt(datePart[2])
      const hour = parseInt(timePart[0])
      const minute = parseInt(timePart[1])
      const second = parseInt(timePart[2])

      // Creem una data objectiu i la data actual
      const targetDate = new Date(year, month, day, hour, minute, second)
      const currentDate = new Date()
      const differenceInTime = currentDate - targetDate
      const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))
       // Retornem la diferència en dies
      return differenceInDays
    }
  }
  
  return {
    error: true,
    missatge: "El format no és correcte" // Retornem un missatge d'error si el format no és correcte
  }
}


const ls = {
  setDades: function(dades) {
    try {
      // Convierte el objeto 'dades' a una cadena JSON y guárdalo en el LocalStorage
      localStorage.setItem('tetris_dades', JSON.stringify(dades))
      return true // Devuelve 'true' si la operación fue exitosa
    } catch (error) {
      return false // Devuelve 'false' si hubo un error al guardar los datos
    }
  },
  getDades: function() {
    const tetrisDades = localStorage.getItem('tetris_dades')

    if (tetrisDades) {
      // Si hay datos en el LocalStorage, convierte la cadena JSON en un objeto y devuélvelo
      return JSON.parse(tetrisDades)
    } else {
      // Si no hay datos en el LocalStorage, devuelve un objeto vacío
      return {}
    }
  }
}

//hacemos un array que contenga las datos de partidas y rtanking
const dades = {
  partidas: [
    {
      avatar: 'imagen1.png',
      nick: 'MANOLO',
      puntuacion: 124561,
      fecha: '23/12/05T12:12:00'
    },
    {
      avatar: 'imagen2.png',
      nick: 'PEDRA',
      puntuacion: 1561,
      fecha: '23/09/05T13:12:00'
    }
  ],
  ranking: [
    {
      avatar: 'imagen1.png',
      nick: 'MANOLO',
      puntuacion: 124561
    },
    {
      avatar: 'imagen2.png',
      nick: 'PEDRA',
      puntuacion: 1561
    }
  ]
}

ls.setDades(dades) // Guarda los datos en el LocalStorage
const datosRecuperados = ls.getDades() // Recupera los datos del LocalStorage

console.log(datosRecuperados); // Muestra los datos recuperados en la consola  

function registraPartida(partida) {
  // Obtenim les dades actuals del localstorage
  let partidesGuardades = JSON.parse(localStorage.getItem('partides')) || [];

  // Afegim la nova partida a l'array de partides
  partidesGuardades.push(partida);

  // Desem les dades actualitzades al localstorage
  localStorage.setItem('partides', JSON.stringify(partidesGuardades));
}

// Creem un exemple d'objecte partida
var partidaExemple = {
  avatar: 'imagen2.png',
  nick: 'PEDRA',
  puntuacion: 1561,
  fecha: '23/09/05T13:12:00'
};

// Cridem la funció per afegir la partida a l'array i desar-la al localstorage
registraPartida(partidaExemple);
