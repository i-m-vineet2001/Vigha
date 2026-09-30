



// ─────────────────────────────────────────────────────────────
//  EVERYTHING on the site comes from this one file.
//  Change a name, a date, a photo or a message here and the
//  whole website updates. Nothing else needs to be touched.
// ─────────────────────────────────────────────────────────────

export const img = {
  hands: "/images/handsHolding.png",
  coffee: "/images/dreemy.png",
  rose: "/images/holdingArms.png",
  sunset: "/images/mirrorselfie.png",
  letter:
    "https://media.base44.com/images/public/6abc93b5b018fd9b879d9e78/ba03cc86c_generated_image.png",
  hotel:
    "https://media.base44.com/images/public/6abc93b5b018fd9b879d9e78/afc13fea5_generated_image.png",
  final: "/images/final.png",
  final2: "/images/final2.jpeg",
  hand_ss: "/images/ss.png",
  couple: "/images/couple.png",
  couple2: "/images/couple2.png",
  cover1:
    "https://media.base44.com/images/public/6abc93b5b018fd9b879d9e78/8714e548e_generated_image.png",
  cover2:
    "https://media.base44.com/images/public/6abc93b5b018fd9b879d9e78/a6cb9fd14_generated_image.png",
  cover3:
    "https://media.base44.com/images/public/6abc93b5b018fd9b879d9e78/a39d05fde_generated_image.png",
};

export const couple = {
  him: "Vineet",
  her: "Megha",
  hisNicknameForHer: "Baby gurl",
  herNicknameForHim: "Baby",
  howWeMet: "Bumble",
  specialPlace: "Mardian Hotel",
};

export const dates = {
  firstChat: "2026-08-26T00:00:00",
  firstCall: "2026-08-28T00:00:00",
  firstMeet: "2026-09-13T00:00:00",
  deeperIntimacy: "2026-09-21T00:00:00",
};

export const hero = {
  eyebrow: "A little corner of the internet",
  title: "Hey, you ❤️",
  subtitle: "I made a little corner of the internet just for us.",
  signature: "Megha × Vineet",
  cta: "Enter Our Little World →",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "memories", label: "Memories" },
  { id: "song", label: "Our Song" },
  { id: "openwhen", label: "Open When" },
  { id: "quiz", label: "Quiz" },
  { id: "future", label: "Future" },
  { id: "letter", label: "A Letter" },
];

export const timeline = [
  {
    iso: dates.firstChat,
    date: "26 August 2026",
    title: "The First Chat",
    emoji: "💬",
    text: "Two strangers on Bumble started talking… and somehow this became us.",
    image: img.hands,
  },
  {
    iso: dates.firstCall,
    date: "28 August 2026",
    title: "The First Call",
    emoji: "📞",
    text: "From typing messages to actually hearing each other's voice.",
    image: img.coffee,
  },
  {
    iso: dates.firstMeet,
    date: "13 September 2026",
    title: "The First Meet",
    emoji: "❤️",
    text: "The first time the person behind the screen was standing right in front of me.",
    image: img.sunset,
  },
  {
    iso: dates.deeperIntimacy,
    date: "21 September 2026",
    title: "Something Changed",
    emoji: "🫶",
    text: "The first moment when the intimacy between us felt different. More real. More ours.",
    image: img.rose,
  },
];

export const photos = [
  {
    src: img.hand_ss,
    caption: "The day your hand just… stayed in mine.",
    format: "cinematic",
  },
  {
    src: img.sunset,
    caption: "Chasing the light, and you were already ahead of it.",
    format: "cinematic",
  },
  {
    src: img.coffee,
    caption:
      "Shaam bhi khoobsurat hai… par tumhare saath har pal thoda aur haseen lagta hai.",
    format: "polaroid",
  },
  {
    src: img.rose,
    caption:
      "Haath tumhara ho, toh raasta chahe jaisa ho… safar hamesha khoobsurat lagega.",
    format: "polaroid",
  },
{
  src: img.couple,
  caption: "I love you, and I love us.",
  format: "polaroid",
}
];

export const themes = [
  {
    title: "Intimacy",
    emoji: "🤍",
    text: "The comfort and closeness we have started building together — the kind that doesn't need to be performed.",
  },
  {
    title: "Looking Into Her Eyes",
    emoji: "👀",
    text: "A moment that feels quiet but says more than words. I lose track of what I was going to say.",
  },
  {
    title: "Deep Talks",
    emoji: "🌙",
    text: "Conversations that go beyond small talk — the ones that only happen after midnight.",
  },
  {
    title: "Caring For Her",
    emoji: "🫂",
    text: "The little things that make me want to look after her, even when she insists she's fine.",
  },
  {
    title: "Seeing A Future",
    emoji: "🌌",
    text: "Not just thinking about today, but imagining a life together — and liking what I see.",
  },
];

export const specialPlace = {
  name: "Mardian Hotel",
  tagline: "Our special place",
  image: img.hotel,
  text: "Some places stop being places and start being ours. This one is where a lot of our story quietly happened — and where I'd happily go again just to watch you be you.",
};

export const songs = [
  {
    title: "Saiyaara - Ek tha Tiger",
    artist: "Mohit Chauhan, Tarannum Mallik, Sohail Sen, Kausar Munir",
    cover: img.cover1,
    src: "/audio/our-song1.mp3",
    duration: 392,
    note: "Yours fav.",
  },
  {
    title: "Tujmein Rab Dikhta Hai - Rab Ne Bana Di Jodi",
    artist: "Roop Kumar Rathod, Shreya Ghosal, Salim-Sulaiman, Jaideep Sahni",
    cover: img.cover2,
    src: "/audio/our-song2.mp3",
    duration: 281,
    note: "Dedicated to you.",
  },
  {
    title: "tum hi ho - Aashiqui 2",
    artist: "Arijit Singh, Shreya Ghosal",
    cover: img.cover3,
    src: "/audio/our-song3.mp3",
    duration: 245,
    note: "only for you.",
  },
];

export const letters = [
  {
    id: "miss",
    title: "Open when you miss me ❤️",
    teaser: "For the nights the distance feels loud.",
    body: `Agar tum ye padh rahi ho, toh matlab tumhe meri yaad aa rahi hai.
Aur sach bolun, mujhe shayad tumhari yaad tumse thodi pehle hi aa gayi thi. ❤️

Ab ek baar in photos ko phir se dekho…
Ye sirf pictures nahi hain, ye humare woh chhote-chhote moments hain jo ab meri favourite memories ban chuke hain.

Aur haan, main itna bhi door nahi hoon, baby gurl. 🫶🏻
Bas aankhein band karo… imagine karo main tumhare paas baitha hoon, tumhe apne paas kheench raha hoon, aur bina kisi reason ke tumse apne din ki saari random baatein bata raha hoon… bilkul waise hi jaise hum karte hain.

Jitne door hain hum, aasman bhi toh humara ek hi hai… 🌙
Tum jab chaaho uss aasman ko dekh lena,
shayad ussi waqt main bhi tumhe yaad kar raha hounga.

Faasle sirf jagah ke hain, dil ke nahi. ❤️

Aur agar phir bhi meri yaad aaye… toh mujhe call kar lena.
Tumhari awaaz sunne ke liye mujhe kabhi “Open When” letter ki zaroorat nahi padegi. ❤️🎬`,
  },
  {
    id: "sad",
    title: "Open when you're sad 🫂",
    teaser: "For the heavy days.",
    body: `Tumhe abhi theek hone ki zaroorat nahi hai, baby gurl.
Har cheez explain karne ki bhi zaroorat nahi hai.

Bas… thodi der ke liye sab kuch chhod do,
aur imagine karo ki main tumhare paas baitha hoon.
Kuch pooch nahi raha, kuch force nahi kar raha…
bas tumhare saath hoon. ❤️

Tumhe strong banne ki zaroorat nahi hai mere saamne.
Tum soft ho sakti ho, emotional ho sakti ho,
thodi si messy bhi ho sakti ho…
aur trust me, inmein se kuch bhi mere tumhare liye feelings ko change nahi karega.

Toh ek deep breath lo… 🫶🏻
Sab kuch abhi solve karna zaroori nahi hai.

Bas yaad rakhna - 
tum akeli nahi ho.
Main hoon… aur jab tak tumhe meri zaroorat hai, main yahin hoon. ❤️️`,
  },
  {
    id: "angry",
    title: "Open when you're angry with me 😭",
    teaser: "For when I've clearly said something dumb.",
    body: `Okay… shayad is baar meri galti thi. ❤️
Aur honestly, main ek letter ke through tumse argue karke aur silly nahi banna chahta. 😅

Bas mujhe bata do maine kya kiya…
Main iss baar bina defend kiye, bina apni side justify kiye,
sirf tumhari baat properly sununga.

Kyuki tumhara upset hona mere liye
“right” hone se kahin zyada important hai. 🫶🏻

Toh gussa ho, complain karo, jo dil mein hai bol do…
main yahin hoon, sunne ke liye.

Aur phir… idhar aao. ❤️
Thoda sa pyaar, thodi si baat,
aur milke sab theek kar lenge.

Tumse ladna nahi hai mujhe,
tumhare saath rehna hai. 🫂❤️

Aur haan… ek baat yaad rakhna -

“Mohabbat mein jeetna zaroori nahi hota,  
kabhi-kabhi bas ek dusre ko samajhna hi kaafi hota hai.”❤️🎬`,
  },
  {
    id: "reassurance",
    title: "Open when you need reassurance",
    teaser: "For when the doubts get loud.",
    body: `Agar kabhi doubts zyada loud ho jaayein,
toh bas ek baat yaad rakhna, baby gurl…

Kuch bhi change nahi hua hai.
Na tumhe dekhne ka mera nazariya,
na tumhare baare mein baat karne ka tarika,
na apni chhoti-chhoti plans mein tumhe imagine karna. ❤️

Tum mere liye koi “maybe” nahi ho.
Tum woh ho jise main baar baar choose karta hoon…
even un ordinary days mein,
jab kuch special ho bhi nahi raha hota.

Mujhe tumhare saath sirf khoobsurat moments nahi chahiye,
mujhe woh normal days bhi chahiye 
random calls, silly fights, bina reason ke hasi,
aur woh chhoti-chhoti baatein jo sirf hum dono samajhte hain. 🫶🏻

Tum matter karti ho.
Bahut quietly…
lekin bahut, bahut deeply. ❤️

Aur agar kabhi dil phir bhi doubt kare,
toh mere words nahi… mere actions dekh lena.

“Tum meri kahaani ka koi temporary chapter nahi ho…
tum woh hissa ho jise main har baar padhna chahta hoon.” ❤️🎬`,
  },
  {
    id: "meaning",
    title: "Open when you want to know what you mean to me",
    teaser: "The long answer.",
    body: `Pata hai tum mere liye kya ho, Megha?

Tum woh pehli person ho jise main apni har chhoti-badi baat batana chahta hoon.
Kuch achha ho, toh sabse pehle tum yaad aati ho…
aur kuch bura ho, toh bhi dil karta hai sabse pehle tumse hi baat karun. ❤️

Tumhari wajah se ordinary evenings bhi thodi special lagne lagi hain.
Ek simple call, tumhari awaaz, tumhari random si baatein…
aur suddenly ek normal sa din bhi yaad rakhne layak ban jaata hai. 🫶🏻

Tumne mujhe khud ka ek softer version bhi dikhaya hai.
Thoda aur patient banna,
thoda aur samajhna,
aur bina kisi reason ke kisi ka itna care karna. ❤️

Aur agar koi mujhse pooche,
“Tumhare liye woh kya hai?”

Toh shayad main bas itna kahunga 

“Woh woh ladki hai jiske saath main sirf aaj nahi,
apne saare kal imagine karta hoon.”❤️️

Main ye sirf romantic hone ke liye nahi keh raha…
sach mein, dil se keh raha hoon.

I don't just want more moments with you…
I want a whole life full of them. 🎬❤️`,
  },
];

export const quiz = [
  {
    q: "Where did we first meet?",
    options: ["Instagram", "Bumble", "At a wedding", "Through friends"],
    answer: 1,
  },
  {
    q: "When was our first chat?",
    options: [
      "26 August 2026",
      "13 September 2026",
      "28 August 2026",
      "20 September 2026",
    ],
    answer: 0,
  },
  {
    q: "When was our first call?",
    options: [
      "26 August 2026",
      "28 August 2026",
      "21 September 2026",
      "13 September 2026",
    ],
    answer: 1,
  },
  {
    q: "Where did we have our first meet?",
    options: ["Mardian Hotel", "A coffee shop", "The NH", "Bus Stand"],
    answer: 2,
  },
  {
    q: "What do I call you?",
    options: ["Baby", "billi", "Baby gurl", "Mem"],
    answer: 2,
  },
  {
    q: "What do you call me?",
    options: ["Bro", "Vineet", "Babu", "Baby/Cutupatutooo"],
    answer: 3,
  },
  {
    q: "What is something I love doing with you?",
    options: [
      "Talking for hours",
      "Making out",
      "fondling you",
      "Taking walks",
    ],
    answer: 2,
  },
  {
    q: "Our chemistry feels more like…",
    options: [
      "Cute",
      "Romantic",
      "Intense and passionate",
      "A little too dangerous & Wild when we're alone.",
    ],
    answer: 2,
  },
];

export const bucketList = [
  "Travel somewhere we've never been",
  "Watch a sunrise together",
  "Have a completely random road trip",
  "Cook together",
  "Make more memories",
  "Grow together",
  "Build a home",
  "Grow old together",
  "Explore our deepest fantasies",
  "Making out in every place",
  
];

export const letter = {
  heading: "It's not always about you or me. It's about us.",
  body: [
    "Dear Megha,",
    "It's not always about you or me. It's us.",
    "We love each other, and no matter what life brings, I want us to keep choosing each other.",
    "I love you mentally, physically, and emotionally.",
    "I'm not only looking at you as my girlfriend.",
    "I see the woman I could build a life with.",
    "A wife.",
    "A mother to our future kids.",
    "A daughter-in-law to my parents.",
    "A life partner.",
    "My person.",
    "I want us to grow together, experience life together, and eventually grow old saath mein.",
    "I don't just want memories with you.",
    "I want a life full of them.",
  ],
};

export const counter = {
  title: "Since the day our story started…",
  subtitle: "26 August 2026 — our first chat",
  extras: [
    { label: "First Call", value: "28 August 2026" },
    { label: "First Meet", value: "13 September 2026" },
  ],
};

export const surprise = {
  teaser: "Wait… there's one more thing.",
  button: "Open it ❤️",
  lines: [
    "Megha… kabhi socha tha, ek random si mulaqat",
    "itni khoobsurat kahaani ban jayegi? ❤️",

    "",

    "Shayad kuch kahaaniyan likhi nahi jaati…",
    "bas mil jaati hain. ✨",

    "",

    "Aur agar ye kisi chapter ka end hai,",
    "toh main ise goodbye nahi kahunga.",

    "Kyuki mere liye,",
    "ye humari kahaani ka end nahi…",
    "ek nayi beginning hai. ❤️",

    "",

    "Ek promise tumse…",

    "Ki khushi mein hum saath celebrate karenge,",
    "aur mushkil waqt mein ek doosre ke against nahi,",
    "ek doosre ke saath khade rahenge.",

    "",

    "Galti hogi toh baat karenge.",
    "Gussa aayega toh thoda waqt lenge.",
    "Par ego ko humare beech nahi aane denge.",

    "Aur jab zarurat hogi,",
    "ek doosre ko maaf karna bhi seekhenge. 🤍",

    "",

    "Tumhare family ki respect meri responsibility hogi,",
    "aur meri family tumhari bhi hogi.",

    "Dono families ke pyaar,",
    "izzat aur emotions ko samajhne ki",
    "poori koshish karenge.",

    "",

    "Because pyaar sirf ek doosre ko paane ka naam nahi hai…",

    "Pyaar hai ek doosre ke saath",
    "ek poori duniya banana.",

    "",

    "Aur agar kabhi life perfect nahi hui…",
    "toh koi baat nahi.",

    "Mujhe perfect life nahi chahiye.",
    "Bas har imperfect din ke end mein…",

    "tum mere paas ho,",
    "aur main tumhare paas. ❤️",

    "",

    "So Megha…",

    "Let's begin.",

    "Naye sapne.",
    "Naye vaade.",
    "Naye chapters.",

    "Aur iss baar…",
    "together. 🫶🏻",

    "",

    "Jo bhi ho kal… ek baat yaad rakhna,",

    "main tumhe sirf aaj ke liye nahi,",
    "har aane wale kal mein choose karna chahta hoon. ❤️",

    "",

    "Maybe this isn't the end of our story.",

    "Maybe…",
    "this is the scene",
    "where our real story finally begins. 🎬❤️",

    "",

    "— Vineet × Megha",
  ],
  final: "Here's to us. ❤️",
  images: [img.final, img.final2, img.couple2],
};