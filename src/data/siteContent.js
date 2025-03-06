const siteContent = {
    meta: {
      title: "Expat Traveller",
      description: "🌍 Expat Life | Endless Adventures ✈️"
    },
    navigation: {
      logo: {
        path: "/images/logo.png",
        alt: "Expat Traveller Logo"
      },
      links: [
        { id: 'home', label: 'Home' },
        { id: 'photos', label: 'Photos' },
        { id: 'stories', label: 'Stories' },
        { id: 'about', label: 'About' },
      ]
    },
    hero: {
      background: "/images/backgrounds/hero.jpg",
      logo: "/images/logo.png",
      title: "Expat Traveller",
      maintitle:"🌍 Expat Life | Endless Adventures ✈️",
      
        subtitle: "Discovering cultures, Chasing sunsets, collecting stories, and embracing every adventure the world throws my way!\nExploring hidden gems & sharing travel secrets!"
      
      ,
      social: [
        { platform: "instagram", username: "@expat__traveller", url: "https://instagram.com/expat__traveller", iconPath: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/6.0.0/instagram.svg" },
        { platform: "tiktok", username: "@expat__traveller", url: "https://tiktok.com/@expat__traveller", iconPath: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/6.0.0/tiktok.svg" }
      ],
      buttons: [
        { text: "Explore Gallery", action: "scroll", target: "photos", type: "primary" },
        { text: "Follow My Journey", action: "link", target: "https://instagram.com/expat__traveller", type: "secondary" }
      ]
    },
    photos: {
      background: "/images/backgrounds/photos.jpg",
      title: "Captivating Moments",
      subtitle: "Every photograph tells a story of discovery, adventure, and connection with the world around us.",
      gallery: [
        {
          "path": "/images/gallery/eugene.jpg",
          "alt": "Eugene",
          "location": "Eugene, Oregon",
          "description": "Eugene glowing under the sunny sky."
        },
        {
          "path": "/images/gallery/diamond_lake.jpg",
          "alt": "Diamond Lake",
          "location": "Diamond Lake, Oregon",
          "description": "A frozen wonderland at Diamond Lake."
        },
        {
          "path": "/images/gallery/coastal_highway.jpg",
          "alt": "Oregon Coast Highway",
          "location": "Oregon Coast",
          "description": "A scenic bridge along the Oregon Coast Highway."
        },
        {
          "path": "/images/gallery/toketee_falls.jpg",
          "alt": "Toketee Falls",
          "location": "Toketee Falls, Oregon",
          "description": "A breathtaking cascade hidden in the forest."
        },
        {
          "path": "/images/gallery/whale_cookie.jpg",
          "alt": "Whale's Tail Shaped Cookie",
          "location": "Heceta Head Lighthouse, Oregon",
          "description": "A kind gift—a cookie shaped like a whale’s tail."
        },
        {
          "path": "/images/gallery/majestic_falls.jpg",
          "alt": "Majestic Falls",
          "location": "Lebanon, Oregon",
          "description": "Nature’s beauty in motion."
        }
      ],
      
      buttons: [
      ]
    },
    stories: {
      background: "/images/backgrounds/stories.jpg",
      title: "Travel Chronicles",
      subtitle: "Immerse yourself in detailed narratives from my journeys around the globe.",
      articles: [
        { 
          "title": "Wisdom from a Veteran at Heceta Head Lighthouse",
          "image": "/images/stories/old_guy.jpg",
          "alt": "Elderly man at Heceta Head Lighthouse",
          "category": "Memorable Encounters",
          "excerpt": "A chance meeting with a retired veteran at Oregon’s iconic lighthouse led to a heartfelt conversation about service, sacrifice, and the beauty of a life well-lived...",
          "fullStory": "On a misty afternoon at Heceta Head Lighthouse, along the rugged Oregon coast, I met an elderly man resting on a bench near the keeper's house. His name was Frank, a retired Navy veteran who had spent decades at sea before settling down in the Pacific Northwest. The wind carried the scent of salt and pine as he spoke about his time serving, the discipline it instilled in him, and the deep bond he still felt with his fellow servicemen.\n\nFrank had seen the world through portholes and the endless horizon, but it was the quiet beauty of Oregon’s coastline that captured his heart in retirement. 'The sea never leaves you,' he said with a knowing smile, his weathered hands resting on his cane. He told me about the history of Heceta Head, how the lighthouse had guided ships for over a century, and how he often came here just to watch the waves crash against the cliffs.\n\nAs the sky turned golden, I thanked him for his service, and he chuckled, waving me off. 'Ah, I just did my job. But it’s nice to be remembered.' Walking away, I felt grateful for the unexpected encounter—a reminder that every place holds stories, and every stranger has a past worth hearing."
        },
        { 
          "title": "A Hidden Store in the Heart of Umpqua National Forest",
          "image": "/images/stories/umpqua.jpg",
          "alt": "Small roadside store in Umpqua National Forest",
          "category": "Hidden Gems",
          "excerpt": "Tucked away deep in Umpqua National Forest, a small store with a kindhearted cashier offered more than just supplies—it was a reminder of the warmth found in the most unexpected places...",
          "fullStory": "Driving through the winding roads of Umpqua National Forest, surrounded by towering Douglas firs and the occasional break revealing glimpses of rushing rivers, I stumbled upon a tiny roadside store seemingly in the middle of nowhere. It had an old-fashioned gas pump out front, a hand-painted sign, and shelves stocked with just enough essentials for the scattered travelers and locals passing through.\n\nInside, the store smelled of cedar and coffee, and a friendly woman behind the counter greeted me with a warm smile. Her name was Linda, and she had been running the place for years. 'Not much foot traffic, but those who find us always have a story,' she said, ringing up my items. We talked about the beauty of the forest, the quiet life out here, and how she loved meeting travelers from all over the world.\n\nAs I reached for my things, she handed me a complimentary tote bag with the Umpqua National Forest logo on it. 'A little something to remember us by,' she said with a wink. It was a small gesture, but in that remote corner of the world, it felt like the kind of kindness that sticks with you. I left with a bag, a full tank of gas, and a heart warmed by the generosity of a stranger, proof that even in the most unexpected places, there are people who make the journey worthwhile."
        }
      ]
      
    },
    "about": {
      "background": "/images/backgrounds/about.jpg",
      "title": "The Journey Behind the Lens",
      "subtitle": "From software engineer to global nomad, discover the story that drives my adventures.",
      "profile": {
        "image": "/images/logo.png",
        "name": "Expat Traveller",
        "bio": [
"As a software engineer specializing in Generative AI and machine learning in Oregon, I'm passionate about harnessing technology to drive innovation. Born and raised in Nepal, I made the move to the US to pursue bigger dreams and explore new horizons.",
"Traveling has always been my North Star. From extensively exploring Nepal's breathtaking landscapes to venturing across various US states, my wanderlust knows no bounds. Join me on my journey as I strive to visit all 50 states and experience the world's diverse cultures – one adventure at a time!"
],
        "social": [
          { 
            "platform": "instagram", 
            "username": "@expat__traveller", 
            "url": "https://instagram.com/expat__traveller", 
            "iconPath": "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/6.0.0/instagram.svg" 
          },
          { 
            "platform": "tiktok", 
            "username": "@expat__traveller", 
            "url": "https://tiktok.com/@expat__traveller", 
            "iconPath": "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/6.0.0/tiktok.svg" 
          }
        ]
      }
    },
    footer: {
      logo: "/images/logo.png",
      tagline: "Exploring the world, one adventure at a time",
      social: [
        { platform: "instagram", url: "https://instagram.com/expat__traveller", iconPath: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/6.0.0/instagram.svg" },
        { platform: "tiktok", url: "https://tiktok.com/@expat__traveller", iconPath: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/6.0.0/tiktok.svg" },
        { platform: "email", url: "mailto:contact@expattraveller.com", icon: "MessageSquare" }
      ],
      copyright: "© 2025 Expat Traveller. All rights reserved."
    }
  };
  
  export default siteContent;