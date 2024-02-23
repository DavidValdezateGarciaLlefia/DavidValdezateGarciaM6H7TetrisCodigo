
console.log('hola')

import { body } from "./src/js/body";
import { head } from "./src/js/head";
    document.querySelector('head').innerHTML = head.template
	document.querySelector('body').innerHTML = body.template
    body.script()
    head.script()
    








