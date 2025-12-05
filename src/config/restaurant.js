export const restaurantInfo = {
  name: "La P'tite Crêpe Rit",
  slogan: "Le goût de la Bretagne dans votre assiette",
  description: "La P'tite Crêperie vous propose une carte de crêpes, galettes et salades au gré des saisons. Notre établissement est doté d'un jardin et propose des recettes classiques dans une salle aux pierres apparentes. Toutes nos galettes et crêpes sont faites à la demande avec des produits de producteurs locaux.",

  address: {
    street: "40 Rue des Sables",
    city: "Pornic",
    postalCode: "44210",
    region: "Loire-Atlantique",
    country: "France",
    full: "40 Rue des Sables, 44210 Pornic",
  },

  phone: {
    display: "02 40 64 49 36",
    link: "+33240644936",
  },

  email: "bonjour@laptitecreperit.fr",

  hours: [
    { day: "Lundi", hours: "12:00–14:00, 19:00–21:00", open: true },
    { day: "Mardi", hours: "12:00–14:00, 19:00–21:00", open: true },
    { day: "Mercredi", hours: "Fermé", open: false },
    { day: "Jeudi", hours: "Fermé", open: false },
    { day: "Vendredi", hours: "12:00–14:00, 19:00–21:00", open: true },
    { day: "Samedi", hours: "12:00–14:00, 19:00–21:00", open: true },
    { day: "Dimanche", hours: "12:00–14:00, 19:00–21:00", open: true },
  ],

  social: {
    facebook: "#",
    instagram: "#",
  },
};

export default restaurantInfo;
