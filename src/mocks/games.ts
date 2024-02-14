const mediaPath = 'https://fake-api-digitaldice.vercel.app/digitaldice/'

const items = [
  {
    id: 1,
    title: "The Jungle Quest",
    previousPrice: 23.90,
    currentPrice: 7.17,
    genre: ["Adventure"],
    thumbnail: mediaPath + 'images/' + '/the-jungle-quest.webp',
    info: "Iara is going through a huge danger. Her people is being threatened by gold miners in the Amazon Rainforest with their greed and guns. After the murder of her people's leader, Pajé Caramuru, she decided to take action. With her unique power of communicating with wild animals, Iara is going to be brave and count on birds, monkeys, alligators and even an angry jaguar to send the evil men away.",
    highlight: false
  },

  {
    id: 2,
    title: "Animals Race",
    previousPrice: 15.50,
    currentPrice: 10.85,
    genre: ["Race"],
    thumbnail: mediaPath + 'images/' + '/animals-race.webp',
    info: "What happens when crazy animals decide to compete in a kart race? Lots of fun! Choose among 12 eccentric animals to race, each with a peculiar skill that will help you win the competitions. Choose different items that will be used to take your opponents out of the way, like a baseball bat, an electric racket, a slingshot, a boomerang, and more! Also, you're gonna experience the best multiplayer mode ever!",
    highlight: true
  },

  {
    id: 3,
    title: "Dancing Robot",
    previousPrice: null,
    currentPrice: 7.00,
    genre: ["Music rhythm"],
    thumbnail: mediaPath + 'images/' + '/dancing-robot.webp',
    info: "With the fast advance of technology came the dancing robot. With more than 50 stunning and exclusive music pieces, this game will require your skills to keep the rhythm and make the robot dance graciously. Be careful not make too many mistakes, or you may experience a short circuit that's gonna lead you to the trash bin.",
    highlight: false
  },

  {
    id: 4,
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  },

  {
    id: 5,
    title: "Detective Capybara",
    previousPrice: null,
    currentPrice: 7.50,
    genre: ["Puzzle"],
    thumbnail: mediaPath + 'images/' + '/detective-capybara.webp',
    info: "Isolate the crime scene! Call the best detective around, the flawless Detective Capybara, and let the investigation begin. In this game, you'll solve puzzles and riddles in order to solve cases. Our incredible capybara is requested worldwide, so you'll be visiting plenty of countries and you'll collect badges as you succeed in your investigations.",
    highlight: true
  },

  {
    id: 6,
    title: "First Round Boxe",
    previousPrice: null,
    currentPrice: 12.30,
    genre: ["Sport"],
    thumbnail: mediaPath + 'images/' + '/first-round-boxe.webp',
    info: "Let the round begin! The fans of boxe will have a blast with the this game that contains plenty of fighters and the option to customise characters. The championships happen in different countries, with incredible graphics and realistic movements of the fighters. In the journey mode, you'll create your custom character and start from a simple championship in the hood, going through bigger events as you win the fights, until you become a world championship.",
    highlight: false
  },

  {
    id: 7,
    title: "Snowboard Penguins",
    previousPrice: 10.70,
    currentPrice: 8.20,
    genre: ["Sport"],
    thumbnail: mediaPath + 'images/' + '/snowboard-penguins.webp',
    info: "With a classic visual from the 90s video games, Snowboard Penguins is a cute race game where you can choose your character and compete with your pals, going down different mountains with different challenges, collecting items that can be useful in the competition.",
    highlight: false
  },

  {
    id: 8,
    title: "Alien Tennis",
    previousPrice: null,
    currentPrice: 5.45,
    genre: ["Sport"],
    thumbnail: mediaPath + 'images/' + '/alien-tennis.webp',
    info: "Tennis is a fun sport, but played in different planets is way more challenging. Try playing on Earth, the Moon, Mars and other planets with their own gravity, see how things go. You have a wide variety of aliens to play with and you can customise your character as well. Win matches to earn diamonds that can be used for buying new equipment and outfits.",
    highlight: false
  },

  {
    id: 9,
    title: "Wrecked Justice",
    previousPrice: null,
    currentPrice: 12.30,
    genre: ["RPG"],
    thumbnail: mediaPath + 'images/' + '/wrecked-justice.webp',
    info: "In a futuristic society, when the system collapsed and chaos was spread, different gangs try to take control over the population, one in particular has been gaining power and using evil ways of ruling the people from the fallen city of Phirya. Our heroes Din and Lenya are going to resist and grow their party in order to fight back the oppressors in  this exciting cyberpunk RPG filled with challenges and magic.",
    highlight: false
  },

  {
    id: 10,
    title: "Bomber Ninja",
    previousPrice: 12.75,
    currentPrice: 10.90,
    genre: ["RPG", "Strategy"],
    thumbnail: mediaPath + 'images/' + '/bomber-ninja.webp',
    info: "This is a crazy and fun RPG where you control a ninja, and your goal is to brake into places using bombs, using strategies not to get caught by the enemies. You grow level as you succeed in your missions, planting bombs here and there, and not blowing yourself up in the process. The puzzles involved will keep you entertained, and the rewards are just terrific.",
    highlight: false
  },

  {
    id: 11,
    title: "Brave Bear",
    previousPrice: 18.99,
    currentPrice: 15.25,
    genre: ["Adventure"],
    thumbnail: mediaPath + 'images/' + '/brave-bear.webp',
    info: "Hunters have invaded the peaceful Forest of Hodshert, where our brave bear lives. It's time to gather with the bear team, wear some armor and go to battle. The controls in this game are outstanding! You can make use of a huge variety of movements, attacks and skills, including some amazing graphics that will blow your mind!",
    highlight: false
  },

  {
    id: 12,
    title: "Casting Spells",
    previousPrice: null,
    currentPrice: 9.00,
    genre: ["RPG", "Strategy"],
    thumbnail: mediaPath + 'images/' + '/casting-spells.webp',
    info: "In a land filled with dragons and where people use magic, different kingdoms are fighting for control, starting epic wars involving the four elements, dragons and other magic creatures. You are requested to help the queen of your land to lead an army in order to defend your people and conquer other territories. With amazing visual effects, this RPG is going to inspire you with all the magic involved and the exciting story behind it.",
    highlight: false
  }
];

export default items