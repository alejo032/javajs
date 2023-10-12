// Ejemplo de 4 listas de documentos (puedes reemplazarlas con tus datos reales)
const lista1 = ['doc1', 'doc2', 'doc3', 'doc4'];
const lista2 = ['documentoA', 'documentoB', 'documentoC'];
const lista3 = ['archivo1', 'archivo2', 'archivo3', 'archivo4'];
const lista4 = ['documentoX', 'documentoY'];

// Obtener elementos del DOM
const documentoInput = document.getElementById('documentoInput');
const btnBuscar = document.getElementById('btnBuscar');

// Agregar un evento de clic al botón "Buscar"
btnBuscar.addEventListener('click', async () => {
    const documento = documentoInput.value;

    const resultados = await Promise.all([
        buscarDocumentoEnLista(documento, lista1),
        buscarDocumentoEnLista(documento, lista2),
        buscarDocumentoEnLista(documento, lista3),
        buscarDocumentoEnLista(documento, lista4)
    ]);

    resultados.forEach((resultado, i) => {
        if (resultado) {
            console.log(`Documento encontrado en la lista ${i + 1}`);
        } else {
            console.log(`Documento no encontrado en la lista ${i + 1}`);
        }
    });
});

// Función async para buscar un documento en una lista
async function buscarDocumentoEnLista(documento, lista) {
    return new Promise((resolve) => {
        setTimeout(() => {
            for (let i = 0; i < lista.length; i++) {
                if (documento === lista[i]) {
                    resolve(true); // Encontrado
                    return;
                }
            }
            resolve(false); // No encontrado
        }, 2000); // Simulación de tiempo de búsqueda de 2 segundos
    });
}
