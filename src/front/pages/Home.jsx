
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		
		<div className=" mt-5">
			<div className="mx-5">
			<h1 className="text-center">LOS TRES DÍAS DEL CIELO ROJO</h1>
			<h5 className="text-center"><i>Crónica de la desaparición de Madrid bajo presencia extraterrestre – 25 al 28 de febrero de 2025</i>
			</h5>
			<p div className="px-4 my-5"><b>Madrid, 28 de febrero de 2025 -</b> En un giro inesperado de los acontecimientos, la capital española ha sido devastada en un lapso de tres días por un extraño fenómeno aéreo. Lo que comenzó como un avistamiento nocturno el 25 de febrero se transformó rápidamente en un desastre sin precedentes. Un objeto volador no identificado (OVNI) ha arrasado la ciudad, dejando a su paso una estela de destrucción y caos.</p>
			<h3 className="text-center">Los Primeros Avistamientos: Noche del 25 de Febrero</h3>
			<p div className="px-4 my-5">La noche del 25 de febrero, los cielos madrileños fueron testigos de una extraña luz que, en un principio, fue confundida con un avión. Sin embargo, pronto los ciudadanos comenzaron a notar que el objeto, cuyo tamaño y forma cambiaban, parecía flotar sin ningún tipo de ruido o señal de movimiento convencional. Los primeros informes surgieron poco después de las 11:30 p.m., cuando miles de personas en toda la ciudad compartieron imágenes y videos del fenómeno en redes sociales.

Al principio, las autoridades intentaron calmar a la población, sugiriendo que se trataba de un fenómeno natural o de un experimento aéreo. Sin embargo, la situación rápidamente tomó un giro alarmante: el objeto comenzó a moverse hacia el centro de Madrid, donde permaneció suspendido durante horas. La ciudad se vio envuelta en un extraño resplandor, con efectos de luz y sombra inexplicables que no pudieron ser explicados por los expertos en el momento.</p>
			<div className="ratio ratio-1x1 w-25 ms-5">
			<img src="https://i.ibb.co/G4HDLpCw/Foto-alien-madrid.jpg"></img>
			</div>
			<p className="text-start d-flex justify-content-start ps-5" style={{fontSize : "10px"}}>Foto hecha por Juana Martinez, una de las tantas testigos de la noche.</p>
			
				<p className="px-4">Juana Martínez aún no puede creer lo que vio. “La luz se detuvo justo encima de mi edificio. Era enorme y giraba lentamente”, comentó.</p>
			
			
				<p className="px-4">Armando Mendoza, un taxista que circulaba por la M-30, también fue testigo. “El coche se apagó de repente, como si algo hubiera absorbido la energía. Cuando miré hacia arriba, el objeto estaba ahí, suspendido en el aire”, relató.</p>
			
			
				<p className="px-4">Mario Castañeda, aficionado a la astronomía, aseguró que el objeto no coincidía con ningún fenómeno conocido. “Movimientos erráticos, cambios de color… Nada natural se comporta así”, explicó.</p>
			
			<div className="ratio ratio-1x1 w-25 ms-5">
				<img src="https://i.ibb.co/7Ndpy9Zg/Ovni-jardin-madrid.jpg"/>
			</div>
			<p className="text-start d-flex justify-content-start ps-5" style={{fontSize : "10px"}}>Foto hecha por Mario Castañeda, una de las tantas testigos de la noche al pasear cerca del jardín botánico.</p>
			<div className="d-flex justify-content-center pb-3">
				<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Ver más</button>
			</div>
			<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">¿Quieres ver más?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Asegúrate de haber ingresado a tu cuenta, y de no tener una, puedes creartela para poder ver más sobre esta noticia.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
		<Link to="/login">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Iniciar sesión</button>
		</Link>
		<Link to="/signup">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Crear usuario</button>
		</Link>
      </div>
    </div>
  </div>
</div>
			
		</div>
		</div>
	);
}; 