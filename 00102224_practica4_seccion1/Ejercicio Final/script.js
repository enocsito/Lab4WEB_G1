const actividades = {
    'lunes': '👤 Atender cliente específico',
    'martes': '🚗 Visitar agencia fuera de la ciudad',
    'miércoles': '🩰 Llevar a mi hija al ballet',
    'miercoles': '🩰 Llevar a mi hija al ballet',
    'jueves': '💻 Priorizar entregas de desarrollo',
    'viernes': '🏠 Atender problemas de manera remota',
    'sábado': '❤️ Hacer lo que mi esposa quiera',
    'sabado': '❤️ Hacer lo que mi esposa quiera',
    'domingo': '😴 Día libre'
};

function mostrarRecordatorio() {
    const diaInput = document.getElementById('diaSemana').value.toLowerCase();
    const resultado = document.getElementById('resultado');
    if (actividades[diaInput]) {
        resultado.textContent = actividades[diaInput];
    } else {
        resultado.textContent = 'Día no válido. Por favor ingresa un día de la semana.';
    }
}