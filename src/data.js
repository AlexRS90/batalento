import talento from './assets/images/busqueda-de-talento.png';
import desarrollo from './assets/images/desarrollo-de-carrera.png';
import consultoria from './assets/images/consultoria.png';
import sap from './assets/images/SAP.png';
import coaching from './assets/images/coaching.png';
import abrilImg from './assets/images/abril.png';
import ab from './assets/images/ab.png';
import fbLogo from './assets/images/facebook.png';
import inLogo from './assets/images/linkedin.png';

const MENU = [['SERVICIOS', 'EQUIPO', 'METODOLOGIA', 'CONTACTO'], ['SERVICES', 'TEAM', 'METHODOLOGY', 'CONTACT']];

const HOME = [
  {
    text1: 'Somos una firma de consultoría de Talento en donde consideramos a las personas como la base fundamental para conducir a una organización a la excelencia y al éxito.',
    text2: 'Brindamos servicios personalizados y a la medida de cada una de las necesidades de nuestros clientes.',
    text3: 'Para lograrlo nos es muy importante mantener una estrecha y continua comunicación tanto con nuestros clientes, como con los candidatos para de esta forma conocer a detalle el objetivo, valores y cultura de cada cliente y en base a esto poder evaluar la experiencia, conocimientos y habilidades de los candidatos, para encontrar el “match” perfecto entre candidato y organización.',
  },
  {
    text1: 'We are a Talent Consulting firm where we consider people as the fundamental basis for leading an organization to excellence and success.',
    text2: "We provide personalized services tailored to each of our clients' needs.",
    text3: 'To achieve this, it is very important for us to maintain close and continuous communication with both our clients and the candidates in order to know very well the objective, values ​​and culture of each client and based on this be able to evaluate the experience, knowledge and skills of candidates, to find the perfect “match” between candidate and organization.',
  },
];

const OFFICE_CARDS = [
  [
    {
      id: 1,
      title: 'Nuestros Valores?Como socios de negocio de nuestros clientes y candidatos trabajamos apegados a nuestros valores:',
      text_info: 'HONESTIDAD¿ Transparencia, sinceridad y franqueza como forma de comunicación y trabajo generando así confianza y credibilidad.? DINAMISMO¿ Flexibilidad y facilidad de adaptación a un entorno cambiante, manteniéndonos siempre abiertos a aprender y transformarnos acorde a las nuevas tendencias del mercado.? ORIENTACIÓN AL CLIENTE¿Es nuestra prioridad escuchar de manera activa las necesidades de nuestros clientes para de este modo dar soluciones que verdaderamente generen valor, estando siempre accesibles y en comunicación constante.',
    },
    {
      id: 2,
      title: 'Para quién trabajamos',
      subtitle: 'Principales Industrias',
      text_info: 'Tecnologías de Información¿Infraestructura y telecomunicaciones¿Manufactura¿Productos de Consumo¿Alimentos y bebidas¿Turismo¿Automotriz¿Energía y recursos naturales¿Servicios profesionales',
    },
  ],
  [
    {
      id: 1,
      title: 'Our Values?As business partners of our clients and candidates we work attached to our values:',
      text_info: 'HONESTY¿ Transparency, sincerity and frankness as a form of communication and work, thus generating trust and credibility.? DYNAMISM¿ Flexibility and ease of adaptation to a changing environment, always keeping ourselves open to learning and transforming ourselves according to new market trends.? CUSTOMER ORIENTED¿Its our priority to actively listen to the needs of our clients in order to provide solutions that truly generate value, always being accessible and in constant communication.',
    },
    {
      id: 2,
      title: 'Ones we work with',
      subtitle: 'Main Industries',
      text_info: 'Information technologies¿Infrastructure and telecommunications¿Manufacturing¿Consumer products¿Food and drinks¿Tourism¿Automotive¿Energy and natural resources¿Professional services',
    },
  ],
];

const SERVICES_CARDS = [
  [
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
  ],
  [
    {
      id: 1,
      img: talento,
      title: 'TALENT SEARCH',
      info: 'SAP Consultants?IT profiles?Executives and Middle Management (any industry)?Administrative positions (any industry)',
    },
    {
      id: 2,
      img: desarrollo,
      title: 'PROFESSIONAL DEVELOPMENT',
      info: 'Review and correction of Curriculum Vitae?Linkedin profile creation',
    },
    {
      id: 3,
      img: consultoria,
      title: 'CONSULTING',
      info: 'Hogan Assessments Interpretation and Feedback?Talent Acquisition Process Review',
    },
    {
      id: 4,
      img: sap,
      title: 'SAP Enable Now',
      info: 'Training strategy development?Creation of learning material in multimedia format?Training in the use of the tool for future creation of material',
    },
    {
      id: 5,
      img: coaching,
      title: 'Coaching/Team Building',
      info: 'Soon',
    },
  ],
];

const EQUIPO = [
  [
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
  ],
  [
    {
      id: 1,
      title: 'Team',
      subject: 'Depending on the need, size and geographical location of the project, we are supported by a team of consultants in the area and/or required industry.',
      ceo: 'ABRIL BARRIENTOS',
      position: 'TALENT EXPERT',
      resume: {
        text1: 'Graduate in Organizational Psychology from Instituto Tecnológico y de Estudios Superiores de Monterrey with more than 20 years of experience in Human Capital, mainly in Executive Search, working for different industries internationally.',
        text2: 'Certified in tools such as Hogan Assessment, DDI Targeted Selection, as well as in the interpretation and feedback of DDI Executive Assessments.',
        text3: 'Expert in talent processes, always aiming to provide both the client and the candidates with agile, transparent and dynamic processes that meet the expectations of both in a timely manner.',
        text4: 'Main Industries: Information technology, manufacturing, agribusiness and food\nCountries: Mexico, United States, Central and South America, UK, Hungary, Germany',
      },
      img: abrilImg,
    },
  ],
];

const METODOLOGIA = [
  [
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
  ],
  [
    {
      title: 'Methodology',
      subtitle: 'Talent search',
      cards: [
        {
          id: 1,
          title: 'Client and Position Profile',
          info: 'Understanding mission, vision, values, culture and current situation of the company. Get to know the responsibilities of the position and define the necessary experience and skills, as well as the compensation package.?Define needed tests and interview process.',
        },
        {
          id: 2,
          title: 'Talent Acquisition Process',
          info: 'Market research to define search strategy.?Direct search in database, networking and other technological platforms.?Candidate evaluations.',
        },
        {
          id: 3,
          title: 'Short list of Candidates and Interviews',
          info: 'A shortlist of candidates is presented with their respective written report and compensation package.? Client interviews.?Reference and background check.',
        },
        {
          id: 4,
          title: 'Close and follow up',
          info: 'Support contract negotiations.?Candidate and client satisfaction follow up.',
        },
      ],
      cierre: 'Times on each stage of the process will depend on the type of search, availability of the client and will be reflected in the service proposal.',
    },
  ],
];

const FOOTER = [
  {
    logo: ab,
    fbLogo,
    inLogo,
    horario: 'Lunes a Viernes 9:00am a 6:00pm',
    mail: 'abarrientos@batalento.com',
    telefono: '415-153-5671',
    fbURL: 'https://www.facebook.com',
    inURL: 'https://www.linkedin.com/company/abril-barrientos-talent-expert/?viewAsMember=true',
  },
  {
    logo: ab,
    fbLogo,
    inLogo,
    horario: 'Monday to Friday 9:00am a 6:00pm',
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
