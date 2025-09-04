import colors from "tailwindcss/colors";
import { Leaf } from "../types";
import Image from "next/image"

const spanishDescription = <>
    Empezé a aprender español en 2021 con mi ex novio, quien es de Colombia. Recuerdo conjugando verbos con él mientras esperando en la fila al supermercado. Después, descargué Duolingo, y he practicado ahí desde entonces. (Mi &quot;streak&quot; mayor fue 400 días!)
    <br /><br />
    También viajé a México, donde practiqué hablando español con los extraños. Al principio, tuve mucho miedo, pero los extraños eran muy amables y disfruté mucho. México es un país increíble y espero volver algún día. Hasta entonces, mantendré mi cita diaria con el loco búho verde — si no, Duo estará muy enojado.
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/duo.png`}
        alt="Duo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
        priority
    />
</>

export const spanishLeaf: Leaf = {
    key: "spanish",
    title: "Español",
    nodeDescription: "Estoy mejorando!",
    description: spanishDescription,
    style: {
        backgroundColor: colors.green[400]
    }
};