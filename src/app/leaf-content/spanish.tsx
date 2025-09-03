import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const spanishDescription = `
Estoy mejorando!

Empezé a aprender español en 2021 con mi ex novio, quien es de Colombia. Recuerdo conjugando verbos con él mientras esperando en la fila al supermercado. Después, descargué Duolingo, y he practicado ahí desde entonces. (Mi "streak" mayor fue 400 días!)

También viajé a México, donde practiqué hablando español con los extraños. Al principio, tuve mucho miedo, pero los extraños eran muy amables y disfruté mucho. México es un país increíble y espero volver algún día. Hasta entonces, mantendré mi cita diaria con el loco búho verde — si no, Duo estará muy enojado.
`;

export const spanishLeaf: Leaf = {
    key: "spanish",
    title: "Español",
    nodeDescription: "Estoy mejorando!",
    description: spanishDescription,
    style: {
        backgroundColor: colors.green[400]
    }
};