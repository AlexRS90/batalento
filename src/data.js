import talento from './assets/images/busqueda-de-talento.png';
import desarrollo from './assets/images/desarrollo-de-carrera.png';
import consultoria from './assets/images/consultoria.png';
import sap from './assets/images/SAP.png';
import coaching from './assets/images/coaching.png';
import abrilImg from './assets/images/abril.png';

const MENU = ['SERVICIOS', 'EQUIPO', 'METODOLOGÍA', 'CONTACTO'];

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
  {
    id: 4,
    img: sap,
    title: 'SAP Enable Now',
    info: 'Desarrollo de estrategia de capacitación?Creación de material de aprendizaje en formato multimedia?Capacitación en el uso de la herramienta para creación futura de material',
  },
  {
    id: 5,
    img: coaching,
    title: 'Coaching/Team Building',
    info: '',
  },
];

const EQUIPO = [
  {
    id: 1,
    title: 'EQUIPO',
    subject: 'Dependiendo de la necesidad, tamaño y ubicación geográfica del proyecto nos apoyamos con un equipo de consultores en la zona y/o de la industria requerida.',
    ceo: 'ABRIL BARRIENTOS AGUIÑAGA',
    position: 'Consultora Principal',
    resume: {
      text1: 'Lic. en Psicología Organizacional del Instituto Tecnológico y de Estudios Superiores de Monterrey con más de 20 años de experiencia en Capital Humano, principalmente en Búsqueda de Ejecutivos, trabajando para distintas industrias a nivel internacional.',
      text2: 'Certificada en herramientas como Hogan Assessment, DDI Targeted Selection, así como en la interpretación y retroalimentación de Assessments Ejecutivos de DDI.',
      text3: 'Experta en procesos de talento teniendo siempre como objetivo brindarle tanto al cliente como a los candidatos procesos ágiles, transparente y dinámicos, que cumplan con las expectativas de ambos en tiempo y forma.',
      text4: 'Principales Industrias: Tecnologías de la información, manufactura, agroindustrial y alimentos\nPaíses: México, Estados Unidos, Centro y Sudamérica, UK, Hungría, Alemania',
    },
    img: abrilImg,
  },
];

export {
  MENU,
  OFFICE_CARDS,
  SERVICES_CARDS,
  EQUIPO,
};
