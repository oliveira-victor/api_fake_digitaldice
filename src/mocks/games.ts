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
    info: "000",
    highlight: false
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
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  },

  {
    id: 6,
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  },

  {
    id: 7,
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  },

  {
    id: 8,
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  },

  {
    id: 9,
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  },

  {
    id: 10,
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  },

  {
    id: 11,
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  },

  {
    id: 12,
    title: "Taming Snakes",
    previousPrice: 17.20,
    currentPrice: 12.75,
    genre: ["Strategy"],
    thumbnail: mediaPath + 'images/' + '/taming-snakes.webp',
    info: "In this peaceful faraway village, where the citizens live their calm lives, there is a huge invasion of snakes, and they are everywhere! In the sink, on your bed or under your hat. What to do? Call the snake tamer! In this game, you'll find each snake around the city and attract them to the trap, before the time runs out. For that, you need to have a good strategy and patience, as the snakes can be really stubborn.",
    highlight: true
  }
];

export default items