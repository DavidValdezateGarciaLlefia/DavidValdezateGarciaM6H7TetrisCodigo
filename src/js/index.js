import { modeloPieza } from "./modeloPieza";
import { panel } from "./panel";

export const index ={
    script: () =>{
        
        
        
        // panel.insertarPieza(panel.listaPiezas[0])
        //la logica seria hacer aqui un for o meter 4 piezas en el array de piezas, y coger la 1a pieza y cuando haga la colision del bajar 
        //llamaremos una funcion que lo que haga que si hay 4 piezas en el array, quitara la primera y generara una y la metera al final
        panel.listaPiezas = []
        panel.limpiarMatriz()
        panel.finalizarPartida()
        
        for(let i=0;i<4;i++){
            panel.nuevaPieza = panel.crearNuevaPieza()
            panel.listaPiezas.push(panel.nuevaPieza);
        }
        
        panel.puntuacion = 0
        panel.minutos = 0
        panel.segundos = 0
        panel.nivel = 1
        panel.lineasEliminadas = 0
        panel.insertarPieza(panel.listaPiezas[0])
        panel.pintaPanel()
        panel.iniciarMovimiento()
        panel.iniciarTiempo()
        
        
    }
}
    

