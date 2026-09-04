export const CATEGORIES = ["Monuments", "Food", "Festivals", "Crafts"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Highlight = {
  id: string;
  category: Category;
  title: string;
  blurb: string;
};

export type City = {
  id: string;
  name: string;
  tagline: string;
  language: string;
  outfit: string;
  highlights: Highlight[];
};

export type Theme = {
  /** google font family used for headings */
  display: string;
  /** google font family used for running text */
  serif: string;
  /** oklch values */
  bg: string;
  ink: string;
  card: string;
  border: string;
  accent: string;
  deep: string;
  ornament: string;
  /** decorative pattern used by the gallery plates */
  motif: "jaali" | "kolam" | "phulkari" | "alpana" | "temple" | "wave" | "warli" | "bandhani";
};

export type TimelineEntry = {
  id: string;
  era: string;
  title: string;
  text: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
};

export type State = {
  slug: string;
  name: string;
  epithet: string;
  intro: string;
  /** approximate polygon on the stylised map (viewBox 0 0 600 720) */
  shape: string;
  labelAt: [number, number];
  cities: City[];
  theme: Theme;
  timeline: TimelineEntry[];
  gallery: GalleryItem[];
};

type BaseState = Omit<State, "theme" | "timeline" | "gallery">;

const BASE_STATES: BaseState[] = [

  {
    slug: "rajasthan",
    name: "Rajasthan",
    epithet: "Land of Kings",
    intro:
      "Rajasthan wears its history out loud — in sandstone the colour of afternoon light, in mirrorwork that catches a lamp from across a courtyard, in ballads still sung by families who have sung them for six centuries. Desert here is not emptiness; it is a stage.",
    shape: "M124,190 L192,176 L238,186 L254,246 L226,292 L168,300 L134,268 L118,228 Z",
    labelAt: [176, 240],
    cities: [
      {
        id: "jaipur",
        name: "Jaipur",
        tagline: "A city drawn on graph paper, painted in rose",
        language: "Dhundhari Rajasthani, with Hindi everywhere",
        outfit:
          "Men in angarkhas and the safa turban, tied differently for weddings than for mourning. Women in bandhani odhnis and lehariya skirts — tie-dye patterns that read like a weather report of the desert.",
        highlights: [
          {
            id: "hawa-mahal",
            category: "Monuments",
            title: "Hawa Mahal",
            blurb:
              "953 windows, built so royal women could watch the street festivals without the street watching back. The honeycomb also works as a wind machine — the palace breathes cool air in May.",
          },
          {
            id: "amber",
            category: "Monuments",
            title: "Amber Fort",
            blurb:
              "Climb at sunrise and the mirrored Sheesh Mahal turns a single candle into a constellation. Below, the stepwells still hold monsoon water from decades ago.",
          },
          {
            id: "teej",
            category: "Festivals",
            title: "Teej",
            blurb:
              "The monsoon arrives and the old city goes green — green bangles, green saris, swings hung from neem trees, and a procession where a silver palanquin outshines the rain.",
          },
          {
            id: "dal-baati",
            category: "Food",
            title: "Dal Baati Churma",
            blurb:
              "Wheat balls baked in cow-dung embers, cracked open and drowned in ghee, eaten with a five-lentil dal and a sweet crumble that exists purely to make you finish the plate.",
          },
          {
            id: "blue-pottery",
            category: "Crafts",
            title: "Blue Pottery",
            blurb:
              "A Persian technique that took a detour through Jaipur: quartz dough, cobalt glaze, fired low, so each piece keeps a faint translucence you can see if you hold it to a window.",
          },
        ],
      },
      {
        id: "udaipur",
        name: "Udaipur",
        tagline: "Palaces that float because the water lets them",
        language: "Mewari, a softer cousin of Marwari",
        outfit:
          "Mewari women favour the ghagra-kanchli with a thin gota border; men keep to white with a saffron turban — the colour of the Sisodia clan's stubbornness.",
        highlights: [
          {
            id: "city-palace",
            category: "Monuments",
            title: "City Palace",
            blurb:
              "Eleven palaces stacked by eleven rulers, none of whom agreed on architecture. The result is a delightful argument in marble, granite and stained glass.",
          },
          {
            id: "gangaur",
            category: "Festivals",
            title: "Gangaur",
            blurb:
              "Unmarried women carry clay Gauri idols to the lake at dusk, singing the same teasing verses their grandmothers used. Boats, drums, and a chain of oil lamps on the water.",
          },
          {
            id: "dal-bafla",
            category: "Food",
            title: "Laal Maas",
            blurb:
              "A hunting-camp curry built on Mathania chillies — fiery red but not cruel, smoked with a live coal dropped into ghee at the last second.",
          },
          {
            id: "pichwai",
            category: "Crafts",
            title: "Pichwai Painting",
            blurb:
              "Cloth backdrops for Krishna's shrine, repainted for each season. Look closely: the cows have individual faces, and the artist's family name is hidden in the lotus border.",
          },
        ],
      },
      {
        id: "jaisalmer",
        name: "Jaisalmer",
        tagline: "A living fort the colour of turmeric",
        language: "Marwari, spoken with a caravan trader's economy",
        outfit:
          "Heavy silver anklets, the kind you hear before you see, and men's angocha cloths that double as sunshade, water filter and pillow.",
        highlights: [
          {
            id: "sonar-quila",
            category: "Monuments",
            title: "Sonar Quila",
            blurb:
              "One of the last inhabited forts on earth — 3,000 people still cook dinner inside twelfth-century walls, which is why the sandstone is slowly, tenderly, wearing out.",
          },
          {
            id: "desert-festival",
            category: "Festivals",
            title: "Desert Festival",
            blurb:
              "Camel polo, turban-tying contests and Manganiyar musicians whose khartal clappers keep a rhythm older than the border they live beside.",
          },
          {
            id: "ker-sangri",
            category: "Food",
            title: "Ker Sangri",
            blurb:
              "Desert berries and bean pods, sun-dried because there is no other choice, cooked in yoghurt and mustard oil — a masterclass in making scarcity taste deliberate.",
          },
          {
            id: "patwa",
            category: "Crafts",
            title: "Stone Jaali Carving",
            blurb:
              "Screens cut so thin they filter dust from wind. The Patwon Ki Haveli's facade was carved by five brothers competing with each other, and it shows.",
          },
        ],
      },
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    epithet: "God's Own Country",
    intro:
      "Kerala is horizontal — backwater, paddy, coconut, sea — and everything vertical in it is either a temple lamp or a percussion ensemble. Trade brought Romans, Arabs, Chinese and Portuguese here; the coast absorbed all of them and kept its own rhythm.",
    shape: "M248,556 L276,548 L296,600 L302,646 L282,678 L262,626 L246,592 Z",
    labelAt: [232, 618],
    cities: [
      {
        id: "kochi",
        name: "Kochi",
        tagline: "Six hundred years of arriving strangers",
        language: "Malayalam, plus a Judeo-Malayalam that survives in songbooks",
        outfit:
          "The kasavu mundu — unbleached cotton with a gold border — worn by everyone, cut differently for men and women, and never quite the same white twice.",
        highlights: [
          {
            id: "mattancherry",
            category: "Monuments",
            title: "Mattancherry & the Paradesi Synagogue",
            blurb:
              "A synagogue floored with 1,100 hand-painted Chinese tiles, no two alike, next to spice godowns that still smell of cardamom at 6am.",
          },
          {
            id: "chinese-nets",
            category: "Monuments",
            title: "Cheena Vala",
            blurb:
              "Cantilevered fishing nets said to have arrived with Zheng He's fleet. Four men, one counterweight of stones, and a dip-and-lift that hasn't changed design in 500 years.",
          },
          {
            id: "kathakali",
            category: "Festivals",
            title: "Kathakali Nights",
            blurb:
              "Green-faced gods argue in mudras for eight hours by oil lamp. Learn nine facial expressions and you can follow the whole plot without a word of Malayalam.",
          },
          {
            id: "meen-pollichathu",
            category: "Food",
            title: "Meen Pollichathu",
            blurb:
              "Pearl spot fish smeared with shallot-and-kokum masala, wrapped in banana leaf and pan-charred so the leaf's bitterness leaks into the fish.",
          },
          {
            id: "coir",
            category: "Crafts",
            title: "Coir Weaving",
            blurb:
              "Coconut husk retted in backwater mud for months, then spun by hand into rope strong enough for ships — the reason this coast had a navy at all.",
          },
        ],
      },
      {
        id: "thrissur",
        name: "Thrissur",
        tagline: "The cultural capital that measures time in drumbeats",
        language: "Malayalam with the crisp central-Kerala cadence",
        outfit:
          "Set-mundu for women at temple festivals; men bare-chested with a folded mundu, an old egalitarian rule that still applies inside temple walls.",
        highlights: [
          {
            id: "vadakkunnathan",
            category: "Monuments",
            title: "Vadakkunnathan Temple",
            blurb:
              "Kerala's classical style at its purest: gabled copper roofs, murals in five vegetable pigments, and a courtyard so vast the town grew around it as a ring.",
          },
          {
            id: "pooram",
            category: "Festivals",
            title: "Thrissur Pooram",
            blurb:
              "Two temple factions compete with 250 drummers and a silent duel of embroidered parasols swapped above elephants — the crowd roars for the best design.",
          },
          {
            id: "sadya",
            category: "Food",
            title: "Onam Sadya",
            blurb:
              "Up to 26 dishes on a banana leaf, served in a fixed order from left to right. Pour the parippu first with ghee; end with a pale banana payasam.",
          },
          {
            id: "nettur",
            category: "Crafts",
            title: "Nettur Petti",
            blurb:
              "Jackwood jewellery caskets sheathed in brass with a rounded roof like a temple. Once a bride's dowry box; now the thing collectors quietly hunt for.",
          },
        ],
      },
      {
        id: "alappuzha",
        name: "Alappuzha",
        tagline: "Roads made of water",
        language: "Malayalam, with boat-song Malayalam for the races",
        outfit:
          "Rowers in white mundu and red sash — 100 men to a boat, all matching, because a snake boat only moves if it looks like one animal.",
        highlights: [
          {
            id: "kuttanad",
            category: "Monuments",
            title: "Kuttanad Below Sea Level",
            blurb:
              "Rice farmed two metres beneath the waterline behind hand-built bunds — one of very few places on earth where the field is lower than the canal beside it.",
          },
          {
            id: "vallam-kali",
            category: "Festivals",
            title: "Vallam Kali",
            blurb:
              "Snake boat races where the villages bet reputations, not money. The vanchipattu song sets the stroke; if the singing breaks, the boat loses.",
          },
          {
            id: "karimeen",
            category: "Food",
            title: "Toddy Shop Fare",
            blurb:
              "Duck roast, tapioca mash and searing red fish curry, eaten in a tin-roofed shack with coconut toddy that turns sour by afternoon.",
          },
          {
            id: "screwpine",
            category: "Crafts",
            title: "Screwpine Mats",
            blurb:
              "Thazhappaya mats woven from thorny pandanus leaves, cool enough that grandmothers still refuse mattresses in June.",
          },
        ],
      },
    ],
  },
  {
    slug: "punjab",
    name: "Punjab",
    epithet: "Land of Five Rivers",
    intro:
      "Punjab is a place of loud generosity and quiet grief — a frontier ploughed by every invader who came overland, and still the first to put a stranger's plate on the table. Its music has a heartbeat you can measure: the dhol.",
    shape: "M180,132 L228,120 L248,152 L232,182 L196,178 L172,158 Z",
    labelAt: [212, 152],
    cities: [
      {
        id: "amritsar",
        name: "Amritsar",
        tagline: "A kitchen that has never closed",
        language: "Punjabi in Gurmukhi script",
        outfit:
          "The salwar-kameez with a phulkari dupatta — darn-stitch embroidery worked from the reverse so the front looks like woven silk. Men in kurta-pyjama and a starched turban whose fold marks the wearer's tradition.",
        highlights: [
          {
            id: "harmandir",
            category: "Monuments",
            title: "Harmandir Sahib",
            blurb:
              "Gold leaf over marble, four doors facing four directions, and shabad kirtan running almost continuously since 1604. Sit at the water's edge at 4am and the marble is still warm from the day before.",
          },
          {
            id: "jallianwala",
            category: "Monuments",
            title: "Jallianwala Bagh",
            blurb:
              "A walled garden with bullet holes preserved in brick — a small, unbearably quiet space that changed the course of a freedom movement.",
          },
          {
            id: "baisakhi",
            category: "Festivals",
            title: "Baisakhi",
            blurb:
              "Harvest and Khalsa founding on the same date. Bhangra in the fields, wrestling in dust rings, and gatka swordplay performed at a speed that looks edited.",
          },
          {
            id: "langar",
            category: "Food",
            title: "Langar & Kulcha",
            blurb:
              "A free kitchen feeding 100,000 people a day, run by volunteers rolling rotis in shifts — then, outside, an amritsari kulcha stuffed with potato and slapped with butter.",
          },
          {
            id: "phulkari",
            category: "Crafts",
            title: "Phulkari",
            blurb:
              "Flower-work shawls once stitched by a grandmother from a girl's birth to her wedding. A bagh covers the cloth entirely; a chope is given only by the maternal family.",
          },
        ],
      },
      {
        id: "patiala",
        name: "Patiala",
        tagline: "Royal excess, tailored",
        language: "Puadhi Punjabi, teasing and fast",
        outfit:
          "The patiala salwar — nine metres of cloth pleated at the waist — plus the pagri with a fan-shaped turla, a Patiala royal signature.",
        highlights: [
          {
            id: "qila-mubarak",
            category: "Monuments",
            title: "Qila Mubarak",
            blurb:
              "A mud-and-brick fort that grew into a palace complex, with a durbar hall of chandeliers and an armoury holding Nadir Shah's sword.",
          },
          {
            id: "basant",
            category: "Festivals",
            title: "Basant Panchami",
            blurb:
              "Yellow everything — mustard fields, turbans, rice with saffron — and kites cutting each other loose above the old city.",
          },
          {
            id: "makki",
            category: "Food",
            title: "Sarson da Saag",
            blurb:
              "Mustard greens slow-cooked for hours, finished with white butter and eaten with maize roti — winter food designed for people who work outdoors.",
          },
          {
            id: "juttis",
            category: "Crafts",
            title: "Punjabi Juttis",
            blurb:
              "Leather shoes with no left or right; they learn your feet in a week. The best ones carry tilla gold thread and a curl at the toe.",
          },
        ],
      },
    ],
  },
  {
    slug: "west-bengal",
    name: "West Bengal",
    epithet: "Where Adda is a Discipline",
    intro:
      "Bengal argues beautifully. Its cities were built on river trade and reformed by essayists, and to this day an afternoon can be spent entirely on tea, poetry and disagreement. Clay, terracotta and mud are its favourite materials — impermanence as an aesthetic.",
    shape: "M398,228 L432,222 L444,268 L438,306 L414,328 L392,296 L388,258 Z",
    labelAt: [456, 262],
    cities: [
      {
        id: "kolkata",
        name: "Kolkata",
        tagline: "A tram, a tea stall, an unfinished sentence",
        language: "Bangla, with a fondness for Sanskritised flourish",
        outfit:
          "The laal-paar white sari with a red border for pujo; men in dhuti-panjabi. Jamdani for occasions, its motifs woven in by hand thread by thread.",
        highlights: [
          {
            id: "victoria",
            category: "Monuments",
            title: "Victoria Memorial",
            blurb:
              "Makrana marble raised over a colonial century, now a museum where locals mostly come for the lawns. Cross the maidan at dusk for the light on the dome.",
          },
          {
            id: "kumartuli",
            category: "Monuments",
            title: "Kumartuli Lanes",
            blurb:
              "A whole neighbourhood of idol-makers where Durga is born every autumn from straw, Ganga clay and a single stroke that paints her eyes last.",
          },
          {
            id: "durga-puja",
            category: "Festivals",
            title: "Durga Puja",
            blurb:
              "Five days when the city turns itself inside out: pandals built as art installations, dhaak drummers on every corner, and a farewell to the river that always feels too soon.",
          },
          {
            id: "kosha-mangsho",
            category: "Food",
            title: "Kosha Mangsho & Luchi",
            blurb:
              "Mutton browned slowly until the masala clings like lacquer, torn into puffed white luchi. Finish with mishti doi set in a clay cup that steals some of the water.",
          },
          {
            id: "kantha",
            category: "Crafts",
            title: "Kantha Stitch",
            blurb:
              "Old saris layered and quilted with a running stitch that tells a story sideways — recycling elevated to embroidery centuries before it was fashionable.",
          },
        ],
      },
      {
        id: "shantiniketan",
        name: "Shantiniketan",
        tagline: "A school with no walls, on purpose",
        language: "Bangla, plus Santali in the surrounding villages",
        outfit:
          "Handloom cotton and batik prints, a Tagore-era experiment that became the uniform of Bengali intellectual life.",
        highlights: [
          {
            id: "visva-bharati",
            category: "Monuments",
            title: "Visva-Bharati",
            blurb:
              "Tagore's university where classes are still held under mango trees. Kala Bhavana's murals and Ramkinkar Baij's cement sculptures made modern Indian art here.",
          },
          {
            id: "poush-mela",
            category: "Festivals",
            title: "Poush Mela",
            blurb:
              "A winter fair of Baul singers — wandering mystics with ektara and ankle bells whose songs argue with God on first-name terms.",
          },
          {
            id: "notun-gur",
            category: "Food",
            title: "Nolen Gur",
            blurb:
              "Date-palm jaggery tapped only in the cold weeks, folded into sandesh and rosogolla. Bengalis will tell you the season is short so you take it seriously.",
          },
          {
            id: "batik",
            category: "Crafts",
            title: "Batik & Leatherwork",
            blurb:
              "Wax-resist dyeing and tooled leather bags from the Sriniketan workshops — craft taught as coursework, sold under the same trees.",
          },
        ],
      },
    ],
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    epithet: "The Unbroken Line",
    intro:
      "Tamil Nadu holds one of the world's oldest continuously living literary cultures, and it builds accordingly — granite towers, bronze that survives a millennium, ritual timed to the sky. Nothing here is retro, because nothing here ever stopped.",
    shape: "M300,540 L346,536 L358,584 L344,632 L312,664 L300,624 L306,580 Z",
    labelAt: [372, 600],
    cities: [
      {
        id: "madurai",
        name: "Madurai",
        tagline: "The city that never sleeps, and never has",
        language: "Tamil, in the Madurai dialect locals are proud of",
        outfit:
          "Sungudi cotton saris tie-dyed with tiny dots; men in veshti with a thundu on the shoulder. Jasmine in the hair, sold by the arm's length.",
        highlights: [
          {
            id: "meenakshi",
            category: "Monuments",
            title: "Meenakshi Amman Temple",
            blurb:
              "Fourteen gopurams crowded with thousands of painted figures, and a Thousand Pillar Hall where each column is a different sculpture. At 9pm the god is carried to the goddess's chamber — every night, without exception.",
          },
          {
            id: "chithirai",
            category: "Festivals",
            title: "Chithirai Thiruvizha",
            blurb:
              "A divine wedding staged as a month-long civic event, ending with Kallazhagar riding into the Vaigai river while a million people watch from the banks.",
          },
          {
            id: "jigarthanda",
            category: "Food",
            title: "Jigarthanda & Kari Dosai",
            blurb:
              "Almond-gum milk chilled with ice cream to survive a Madurai afternoon, then a dosai layered with minced mutton at a stall that opens at midnight.",
          },
          {
            id: "sungudi",
            category: "Crafts",
            title: "Sungudi Tie-Dye",
            blurb:
              "Dots tied by hand into cotton with grains of millet as resists — a technique brought by Saurashtra weavers who migrated south 400 years ago.",
          },
        ],
      },
      {
        id: "thanjavur",
        name: "Thanjavur",
        tagline: "Where a temple was engineered like a proof",
        language: "Tamil, and the Sanskrit still chanted in the courtyards",
        outfit:
          "Silk from nearby Kumbakonam and Thirubuvanam, zari borders in temple-gopuram motifs; Bharatanatyam dancers pleat theirs into a fan.",
        highlights: [
          {
            id: "brihadeeswarar",
            category: "Monuments",
            title: "Brihadeeswarar Temple",
            blurb:
              "A 1,000-year-old granite vimana whose 80-tonne capstone still puzzles engineers, standing on stone quarried kilometres away — and its shadow reportedly never falls on the ground at noon.",
          },
          {
            id: "natyanjali",
            category: "Festivals",
            title: "Margazhi & Natyanjali",
            blurb:
              "The cool month when Carnatic music and Bharatanatyam take over halls and temple steps, from 6am kutcheris to concerts that end after midnight.",
          },
          {
            id: "ellu-sadam",
            category: "Food",
            title: "Thanjavur Thali",
            blurb:
              "Rice with sambar, more kuzhambu than you can name, appalam and a jaggery-and-sesame sweet — vegetarian cooking sharpened over centuries of temple kitchens.",
          },
          {
            id: "thanjavur-painting",
            category: "Crafts",
            title: "Thanjavur Painting & Bronze",
            blurb:
              "Gods raised in gesso, wrapped in 22-carat gold foil and set with stones; next door, lost-wax bronzes cast the Chola way, hollow-eyed until the final chisel.",
          },
        ],
      },
      {
        id: "mahabalipuram",
        name: "Mahabalipuram",
        tagline: "A workshop the sea never finished",
        language: "Tamil, coastal and clipped",
        outfit:
          "Fisherfolk in lungi and checked thundu; sculptors in cotton dusted permanently pale by granite.",
        highlights: [
          {
            id: "shore-temple",
            category: "Monuments",
            title: "Shore Temple & Rathas",
            blurb:
              "Seventh-century Pallava temples carved from living rock, including five monolith chariots that were essentially architects' prototypes — abandoned mid-idea.",
          },
          {
            id: "arjuna",
            category: "Monuments",
            title: "Arjuna's Penance",
            blurb:
              "A 30-metre relief where a natural cleft in the boulder becomes the descending Ganga, complete with a comic cat pretending to meditate at the edge.",
          },
          {
            id: "dance-festival",
            category: "Festivals",
            title: "Mamallapuram Dance Festival",
            blurb:
              "Classical dance performed against the rock reliefs in December, the carved dancers and the living ones holding the same poses.",
          },
          {
            id: "granite",
            category: "Crafts",
            title: "Granite Sculpture",
            blurb:
              "Chisel families still working to Shilpa Shastra proportions — you can hear the whole village keeping time on stone from the highway.",
          },
        ],
      },
    ],
  },
];

export const INDIA_OUTLINE =
  "M150,120 L215,105 L250,135 L300,120 L360,140 L420,120 L470,150 L455,200 L500,215 L540,265 L520,300 L470,300 L440,340 L420,420 L380,520 L330,620 L300,690 L268,610 L235,520 L200,440 L170,380 L120,330 L95,290 L120,240 L110,180 Z";

const NEW_STATES: BaseState[] = [
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    epithet: "The Ganga's Long Sentence",
    intro:
      "Empires kept rewriting this floodplain and never quite finished. Marble grief in Agra, dawn hymns in Banaras, a kebab in Lucknow soft enough to be an apology — all of it stacked along one river that refuses to be a border.",
    shape: "M258,190 L330,196 L364,232 L340,268 L286,264 L252,232 Z",
    labelAt: [306, 232],
    cities: [
      {
        id: "varanasi",
        name: "Varanasi",
        tagline: "Older than the memory of being old",
        language: "Bhojpuri and Banarasi Hindi, argued loudly on both banks",
        outfit:
          "Banarasi silk saris with real zari, woven on pit looms in Madanpura; men in kurta-dhoti with a gamchha thrown over one shoulder for the ghat steps.",
        highlights: [
          {
            id: "ghats",
            category: "Monuments",
            title: "The Eighty-Four Ghats",
            blurb:
              "A stone staircase four kilometres long, where wrestlers, widows, barbers and physicists all use the same step at different hours of the day.",
          },
          {
            id: "dev-deepawali",
            category: "Festivals",
            title: "Dev Deepawali",
            blurb:
              "A million oil lamps set on the ghats on the full moon of Kartik — the river doubles the count and nobody argues with the arithmetic.",
          },
          {
            id: "kachori-sabzi",
            category: "Food",
            title: "Kachori Sabzi & Malaiyo",
            blurb:
              "Breakfast is fried and fierce; winter dessert is milk foam whipped in the open so the dew does half the work. Eaten before 8am or not at all.",
          },
          {
            id: "banarasi-weave",
            category: "Crafts",
            title: "Banarasi Brocade",
            blurb:
              "Two weavers, one loom, six months, one sari. The design cards hanging above them are inherited like land.",
          },
        ],
      },
      {
        id: "agra",
        name: "Agra",
        tagline: "A city that lives beside one perfect building",
        language: "Braj-tinted Hindi, with Urdu politeness",
        outfit:
          "Chikan-work kurtas in summer; brides still favour deep red with gota, a Mughal habit the city never dropped.",
        highlights: [
          {
            id: "taj",
            category: "Monuments",
            title: "Taj Mahal",
            blurb:
              "Go at first light: the marble runs pink, then white, then a tired gold by noon. The inlay flowers are semi-precious stone cut thinner than a fingernail.",
          },
          {
            id: "fatehpur",
            category: "Monuments",
            title: "Fatehpur Sikri",
            blurb:
              "A capital abandoned in fourteen years because the water ran out — which is why it survives so intact, an unfinished thought in red sandstone.",
          },
          {
            id: "petha",
            category: "Food",
            title: "Petha & Mughlai Grill",
            blurb:
              "Ash-gourd candy sold by the kilo at the station, and behind the bazaar, seekh kebabs cooked on a grill that has not been allowed to cool since Partition.",
          },
          {
            id: "pietra",
            category: "Crafts",
            title: "Parchin Kari Inlay",
            blurb:
              "The Taj's stone-inlay families still work three streets away, fitting carnelian petals by ear as much as by eye.",
          },
        ],
      },
      {
        id: "lucknow",
        name: "Lucknow",
        tagline: "Where courtesy is a competitive sport",
        language: "Urdu and Awadhi, spoken with deliberate slowness",
        outfit:
          "Chikankari — white thread on white muslin, thirty-two stitches, each named. Worn with a Lucknawi cap and, in winter, a chikan angarkha.",
        highlights: [
          {
            id: "bara-imambara",
            category: "Monuments",
            title: "Bara Imambara",
            blurb:
              "Built as famine relief: nobles broke walls at night so labourers had work by day. Its roof holds without a single beam, and the labyrinth above still confuses guides.",
          },
          {
            id: "muharram",
            category: "Festivals",
            title: "Muharram Processions",
            blurb:
              "Silver taziyas, marsiya elegies sung in Awadhi metre, and Hindu families who have supplied the drums for six generations.",
          },
          {
            id: "galouti",
            category: "Food",
            title: "Galouti Kebab & Awadhi Biryani",
            blurb:
              "Invented for a toothless Nawab, refined into a kebab that dissolves. The biryani beside it is deliberately gentle — flavour by steam, not by fire.",
          },
          {
            id: "chikan",
            category: "Crafts",
            title: "Chikankari",
            blurb:
              "Women embroider in courtyards between household chores; the finest jaali work is done by touch, holding the cloth against the light of a doorway.",
          },
        ],
      },
    ],
  },
  {
    slug: "maharashtra",
    name: "Maharashtra",
    epithet: "Forts, Fishermen and Film",
    intro:
      "Basalt hills carved into cave-temples and hill-forts, a coastline that eats coconut and fish in the same breath, and a city that manufactures the country's dreams on deadline.",
    shape: "M176,366 L262,358 L300,392 L278,432 L206,436 L170,404 Z",
    labelAt: [236, 400],
    cities: [
      {
        id: "mumbai",
        name: "Mumbai",
        tagline: "Seven islands that refused to stay seven",
        language: "Marathi, plus Bambaiya Hindi invented on the trains",
        outfit:
          "Nauvari sari and the Puneri pheta for festival days; Koli fisherwomen still wear the knee-length kasta that lets them work in surf.",
        highlights: [
          {
            id: "elephanta",
            category: "Monuments",
            title: "Elephanta Caves",
            blurb:
              "A three-faced Shiva cut out of a hillside in the 6th century, calm enough to survive Portuguese target practice.",
          },
          {
            id: "ganesh",
            category: "Festivals",
            title: "Ganeshotsav",
            blurb:
              "Eleven days when lanes become galleries of clay idols, and on the last morning the whole city walks its gods to the sea.",
          },
          {
            id: "vada-pav",
            category: "Food",
            title: "Vada Pav & Koli Curry",
            blurb:
              "A potato fritter in bread that feeds a shift change of millions; on the coast, the same city eats bombil fry and a red curry sharpened with kokum.",
          },
          {
            id: "warli-craft",
            category: "Crafts",
            title: "Warli Painting",
            blurb:
              "Rice paste on cow-dung walls, stick figures in an endless spiral dance — a 2,500-year-old grammar of circles and triangles, still painted at weddings north of the city.",
          },
        ],
      },
      {
        id: "pune",
        name: "Pune",
        tagline: "The Peshwas' desk, still tidy",
        language: "Puneri Marathi, famously precise",
        outfit:
          "Nine-yard sari worn with a nath nose-ring; men in kurta and pheta, tied flatter here than in Kolhapur.",
        highlights: [
          {
            id: "shaniwar",
            category: "Monuments",
            title: "Shaniwar Wada",
            blurb:
              "A palace burnt to its plinth in 1828; what remains are the gates, studded with iron spikes at elephant-forehead height.",
          },
          {
            id: "sinhagad",
            category: "Monuments",
            title: "Sinhagad Fort",
            blurb:
              "Climbed in monsoon by half the city, for cloud and for the pithla-bhakri sold at the top by families who live inside the ramparts.",
          },
          {
            id: "misal",
            category: "Food",
            title: "Misal Pav",
            blurb:
              "Sprouted moth beans under a slick of red tarri, served with a jug so you can escalate the heat yourself.",
          },
          {
            id: "paithani",
            category: "Crafts",
            title: "Paithani Weaving",
            blurb:
              "Silk with no reverse side — tapestry-woven peacocks look identical from both faces, which is why one sari can take a year.",
          },
        ],
      },
      {
        id: "aurangabad",
        name: "Chhatrapati Sambhajinagar",
        tagline: "Two hillsides of painted and carved devotion",
        language: "Marathi with a Deccani Urdu accent",
        outfit:
          "Himroo shawls and Mashru silk, the Deccan's answer to brocade, worn over plain cotton.",
        highlights: [
          {
            id: "ajanta",
            category: "Monuments",
            title: "Ajanta Caves",
            blurb:
              "Buddhist murals from before the idea of perspective, painted in near-darkness. Guides still use a single mirror to bounce daylight onto the ceilings.",
          },
          {
            id: "ellora",
            category: "Monuments",
            title: "Ellora's Kailasa",
            blurb:
              "A temple carved downward out of one rock, 200,000 tonnes removed with the plan held only in someone's head.",
          },
          {
            id: "naan-qalia",
            category: "Food",
            title: "Naan Qalia",
            blurb:
              "Mutton and gram-flour gravy from the old garrison kitchens, cooked all night and sold out by breakfast.",
          },
          {
            id: "himroo",
            category: "Crafts",
            title: "Himroo Brocade",
            blurb:
              "Persian patterns brought south with the Tughlaqs; two looms in the city still make it, one thread of silk to four of cotton.",
          },
        ],
      },
    ],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    epithet: "Salt, Sail and Mirrorwork",
    intro:
      "A coastline that made merchants and a desert that made embroiderers. Gujarat exports thread, stone-carving and stubborn vegetarian invention — and dances for nine consecutive nights to prove it has energy left over.",
    shape: "M118,286 L172,282 L196,318 L170,360 L128,352 L104,318 Z",
    labelAt: [146, 320],
    cities: [
      {
        id: "ahmedabad",
        name: "Ahmedabad",
        tagline: "Carved stone and Le Corbusier, same postcode",
        language: "Gujarati, with Urdu in the old city lanes",
        outfit:
          "Patola silk for weddings, tie-dyed before weaving; men in kediyu jackets and kafni pyjamas for Navratri nights.",
        highlights: [
          {
            id: "pols",
            category: "Monuments",
            title: "The Pols & Adalaj Stepwell",
            blurb:
              "Walled neighbourhoods with bird-feeders built into the architecture, and outside town a five-storey well where the temperature drops six degrees as you descend.",
          },
          {
            id: "navratri",
            category: "Festivals",
            title: "Navratri Garba",
            blurb:
              "Nine nights of concentric circles around a clay lamp, clapping on a beat that speeds up until the drummers decide mercy.",
          },
          {
            id: "thali",
            category: "Food",
            title: "The Gujarati Thali",
            blurb:
              "Sweet, salt and heat in the same mouthful: undhiyu buried and slow-cooked in winter, dhokla steamed at dawn, and a server who refuses to accept that you are full.",
          },
          {
            id: "patola",
            category: "Crafts",
            title: "Patan Patola",
            blurb:
              "Double ikat: both warp and weft are dyed before weaving, so the pattern must be aligned thread by thread. Three families, four months, no margin for error.",
          },
        ],
      },
      {
        id: "bhuj",
        name: "Bhuj",
        tagline: "Embroidery as a map of who you are",
        language: "Kachchhi, a Sindhi cousin",
        outfit:
          "Rabari women in black wool with mirrors stitched in constellations; each community's stitch declares clan, marital status and village.",
        highlights: [
          {
            id: "rann",
            category: "Festivals",
            title: "Rann Utsav",
            blurb:
              "Full-moon nights on white salt that stretches past focus, with folk singers whose songs are older than the border they sit beside.",
          },
          {
            id: "aina-mahal",
            category: "Monuments",
            title: "Aina Mahal",
            blurb:
              "A mirrored pleasure-palace built by a Gujarati craftsman who trained in Europe and came home to out-baroque the baroque.",
          },
          {
            id: "kutchi-food",
            category: "Food",
            title: "Bajra Rotla & Kutchi Dabeli",
            blurb:
              "Millet bread with white butter and jaggery for the desert; in town, a spiced potato bun crowned with pomegranate and roasted peanuts.",
          },
          {
            id: "ajrakh",
            category: "Crafts",
            title: "Ajrakh & Rogan Art",
            blurb:
              "Sixteen resist-printing stages using indigo and madder, washed in river water; nearby, one family paints with a stylus of thickened castor oil.",
          },
        ],
      },
    ],
  },
  {
    slug: "assam",
    name: "Assam",
    epithet: "The Brahmaputra's Green Ledger",
    intro:
      "A valley where the river changes its mind every monsoon, where silk is spun from wild cocoons, and where dance and drum are still taught in monasteries built on islands.",
    shape: "M452,206 L516,198 L528,232 L494,252 L456,240 Z",
    labelAt: [500, 222],
    cities: [
      {
        id: "guwahati",
        name: "Guwahati",
        tagline: "A city built around a hill and a temple",
        language: "Assamese, with Bodo and Bengali in the market",
        outfit:
          "Mekhela chador in muga silk — golden, unbleached, and said to outlive the wearer; men in a white dhoti with a woven gamosa.",
        highlights: [
          {
            id: "kamakhya",
            category: "Monuments",
            title: "Kamakhya Temple",
            blurb:
              "A goddess shrine with no idol, only a spring in the rock. During Ambubachi the doors shut for three days while the earth is said to rest.",
          },
          {
            id: "bihu",
            category: "Festivals",
            title: "Rongali Bihu",
            blurb:
              "Spring arrives and the dhol, pepa horn and gogona start at once; the dance is fast, low and unmistakably about courtship.",
          },
          {
            id: "assam-food",
            category: "Food",
            title: "Khar, Tenga & Pitha",
            blurb:
              "Two opposite fish curries — one alkaline from banana-peel ash, one sour with tomato and elephant apple — and rice cakes toasted in bamboo.",
          },
          {
            id: "muga",
            category: "Crafts",
            title: "Muga Silk",
            blurb:
              "Reeled from wild cocoons in Assam and nowhere else on earth; it gets glossier each time it is washed, so heirlooms improve.",
          },
        ],
      },
      {
        id: "majuli",
        name: "Majuli",
        tagline: "The river island that keeps shrinking and singing",
        language: "Assamese, in a Vaishnav monastic register",
        outfit:
          "Monks in plain white; performers in painted masks, dhoti and mirrored waistbands for the night dramas.",
        highlights: [
          {
            id: "satras",
            category: "Monuments",
            title: "The Satras",
            blurb:
              "Monasteries founded in the 16th century where prayer is choreography — boys learn drum, verse and mask-making before algebra.",
          },
          {
            id: "raas",
            category: "Festivals",
            title: "Raas Mahotsav",
            blurb:
              "November nights when whole villages stage Krishna's life in bhaona theatre, in Brajavali, a language invented for the stage.",
          },
          {
            id: "apong",
            category: "Food",
            title: "Apong & Bamboo-Steamed Fish",
            blurb:
              "Mising rice beer served in a bamboo cup, and river fish steamed inside a hollow stem with local herbs and nothing else.",
          },
          {
            id: "mask",
            category: "Crafts",
            title: "Mukha Mask-Making",
            blurb:
              "Bamboo frame, river clay, cow dung and cloth — masks large enough to wear as a whole body, hinged so the jaw can speak.",
          },
        ],
      },
    ],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    epithet: "Boulders, Bronze and Coffee",
    intro:
      "Ruined imperial bazaars among granite boulders, Hoysala temples carved like ivory, a coast of ghee-roast dosas, and hill slopes that quietly supply the country's coffee.",
    shape: "M248,446 L306,442 L320,494 L300,542 L262,536 L240,492 Z",
    labelAt: [278, 494],
    cities: [
      {
        id: "hampi",
        name: "Hampi",
        tagline: "An empire left out in the sun",
        language: "Kannada, with Telugu across the river",
        outfit:
          "Ilkal saris with a contrasting red kasuti-embroidered border; men in a white panche and Mysore peta for ceremony.",
        highlights: [
          {
            id: "vittala",
            category: "Monuments",
            title: "Vittala Temple",
            blurb:
              "A stone chariot with wheels that once turned, beside pillars that ring at different pitches when tapped — an orchestra quarried out of one hill.",
          },
          {
            id: "hampi-utsav",
            category: "Festivals",
            title: "Hampi Utsav",
            blurb:
              "Dance and puppetry staged among the ruins in winter; the boulders hold the day's heat and the sound.",
          },
          {
            id: "jolada",
            category: "Food",
            title: "Jolada Rotti & Ennegayi",
            blurb:
              "Sorghum flatbread with stuffed brinjal in peanut-sesame masala, eaten with a mound of raw onion and a chilli you were warned about.",
          },
          {
            id: "kasuti",
            category: "Crafts",
            title: "Kasuti Embroidery",
            blurb:
              "Counted-thread work with no knots on either side, patterned on temple chariots and palanquins.",
          },
        ],
      },
      {
        id: "mysuru",
        name: "Mysuru",
        tagline: "A royal city that still keeps the timetable",
        language: "Kannada, spoken with courtly rounding",
        outfit:
          "Mysore silk with a broad zari border; the Mysore peta turban is gold-edged and worn at an angle that used to indicate rank.",
        highlights: [
          {
            id: "palace",
            category: "Monuments",
            title: "Mysore Palace",
            blurb:
              "Indo-Saracenic excess with stained glass shipped from Glasgow; on Sunday nights ninety-seven thousand bulbs outline it like a drawing.",
          },
          {
            id: "dasara",
            category: "Festivals",
            title: "Mysuru Dasara",
            blurb:
              "Ten days ending with a caparisoned elephant carrying a golden howdah through streets that have rehearsed this for four centuries.",
          },
          {
            id: "mysore-pak",
            category: "Food",
            title: "Mysore Pak & Ghee Dosa",
            blurb:
              "Gram flour, sugar and unreasonable quantities of ghee, invented in the palace kitchen; breakfast is a dosa crisped in the same fat.",
          },
          {
            id: "sandalwood",
            category: "Crafts",
            title: "Sandalwood Carving",
            blurb:
              "Craftsmen work by smell as much as sight, cutting lattice screens so thin the grain glows when held to a lamp.",
          },
        ],
      },
      {
        id: "madikeri",
        name: "Madikeri",
        tagline: "Coffee, rain and a warrior's manners",
        language: "Kodava Takk, a language of its own",
        outfit:
          "Kodava men in the black kupya robe with a red sash and ornamental peeche kathi dagger; women drape the sari pleats behind, pinned at the shoulder.",
        highlights: [
          {
            id: "talakaveri",
            category: "Monuments",
            title: "Talakaveri",
            blurb:
              "The Kaveri's source — a tank on a hill where the river appears once a year, on schedule, to a crowd.",
          },
          {
            id: "kailpodh",
            category: "Festivals",
            title: "Kailpodh",
            blurb:
              "A harvest-season day when families clean and garland their firearms, then compete at shooting coconuts off a pole.",
          },
          {
            id: "pandi",
            category: "Food",
            title: "Pandi Curry & Kadumbuttu",
            blurb:
              "Pork blackened with kachampuli vinegar distilled from wild fruit, mopped up with steamed rice balls.",
          },
          {
            id: "coffee",
            category: "Crafts",
            title: "Shade-Grown Coffee",
            blurb:
              "Arabica under native trees, hand-picked cherry by cherry and dried on estate courtyards — the craft is in the sorting, not the roasting.",
          },
        ],
      },
    ],
  },
];

type Extra = { theme: Theme; timeline: TimelineEntry[]; gallery: GalleryItem[] };

const EXTRAS: Record<string, Extra> = {
  rajasthan: {
    theme: {
      display: "Rozha One",
      serif: "Cormorant Garamond",
      bg: "oklch(0.96 0.03 78)",
      ink: "oklch(0.26 0.07 32)",
      card: "oklch(0.98 0.018 80)",
      border: "oklch(0.84 0.05 70)",
      accent: "oklch(0.66 0.19 48)",
      deep: "oklch(0.34 0.14 20)",
      ornament: "oklch(0.78 0.12 85)",
      motif: "jaali",
    },
    timeline: [
      { id: "r1", era: "8th c.", title: "Rajput clans rise", text: "Gurjara-Pratihara power splinters into clans who will spend a thousand years building on hills." },
      { id: "r2", era: "1156", title: "Jaisalmer founded", text: "A yellow-sandstone fort placed on a caravan route between Delhi and the Persian Gulf." },
      { id: "r3", era: "1568", title: "Chittorgarh falls", text: "Mewar loses its fort and gains its defining story of defiance, retold in ballads still sung." },
      { id: "r4", era: "1727", title: "Jaipur drawn on paper", text: "Sawai Jai Singh II lays out a nine-block grid city with astronomy at its centre." },
      { id: "r5", era: "1949", title: "Twenty-two states, one Rajasthan", text: "Princely houses merge; palaces turn into hotels, and craft guilds survive by becoming exporters." },
    ],
    gallery: [
      { id: "rg1", title: "Bandhani", caption: "Thousands of thread-tied dots, opened after the dye bath." },
      { id: "rg2", title: "Sheesh Mahal", caption: "Mirror mosaic that multiplies a single flame." },
      { id: "rg3", title: "Blue Pottery", caption: "Cobalt on quartz dough, fired low and translucent." },
      { id: "rg4", title: "Jharokha", caption: "Carved balcony windows for watching without being watched." },
    ],
  },
  kerala: {
    theme: {
      display: "Yatra One",
      serif: "Cormorant Garamond",
      bg: "oklch(0.96 0.028 132)",
      ink: "oklch(0.24 0.05 150)",
      card: "oklch(0.98 0.016 130)",
      border: "oklch(0.83 0.05 140)",
      accent: "oklch(0.52 0.13 150)",
      deep: "oklch(0.28 0.08 155)",
      ornament: "oklch(0.76 0.14 92)",
      motif: "wave",
    },
    timeline: [
      { id: "k1", era: "3rd c. BCE", title: "Pepper leaves the coast", text: "Muziris trades with Rome; amphorae and coins arrive in exchange for spice." },
      { id: "k2", era: "52 CE", title: "A Christian tradition begins", text: "Syrian Christian communities take root on the Malabar coast, by tradition with St Thomas." },
      { id: "k3", era: "1341", title: "The flood that made Kochi", text: "A monsoon reshapes the coastline and opens the harbour that will draw every empire." },
      { id: "k4", era: "17th c.", title: "Kathakali codified", text: "Temple courtyards standardise the make-up, mudras and all-night structure of the form." },
      { id: "k5", era: "1957", title: "Literacy as policy", text: "Land reform and schooling reshape the state; theatre and libraries reach every village." },
    ],
    gallery: [
      { id: "kg1", title: "Kathakali Face", caption: "Rice paste and lamp black, applied over four hours." },
      { id: "kg2", title: "Kettuvallam", caption: "Coir-tied rice barges, not a nail in them." },
      { id: "kg3", title: "Theyyam", caption: "A dancer accepted as the deity for one night." },
      { id: "kg4", title: "Kasavu", caption: "Cream cotton with a single band of gold." },
    ],
  },
  punjab: {
    theme: {
      display: "Baloo Bhaijaan 2",
      serif: "Cormorant Garamond",
      bg: "oklch(0.97 0.03 96)",
      ink: "oklch(0.26 0.06 60)",
      card: "oklch(0.99 0.015 96)",
      border: "oklch(0.85 0.05 90)",
      accent: "oklch(0.62 0.19 28)",
      deep: "oklch(0.36 0.1 250)",
      ornament: "oklch(0.8 0.14 90)",
      motif: "phulkari",
    },
    timeline: [
      { id: "p1", era: "2600 BCE", title: "Harappan towns", text: "Brick cities with drains at Rakhigarhi and Ropar set the region's first grid." },
      { id: "p2", era: "1499", title: "Guru Nanak begins", text: "A teaching of one creator and shared kitchens spreads along the trade roads." },
      { id: "p3", era: "1604", title: "The Adi Granth", text: "Scripture compiled and installed at Amritsar; music becomes the medium of faith." },
      { id: "p4", era: "1799", title: "Ranjit Singh's court", text: "A Lahore-centred kingdom patronises frescoes, arms and gold leaf on the Darbar Sahib." },
      { id: "p5", era: "1947", title: "The line", text: "Partition splits the land, the language and the ballads; refugee villages rebuild both." },
    ],
    gallery: [
      { id: "pg1", title: "Phulkari", caption: "Darn stitch worked from the reverse, counted blind." },
      { id: "pg2", title: "Golden Temple", caption: "Marble, gold and a queue that never ends." },
      { id: "pg3", title: "Bhangra Drum", caption: "The dhol's two faces: one bass, one crack." },
      { id: "pg4", title: "Juttis", caption: "Leather slippers with zari that never wear out first." },
    ],
  },
  "west-bengal": {
    theme: {
      display: "Baloo Da 2",
      serif: "Cormorant Garamond",
      bg: "oklch(0.96 0.02 62)",
      ink: "oklch(0.24 0.05 40)",
      card: "oklch(0.98 0.014 62)",
      border: "oklch(0.84 0.04 56)",
      accent: "oklch(0.58 0.17 32)",
      deep: "oklch(0.32 0.1 24)",
      ornament: "oklch(0.8 0.11 82)",
      motif: "alpana",
    },
    timeline: [
      { id: "w1", era: "8th c.", title: "Pala bronze", text: "Buddhist workshops in Bengal export bronze and manuscript painting across Asia." },
      { id: "w2", era: "1690", title: "A trading post", text: "Three villages on the Hooghly are leased; a colonial capital grows over them." },
      { id: "w3", era: "1820s", title: "The Renaissance", text: "Reform, printing presses and Bengali prose remake the language in one generation." },
      { id: "w4", era: "1913", title: "Tagore's Nobel", text: "Songs and Santiniketan turn a regional literature into a world one." },
      { id: "w5", era: "2021", title: "Durga Puja listed", text: "UNESCO recognises the city's pandal art as intangible heritage." },
    ],
    gallery: [
      { id: "wg1", title: "Pandal Art", caption: "Bamboo cathedrals built for four days, then dismantled." },
      { id: "wg2", title: "Alpana", caption: "Rice-paste floor drawing, done freehand at dawn." },
      { id: "wg3", title: "Terracotta Temples", caption: "Bishnupur brick panels: epics in fired clay." },
      { id: "wg4", title: "Baul Ektara", caption: "One string, one gourd, an entire philosophy." },
    ],
  },
  "tamil-nadu": {
    theme: {
      display: "Anek Tamil",
      serif: "Cormorant Garamond",
      bg: "oklch(0.96 0.025 70)",
      ink: "oklch(0.25 0.06 36)",
      card: "oklch(0.98 0.014 70)",
      border: "oklch(0.84 0.045 64)",
      accent: "oklch(0.6 0.18 38)",
      deep: "oklch(0.3 0.11 26)",
      ornament: "oklch(0.79 0.13 88)",
      motif: "temple",
    },
    timeline: [
      { id: "t1", era: "300 BCE", title: "Sangam poems", text: "Anthologies of love and war set a literary standard Tamil still measures itself against." },
      { id: "t2", era: "7th c.", title: "Pallava stone", text: "Mamallapuram's monoliths move Tamil temple building from wood to granite." },
      { id: "t3", era: "1010", title: "Brihadisvara finished", text: "Rajaraja Chola raises a 66-metre vimana with no mortar and a shadow that never touches the ground at noon." },
      { id: "t4", era: "18th c.", title: "Carnatic trinity", text: "Tyagaraja, Dikshitar and Sastri fix the concert repertoire still sung each December." },
      { id: "t5", era: "1930s", title: "Bharatanatyam revived", text: "Temple dance is reclaimed and taken to the proscenium stage." },
    ],
    gallery: [
      { id: "tg1", title: "Gopuram", caption: "Painted tiers of gods, repainted every twelve years." },
      { id: "tg2", title: "Kolam", caption: "Rice flour dots joined at the doorstep before sunrise." },
      { id: "tg3", title: "Chola Bronze", caption: "Lost-wax casting: the wax is destroyed to free the god." },
      { id: "tg4", title: "Kanjeevaram", caption: "Body and border woven separately, then interlocked." },
    ],
  },
  "uttar-pradesh": {
    theme: {
      display: "Tiro Devanagari Hindi",
      serif: "Cormorant Garamond",
      bg: "oklch(0.96 0.018 52)",
      ink: "oklch(0.25 0.045 30)",
      card: "oklch(0.99 0.01 52)",
      border: "oklch(0.85 0.035 48)",
      accent: "oklch(0.58 0.12 24)",
      deep: "oklch(0.3 0.07 300)",
      ornament: "oklch(0.82 0.09 82)",
      motif: "jaali",
    },
    timeline: [
      { id: "u1", era: "1200 BCE", title: "Painted Grey Ware", text: "Iron-age settlements along the Ganga-Yamuna plain seed the epics' geography." },
      { id: "u2", era: "528 BCE", title: "Sarnath sermon", text: "The Buddha teaches in a deer park; a pillar and a stupa mark the spot." },
      { id: "u3", era: "1571", title: "Fatehpur Sikri", text: "Akbar builds a capital of debate, then abandons it when the water fails." },
      { id: "u4", era: "1653", title: "The Taj completed", text: "Twenty-two years of marble, inlay and river-bank engineering end in Agra." },
      { id: "u5", era: "1775", title: "Awadh moves to Lucknow", text: "A court of poets, cooks and embroiderers turns etiquette into an art form." },
    ],
    gallery: [
      { id: "ug1", title: "Chikankari", caption: "White on white, thirty-two named stitches." },
      { id: "ug2", title: "Marble Inlay", caption: "Carnelian petals cut thinner than a fingernail." },
      { id: "ug3", title: "Ganga Aarti", caption: "Brass lamps swung in unison at dusk." },
      { id: "ug4", title: "Banarasi Zari", caption: "Real silver-gilt thread, six months to a sari." },
    ],
  },
  maharashtra: {
    theme: {
      display: "Tiro Devanagari Marathi",
      serif: "Cormorant Garamond",
      bg: "oklch(0.95 0.02 250)",
      ink: "oklch(0.24 0.05 265)",
      card: "oklch(0.98 0.012 250)",
      border: "oklch(0.83 0.04 250)",
      accent: "oklch(0.56 0.15 20)",
      deep: "oklch(0.28 0.08 265)",
      ornament: "oklch(0.78 0.12 88)",
      motif: "warli",
    },
    timeline: [
      { id: "m1", era: "2nd c. BCE", title: "Rock-cut begins", text: "Buddhist monks cut prayer halls into basalt at Bhaja, Karla and Ajanta." },
      { id: "m2", era: "757", title: "Kailasa carved", text: "Ellora's monolithic temple is excavated top-down out of a single cliff." },
      { id: "m3", era: "1674", title: "Shivaji crowned", text: "A hill-fort strategy becomes a state; the Maratha navy takes to the Konkan." },
      { id: "m4", era: "1893", title: "Public Ganeshotsav", text: "A household ritual is turned into a mass street festival with civic purpose." },
      { id: "m5", era: "1913", title: "Cinema arrives", text: "Phalke's first feature is shot in Bombay; an industry follows and never leaves." },
    ],
    gallery: [
      { id: "mg1", title: "Warli Wall", caption: "Rice paste circles, triangles and an endless dance." },
      { id: "mg2", title: "Paithani Pallu", caption: "Tapestry peacocks with no wrong side." },
      { id: "mg3", title: "Ajanta Ceiling", caption: "Pigment older than perspective, lit by mirror." },
      { id: "mg4", title: "Koli Nets", caption: "Fishing floats drying on Versova sand." },
    ],
  },
  gujarat: {
    theme: {
      display: "Mukta Vaani",
      serif: "Cormorant Garamond",
      bg: "oklch(0.97 0.022 340)",
      ink: "oklch(0.25 0.06 340)",
      card: "oklch(0.99 0.012 340)",
      border: "oklch(0.85 0.04 340)",
      accent: "oklch(0.55 0.19 350)",
      deep: "oklch(0.3 0.11 300)",
      ornament: "oklch(0.79 0.13 92)",
      motif: "bandhani",
    },
    timeline: [
      { id: "g1", era: "2500 BCE", title: "Dholavira & Lothal", text: "A Harappan water city and the world's earliest known dockyard sit on this coast." },
      { id: "g2", era: "1026", title: "Rani ki Vav begun", text: "A queen builds an inverted temple seven storeys into the ground." },
      { id: "g3", era: "15th c.", title: "Ahmedabad's guilds", text: "Weavers, dyers and stone-carvers organise into pols and mahajans." },
      { id: "g4", era: "1930", title: "Salt at Dandi", text: "A 385-km walk ends at the sea and makes salt a national argument." },
      { id: "g5", era: "2001", title: "After the earthquake", text: "Kutch rebuilds, and its embroidery and ajrakh workshops reorganise as collectives." },
    ],
    gallery: [
      { id: "gg1", title: "Ajrakh", caption: "Sixteen resist stages in indigo and madder." },
      { id: "gg2", title: "Rabari Mirrorwork", caption: "Mirrors stitched in clan constellations." },
      { id: "gg3", title: "Patola", caption: "Double ikat aligned thread by thread." },
      { id: "gg4", title: "Stepwell", caption: "Architecture that goes down instead of up." },
    ],
  },
  assam: {
    theme: {
      display: "Baloo Bhaina 2",
      serif: "Cormorant Garamond",
      bg: "oklch(0.96 0.022 118)",
      ink: "oklch(0.24 0.045 130)",
      card: "oklch(0.98 0.014 118)",
      border: "oklch(0.83 0.04 122)",
      accent: "oklch(0.55 0.12 138)",
      deep: "oklch(0.29 0.07 140)",
      ornament: "oklch(0.8 0.11 96)",
      motif: "wave",
    },
    timeline: [
      { id: "a1", era: "4th c.", title: "Kamarupa", text: "A kingdom on the Brahmaputra mints coins and copper-plate grants." },
      { id: "a2", era: "1228", title: "The Ahoms arrive", text: "A Tai dynasty crosses the Patkai hills and rules the valley for six centuries." },
      { id: "a3", era: "1500s", title: "Srimanta Sankardeva", text: "Bhakti reform builds satras where drama, drum and weaving are taught together." },
      { id: "a4", era: "1837", title: "Tea leaves the valley", text: "Assam's wild camellia is planted in rows; labour lines and a new cuisine follow." },
      { id: "a5", era: "1985", title: "Kaziranga listed", text: "The rhino grassland becomes World Heritage; conservation joins the cultural calendar." },
    ],
    gallery: [
      { id: "ag1", title: "Muga Silk", caption: "Golden thread that improves with washing." },
      { id: "ag2", title: "Bihu Dhol", caption: "Struck with stick and palm at once." },
      { id: "ag3", title: "Mukha Mask", caption: "Bamboo, clay and cloth, hinged to speak." },
      { id: "ag4", title: "Gamosa", caption: "A white towel that functions as a greeting." },
    ],
  },
  karnataka: {
    theme: {
      display: "Anek Kannada",
      serif: "Cormorant Garamond",
      bg: "oklch(0.96 0.022 88)",
      ink: "oklch(0.25 0.05 60)",
      card: "oklch(0.98 0.014 88)",
      border: "oklch(0.84 0.04 80)",
      accent: "oklch(0.58 0.15 62)",
      deep: "oklch(0.3 0.09 44)",
      ornament: "oklch(0.8 0.12 86)",
      motif: "temple",
    },
    timeline: [
      { id: "c1", era: "450", title: "Kadamba script", text: "Early Kannada inscriptions at Halmidi begin a fifteen-century written record." },
      { id: "c2", era: "1120", title: "Hoysala carving", text: "Soapstone temples at Belur and Halebidu are worked like ivory." },
      { id: "c3", era: "1336", title: "Vijayanagara founded", text: "A bazaar empire among boulders grows to be the era's largest city after Beijing." },
      { id: "c4", era: "1799", title: "Mysore's Wodeyars return", text: "A court restores silk, sandalwood and Dasara as instruments of state." },
      { id: "c5", era: "1854", title: "Coffee on the ghats", text: "Kodagu's shade plantations formalise; the region's cuisine and calendar reorganise around harvest." },
    ],
    gallery: [
      { id: "cg1", title: "Stone Chariot", caption: "Wheels that once turned, carved from granite." },
      { id: "cg2", title: "Sandalwood Lattice", caption: "Screens cut thin enough to glow." },
      { id: "cg3", title: "Yakshagana", caption: "Night-long theatre in crown and greasepaint." },
      { id: "cg4", title: "Mysore Silk", caption: "Zari borders woven for a palace timetable." },
    ],
  },
};

const FALLBACK_EXTRA: Extra = EXTRAS["rajasthan"]!;

export const STATES: State[] = [...BASE_STATES, ...NEW_STATES].map((s) => {
  const extra = EXTRAS[s.slug] ?? FALLBACK_EXTRA;
  return { ...s, ...structuredClone(extra) };
});
