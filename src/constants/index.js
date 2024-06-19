import {
  pepper,
  turmeric,
  cardamom,
  coriander,
  ginger,
  chillie,
  spices,
  herbs,
  dry,
  veg,
  handicraft,
  orange,
  apple,
  dates,
  coirfenders,
  dolls,
  dryfruits,
  freshfruits,
  naturalhoney,
  aloevere,
  amla,
  lemongrass,
  Honey,
  HerbalHoney,
  HoneyGeneral,
  raisins,
  ForestHoney,
  Banana,
  Lemon,
  Mango,
  SweetLime,
  Guava,
  Papaya,
  Pomegranates,
  woodapple,
  limerind,
  apricots,
  figs,
  basil,
  cumin,
  fssai,
  iec,
  udyam,
  fieo,
  apeada
} from "../assets";

export const subNav = [
  {
    item: "Indian Spices",
    link: "indian-spices",
  },
  {
    item: "Indian  Herbs",
    link: "indian-herbs",
  },
  {
    item: "Dry Fruits",
    link: "dry-fruits",
  },
  {
    item: "Fresh Fruits",
    link: "fresh-fruits",
  },
  {
    item: "Natural Honey",
    link: "natural-honey",
  },
];

const spiceProucts = [
  {
    heading: "Cardamom",
    picture: cardamom,
  },
  {
    heading: "Chillie",
    picture: chillie,
  },
  {
    heading: "Pepper",
    picture: pepper,
  },
  {
    heading: "Ginger",
    picture: ginger,
  },
  {
    heading: "Turmeric",
    picture: turmeric,
  },
  {
    heading: "Coriander",
    picture: coriander,
  },
  {
    heading:"Cumin",
    picture:cumin
  }
];

const herbsProducts=[
  {
    heading:"Aloe vera",
    picture:aloevere
  },
  {
    heading:"Amla",
    picture:amla
  },
  {
    heading:"Holy basil",
    picture:basil
  },
  {
    heading:"Lemongrass",
    picture:lemongrass
  }
]

const dryFruitsProducts=[
  {
    heading:"Figs",
    picture:figs
  },
  {
    heading:"Dates",
    picture:dates
  },
  {
    heading:"Raisins",
    picture:raisins
  },
  {
    heading:"Apricots",
    picture:apricots
  },
  {
    heading:"Dry woodapple",
    picture:woodapple
  },
  {
    heading:"Dry lime rind",
    picture:limerind
  }
]

const freshFruitProducts=[
  {
    heading:"Bananas",
    picture:Banana
  },
  {
    heading:"Lemon",
    picture:Lemon
  },
  {
    heading:"Mangoes",
    picture:Mango
  },
  {
    heading:"Sweet lime",
    picture:SweetLime
  },
  {
    heading:"Oranges",
    picture:orange
  },
  {
    heading:"Apples",
    picture:apple
  },
  {
    heading:"Guavas",
    picture:Guava
  },
  {
    heading:"Papayas",
    picture:Papaya
  },
  {
    heading:"Pomegranates",
    picture:Pomegranates
  }
]

const naturalHoneyProducts=[
  {
    heading:"Organic wild honey",
    picture:ForestHoney
  },
  {
    heading:"NaturalKashmir honey",
    picture:Honey
  },
  {
    heading:"Herbal honey",
    picture:HerbalHoney
  },
  {
    heading:"Multi floral honey",
    picture:HoneyGeneral
  }
]

export const porductLayout = [
  {
    heading: "Indian Spices",
    picture: spices,
    contentArray: spiceProucts,
    link: "indian-spices",
  },
  {
    heading: "Indian Herbs",
    picture: herbs,
    contentArray: herbsProducts,
    link: "indian-herbs",
  },
  {
    heading: "Dry Fruits",
    picture: dryfruits,
    contentArray: dryFruitsProducts,
    link: "dry-fruits",
  },
  {
    heading: "Fresh Fruits",
    picture: freshfruits,
    contentArray: freshFruitProducts,
    link: "fresh-fruits",
  },
  {
    heading: "Natural Honey",
    picture: naturalhoney,
    contentArray: naturalHoneyProducts,
    link: "natural-honey",
  },
];

export const herbLayout = {
  heading: "Indian Herbs",
  picture: herbs,
  options: ["CARDAMOM", "CHILLIE", "PEPPER", "GINGER", "TURMERIC", "CORIANDER"],
  paragraph:
    "Kankas Exports are providing type of Herbs and spices exporters in India. Classifications of herbs are alovera, amla, holi basil, lemon grass.",
};

export const productArr = [
  {
    image: dry,
    heading: "Dry fruits-Figs",
    paragraph:
      "Figs are the delightful fruits harvested from the ficus tree, belonging to the mulberry family. They boast a distinctive sweet flavor and offer a delightful soft and chewy texture.",
    link: "dry-fruits",
  },
  {
    image: handicraft,
    heading: "Handicrafts",
    paragraph:
      "We craft high-quality products from Bamboo, Palm, and Coconut trees that serve both functional and decorative purposes.",
    link: "indian-herbs",
  },
  {
    image: veg,
    heading: "Fresh fruits-Bananas",
    paragraph:
      "Assimilating a banana into your daily breakfast routine provides essential nutrients that support the healthy functioning of your heart.",
    link: "fresh-fruits",
  },
];

export const certificates=[
  {
    image:fssai,
    name:'FSSAI'
  },
  {
    image:iec,
    name:'IEC'
  },
  {
    image:udyam,
    name:'UDYAM'
  },
  {
    image:fieo,
    name:'FIEO'
  },
  {
    image:apeada,
    name:'APEADA'
  }
]

export const gallarySlider = [orange, apple, dates, dolls, coirfenders];
