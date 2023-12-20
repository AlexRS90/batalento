import talento from './assets/images/busqueda-de-talento.png';
import desarrollo from './assets/images/desarrollo-de-carrera.png';
import consultoria from './assets/images/consultoria.png';
import sap from './assets/images/SAP.png';
import coaching from './assets/images/coaching.png';
import abrilImg from './assets/images/abril.png';
import ab from './assets/images/ab.png';
import fbLogo from './assets/images/facebook.png';
import inLogo from './assets/images/linkedin.png';

const MENU = [['SERVICIOS', 'EQUIPO', 'METODOLOGIA', 'CONTACTO'], ['SERVICES', 'TEAM', 'METODOLOGY', 'CONTACT']];

const HOME = [
  {
    text1: 'Somos una firma de consultoría de Talento en donde consideramos a las personas como la base fundamental para conducir a una organización a la excelencia y al éxito.',
    text2: 'Brindamos servicios personalizados y a la medida de cada una de las necesidades de nuestros clientes.',
    text3: 'Para lograrlo nos es muy importante mantener una estrecha y continua comunicación tanto con nuestros clientes, como con los candidatos para de esta forma conocer a detalle el objetivo, valores y cultura de cada cliente y en base a esto poder evaluar la experiencia, conocimientos y habilidades de los candidatos, para encontrar el “match” perfecto entre candidato y organización.',
  },
  {
    text1: 'Insert your description here.',
    text2: '',
    text3: '',
  },
];

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
    info: 'Próximamente',
  },
];

const EQUIPO = [
  {
    id: 1,
    title: 'Equipo',
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

const METODOLOGIA = [
  {
    title: 'Metodología',
    subtitle: 'Búsqueda de talento',
    cards: [
      {
        id: 1,
        title: 'Entendimiento del Cliente y Perfil del Puesto',
        info: 'Entendimiento de la misión, visión, valores, cultura y situación actual de la empresa. Conocer las responsabilidades de la posición y definir la experiencia y competencias que necesaria. Así como el paquete de compensación.?Definir pruebas.?Definir proceso de entrevistas.',
      },
      {
        id: 2,
        title: 'Proceso de Atracción de Talento',
        info: 'Investigación de Mercado para definir estrategia de búsqueda.?Publicación de vacantes, hunting directo, networking.?Entrevista por competencias, aplicación de pruebas o filtros previamente definidos.',
      },
      {
        id: 3,
        title: 'Presentación de Candidatos y Entrevistas',
        info: 'Se presenta una terna de candidatos con su respectivo informe y paquete de compensación.?Coordinación de entrevistas con el cliente.',
      },
      {
        id: 4,
        title: 'Cierre',
        info: 'Selección del candidato finalista.?Asesoría para la presentación de propuesta económica.?Seguimiento al proceso de ingreso.',
      },
    ],
    cierre: 'Los tiempos de cada etapa del proceso dependerán del tipo de búsqueda, disponibilidad del cliente y quedarán plasmados en la propuesta de servicios previo a iniciar una búsqueda.',
  },
];

const FOOTER = [
  {
    logo: ab,
    fbLogo,
    inLogo,
    horario: 'L-V 9 a.m. - 6 p.m.',
    mail: 'abarrientos@batalento.com',
    telefono: '415-153-5671',
    fbURL: 'https://www.facebook.com',
    inURL: 'https://www.linkedin.com/company/abril-barrientos-talent-expert/?viewAsMember=true',
  },
];

export {
  MENU,
  HOME,
  OFFICE_CARDS,
  SERVICES_CARDS,
  EQUIPO,
  METODOLOGIA,
  FOOTER,
};
