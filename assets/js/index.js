const Propiedades= [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];
  // termina el arreglo

  //validacion en primera instancia 
  let html = "";
for (let propiedad of Propiedades) {
  html += `
    <div class="propiedad">
      <div class="img" style="background-image: url('${propiedad.src}')"></div>
      <section>
        <h5>${propiedad.nombre}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${propiedad.cuartos}</p>
          <p>Metros: ${propiedad.metros}</p>
        </div>
        <p class="my-3">${propiedad.descripcion}</p>
        <button class="btn btn-info">Ver más</button>
      </section>
    </div>
  `;
}

const propiedadesSection = document.querySelector(".Propiedades");
propiedadesSection.innerHTML = html;

  // elementos del DOM
  const buscarButton = document.querySelector('button');
  const minHabitacionesInput = document.querySelector('input[type="number"]');
  const minMetrosCuadradosInput = document.querySelectorAll('input[type="number"]')[1];
  const maxMetrosCuadradosInput = document.querySelectorAll('input[type="number"]')[2];
  const totalResultadosElement = document.querySelector('.propiedades span');

  // filtrar propiedades INGRESADAS
  function filtroPropiedades(minHabitaciones, minMetrosCuadrados, maxMetrosCuadrados) {
    return Propiedades.filter(propiedad =>
      propiedad.cuartos === minHabitaciones && propiedad.metros >= minMetrosCuadrados && propiedad.metros <= maxMetrosCuadrados
    );
  }

  // Función que muestra lo filtrado
  function mostrarPropiedades(propiedadesFiltradas) {
    const propiedadesSection = document.querySelector('.Propiedades');
    let propiedadesHTML = '';
  
    for (const propiedad of propiedadesFiltradas) {
      propiedadesHTML += `
      <div class="propiedad">
      <div class="img" style="background-image: url('${propiedad.src}')"></div>
      <section>
        <h5>${propiedad.nombre}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${propiedad.cuartos}</p>
          <p>Metros: ${propiedad.metros}</p>
        </div>
        <p class="my-3">${propiedad.descripcion}</p>
        <button class="btn btn-info">Ver más</button>
      </section>
    </div>
      `;
    }
  
    propiedadesSection.innerHTML = propiedadesHTML;
    
  
  }
  
  // Evento click en el botón de búsqueda
  buscarButton.addEventListener('click', () => {
    const minHabitaciones = parseInt(minHabitacionesInput.value);
    const minMetrosCuadrados = parseInt(minMetrosCuadradosInput.value);
    const maxMetrosCuadrados = parseInt(maxMetrosCuadradosInput.value);
    // if de validacion de campos 
    if (isNaN(minHabitaciones) || isNaN(minMetrosCuadrados) || isNaN(maxMetrosCuadrados)) {
      alert('Faltan campos por llenar.');
      return;
    }
  
    const propiedadesFiltradas = filtroPropiedades(minHabitaciones, minMetrosCuadrados, maxMetrosCuadrados);
  
    // ACTUALIZA CONTADOR
    totalResultadosElement.textContent = propiedadesFiltradas.length;
  
    mostrarPropiedades(propiedadesFiltradas);
  });