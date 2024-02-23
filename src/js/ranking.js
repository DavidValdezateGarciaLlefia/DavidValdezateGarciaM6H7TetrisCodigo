
import { index } from "."
import { body } from "./body"
import { jugar } from "./juego"
export const ranking = {
    template : // html
    `
    <div id="info" class="">
				<div id="ranking" class="m-5 p-5 bg-dark">
                <h2 class="text-center text-light">Ranking</h2>
                <div id="tablaRanking"></div>
                
				</div>
                <div>
                
                </div>
				<div id="partidas" class="m-5 p-5 bg-dark text-light ">
                <thead>
                <tr>
                    <td></td>
                    <td >Nick <i class="bi bi-arrow-up-square" id="nick-header"></i></td>
                    <td>Puntuación <i class="bi bi-arrow-up-square" id="puntos-header"></i></td>
                    <td>Fecha <i class="bi bi-arrow-up-square" id="fecha-header"></i></td>
                </tr>
            </thead>
            <h2 class="text-center text-light">Partidas</h2>
        <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Buscador"
                aria-label="Buscador"
                aria-describedby="button-addon2"
                id="input-addon2"
            />
            <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
                <div id="partidas2">
                
                </div>
				</div>
                <div class="container align-items-center pb-5">
                <button class="btn btn-success fs-1 mt-5" id="botonHome">HOME</button>
                <button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
                </div>
                
                

			</div>
    `,
    script: ()=>{
        
        document.querySelector('#botonHome').addEventListener('click', () => {
            document.querySelector('body').innerHTML = body.template;
            body.script();
            
        });

            document.querySelector('#botonJugar').addEventListener('click', function() {
                document.querySelector('body').innerHTML = jugar.template;
                jugar.script();
            });
            ranking.pintaTabla(ranking.partides);
            ranking.pintaRanking();
            
            
            ['nick', 'puntos', 'fecha'].forEach(function(campo) {
                document.querySelector(`#${campo}-header`).addEventListener('click', function () {
                    console.log(`Clic en: ${campo}`);
            
                    const nuevoOrden = ranking.estadoOrden[campo] === 'up' ? 'down' : 'up';
            
                    ranking.orden(campo, nuevoOrden);
            
                    ranking.estadoOrden[campo] = nuevoOrden;
            
                    const icono = document.querySelector(`#${campo}-header`);
                    icono.className = nuevoOrden === 'up' ? 'bi bi-arrow-up-square' : 'bi bi-arrow-down-square';
                });
            });
            document.querySelector('#button-addon2').addEventListener('click', () => {
                const searchInput = document.querySelector('#input-addon2');
                const searchText = searchInput.value;
                
               
                const resultados = ranking.buscador(searchText);
                console.log(resultados); 
                ranking.pintaTabla(resultados)
            })
        
    

        


    },
    

        


        

         partides: [
        ],

        

         
            
        
        
         pintaTabla: (partides)=>{
        
        
        
        let tablaPartidas= `
        <table class="table table-dark">
            
            <tbody>
            `
        console.log('ranking partides',partides)
        console.log('puntuacion')
         partides.forEach(element =>{
            tablaPartidas+=
                `<tr>
                    <td><img src="${element.avatar}" width="30px"/></td>
                    <td>${element.nick}</td>
                    <td>${element.puntos}</td>
                    <td>${element.fecha}</td>
                </tr>
                `
            });
         
         
        tablaPartidas+=
            `         
            </tbody>
            <tfoot></tfoot>
            </table>
            `
        
        document.querySelector('#partidas2').innerHTML = tablaPartidas
        
        },

        
     /**/  pintaRanking:()=>{
        ranking.partides.sort((a, b) => b.puntos - a.puntos)
        let tablaRanking=`
        <table class="table table-dark">
            
            <tbody>
            `
        console.log('ranking partides',ranking.partides)
        console.log('puntuacion')
         ranking.partides.forEach(element =>{
            tablaRanking+=
                `<tr>
                    <td><img src="${element.avatar}" width="30px"/></td>
                    <td>${element.nick}</td>
                    <td>${element.puntos}</td>
                    <td>${element.fecha}</td>
                </tr>
                `
            });
         
         
        tablaRanking+=
            `         
            </tbody>
            <tfoot></tfoot>
            </table>
            `
        
           document.querySelector('#tablaRanking').innerHTML = tablaRanking
        },
        
      /**/   insertaNuevaPartida: (datosPartida)=>{
            
            console.log('Guardando partida')
            ranking.partides.push(datosPartida)
            console.log(datosPartida)
            console.log(ranking.partides)
            
        
        },
        
        pintaDatosPartida: (datosPartida)=>{
            if(confirm('¿Quieres guardar la partida?')==true){
                ranking.insertaNuevaPartida(datosPartida)
                ranking.pintaTabla(ranking.partides)
                ranking.pintaRanking(ranking.partides)
                
                
            }else{
                ranking.pintaTabla(ranking.partides)
            }
        },

           

          /*document.querySelector('#botonJugar').addEventListener('click', () => {
 
             document.querySelector('body').innerHTML = jugar.template
             jugar.script()
           });*/   

            buscador: (texto)  => {
            texto = texto.toLowerCase(); 
            return ranking.partides.filter(partida => partida.nick.toLowerCase().includes(texto));
        },

        buscadorPartidas : () =>{
            document.querySelector('#button-addon2').addEventListener('click', () => {
                const searchInput = document.querySelector('#input-addon2');
                const searchText = searchInput.value;
                
               
                const resultados = ranking.buscador(searchText);
                console.log(resultados); 
                ranking.pintaTabla(resultados)
            })

        },
        
        orden: function(campo, tipo) {
            const iconoId = `${campo}-header`;
            const icono = document.querySelector(`#${iconoId}`);
            if (icono) {
                if (tipo === 'up') {
                    icono.className = 'bi bi-arrow-up-square';
                } else {
                    icono.className = 'bi bi-arrow-down-square';
                }
            } else {
                console.error(`No se encontró el ícono para el campo: ${campo}`);
            }
        
            ranking.partides.sort((a, b) => {
                if (typeof a[campo] === 'number') {
                    if (tipo === 'up') {
                        return a[campo] - b[campo];
                    } else {
                        return b[campo] - a[campo];
                    }
                } else { 
                    if (tipo === 'up') {
                        return a[campo].localeCompare(b[campo]);
                    } else {
                        return b[campo].localeCompare(a[campo]);
                    }
                }
            });
        
         
            ranking.pintaTabla(ranking.partides);
        },
        
        estadoOrden: {
            nick: 'up',
            puntos: 'up',
            fecha: 'up'
        },
        ordenBoton: () => {
            document.querySelector('#nick-header').addEventListener('click', function () {
                if (ranking.estadoOrden.nick === 'up') {
                    ranking.orden('nick', 'up');
                    ranking.estadoOrden.nick = 'down';
                } else {
                    ranking.orden('nick', 'down');
                    ranking.estadoOrden.nick = 'up';
                }
            });
        },

    calculaDia: ()=>{
        
        var fechaActual = new Date();


        let año = fechaActual.getFullYear();
        let mes = fechaActual.getMonth() + 1; 
        let dia = fechaActual.getDate();

        mes = (mes < 10) ? '0' + mes : mes;
        dia = (dia < 10) ? '0' + dia : dia;


        let fechaFormateada = dia + ' ' +  mes + ' ' + año;

        return fechaFormateada
        
            
            
            
    }
}
    
    
    
    
    
