
//Cada función del componente va capitalizado con PascalCase, es decir con la primera letra en mayúscula.
export const HelloWorldApp = () => {
    //document.createElement...
    return (
        <h1>¡Hola mundo!</h1>
    );
}

/**
Cuando exporto por defecto, al momento de importar en otro módulo, se guarda con el nombre que le coloco en la ruta
export default App;
 */