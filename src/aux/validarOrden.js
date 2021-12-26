export const validarOrden = ({nombre, apellido, email, telefono}) => {
    const emailRegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const telRegExp =/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    const resultado = new Promise((resolve, reject) => {

        if(nombre.length < 4 || nombre.length > 20)
            reject([1, 'Nombre invalido']);

        if(apellido.length < 4 || apellido.length > 20)
            reject([2, 'Apellido invalido']);

        if(email.length == 0 || !emailRegExp.test(email))
            reject([3, 'Email invalido']);
        
        if(telefono.length == 0 || !telRegExp.test(telefono))
            reject([4, 'Telefono invalido']);
        
        resolve([0, 'Validacion realizada correctamente']);
    })
    return resultado;
} 