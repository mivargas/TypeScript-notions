import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'
/* import './topics/01-basic-types';
import './topics/02-objects-interfaces';
import './topics/03-funtions'
import './topics/04-homework-types' */
import './topics/05-basic-destructuring'
import './topics/06-function-destructuring'
import './topics/07-import-export'
import './topics/08-classes'
import './topics/09-generics'
import './topics/10-decorators'
import './topics/11-optional-chaining'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
