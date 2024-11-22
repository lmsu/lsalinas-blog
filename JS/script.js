
// Filtrar artículos y mostrar mensaje "Sin resultados"
document.querySelector('.search-form').addEventListener('input', function (e) {
    const searchQuery = e.target.value.toLowerCase();
    const articles = document.querySelectorAll('#blog article');
    let matches = 0;
    articles.forEach(article => {
        const keywords = article.getAttribute('data-keywords').toLowerCase();
        if (keywords.includes(searchQuery)) {
            article.style.display = 'block';
            matches++;
        } else {
            article.style.display = 'none';
        }
    });

    // Mostrar mensaje "Sin resultados"
    const noResultsMessage = document.querySelector('#no-results');
    if (matches === 0) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
});

// Mensaje de confirmación al enviar el formulario
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar envío real
    alert('¡Gracias por contactarte! Responderemos lo antes posible.');
    this.reset(); // Reiniciar el formulario
});