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
