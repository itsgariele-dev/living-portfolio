// ============================================================
//  GARIELE.COM — CONTENT FILE
//  Edit this file to update copy and images on your site.
//  No HTML knowledge needed. Save, push to GitHub, done.
//
//  IMAGE URLS: replace any url value with a new GitHub raw URL
//  e.g. https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/YOUR-FILE.jpg
// ============================================================

const CONTENT = {

  // ── SITE ──────────────────────────────────────────────────
  site: {
    name: "Gariele.com",
    location: "Victoria, BC",
  },

  // ── QUOTE ─────────────────────────────────────────────────
  quote: {
    // Words wrapped in ** will appear in green
    text: "CHEF'S **KISS**. EVERYTHING YOU TOUCH IS **GOLD.**",
    attribution: "— MY BEST FRIEND, WHEN SHE SAW THIS PAGE.",
  },

  // ── CURRENTLY ─────────────────────────────────────────────
  // link is optional — remove or leave blank for non-linked cards
  currently: [
    {
      label: "Reading",
      value: "Project Hail Mary — Andy Weir",
      link: "https://www.goodreads.com/book/show/54493401-project-hail-mary",
      linkHint: "Open on Goodreads",
      blurb: "Space isn't usually my jam, but I loved the movie, so here we are.",
    },
    {
      label: "Earworming",
      value: "End of Beginning — Djo",
      link: "https://open.spotify.com/track/3qhlB30KknSejmIvZZLjOD",
      linkHint: "Listen on Spotify",
      blurb: "I play this when I need to calm down my brain, which is often.",
    },
    {
      label: "Watching",
      value: "Survivor Season 50",
      link: "https://www.cbs.com/shows/survivor/",
      linkHint: "Play a Game",
      blurb: "LOVE me some reality competition television, especially this one.",
    },
    {
      label: "Eating",
      value: "TikTok-Viral Tomato Feta Pasta",
      link: "https://www.instagram.com/reels/C2_TbZ4O1KM/",
      linkHint: "Try it Out",
      blurb: "I don't care if this trended in 2021 - I'm still obsessed.",
    },
    {
  label: "Gossipping",
  value: "Scamanda Drama!",
  link: "https://open.spotify.com/episode/00IHxifPxyXoDpN5QydggS?si=Uju2ChxiQXeCjKwUXVHCRA",
  linkHint: "Listen on Spotify",
  blurb: "My fav podcasters breakdown the latest Summer House dramz.",
},
{
  label: "Wanting",
  value: "Canon RF 100-400mm Lens",
  link: "https://kerrisdalecameras.com/shop/canon-rf-100-400mm-f5-6-8-is-usm/aea46ea0-f571-0139-5a7d-00163ecd2826",
  linkHint: "Someone buy me this",
  blurb: "I promised myself I wouldn't collect more lenses. Oops.",
},
  ],

  // ── TWO TRUTHS AND A LIE ───────────────────────────────────
  // lieIndex: which card is the lie — 0, 1, or 2
  // lightbox: what shows when they guess correctly
  truths: {
    lieIndex: 1,
    cards: [
      "I once bumped into Jude Law wearing pajamas on the streets of Notting Hill in London.",
      "I have a degree in Psychology but briefly considered going to school for Marine Biology.",
      "I was born and raised in Trinidad and Tobago, where my lineage can be traced back multiple generations.",
    ],
    lightbox: {
      image: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/rad-girls.jpg",
      tag: "You know me too well.",
      headline: "That's the lie. 🎉",
      copy: "I actually studied Marketing but dropped out when I started my first business, Rad Girls Collective. Within two years, I grew the community to 100k+ followers and landed collabs with Lululemon and MEC.",
    },
  },

  // ── PHOTO STRIP ───────────────────────────────────────────
  // 6 images of you. Swap URLs for new personality shots.
  // On mobile only the first 2 show.
  photoStrip: [
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me-laugh.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me-renfrew.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me-beach.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me-joy.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me-water.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me-hat.jpg",
  ],

  // ── WALLPAPERS ────────────────────────────────────────────
  // imageUrl: the photo shown in the card
  // downloadUrl: what downloads when they click — can be same as imageUrl
  //              or a higher-res version hosted elsewhere
  wallpapers: {
    subheading: "Photos I took. Yours to keep.",
    printShopUrl: "https://dreamworthy.pixieset.com/prints/",
    items: [
      {
        title: "Coastal Trail",
        blurb: "China Beach, Vancouver Island. Taken mid surf session.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-1.jpg",
        downloadUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-1.jpg",
      },
      {
        title: "Jungle Cruise",
        blurb: "The most magical place on earth — if you can believe it.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-2.jpg",
        downloadUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-2.jpg",
      },
      {
        title: "Peaks From Above",
        blurb: "From a Cessna, 5,000ft up.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-3.jpg",
        downloadUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-3.jpg",
      },
      {
        title: "Paris Je T'aime",
        blurb: "Sacré-Cœur, quiet morning, no tourists yet.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-4.jpg",
        downloadUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-4.jpg",
      },
      {
        title: "New York New York",
        blurb: "One of many skylines. Never gets old.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-5.jpg",
        downloadUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-5.jpg",
      },
      {
        title: "The Round Tower",
        blurb: "Rundetaarn, Copenhagen. Standing since 1642.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-6.jpg",
        downloadUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-6.jpg",
      },
    ],
  },

  // ── TRAVEL GUIDES ─────────────────────────────────────────
  // Set comingSoon: true to disable the link and show "Coming Soon"
  travel: {
    subheading: "I planned the entire trip, so you don't have to!",
    guides: [
      {
        city: "Copenhagen",
        description: "3 days in Denmark's coolest city. Word to the wise: prepare your wallet.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Copenhagen.jpg",
        guideUrl: "https://copenhagen-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Gothenburg",
        description: "A full week in Sweden's second city - and my unexpected fav!",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Gothenburg.jpg",
        guideUrl: "https://gothenburg-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Edinburgh",
        description: "Trust me: you're going to love spending 5 days in Edinburgh.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Edinburgh.jpg",
        guideUrl: "https://edinburgh-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Victoria",
        description: "My hometown! This little city has so much to offer.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Victoria.jpg",
        guideUrl: "https://victoria-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Dublin",
        description: "How to spend 5 days in Dublin if you're into pubs + live music.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Dublin.jpg",
        guideUrl: "https://dublin-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Tofino",
        description: "The gem of Canada, where you can surf year-round. Wait for it.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Tofino.jpg",
        guideUrl: "",
        comingSoon: true,
      },
    ],
  },

  // ── BOOKS ─────────────────────────────────────────────────
  // stars: use ★ for filled, ☆ for empty — e.g. "★★★★☆"
  // coverUrl: leave as openlibrary URL or swap for a custom image
  // micro: your one-line review shown on the card
 // ── BOOKS ─────────────────────────────────────────────────
  // stars: use ★ for filled, ☆ for empty — e.g. "★★★★☆"
  // coverUrl: leave as openlibrary URL or swap for a custom image
  // micro: your one-line review shown on the card
  books: {
    subheading: "Dark fiction. No apologies.",
    items: [
      {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        stars: "★★★★★",
        micro: "Toxic is an understatement.",
        coverUrl: "https://covers.openlibrary.org/b/isbn/9780140434187-L.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://fable.co/review/da925193-30be-4576-a9fb-af98629313b6/share",
      },
      {
        title: "Black Sheep",
        author: "Rachel Harrison",
        stars: "★★★★★",
        micro: "What to do if you're in a Satanist cult?",
        coverUrl: "https://covers.openlibrary.org/b/isbn/9780593545850-L.jpg",
        coverBg: "#2a3a1a",
        reviewUrl: "https://fable.co/review/8d803f01-9c11-45f1-a160-930880280dfc/share",
      },
      {
        title: "My Heart is a Chainsaw",
        author: "Stephen Graham Jones",
        stars: "★★★★☆",
        micro: "A love letter to slasher films.",
        coverUrl: "https://covers.openlibrary.org/b/isbn/9781982137632-L.jpg",
        coverBg: "#1a0a0a",
        reviewUrl: "https://fable.co/review/3c4a37aa-f48f-45ac-959a-f2436cf96c18/share",
      },
      {
        title: "I'm Thinking of Ending Things",
        author: "Iain Reid",
        stars: "★★★★☆",
        micro: "You have to go until the bitter end.",
        coverUrl: "https://covers.openlibrary.org/b/isbn/9781501126949-L.jpg",
        coverBg: "#1a1a2a",
        reviewUrl: "https://fable.co/review/031a1244-8d35-4d76-800f-255950585479/share",
      },
      {
        title: "Cursed Bunny",
        author: "Bora Chung",
        stars: "★★★★☆",
        micro: "Korean folk horror - 10/10, no notes.",
        coverUrl: "https://covers.openlibrary.org/b/OLID/OL39781913M-L.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://fable.co/review/408c66d1-6b9e-4f8b-906f-bdbb42d5b82a/share",
      },
      {
        title: "Molka",
        author: "Monika Kim",
        stars: "★★★★☆",
        micro: "Revenge against the patriarchy? Yes plz.",
        coverUrl: "https://dynamic.indigoimages.ca/v1/books/books/1645661261/1.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://booksbeneath.substack.com/p/a-twisted-story-of-revenge-told-through",
      },
      {
        title: "My Darling Dreadful Thing",
        author: "Johanna van Veen",
        stars: "★★★★☆",
        micro: "Gothic and strange and totally my thing.",
        coverUrl: "https://covers.openlibrary.org/b/OLID/OL50647058M-L.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://fable.co/review/4392092e-ffa0-474d-ad3a-432ecd8b83b5/share",
      },
      {
        title: "Ring Shout",
        author: "P. Djèlí Clark",
        stars: "★★★★☆",
        micro: "Sinners, in a novella.",
        coverUrl: "https://covers.openlibrary.org/b/OLID/OL28296947M-L.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://fable.co/review/4392092e-ffa0-474d-ad3a-432ecd8b83b5/share",
      },
    ],
  },


  // ── TOOLS ─────────────────────────────────────────────────
  // comingSoon: true disables the link and shows "Soon →"
  tools: {
    subheading: "I built you something. Go use it.",
    items: [
      {
        tag: "For the Traveller",
        name: "Airport Scavenger Hunt",
        description: "I know firsthand how boring this part of travel can be. So I found a way to make it fun.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/plane.jpg",
        url: "https://airport-scavenger-hunt.vercel.app/",
        comingSoon: false,
      },
      {
        tag: "For the Reader",
        name: "Book Review Tool",
        description: "If you've ever struggled to come up with a book rating, this one's for you.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/books.jpg",
        url: "https://book-rating-tool.vercel.app/",
        comingSoon: false,
      },
      {
        tag: "For the Mystic",
        name: "Tarot Card Reader",
        description: "Fun fact: I read tarot cards IRL. Let the Universe choose your path.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/mystic.jpg",
        url: "https://tarot-card-reader-puce.vercel.app/",
        comingSoon: false,
      },
      {
        tag: "Coming Soon",
        name: "Shhh, it's a surprise!",
        description: "Another surprise is coming soon - stay tuned for the unveiling!",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-1.jpg",
        url: "",
        comingSoon: true,
      },
    ],
  },

// ── ABOUT / BIO ───────────────────────────────────────────
  about: {
  photoUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
  photoSecondaryUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me-smile.jpg",
    name: "Gariele",
    pronunciation: "[gary-elle]",
    bio: "You might be wondering: how did you get here? Well, dear reader, it all began in 1989... Oh wait, no. That year belongs to Taylor Swift. This is my story...",
    timeline: [
      { year: "2014", title: "Built my first business - by accident.", story: "While working on my Marketing degree, I had a spontaneous idea to create a group for adventurous women to connect. That little idea became my first business, Rad Girls Collective. Within 2 years, we had over 100k audience members and landed collaborations with Lululemon and MEC." },
      { year: "2015", title: "Altered my life by becoming a Mom.", story: "Welcomed my amazing daughter into the world. She's 11 now, and we're best friends. I've shown her this website and her favourite part is the 2 Truths + 1 Lie." },
      { year: "2017", title: "Founded a website + brand design studio.", story: "My first major client? A wee little travel + adventure blogger named Renee Roaming. After that, I began designing custom brands and websites exclusively for adventurous business owners." },
      { year: "2020", title: "Made boating a core personality trait.", story: "I grew up sailing, and even lived on a sailboat for a year, but it wasn't until we got our first *power boat* that boating felt truly fun. The boat saved our sanity during Covid." },
      { year: "2024", title: "The year that changed everything.", story: "What do severe burnout, unchecked OCD, a car accident + exiting our tech company have in common? They all led me to prioritize healing + happiness in ways I never had before." },
      { year: "2026", title: "Today: living my most authentic life.", story: "And that includes going on endless random side quests, coding whatever my brain thinks about, and spending most of my time reading." },
    ],
  },
  // ── ZONES OF GENIUS ───────────────────────────────────────
  zones: [
    { label: "01", title: "Brand Strategy & Positioning", description: "" },
    { label: "02", title: "Lifestyle Photography", description: "" },
    { label: "03", title: "Creative Technology", description: "" },
    { label: "04", title: "Visual Design", description: "" },
    { label: "05", title: "Storytelling", description: "" },
    { label: "06", title: "Mentoring", description: "" },
  ],

  // ── FIND ME ───────────────────────────────────────────────
  findMe: [
    { label: "Instagram", url: "https://instagram.com/itsgariele" },
    { label: "Substack",  url: "https://booksbeneath.substack.com/" },
    { label: "Fable",     url: "https://fable.co/fabler/gariele-176872823907" },
    { label: "Goodreads", url: "https://goodreads.com/itsgariele" },
  ],

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    tagline: "More side quests incoming",
  },

};
