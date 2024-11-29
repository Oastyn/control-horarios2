document.getElementById('registro-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    const entrada = document.getElementById('entrada').value;
    const salida = document.getElementById('salida').value;

    try {
        const respuesta = await fetch('http://127.0.0.1:5000/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ entrada, salida }),
        });

        if (!respuesta.ok) throw new Error('Error al comunicarse con el servidor');

        const datos = await respuesta.json();
        document.getElementById('resultado').innerText =
            `Total horas: ${datos.total_horas} horas, Saldo: ${datos.saldo} horas`;
    } catch (error) {
        document.getElementById('resultado').innerText = 'Error: ' + error.message;
    }
});
