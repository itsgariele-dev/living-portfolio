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

  // ── HERO ──────────────────────────────────────────────────
  // The 8 scattered background images. Swap any URL to refresh the collage.
  hero: {
    kicker: "Gariele Wright ✦ Victoria, BC",
    sub: "Creative Strategist on Perpetual Side Quests",
    images: [
      "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Copenhagen.jpg",
      "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-4.jpg",
      "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-2.jpg",
      "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Edinburgh.jpg",
      "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-1.jpg",
      "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Victoria.jpg",
      "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Gothenburg.jpg",
      "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-3.jpg",
    ],
  },

  // ── QUOTE ─────────────────────────────────────────────────
  quote: {
    // Words wrapped in ** will appear in green
    text: "IT TAKES A LOT OF **PLANNING** TO LOOK THIS **EFFORTLESS.**",
    attribution: "— ME, A CHRONIC OVERTHINKER",
  },

  // ── CURRENTLY ─────────────────────────────────────────────
  // link is optional — remove or leave blank for non-linked cards
  currently: [
    {
      label: "Reading",
      value: "Project Hail Mary — Andy Weir",
      link: "https://www.goodreads.com/book/show/54493401-project-hail-mary",
      linkHint: "Open on Goodreads →",
      blurb: "The most fun I've had reading in years. Space science, zero pretension.",
    },
    {
      label: "Listening",
      value: "End of Beginning — Djo",
      link: "https://open.spotify.com/track/3qhlB30KknSejmIvZZLjOD",
      linkHint: "Listen on Spotify →",
      blurb: "This song has lived in my head rent free for three months.",
    },
    {
      label: "Watching",
      value: "Survivor Season 50",
      link: "https://www.cbs.com/shows/survivor/",
      linkHint: "Watch on CBS →",
      blurb: "The all-winners season I didn't know I needed. Genuinely unhinged.",
    },
    {
      label: "Learning",
      value: "How to code with Claude",
      link: "",
      linkHint: "",
      blurb: "Turns out I'm a developer now. Didn't see that coming.",
    },
    {
      label: "Creating",
      value: "Tofino travel guide",
      link: "",
      linkHint: "",
      blurb: "Almost done. It's going to be the best one yet.",
    },
    {
      label: "Loving",
      value: "Sunny evenings on the boat",
      link: "",
      linkHint: "",
      blurb: "Golden hour on the water. Nothing beats it.",
    },
  ],

  // ── TWO TRUTHS AND A LIE ───────────────────────────────────
  // lieIndex: which card is the lie — 0, 1, or 2
  // lightbox: what shows when they guess correctly
  truths: {
    lieIndex: 1,
    cards: [
      "I once bumped into Jude Law wearing pajamas on the streets of Notting Hill in London.",
      "I have a degree in psychology but briefly considered going to school for marine biology.",
      "I was born and raised in Trinidad and Tobago - even lived on a sailboat for one year.",
    ],
    lightbox: {
      image: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
      tag: "You know me too well.",
      headline: "That's the lie. 🎉",
      copy: "I actually studied Marketing but dropped out when I started my first business. My professors even used me as a case study after I left!",
    },
  },

  // ── PHOTO STRIP ───────────────────────────────────────────
  // 6 images of you. Swap URLs for new personality shots.
  // On mobile only the first 2 show.
  photoStrip: [
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
    "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
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
    subheading: "I planned the trip. You just show up.",
    guides: [
      {
        city: "Copenhagen",
        description: "3 days in Denmark's coolest city. Every restaurant, every canal, already figured out.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Copenhagen.jpg",
        guideUrl: "https://copenhagen-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Gothenburg",
        description: "A full week in Sweden's second city. Underrated. Unforgettable.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Gothenburg.jpg",
        guideUrl: "https://gothenburg-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Edinburgh",
        description: "5 days in Scotland's most dramatic city. Castles, pubs, the whole thing.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Edinburgh.jpg",
        guideUrl: "https://edinburgh-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Victoria",
        description: "My hometown. I know every hidden corner. This guide is the real one.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Victoria.jpg",
        guideUrl: "https://victoria-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Dublin",
        description: "5 days in Ireland. Guinness optional, good craic mandatory.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/Dublin.jpg",
        guideUrl: "https://dublin-travel-guide.vercel.app",
        comingSoon: false,
      },
      {
        city: "Tofino",
        description: "Canada's surf town. Guide in progress — worth the wait.",
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
  books: {
    subheading: "Dark fiction. No apologies.",
    items: [
      {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        stars: "★★★★★",
        micro: "This book invented the toxic relationship. Iconic for that.",
        coverUrl: "https://covers.openlibrary.org/b/isbn/9780140434187-L.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://fable.co/review/da925193-30be-4576-a9fb-af98629313b6/share",
      },
      {
        title: "Black Sheep",
        author: "Rachel Harrison",
        stars: "★★★★★",
        micro: "Family horror that hit too close to home. You'll understand.",
        coverUrl: "https://covers.openlibrary.org/b/isbn/9780593545850-L.jpg",
        coverBg: "#2a3a1a",
        reviewUrl: "https://fable.co/review/8d803f01-9c11-45f1-a160-930880280dfc/share",
      },
      {
        title: "My Heart is a Chainsaw",
        author: "Stephen Graham Jones",
        stars: "★★★★☆",
        micro: "Love letter to slasher films. Better than it has any right to be.",
        coverUrl: "https://covers.openlibrary.org/b/isbn/9781982137632-L.jpg",
        coverBg: "#1a0a0a",
        reviewUrl: "https://fable.co/review/3c4a37aa-f48f-45ac-959a-f2436cf96c18/share",
      },
      {
        title: "I'm Thinking of Ending Things",
        author: "Iain Reid",
        stars: "★★★★☆",
        micro: "Read it in one sitting. Stared at the wall for twenty minutes after.",
        coverUrl: "https://covers.openlibrary.org/b/isbn/9781501126949-L.jpg",
        coverBg: "#1a1a2a",
        reviewUrl: "https://fable.co/review/031a1244-8d35-4d76-800f-255950585479/share",
      },
      {
        title: "Cursed Bunny",
        author: "Bora Chung",
        stars: "★★★★☆",
        micro: "Folklore horror that's genuinely unsettling. In the best way.",
        coverUrl: "https://covers.openlibrary.org/b/OLID/OL39781913M-L.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://fable.co/review/408c66d1-6b9e-4f8b-906f-bdbb42d5b82a/share",
      },
      {
        title: "Molka",
        author: "Monika Kim",
        stars: "★★★★☆",
        micro: "Revenge served cold. Every page made me angrier in the right way.",
        coverUrl: "https://dynamic.indigoimages.ca/v1/books/books/1645661261/1.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://booksbeneath.substack.com/p/a-twisted-story-of-revenge-told-through",
      },
      {
        title: "My Darling Dreadful Thing",
        author: "Johanna van Veen",
        stars: "★★★★☆",
        micro: "Gothic and strange and completely my thing.",
        coverUrl: "https://covers.openlibrary.org/b/OLID/OL50647058M-L.jpg",
        coverBg: "#2c3a2c",
        reviewUrl: "https://fable.co/review/4392092e-ffa0-474d-ad3a-432ecd8b83b5/share",
      },
      {
        title: "Ring Shout",
        author: "P. Djèlí Clark",
        stars: "★★★★☆",
        micro: "Historical horror with real teeth. Didn't see the ending coming.",
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
        description: "Turn a 3-hour layover into something your kids will actually remember.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/plane.jpg",
        url: "https://airport-scavenger-hunt.vercel.app/",
        comingSoon: false,
      },
      {
        tag: "For the Reader",
        name: "Book Review Tool",
        description: "Rate your reads. Make it beautiful. Share it everywhere.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/books.jpg",
        url: "https://book-rating-tool.vercel.app/",
        comingSoon: false,
      },
      {
        tag: "For the Mystic",
        name: "Tarot Card Reader",
        description: "Ask a question. Let the universe talk back.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/mystic.jpg",
        url: "https://tarot-card-reader-puce.vercel.app/",
        comingSoon: false,
      },
      {
        tag: "Coming Soon",
        name: "Something New",
        description: "Another surprise in progress. Stay tuned.",
        imageUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/wallpaper-1.jpg",
        url: "",
        comingSoon: true,
      },
    ],
  },

// ── ABOUT / BIO ───────────────────────────────────────────
  about: {
  photoUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
  photoSecondaryUrl: "https://raw.githubusercontent.com/itsgariele-dev/living-portfolio/refs/heads/main/images/me.jpg",
    name: "Gariele",
    pronunciation: "[gary-elle]",
    bio: "I've spent a decade helping brands figure out who they are and how to say it — then I decided to build a few of my own. I shoot film and digital, travel with intention, invest in women-led companies early, and document all of it in the spaces between. This site is a living, breathing archive of the things I make, find, and give away. Take whatever you need.",
    timeline: [
      { year: "2013", title: "First brand, first client, first panic attack", story: "Went freelance at 22 with one client and a lot of confidence I hadn't earned yet. Somehow it worked." },
      { year: "2016", title: "Picked up a film camera", story: "Bought a secondhand Minolta at a market in Edinburgh. Started shooting everything. Never really stopped." },
      { year: "2018", title: "Built the first company", story: "Co-founded a brand studio. Learned more about people, money, and myself than any course could have taught." },
      { year: "2020", title: "Went slow on purpose", story: "Sold my stuff, traveled slower, took less. Started writing things down. Tofino changed something." },
      { year: "2022", title: "Started betting on women", story: "Made my first angel investment. Realized this was the work I'd been doing informally for years — just now with a cheque." },
      { year: "2024", title: "Built this", story: "Stopped waiting for a 'real' portfolio moment. Started treating my own life like a brief worth designing." },
    ],
  },
  // ── ZONES OF GENIUS ───────────────────────────────────────
  zones: [
    { label: "01 — Strategy", title: "Brand Strategy & Positioning", description: "Helping founders articulate who they are, who they're for, and why it matters. Psychology-led. Results-focused." },
    { label: "02 — Photography", title: "Travel & Lifestyle Photography", description: "Film and digital. Coastal, editorial, and everything in between. Available for print — see the shop." },
    { label: "03 — Experience Design", title: "Digital Products & Tools", description: "I build things — travel guides, interactive tools, apps — that solve real problems and feel good to use." },
    { label: "04 — Investment", title: "Angel Investing", description: "I bet on women early. In brands, in businesses, in ideas that haven't been told they're viable yet." },
    { label: "05 — Writing", title: "Books & Book Reviews", description: "Dark fiction, speculative horror, literary grief. I review on Substack and Fable. Occasionally I write my own things." },
    { label: "06 — Travel", title: "Slow Travel & City Guides", description: "I travel with intention and over-research every destination. The guides are free. You're welcome." },
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
