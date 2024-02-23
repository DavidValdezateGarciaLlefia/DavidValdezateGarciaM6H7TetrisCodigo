import { body } from "./body";
import { models } from "./models";
import { panel } from "./panel";
import { index } from "./index";
import { ranking } from "./ranking";

export const jugar = {
    template : `
    <div id="juego" class="text-light">
        <div id="juegoPantalla" class="d-flex row">
            <!-- Panel izquierda -->
            <div class="col-4 d-flex flex-column justify-content-end align-items-center p-5">
                <h4>Nivel: <span id="juegoNivel">1</span></h4>
                <h4>Tiempo: <span id="juegoTimer">0:00</span></h4>
                <h4>Lineas: <span id="lineasSpan">0</span></h4>
                <h4>Puntos: <span id="juegoPuntos">0</span></h4>
            </div>
            <!-- Panel central -->
            <div class="col-4 d-flex justify-content-center">
                <div id="panel" class="p-5"></div>
                
                <div id="insertaNick" class="mt-5 border bg-dark d-none flex-column align-items-center justify-content-center container" style="max-width: 500px;">
    <div class="text-light text-center">
        <div><img src="../src/img/gameOverTetris.jpg" style="max-width:100%; height:auto;" alt="game over"></div>
        <label for="nickUser" class="mr-2 mb-3">Nick:</label>
        <input id="nickUser" type="text" class="mt-3 form-control w-100" placeholder="Pon tu nick">
        <button id="btnNick" class="mt-3 btn btn-light" type="submit">Ingresar</button>
    </div>
</div>
            </div>
            <!-- Panel derecha -->
            <div class="col-4 d-flex flex-column justify-content-start align-items-center p-5">
                <div id="piezaSiguiente">
                    <h4>Pieza siguiente:</h4>
                    <div id="piezaGuardada0">
                </div>
                <hr />
                <div id="piezaGuardada">
                    <h4>Pieza guardada:</h4>
                    <div id="piezaGuardada1"></div>
                    <div id="piezaGuardada2"></div>
                </div>
            </div>
        </div>
        
    
</div>

        <button class="btn btn-success fs-1 mt-5" id="botonHome">HOME</button>
        <button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
    </div>
    `,
    script: () => {
        document.querySelector('#botonHome').addEventListener('click', () => {
            document.querySelector('body').innerHTML = body.template;
            body.script();
            
        });

        document.querySelector('#juegoPuntos').innerHTML = panel.puntuacion
        
        
        
        index.script()
        panel.controlTeclas()
        
       
        document.querySelector('#btnNick').addEventListener('click',()=>{
            const nick = document.querySelector('#nickUser').value
            let fechaActual = ranking.calculaDia()
            console.log(nick)
            
            
            
            
            document.querySelector('body').innerHTML = ranking.template
            ranking.pintaDatosPartida({"avatar": "https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg",
            "nick": nick,
            "puntos": panel.puntuacion,
            "fecha": fechaActual})
            panel.finalizarPartida()
            ranking.script()
            
        })

    }
}
