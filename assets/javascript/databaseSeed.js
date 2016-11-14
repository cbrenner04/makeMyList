// unit object - for consistency
var units = {
  cups: "cups",
  perEach: "each",
  ounces: "ounces",
  loaf: "loaf",
  package: "package",
  pint: "pint",
  cookedCups: "cups - cooked",
  slices: "slices",
  can: "can",
  cloves: "cloves",
  ribs: "ribs",
  pounds: "pounds",
  bunch: "bunch",
  sticks: "sticks",
  spears: "spears"
};

// list object
var list = {
  yogurt: {
    name: "greek yogurt",
    quantity: 4,
    unit: units.cups,
    collected: false
  },
  banana: {
    name: "banana",
    quantity: 6,
    unit: units.perEach,
    collected: false
  },
  grapefruit: {
    name: "grapefruit",
    quantity: 1,
    unit: units.perEach,
    collected: false
  },
  eggs: {
    name: "eggs",
    quantity: 28,
    unit: units.perEach,
    collected: false
  },
  spinach: {
    name: "spinach",
    quantity: 6.333,
    unit: units.ounces,
    collected: false
  },
  ezekialBread: {
    name: "ezekial bread",
    quantity: 1,
    unit: units.loaf,
    collected: false
  },
  peanutButter: {
    name: "peanut butter",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  strawberries: {
    name: "strawberries",
    quantity: 1,
    unit: units.pint,
    collected: false
  },
  instantOatmeal: {
    name: "instant oatmeal",
    quantity: 4,
    unit: units.cookedCups,
    collected: false
  },
  turkeyBacon: {
    name: "turkey bacon",
    quantity: 8,
    unit: units.slices,
    collected: false
  },
  eggWhites: {
    name: "egg whites",
    quantity: 14,
    unit: units.perEach,
    collected: false
  },
  redPepper: {
    name: "red pepper",
    quantity: 4.333,
    unit: units.perEach,
    collected: false
  },
  greenPepper: {
    name: "green pepper",
    quantity: 4.333,
    unit: units.perEach,
    collected: false
  },
  onion: {
    name: "onion",
    quantity: 3,
    unit: units.perEach,
    collected: false
  },
  mushroom: {
    name: "mushrooms",
    quantity: 0.333,
    unit: units.ounces,
    collected: false
  },
  rolledOats: {
    name: "rolled oats",
    quantity: 2,
    unit: units.cups,
    collected: false
  },
  groundFlax: {
    name: "ground flax",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  cinnamon: {
    name: "cinnamon",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  salt: {
    name: "salt",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  honey: {
    name: "honey",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  vanillaExtract: {
    name: "vanilla extract",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  dates: {
    name: "dates",
    quantity: 2.5,
    unit: units.cups,
    collected: false
  },
  greenTea: {
    name: "green tea",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  groundTurkey: {
    name: "ground turkey",
    quantity: 1.333,
    unit: units.pounds,
    collected: false
  },
  celery: {
    name: "celery",
    quantity: 7,
    unit: units.ribs,
    collected: false
  },
  garlic: {
    name: "garlic",
    quantity: 8,
    unit: units.cloves,
    collected: false
  },
  tomato: {
    name: "tomato",
    quantity: 1.5,
    unit: units.perEach,
    collected: false
  },
  tomatoPaste: {
    name: "tomato paste",
    quantity: 1,
    unit: units.can,
    collected: false
  },
  cumin: {
    name: "cumin",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  chiliPowder: {
    name: "chili powder",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  blackBeans: {
    name: "black beans",
    quantity: 1.333,
    unit: units.can,
    collected: false
  },
  roastedGreenChiles: {
    name: "roasted green chiles",
    quantity: 1.333,
    unit: units.can,
    collected: false
  },
  frozenCorn: {
    name: "frozen corn",
    quantity: 5,
    unit: units.cups,
    collected: false
  },
  rice: {
    name: "rice",
    quantity: 1,
    unit: units.cups,
    collected: false
  },
  cilantro: {
    name: "cilantro",
    quantity: 0.75,
    unit: units.cups,
    collected: false
  },
  cheese: {
    name: "cheese",
    quantity: 1.5,
    unit: units.cups,
    collected: false
  },
  chickenBreast: {
    name: "chicken breast",
    quantity: 1.75,
    unit: units.pounds,
    collected: false
  },
  baguettes: {
    name: "baguettes",
    quantity: 2,
    unit: units.perEach,
    collected: false
  },
  oliveOil: {
    name: "olive oil",
    quantity: 0.7,
    unit: units.cups,
    collected: false
  },
  cucumber: {
    name: "cucumber",
    quantity: 4.5,
    unit: units.perEach,
    collected: false
  },
  cherryTomatoes: {
    name: "cherry tomatoes",
    quantity: 3,
    unit: units.pint,
    collected: false
  },
  redOnion: {
    name: "red onion",
    quantity: 1.5,
    unit: units.perEach,
    collected: false
  },
  redWineVinegar: {
    name: "red wine vinegar",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  basil: {
    name: "basil",
    quantity: 1.5,
    unit: units.bunch,
    collected: false
  },
  chipotlesInAdobo: {
    name: "chipotles in adobo",
    quantity: 1,
    unit: units.can,
    collected: false
  },
  dijonMustard: {
    name: "dijon mustard",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  honeyMustard: {
    name: "honey mustard",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  springMix: {
    name: "spring mix",
    quantity: 8,
    unit: units.cups,
    collected: false
  },
  greenOnions: {
    name: "green onions",
    quantity: 4,
    unit: units.perEach,
    collected: false
  },
  avocado: {
    name: "avocado",
    quantity: 2.5,
    unit: units.perEach,
    collected: false
  },
  lime: {
    name: "lime",
    quantity: 4,
    unit: units.perEach,
    collected: false
  },
  quinoa: {
    name: "quinoa",
    quantity: 0.5,
    unit: units.cups,
    collected: false
  },
  chickenStock: {
    name: "chicken stock",
    quantity: 1,
    unit: units.cups,
    collected: false
  },
  coconutOil: {
    name: "coconut oil",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  balsamicVinegar: {
    name: "balsamic vinegar",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  croutons: {
    name: "croutons",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  candiedPecans: {
    name: "candied pecans",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  cranberries: {
    name: "cranberries",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  hummus: {
    name: "hummus",
    quantity: 2.25,
    unit: units.cups,
    collected: false
  },
  lemons: {
    name: "lemons",
    quantity: 3,
    unit: units.perEach,
    collected: false
  },
  shrimp: {
    name: "shrimp",
    quantity: 1,
    unit: units.pounds,
    collected: false
  },
  apples: {
    name: "apples",
    quantity: 4,
    unit: units.perEach,
    collected: false,
  },
  carrots: {
    name: "carrots",
    quantity: 12,
    unit: units.sticks,
    collected: false
  },
  rawAlmonds: {
    name: "raw almonds",
    quantity: 0.25,
    unit: units.cups,
    collected: false
  },
  almondButter: {
    name: "almond butter",
    quantity: 1,
    unit: units.package,
    collected: false
  },
  frozenFish: {
    name: "frozen fish",
    quantity: 3,
    unit: units.package,
    collected: false
  },
  cornTortillas: {
    name: "corn tortillas",
    quantity: 12,
    unit: units.perEach,
    collected: false
  },
  cabbage: {
    name: "cabbage",
    quantity: 1,
    unit: units.perEach,
    collected: false
  },
  asparagus: {
    name: "asparagus",
    quantity: 14,
    unit: units.spears,
    collected: false
  },
  frozenBroccoli: {
    name: "frozen broccoli",
    quantity: 2,
    unit: units.package,
    collected: false
  },
  frozenGreenBeans: {
    name: "frozen green beans",
    quantity: 2,
    unit: units.package,
    collected: false
  },
  tuna: {
    name: "tuna",
    quantity: 8,
    unit: units.can,
    collected: false
  }
};
