import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ paciente, pacientes, setPacientes, setPaciente }) => {
    //* los hooks van en la parte superior de los componentes (adentro de los componentes)
    //* no van dentro de condicionales ni despues del return
    //! el orden es importante! declarar el state en el mismo orden que se va utilizando

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false);

    //* el componente se va a actualizar cuando paciente cambie su estado
    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    //* sin dependencias, solo se actualiza una vez
    // useEffect(()=>{

    // }, []);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true);
            return;
        }

        setError(false);

        // agrega los valores como key:value porque tienen el mismo nombre
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            //id: generarId(), // lo saco porque si tengo que editarlo, tengo que usar el mismo id
        };

        if (paciente.id) {
            //* editando un registro
            objetoPaciente.id = paciente.id;

            //* pacientes actualizados es un arreglo de pacientes
            const pacientesActualizados = pacientes.map((pacienteState) =>
                pacienteState.id === paciente.id
                    ? objetoPaciente
                    : pacienteState
            );

            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            //* incluyendo un nuevo registro
            // como es un registro nuevo, debo generarle un id
            objetoPaciente.id = generarId();

            //! no hay que modificar el arreglo original
            //* en React solo hay que usar metodos inmutables de Set
            setPacientes([...pacientes, objetoPaciente]);
        }

        //* reiniciando el formulario
        setNombre("");
        setPropietario("");
        setEmail("");
        setFecha("");
        setSintomas("");
    };

    return (
        <div className='md:w-1/2 lg:2/5'>
            <h2 className='font-black text-3xl text-center'>
                Seguimiento Pacientes
            </h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {""}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                {/* {error && <Error mensaje='Todos los campos son requeridos' />} */}
                {error && (
                    <Error>
                        <p>Todos los campos son requeridos</p>
                    </Error>
                )}

                <div className='mb-5'>
                    <label
                        htmlFor='mascota'
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota {nombre}
                    </label>
                    <input
                        id='mascota'
                        type='text'
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='propietario'
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input
                        id='propietario'
                        type='text'
                        placeholder='Nombre del propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        placeholder='Email de contacto del propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='alta'
                        className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>
                    <input
                        id='alta'
                        type='date'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='sintomas'
                        className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea
                        id='sintomas'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type='submit'
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
                    value={paciente.id ? "Editar paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
};

export default Formulario;
