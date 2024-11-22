Paso 2: Continuar con la Sección "Contacto"
La sección "Contacto" es esencial para que los visitantes puedan comunicarse contigo.
HTML para "Contacto"
Agrega esta estructura en tu archivo index.html:
html
Código
<section id="contacto">
    <h2>Contacto</h2>
    <form class="contact-form">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
        
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder="Tu correo" required>
        
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escribe tu mensaje" required></textarea>
        
        <button type="submit">Enviar</button>
    </form>
</section>
CSS para "Contacto"
Añade estos estilos en style.css:
css
Código
/* Sección Contacto */
#contacto {
    background: #e8f5e9;
    padding: 40px 20px;
    text-align: center;
}

.contact-form {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form label {
    font-size: 1rem;
    color: #333;
    text-align: left;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: box-shadow 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    box-shadow: 0 0 5px #4CAF50;
}

.contact-form button {
    padding: 10px;
    font-size: 1rem;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-form button:hover {
    background: #2E7D32;
}
________________________________________
#   l s a l i n a s _ b l o g  
 