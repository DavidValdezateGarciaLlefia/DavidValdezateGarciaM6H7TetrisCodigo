//longitud lo largo que es el array de models

import { models } from "./models"

export class modeloPieza{
    constructor(modelo, x = 0, y = 0, angulo) {
        this.modelo = modelo;
        this.x = x;
        this.y = y;
        this.angulo = angulo;
        this.altura = models[this.modelo].matriz[angulo].length;
        this.longitud = models[this.modelo].matriz[angulo][0].length;
        this.matriz = models[this.modelo].matriz[angulo];
    }

    girar() {
        if (this.angulo >= 3) {
            this.angulo = 0;
        } else {
            this.angulo = this.angulo + 1;
            
        }
        this.altura = models[this.modelo].matriz[this.angulo].length;
        this.longitud = models[this.modelo].matriz[this.angulo][0].length;
        this.matriz = models[this.modelo].matriz[this.angulo];
        
    }
    
 

}

