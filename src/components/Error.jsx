//* con children
const Error = ({ children }) => {
    console.log(children);
    return (
        <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
            {children}
        </div>
    );
};

export default Error;

//* con props

// const Error = ({ mensaje }) => {
//     return (
//         <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
//             <p>{mensaje}</p>
//         </div>
//     );
// };

// export default Error;
