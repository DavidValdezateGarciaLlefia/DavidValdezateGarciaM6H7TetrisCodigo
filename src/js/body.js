import { jugar } from "./juego";
import { panel } from "./panel";
import { ranking } from "./ranking";

export const body = {
    template: // html 
    `
    <body class="text-light">
		<header class="d-flex align-items-center justify-content-center">
			<img src="../src/img/logo.png" alt="logo" width="200" class="mt-5" />
		</header>
		<main class="container mt-5 bg-opacity-50 bg-dark p-2">
			<!-- Pantalla de introducción -->
      <div id="intro" class="text-center text-light p-5">
        <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
        <h2>Instruccions:</h2>
        <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
        <p>Amb la fletxa avall pots girar la peça</p>
        <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
        <p>Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
        <button class="btn btn-success fs-1 mt-5" id="botonJugar">JUGAR</button>
        <button class="btn btn-success fs-1 mt-5" id="botonRanking">RANKING</button>
				<hr>
      </div>
			<!-- Pantalla tablas y ranking -->
			
		
		</main>
		<script src="main.js"></script>
	</body>
    `,
    script : () =>{
       document.querySelector('#botonRanking').addEventListener('click', () => {
           console.log('hola')
        document.querySelector('body').innerHTML = ranking.template
        ranking.script()
        

      });
      document.querySelector('#botonJugar').addEventListener('click', () => {
     document.querySelector('body').innerHTML = jugar.template
     jugar.script()
     
     
   });
      
    }
    
}