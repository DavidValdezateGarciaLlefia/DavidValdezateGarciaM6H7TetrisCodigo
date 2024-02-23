export function modificaNick(nick) {
    // Comprovem si la cadena està buida
    if (nick == '') {
      // Mostrem un missatge d'error
      //alert("El nick no pot estar en blanc")
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
  export function modificaData(data) {
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
    
    
    let dia = fechaSplit[2];
    if(dia<10){
        dia = fechaSplit[2].replace(0,'')
    }
    const mes = meses[parseInt(fechaSplit[1]) - 1]
    const año = `20${fechaSplit[0]}`
    const hora = horaSplit[0]
    const minuto = horaSplit[1]
    const segundo = horaSplit[2]
  
    // Formatea la fecha en el formato deseado
    const fechaFormateada = `${dia} ${mes} ${año} - ${hora}:${minuto}:${segundo}`
  
    return fechaFormateada;
  }
  export function modificaData2(objecteDate) {
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
  
  export function dias(dataText) {
    const parts = dataText.split('T');
  
    if (parts.length === 2) {
      const datePart = parts[0].split('/');
      const timePart = parts[1].split(':');
  
      if (datePart.length === 3 && timePart.length === 3) {
        const year = parseInt(datePart[2]);
        const month = parseInt(datePart[0]) - 1;
        const day = parseInt(datePart[1]);
        const hour = parseInt(timePart[0]);
        const minute = parseInt(timePart[1]);
        const second = parseInt(timePart[2]);
  
        // Crear la fecha objetivo
        const targetDate = new Date(year, month, day, hour, minute, second);
  
        if (isNaN(targetDate.getTime())) {
          // Verificar si la fecha es válida
          return {
            error: true,
            missatge: 'El format no és correcte',
          };
        }
  
        const currentDate = new Date();
        const differenceInTime = currentDate - targetDate;
        const differenceInDays = Math.floor(differenceInTime / (1000*60*60*24));
  
        return differenceInDays;
      }
    }
  
    return {
      error: true,
      missatge: 'El format no és correcte',
    };
  }