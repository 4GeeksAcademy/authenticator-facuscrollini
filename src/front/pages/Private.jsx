import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export const Private = () => {

    const navigate = useNavigate()

    const Authentication = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL
        const token = sessionStorage.getItem("token")
        try {
            const response = await fetch(backendUrl + 'private', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            // const data = await response.json()
            if (!response.ok) {
                navigate("/")
            }
        } catch (error) {
            console.log("Something went really bad", error)
        }
    }

    useEffect(() => {
        Authentication()
    }, [])
    return (<>
        <div className="mt-5">
            <div className=" mx-5">
                <h1 className="text-center">LOS TRES DÍAS DEL CIELO ROJO</h1>
                <h5 className="text-center"><i>Crónica de la desaparición de Madrid bajo presencia extraterrestre – 25 al 28 de febrero de 2025</i>
                </h5>
                <p div className="px-4 my-5"><b>Madrid, 28 de febrero de 2025 -</b> En un giro inesperado de los acontecimientos, la capital española ha sido devastada en un lapso de tres días por un extraño fenómeno aéreo. Lo que comenzó como un avistamiento nocturno el 25 de febrero se transformó rápidamente en un desastre sin precedentes. Un objeto volador no identificado (OVNI) ha arrasado la ciudad, dejando a su paso una estela de destrucción y caos.</p>
                <h3 className="text-center">Los Primeros Avistamientos: Noche del 25 de Febrero</h3>
                <p div className="px-4 mt-5 mb-2">La noche del 25 de febrero, los cielos madrileños fueron testigos de una extraña luz que, en un principio, fue confundida con un avión. Sin embargo, pronto los ciudadanos comenzaron a notar que el objeto, cuyo tamaño y forma cambiaban, parecía flotar sin ningún tipo de ruido o señal de movimiento convencional. Los primeros informes surgieron poco después de las 11:30 p.m., cuando miles de personas en toda la ciudad compartieron imágenes y videos del fenómeno en redes sociales.
                </p>
                <p className="px-4 mb-5">Al principio, las autoridades intentaron calmar a la población, sugiriendo que se trataba de un fenómeno natural o de un experimento aéreo. Sin embargo, la situación rápidamente tomó un giro alarmante: el objeto comenzó a moverse hacia el centro de Madrid, donde permaneció suspendido durante horas. La ciudad se vio envuelta en un extraño resplandor, con efectos de luz y sombra inexplicables que no pudieron ser explicados por los expertos en el momento.</p>
                <div className="ratio ratio-1x1 w-25 ms-5">
                    <img src="https://i.ibb.co/G4HDLpCw/Foto-alien-madrid.jpg"></img>
                </div>
                <p className="text-start d-flex justify-content-start ps-5" style={{ fontSize: "10px" }}>Foto hecha por Juana Martinez, una de las tantas testigos de la noche.</p>

                <p className="px-4">Juana Martínez aún no puede creer lo que vio. “La luz se detuvo justo encima de mi edificio. Era enorme y giraba lentamente”, comentó.</p>


                <p className="px-4">Armando Mendoza, un taxista que circulaba por la M-30, también fue testigo. “El coche se apagó de repente, como si algo hubiera absorbido la energía. Cuando miré hacia arriba, el objeto estaba ahí, suspendido en el aire”, relató.</p>


                <p className="px-4">Mario Castañeda, aficionado a la astronomía, aseguró que el objeto no coincidía con ningún fenómeno conocido. “Movimientos erráticos, cambios de color… Nada natural se comporta así”, explicó.</p>

                <div className="ratio ratio-1x1 w-25 ms-5">
                    <img src="https://i.ibb.co/7Ndpy9Zg/Ovni-jardin-madrid.jpg" />
                </div>
                <p className="text-start d-flex justify-content-start ps-5" style={{ fontSize: "10px" }}>Foto hecha por Mario Castañeda, una de las tantas testigos de la noche al pasear cerca del jardín botánico.</p>
                
                <h3 className="text-center pt-3 pb-2">El 26 de Febrero: El Inicio de la Destrucción
                </h3>
                <p div className="px-4 mt-3 mb-2">
                    El día siguiente, 26 de febrero, la situación empeoró. A medida que el OVNI permanecía sobre Madrid, comenzaron a registrarse fallos masivos de energía. Las luces de la ciudad parpadearon y las telecomunicaciones se interrumpieron en diversos puntos. La primera gran sacudida ocurrió por la tarde, cuando se produjeron explosiones de energía provenientes del objeto, que impactaron directamente en el corazón de la ciudad.
                </p>
                <p className="px-4 pb-4">
                Varios edificios emblemáticos, como la Torre Picasso y el Edificio España, fueron parcialmente destruidos, y una misteriosa niebla cubrió el centro de Madrid. A pesar de los esfuerzos de las autoridades, que se encontraban desbordadas, la situación empeoró con cada hora que pasaba. Expertos internacionales en aeronáutica intentaron acercarse al OVNI para obtener información, pero todos los intentos fueron en vano.
                    </p>
                <h3 className="text-center pt-3 pb-2">
                27 de Febrero: El Colapso Final
                </h3>
                <p div className="px-4 mt-3 mb-2">
                La mañana del 27 de febrero trajo consigo la peor de las tragedias. En un ataque aparentemente sistemático, el OVNI comenzó a emitir pulsos de energía de alta intensidad que desintegraron grandes partes de la ciudad. Zonas como Gran Vía y Malasaña fueron arrasadas, dejando a cientos de personas atrapadas bajo los escombros. El centro histórico de Madrid, que ha resistido siglos de historia, fue reducido a ruinas en cuestión de horas.                </p>
                <p className="px-4 pb-4">
                La fuerza de las explosiones, acompañadas de extrañas interferencias electromagnéticas, provocó incendios y dejó a los servicios de emergencia prácticamente inoperativos. Los testimonios de los sobrevivientes describen un escenario caótico: gritos, desesperación y una sensación de vulnerabilidad total ante un enemigo que parecía imparable.                    </p>
                <h3 className="text-center pt-3 pb-2">Reacciones Internacionales
                </h3>
                <p div className="px-4 mt-3 mb-2">
                El suceso ha dejado al mundo en shock. Líderes internacionales han expresado su solidaridad con España, mientras expertos en fenómenos aéreos y militares intentan comprender la naturaleza de este ataque. La ONU ha convocado una reunión de emergencia para evaluar la situación y coordinar esfuerzos de asistencia internacional.                </p>
                <p className="px-4 pb-4">
                Mientras tanto, las autoridades españolas continúan trabajando en la evaluación de los daños y en los esfuerzos de rescate, aunque se espera que la reconstrucción de Madrid sea una tarea monumental que tomará años.                    </p>

                <h3 className="text-center pt-3 pb-2">
                ¿Qué Siguió al OVNI?
                </h3>
                <p div className="px-4 mt-3 mb-2">
                Poco después del colapso final del 27 de febrero, el OVNI comenzó a alejarse de la ciudad, dejando atrás una estela de desolación. El objeto no ha sido localizado desde entonces, y las autoridades aún desconocen su origen o propósito. Se especula que el ataque podría haber sido un evento aislado o parte de una serie de fenómenos más amplios, pero aún no hay información clara.                </p>
                <p className="px-4 pb-4">
                Lo que es indiscutible es que Madrid, una de las capitales más importantes de Europa, ha cambiado para siempre. La reconstrucción será un desafío no solo físico, sino emocional, para una ciudad que ha perdido parte de su identidad en este ataque inesperado.

</p>
<hr/>

<p className="ps-4"><b>Próxima edición:</b> <i>"Madrid en Ruinas: Testimonios de los Supervivientes"</i></p>
<p className="ps-4"> <b>Redacción: El Mundo de Madrid</b></p>
<i className="ps-4">Edición Especial, 28 de Febrero de 2025</i>
               
               
            </div>
        </div>
    </>

    )
}