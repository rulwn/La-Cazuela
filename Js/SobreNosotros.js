
    var fechas = ['1998: Inspiración y Planificación', '2002: Búsqueda del Lugar Perfecto', '2005: Fundación de "La Cazuela"', '2008: Expansión del Menú y Popularidad', '2010: Renovación del Local', '2013: Reconocimiento en la Guía Gastronómica', '2015: Celebración del 10º Aniversario', '2018: Inauguración de "La Cazuela Express"', '2020: Adaptación durante la Pandemia', '2022: Innovación en el Menú', '2024: Reconocimiento Nacional'];
    var textos = ['La idea de "La Cazuela" surge en la mente del chef fundador, Don José, quien soñaba con compartir los sabores auténticos de su tierra natal con el mundo. Durante años, Don José perfecciona sus recetas familiares y planea el concepto del restaurante.', 'Tras años de preparación y búsqueda, Don José encuentra el lugar perfecto para su restaurante: un acogedor local ubicado en Guazapa. Comienza a trabajar en los preparativos para convertir su visión en realidad.', 'Finalmente, en el año 2005, "La Cazuela" abre sus puertas al público. Con un menú cuidadosamente seleccionado de platos tradicionales y un ambiente acogedor, el restaurante se convierte en un destino popular para los amantes de la auténtica cocina regional.', 'Tres años después de su fundación, "La Cazuela" expande su menú para incluir una variedad aún más amplia de platos regionales. La calidad de la comida y el servicio excepcional ayudan a consolidar la reputación del restaurante y atraer a una clientela cada vez mayor.', 'En 2010, "La Cazuela" se somete a una renovación completa del local para modernizar su aspecto y mejorar la experiencia del cliente. La nueva decoración refleja la rica herencia cultural del restaurante y crea un ambiente acogedor y elegante.', '"La Cazuela" recibe el reconocimiento de la guía gastronómica local como uno de los mejores restaurantes de comida tradicional en la ciudad. Este reconocimiento aumenta aún más la popularidad del restaurante y atrae a comensales de todas partes.', 'Para celebrar una década de éxito, "La Cazuela" organiza una semana de eventos especiales y promociones para agradecer a sus fieles clientes por su continuo apoyo. La comunidad se une para celebrar este hito significativo en la historia del restaurante.', 'Respondiendo a la demanda creciente de opciones de comida para llevar, "La Cazuela" inaugura "La Cazuela Express", una versión más compacta del restaurante que ofrece una selección de platos para llevar y entrega a domicilio.', 'Con la llegada de la pandemia, "La Cazuela" implementa medidas de seguridad rigurosas y ajusta su modelo de negocio para ofrecer servicios de entrega a domicilio y recogida en el local. A pesar de los desafíos, el restaurante se mantiene firme en su compromiso de proporcionar comida deliciosa y segura a sus clientes.', 'Para seguir siendo relevante en un mercado competitivo, "La Cazuela" introduce nuevos platos innovadores inspirados en la cocina tradicional. Estas nuevas incorporaciones al menú reflejan la continua dedicación del restaurante a la calidad, la autenticidad y la creatividad culinaria.', '"La Cazuela" recibe un prestigioso reconocimiento a nivel nacional como uno de los mejores restaurantes de comida tradicional. Este reconocimiento destaca el impacto duradero del restaurante en la escena gastronómica del país y celebra su legado de excelencia culinaria y hospitalidad excepcional.'];
    var currentIndex = 0;

    function actualizarTexto() {
        document.getElementById("Djobi").innerText = fechas[currentIndex];
        document.getElementById("Djoba").innerText = textos[currentIndex];
    }

    function avanzar() {
        if (currentIndex < fechas.length - 1) {
            currentIndex++;
            actualizarTexto();
        }
    }

    function retroceder() {
        if (currentIndex > 0) {
            currentIndex--;
            actualizarTexto();
        }
    }
    actualizarTexto();