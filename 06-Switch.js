let nombre = 'Armando';

switch (nombre) {
    case 'Armando':
        console.log('Hola Armando');
        break;
    case 'Edwin':
    case 'Laura':
    case 'Gustavo':
        console.log('Hola los tres');

    default:
        console.log('Hola Desconocido');
        break;
}