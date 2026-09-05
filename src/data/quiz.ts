export type Question = {
  id: string;
  region: string;
  prompt: string;
  options: string[];
  answer: number;
  note: string;
};

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    region: "Rajasthan",
    prompt: "Which Jaipur palace is famed for its 953 latticed windows built so royal women could watch street life unseen?",
    options: ["Hawa Mahal", "Amber Fort", "Jal Mahal", "City Palace"],
    answer: 0,
    note: "Hawa Mahal — the 'palace of winds' — was raised in 1799 as a honeycomb screen of jharokhas.",
  },
  {
    id: "q2",
    region: "Kerala",
    prompt: "Onam, Kerala's harvest festival, welcomes the homecoming of which mythical king?",
    options: ["Ravana", "Mahabali", "Harishchandra", "Bhagiratha"],
    answer: 1,
    note: "Households lay pookalam flower carpets and a 26-dish sadya for King Mahabali's yearly visit.",
  },
  {
    id: "q3",
    region: "Punjab",
    prompt: "Phulkari, Punjab's heirloom embroidery, is worked with darning stitch in which material?",
    options: ["Silk floss", "Gold zari wire", "Cotton chikan thread", "Woollen yarn"],
    answer: 0,
    note: "Untwisted silk floss is stitched from the reverse, so the flowers 'grow' on the front.",
  },
  {
    id: "q4",
    region: "West Bengal",
    prompt: "Which Bengali sweet is a clay-pot dessert of milk slow-thickened with date palm jaggery?",
    options: ["Nolen gurer sandesh", "Rasgulla", "Mishti doi", "Pantua"],
    answer: 2,
    note: "Mishti doi ferments in earthen pots that wick away water and deepen the caramel.",
  },
  {
    id: "q5",
    region: "Tamil Nadu",
    prompt: "The Brihadeeswarar Temple at Thanjavur, with its 66-metre vimana, was built by which dynasty?",
    options: ["Pallavas", "Cholas", "Pandyas", "Nayaks"],
    answer: 1,
    note: "Rajaraja Chola I consecrated it around 1010 CE; its granite tower still casts no midday shadow.",
  },
  {
    id: "q6",
    region: "Uttar Pradesh",
    prompt: "Which craft is Varanasi most celebrated for?",
    options: ["Bidri metalwork", "Banarasi brocade weaving", "Blue pottery", "Bamboo masks"],
    answer: 1,
    note: "Banarasi looms brocade silk with gold and silver zari, once reserved for Mughal courts.",
  },
  {
    id: "q7",
    region: "Maharashtra",
    prompt: "The rock-cut Ajanta caves are decorated principally with which art form?",
    options: ["Buddhist murals", "Jain marble carving", "Mughal inlay", "Mosaic glasswork"],
    answer: 0,
    note: "Ajanta's painted walls are the finest surviving cycle of ancient Indian Buddhist murals.",
  },
  {
    id: "q8",
    region: "Gujarat",
    prompt: "Patan patola is a double-ikat textile in which both threads are resist-dyed before weaving. What does that mean?",
    options: [
      "Only the weft is tied and dyed",
      "The cloth is block-printed after weaving",
      "Warp and weft are both tied and dyed to plan",
      "The pattern is embroidered on afterwards",
    ],
    answer: 2,
    note: "Warp and weft are each dyed to a pattern, then matched on the loom — a single sari can take months.",
  },
  {
    id: "q9",
    region: "Assam",
    prompt: "Bihu, Assam's best-loved festival, chiefly marks what?",
    options: ["The monsoon's arrival", "The Assamese new year and harvest cycle", "A temple chariot procession", "The end of winter fasting"],
    answer: 1,
    note: "Rongali Bihu opens the Assamese new year in mid-April with dhol, pepa horn and husori songs.",
  },
  {
    id: "q10",
    region: "Karnataka",
    prompt: "Hampi's boulder-strewn ruins were the capital of which empire?",
    options: ["Vijayanagara", "Hoysala", "Chalukya", "Kadamba"],
    answer: 0,
    note: "Vijayanagara traders once described Hampi as the greatest city they had seen after Rome.",
  },
  {
    id: "q11",
    region: "Kerala",
    prompt: "Kathakali performers are known for which signature element?",
    options: ["Bare-faced minimalism", "Elaborate painted faces and towering headgear", "Masked stick puppetry", "Silent shadow play"],
    answer: 1,
    note: "Green-faced pacha heroes, layered skirts and eye-language carry night-long temple epics.",
  },
  {
    id: "q12",
    region: "Rajasthan",
    prompt: "Bandhani cloth gets its patterns from which technique?",
    options: ["Tie-and-dye with tiny knotted dots", "Woodblock printing", "Mirror embroidery", "Hand painting with kalam pens"],
    answer: 0,
    note: "Artisans pinch and tie thousands of points with thread; each knot resists the dye as a dot.",
  },
];

export type Badge = {
  id: string;
  name: string;
  at: number;
  blurb: string;
};

/** unlocked at cumulative point milestones */
export const BADGES: Badge[] = [
  { id: "b1", name: "Curious Traveller", at: 20, blurb: "You have set out on the atlas road." },
  { id: "b2", name: "Heritage Explorer", at: 60, blurb: "Ten answers deep into India's inheritance." },
  { id: "b3", name: "Festival Keeper", at: 120, blurb: "You know the calendars of celebration." },
  { id: "b4", name: "Master Curator", at: 200, blurb: "The atlas keeps few secrets from you now." },
];

export const POINTS_PER_CORRECT = 10;

export const SEED_LEADERBOARD: { name: string; points: number }[] = [
  { name: "Meera R.", points: 180 },
  { name: "Ishaan K.", points: 150 },
  { name: "Ananya D.", points: 120 },
  { name: "Rohit S.", points: 90 },
  { name: "Fatima Q.", points: 60 },
];
