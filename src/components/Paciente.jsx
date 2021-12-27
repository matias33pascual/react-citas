const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar el paciente?");

        if (respuesta) {
            eliminarPaciente(id);
        }
    };

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre:{""}
                <span className='font-normal normal-case ml-2'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario:{""}
                <span className='font-normal normal-case ml-2'>
                    {propietario}
                </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email:{""}
                <span className='font-normal normal-case ml-2'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha de alta:{""}
                <span className='font-normal normal-case ml-2'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas:{""}
                <span className='font-normal normal-case ml-2'>{sintomas}</span>
            </p>

            <div className='flex justify-between'>
                <button
                    type='button'
                    onClick={() => setPaciente(paciente)}
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg mt-10'>
                    Editar
                </button>
                <button
                    type='button'
                    onClick={handleEliminar} // si le pongo handleEliminar() se llama directamente
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg mt-10'>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
