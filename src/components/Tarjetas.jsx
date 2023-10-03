import Image from "next/image"
import hombres from "../../public/images/hombres.jpg"
import mujeres from "../../public/images/mujeres.jpg"

function Tarjetas () {
    return(
        <>
        <button className="btn-1">
            <Image className="img-1" src={hombres} height={150} width={150} ></Image>
        </button>

        <button className="btn-2">
            <Image className="img-2" src={mujeres} height={150} width={150} ></Image>
        </button>
        </>

    )
}

export default Tarjetas