export const site = {
  brand: "Tita Travel Planner",
  slogan: "Disfruta viajando",
  founder: "Bertha Acosta Leal",
  legalName: "ACOSTA LEAL BERTHA CLEOFE",
  commercialName: "TITA INTEGRAL SERVICES",
  ruc: "10445376006",
  valueProposition:
    "No solo planifico viajes. Diseño experiencias para que disfrutes cada momento con tranquilidad y confianza.",
  mission:
    "Ayudar a las personas a vivir experiencias de viaje inolvidables mediante una asesoría cercana, profesional y personalizada, brindando tranquilidad desde la planificación hasta el regreso a casa.",
  address: {
    line: "Avenida Malecón Checa Eguiguren B 03 piso A.H San Martín de Porrea de Campoy",
    reference: "",
    district: "San Juan de Lurigancho",
    city: "Lima",
    country: "Perú",
    display:
      "Avenida Malecón Checa Eguiguren B 03 piso A.H San Martín de Porrea de Campoy, San Juan de Lurigancho",
  },
  phones: [
    { label: "WhatsApp", number: "920614136", display: "+51 920614136", whatsapp: true },
    { label: "Móvil", number: "998406640", display: "+51 998406640", whatsapp: false },
  ],
  emails: {
    primary: "titatravelplanner@gmail.com",
    alternate: "titaacostalealargentina@gmail.com",
  },
  whatsappUrl:
    "https://wa.me/51920614136?text=" +
    encodeURIComponent(
      "Hola Tita, me gustaría recibir asesoría para planificar un viaje.",
    ),
  emailUrl: "mailto:titatravelplanner@gmail.com",
  instagramUrl: "https://www.instagram.com/titatravelplanner",
  instagramHandle: "@titatravelplanner",
  facebookUrl:
    "https://www.facebook.com/profile.php?id=61590869237750",
  tiktokUrl: "https://www.tiktok.com/@titaacostaleal",
  tiktokHandle: "@titaacostaleal",
} as const;

export const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#contacto", label: "Contacto" },
] as const;
