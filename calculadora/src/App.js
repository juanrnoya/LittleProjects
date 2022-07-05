/** @format */
import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.jpg";

function App() {
   return (
      <div className='App'>
         <div className='freecodecamp-logo-contenedor'>
            <img
               className='freecodecamp-logo'
               src={freeCodeCampLogo}
               alt='Logo de freecodecamp'></img>
         </div>
         <div className='contenedor-calculadora'>
            <div className='fila'></div>
            <div className='fila'></div>
            <div className='fila'></div>
            <div className='fila'></div>
            <div className='fila'></div>
         </div>
      </div>
   );
}

export default App;
