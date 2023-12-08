import talento from './assets/images/busqueda-de-talento.png';
import desarrollo from './assets/images/desarrollo-de-carrera.png';
import consultoria from './assets/images/consultoria.png';

const OFFICE_CARDS = [
  {
    id: 1,
    title: 'Estamos Listos',
    text_info: 'Brindamos servicios personalizados y a la medida de cada una de las necesidades de nuestros clientes.? Para lograrlo nos es muy importante mantener una estrecha y continua comunicación tanto con nuestros clientes, como con los candidatos para de esta forma conocer a detalle el objetivo, valores y cultura de cada cliente y en base a esto poder evaluar la experiencia, conocimientos y habilidades de los candidatos, para encontrar el “match” perfecto entre candidato y organización.',
  },
  {
    id: 2,
    title: 'Nuestros Valores?Como socios de negocio de nuestros clientes y candidatos trabajamos apegados a nuestros valores:',
    text_info: 'HONESTIDAD¿ Transparencia, sinceridad y franqueza como forma de comunicación y trabajo generando así confianza y credibilidad.? DINAMISMO¿ Flexibilidad y facilidad de adaptación a un entorno cambiante, manteniéndonos siempre abiertos a aprender y transformarnos acorde a las nuevas tendencias del mercado.? ORIENTACIÓN AL CLIENTE¿Es nuestra prioridad escuchar de manera activa las necesidades de nuestros clientes para de este modo dar soluciones que verdaderamente generen valor, estando siempre accesibles y en comunicación constante.',
  },
  {
    id: 3,
    title: 'Para quién trabajamos',
    subtitle: 'Principales Industrias',
    text_info: 'Tecnologías de Información¿Infraestructura y telecomunicaciones¿Manufactura¿Productos de Consumo¿Alimentos y bebidas¿Turismo¿Automotriz¿Energía y recursos naturales¿Servicios profesionales',
  },
];

const SERVICES_CARDS = [
  {
    id: 1,
    img: talento,
    title: 'BÚSQUEDA DE TALENTO',
    info: 'Consultores SAP?Perfiles TI?Ejecutivos y Mandos Medios (cualquier industria)?Puestos administrativos (cualquier industria)',
  },
  {
    id: 2,
    img: desarrollo,
    title: 'DESARROLLO DE CARRERA',
    info: 'Revisión y corrección de Currículum Vitae?Creación de perfil Linkedin',
  },
  {
    id: 3,
    img: consultoria,
    title: 'CONSULTORÍA',
    info: 'Interpretación y Feedback de Hogan Assessments?Revisión del proceso de Atracción de Talento',
  },
];

export { OFFICE_CARDS, SERVICES_CARDS };
