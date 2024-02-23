
import { modificaNick } from "./date";
import { modeloPieza } from "./modeloPieza";
import { models } from "./models";
import { ranking } from "./ranking";


export const panel = {
    matriz :[
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1],       
    ],
    matrizPiezasGuardadas:[
        [1,0,0,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,0,0,1],
        [1,1,1,1]
    ],
    

    pintaPanel: () => {
        let panelDiv = document.querySelector('#panel');
        let panelFinal = '';
        panelDiv.innerHTML = '';
        for (let y = 0; y < panel.matriz.length; y++) {
            panelFinal += `<div class="d-flex">`;
            for (let x = 0; x < panel.matriz[y].length; x++) {
                let colorClase = ''; 
                if(panel.matriz[y][x] == 1){
                    colorClase = 'bg-transparent';
                } else if(panel.matriz[y][x] == 2){
                    colorClase = 'border bg-primary bg-gradient';
                } else if(panel.matriz[y][x] == 3){
                    colorClase = 'border bg-secondary bg-gradient';
                } else if(panel.matriz[y][x] == 4){
                    colorClase = 'border bg-success bg-gradient';
                } else if(panel.matriz[y][x] == 5){
                    colorClase = 'border bg-danger bg-gradient';
                } else if(panel.matriz[y][x] == 6){
                    colorClase = 'border bg-warning bg-gradient';
                } else if(panel.matriz[y][x] == 7){
                    colorClase = 'border bg-info bg-gradient';
                }else if(panel.matriz[y][x]== 0){
                    colorClase = 'border bg-dark';
                }
               
                panelFinal += `<div class="p-3 ${colorClase}"></div>`;
            }
            panelFinal += `</div>`;
        }
        panelDiv.innerHTML = panelFinal;
        
        let panelDivDer1 = document.querySelector('#piezaGuardada0');
        let panelDivDer2 = document.querySelector('#piezaGuardada1');
        let panelDivDer3 = document.querySelector('#piezaGuardada2');
        let panelDivs = ['',panelDivDer1, panelDivDer2, panelDivDer3]; 
        let panelesFinales = ['','', '', '']; 
        
        for (let i = 1; i < panel.listaPiezas.length; i++) {
            panelesFinales[i] += `<div class='mb-3'>`
            for (let y = 0; y < panel.listaPiezas[i].altura; y++) {
                panelesFinales[i] += `<div class='d-flex'>`
                for (let x = 0; x < panel.listaPiezas[i].longitud; x++) {
                    let colorClase = ''; 
        
                   
                    let valorCelda = panel.listaPiezas[i].matriz[y][x]; 
        
                    if (valorCelda == 2) {
                        colorClase = ' bg-primary bg-gradient';
                    } else if (valorCelda == 3) {
                        colorClase = ' bg-secondary bg-gradient';
                    } else if (valorCelda == 4) {
                        colorClase = ' bg-success bg-gradient';
                    } else if (valorCelda == 5) {
                        colorClase = ' bg-danger bg-gradient';
                    } else if (valorCelda == 6) {
                        colorClase = ' bg-warning bg-gradient';
                    } else if (valorCelda == 7) {
                        colorClase = ' bg-info bg-gradient';
                    } 
        
                   
                    panelesFinales[i] += `<div class=" border p-3  ${colorClase}"></div>`;
                }
                panelesFinales[i] += `</div>`
               
            }
        
            panelesFinales[i] += `</div>`
            panelDivs[i].innerHTML = panelesFinales[i];
        }
    },
     crearNuevaPieza: () => {
        let modeloRandom = Math.floor(Math.random() * models.length);
        let x = Math.floor(Math.random() * (10 - models[modeloRandom].matriz[0].length)+1);
        const pieza = new modeloPieza(modeloRandom, x, 0, 0); 
        return pieza;
    },
    nuevaPieza :null,
    listaPiezas: [],
    insertarPiezasArray : () =>{
        
        
        if (panel.listaPiezas.length == 4) {
            
            panel.listaPiezas.shift();
        }
        
        
        let nuevaPieza = panel.crearNuevaPieza();
        panel.listaPiezas.push(nuevaPieza);
    },
    insertarPieza: () => {

        //panel.listaPiezas[0]
       
        for(let y=0;y<panel.listaPiezas[0].altura;y++){

            for(let x=0;x<panel.listaPiezas[0].longitud;x++){
                const elemento = panel.listaPiezas[0].matriz[y][x]
                if(elemento){
                    panel.matriz[y+panel.listaPiezas[0].y][x+panel.listaPiezas[0].x] = elemento
                }
               
                
            }
        }

    
    },
    
    
    borrarPieza :() =>{

        
        for(let y=0;y<panel.listaPiezas[0].altura;y++){
            
            for(let x=0;x<panel.listaPiezas[0].longitud;x++){
                const elemento = panel.listaPiezas[0].matriz[y][x]
                if(elemento){
                  
                    panel.matriz[y+panel.listaPiezas[0].y][x+panel.listaPiezas[0].x] = 0
                }
               
                
            }
        }
        panel.pintaPanel()
    },
    controlTeclas: () => {
        document.addEventListener('keydown', panel.manjeadorTeclas);
    },
    manjeadorTeclas: (event) => {
        switch(event.key) {
            case 'ArrowUp':
                event.preventDefault();
                panel.girar();
                break;
            case 'ArrowDown':
                event.preventDefault();
                panel.bajar();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                panel.moverIzq();
                break;
            case 'ArrowRight':
                event.preventDefault();
                panel.moverDra();
                break;
            case 'c':
                event.preventDefault();
                panel.cambiarPieza();
                break;
            default:
                break;
        }
    },
    
    
    resetTeclas : () => {
        document.removeEventListener('keydown', panel.manjeadorTeclas);
    },
    girar() {
        
        this.borrarPieza();
    panel.listaPiezas[0].girar(); 
    let puedeGirar = true;
    for (let y = 0; y < panel.listaPiezas[0].altura; y++) {
        for (let x = 0; x < panel.listaPiezas[0].longitud; x++) {
            const elemento = panel.listaPiezas[0].matriz[y][x];
            if (elemento) {
                const posX = x + panel.listaPiezas[0].x;
                const posY = y + panel.listaPiezas[0].y;
                
                if (posX < 0 || posX >= panel.matriz[0].length || posY >= panel.matriz.length || panel.matriz[posY][posX] === 1) {
                    puedeGirar = false;
                    break; 
                }
            }
        }
        if (!puedeGirar) break; // Salir del bucle externo si no se puede girar
    }

    if (!puedeGirar) {
        panel.listaPiezas[0].girar(); 
        panel.listaPiezas[0].girar(); 
        panel.listaPiezas[0].girar();
    }


    for (let y = 0; y < panel.listaPiezas[0].altura; y++) {
        for (let x = 0; x < panel.listaPiezas[0].longitud; x++) {
            const elemento = panel.listaPiezas[0].matriz[y][x];
            if (elemento) {
                panel.matriz[y + panel.listaPiezas[0].y][x + panel.listaPiezas[0].x] = elemento;
            }
        }
    }

    panel.sumaPuntuacion(20); 
    panel.pintaPanel();
    },
    moverIzq() {
        event.preventDefault();
    
        panel.borrarPieza();
        let colision = false;
        for (let y = 0; y < panel.listaPiezas[0].altura; y++) {
            for (let x = 0; x < panel.listaPiezas[0].longitud; x++) {
                if (panel.listaPiezas[0].matriz[y][x] !== 0) {
                    const nextX = panel.listaPiezas[0].x + x - 1;
                    if (nextX < 0 || panel.matriz[panel.listaPiezas[0].y + y][nextX] !== 0) {
                        colision = true;
                        break;
                    }
                }
            }
            if (colision) break;
        }
    
        if (!colision) {
            panel.listaPiezas[0].x -= 1;
            panel.sumaPuntuacion(10);
        }
    
        panel.insertarPieza();
        panel.pintaPanel();
    },
    
    moverDra() {
        event.preventDefault();
    
        panel.borrarPieza();
        let colision = false;
        for (let y = 0; y < panel.listaPiezas[0].altura; y++) {
            for (let x = 0; x < panel.listaPiezas[0].longitud; x++) {
                if (panel.listaPiezas[0].matriz[y][x] !== 0) {
                    const nextX = panel.listaPiezas[0].x + x + 1;
                    if (nextX >= panel.matriz[0].length || panel.matriz[panel.listaPiezas[0].y + y][nextX] !== 0) {
                        colision = true;
                        break;
                    }
                }
            }
            if (colision) break;
        }
    
        if (!colision) {
            panel.listaPiezas[0].x += 1;
            panel.sumaPuntuacion(10);
        }
    
        panel.insertarPieza();
        panel.pintaPanel();
    },
     //       divInputJuego.classList.remove('d-flex');
           //     divInputJuego.classList.add('d-none');
               // divInputNick.classList.remove('d-none');
             //   divInputNick.classList.add('d-flex');
               // clearInterval(panel.intervalID); 
               bajar() {
                panel.borrarPieza();
                let colisionY = panel.listaPiezas[0].y + 1;
                let colision = false;
            
                for (let y = 0; y < panel.listaPiezas[0].altura; y++) {
                    for (let x = 0; x < panel.listaPiezas[0].longitud; x++) {
                        if (panel.listaPiezas[0].matriz[y][x] !== 0) {
                            const nextY = y + colisionY;
                            panel.limpiarLineas();
                            if (nextY >= panel.matriz.length || panel.matriz[nextY][x + panel.listaPiezas[0].x] !== 0) {
                                colision = true;
                                
                                break;
                            }
                        }
                    }
                    if (colision) break;
                }
            
                if (!colision) {
                    
                    for (let y = 0; y < panel.listaPiezas[0].altura; y++) {
                        for (let x = 0; x < panel.listaPiezas[0].longitud; x++) {
                           
                            if (panel.listaPiezas[0].matriz[y][x] !== 0) {
                                
                                panel.matriz[y + colisionY][x + panel.listaPiezas[0].x] = panel.listaPiezas[0].matriz[y][x];
                            }
                            
                        }
                    }
                    panel.listaPiezas[0].y = colisionY;
                    panel.sumaPuntuacion(10);
                } else {
                    panel.insertarPieza();
                    panel.insertarPiezasArray()
                    panel.finalizarPartida()
                    
                    
                    
                    panel.sumaPuntuacion(50);
                }
            
                 
                panel.pintaPanel();
            },
    puntuacion: 0,
    sumaPuntuacion(puntuacion) {
        panel.subirNivel()
        this.puntuacion += puntuacion;
        document.querySelector('#juegoPuntos').innerHTML = this.puntuacion;
    },
    iniciarMovimiento() {
        this.intervalID = setInterval(() => { this.bajar() }, 1000);
    },
    
    guardarPartida: (nick)=>{
        



        let nickFinal = modificaNick(nick)
        var fechaActual = new Date();


        let año = fechaActual.getFullYear();
        let mes = fechaActual.getMonth() + 1; 
        let dia = fechaActual.getDate();

        mes = (mes < 10) ? '0' + mes : mes;
        dia = (dia < 10) ? '0' + dia : dia;


        let fechaFormateada = dia + ' ' +  mes + ' ' + año;

        const datosEjemploPartida = {
            avatar:'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
        
            nick: nickFinal ,
        
            puntos: panel.puntuacion ,
        
            fecha: fechaFormateada, 
            }
            document.querySelector('body').innerHTML = ranking.template
            ranking.script(datosEjemploPartida)
            
           
    },
    lineasEliminadas: 0,
    limpiarLineas() {
        let lineasEliminadasEstaVez = 0; 
        for (let fila = 1; fila < panel.matriz.length - 1; fila++) {
            let cont = 0;
            for (let columna = 1; columna < panel.matriz[fila].length - 1; columna++) {
                if (panel.matriz[fila][columna] != 0) {
                    cont++;
                }
            }
            if (cont === panel.matriz[fila].length - 2) {
                panel.matriz.splice(fila, 1);
                panel.matriz.splice(1, 0, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
                lineasEliminadasEstaVez++;
                fila--; 
            }
        }
        if (lineasEliminadasEstaVez > 0) {
         
            panel.sumaPuntuacion(100 * lineasEliminadasEstaVez); 
            panel.lineasEliminadas += lineasEliminadasEstaVez; 
            document.querySelector('#lineasSpan').innerHTML = panel.lineasEliminadas;
            panel.pintaPanel();
        }
    },
    minutos: 0,
    segundos: 0,
    timer: 0,
    tiempoID: null,
    iniciarTiempo: ()=>{
         panel.tiempoID = setInterval(() => { panel.contadorTiempo() },1000);
    },
    contadorTiempo: ()=>{
        

            panel.segundos = panel.segundos + 1
            if(panel.segundos == 60){
                panel.segundos = 0
                panel.minutos = panel.minutos + 1
                if(panel.minutos == 999){
                    panel.minutos = 0
                }
            }
            if(panel.segundos<10){
                panel.timer = panel.minutos + ':0' + panel.segundos 
            }else{
                panel.timer = panel.minutos + ':' + panel.segundos
            }
            
            document.querySelector('#juegoTimer').innerHTML = panel.timer

         },
    

    nivel:1,

    subirNivel: ()=>{
        let panelDiv = document.querySelector('#panel');
        let panelFinal = '';
        if(panel.puntuacion>=(5000*panel.nivel)){
            panel.nivel = panel.nivel + 1
         
            document.querySelector('#juegoNivel').innerHTML = panel.nivel
            for (let y = 1; y < panel.matriz.length-1; y++) {
                panelFinal += `<div class="d-flex">`;
                for (let x = 1; x < panel.matriz[y].length-1; x++) { 
                    panel.matriz[y][x] = 0        
                    panelFinal += `<div class="p-3"></div>`;
                }
                panelFinal += `</div>`;
            }
            panelDiv.innerHTML = panelFinal;
        }
    },
    finalizarPartida: ()=>{
        console.log('hola desde finalizar partida')
        for(let y=0;y<1;y++){
            for(let x=0;x<panel.matriz[y].length;x++){
                if(panel.matriz[y][x] != 0 && panel.matriz[y][x] != 1 ){

                    let panelDiv = document.querySelector('#panel');
                    let panelFinal = '';
           
            for (let y = 0; y < panel.matriz.length-1; y++) {
                panelFinal += `<div class="d-flex">`;
                for (let x = 0; x < panel.matriz[y].length-1; x++) { 
                    panel.matriz[y][x] = 0        
                    panelFinal += `<div class="p-3"></div>`;
                }
                panelFinal += `</div>`;
            
            panelDiv.innerHTML = panelFinal;


        }

        panel.borrarPieza()
                    const divInputJuego = document.querySelector('#panel')
                    const divInputNick = document.querySelector('#insertaNick')
                    divInputJuego.classList.remove('d-flex');
                    divInputJuego.classList.add('d-none');
                    divInputNick.classList.remove('d-none');
                    divInputNick.classList.add('d-flex');
                    clearInterval(panel.intervalID); 
                    clearInterval(panel.tiempoID)
                    panel.resetTeclas()
                    
                    
                    
                }
            }
        }
    },
    limpiarMatriz: ()=>{

        for (let y = 1; y < panel.matriz.length - 1; y++) {
            
            for (let x =1; x < panel.matriz[y].length-1; x++) {
               
                panel.matriz[y][x] = 0;
            }
        }
        }


    ,

    resetStatsInterval: ()=>{
                    
                    panel.puntuacion = 0
                    panel.minutos = 0
                    panel.segundos = 0
                    panel.nivel = 1
                    panel.lineasEliminadas = 0
    },
    cambiarPieza(){
    
    panel.listaPiezas[1].x = panel.listaPiezas[0].x
    panel.listaPiezas[1].y = panel.listaPiezas[0].y

    panel.listaPiezas[0] = panel.listaPiezas[1]
    panel.listaPiezas[1] = panel.listaPiezas[0]
    panel.borrarPieza()
    panel.pintaPanel()
      }
  
    
    
    
};