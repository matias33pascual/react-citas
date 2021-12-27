import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

//* este es el componente principal, porque es el que se importa desde el
//* main.jsx
function App() {
    // es todo lo que se va a ver en pantalla
    // condicionales solo como ternarios
    // { el codigo js va entre estas llaves }

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        const obtenerLocalStorage = () => {
            const pacientesLocalStorage =
                JSON.parse(localStorage.getItem("pacientes")) ?? []; // el equivalente a if

            setPacientes(pacientesLocalStorage);
        };

        obtenerLocalStorage();
    }, []); // no le paso ninguna dependencia, esto significa que se ejecutara solo una vez cuando el componente este listo

    //* use effect es un buen lugar para tener actualizado el localstorage
    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]); // le digo que se ejecute el codigo cuando pacientes cambie

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter(
            (paciente) => paciente.id !== id
        );

        setPacientes(pacientesActualizados);
    };

    return (
        // class es una palabra reservada de javascript
        // hay que usar className
        <div className='container mx-auto mt-20'>
            <Header />
            <div className='mt-12 md:flex'>
                <Formulario
                    paciente={paciente}
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;
