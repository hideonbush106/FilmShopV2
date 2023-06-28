export interface Film {
  id?: number
  image?: string
  title?: string
  year?: string
  nation?: string
  description?: string
  trailer?: string
}

export const listOfFilms: Film[] = [
  {
    id: 1,
    image: 'assets/images/1.jpg',
    title: 'Star Wars: Episode IV - A New Hope',
    year: '1977',
    nation: 'USA',
    description: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
    trailer: `https://www.youtube.com/embed/vZ734NWnAHA`
  },
  {
    id: 2,
    image: 'assets/images/2.jpg',
    title: 'Indiana Jones and the Last Crusade',
    year: '1989',
    nation: 'USA',
    description:
      'In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.',
    trailer: `https://www.youtube.com/embed/a6JB2suJYHM`
  },
  {
    id: 3,
    image: 'assets/images/3.jpg',
    title: 'Inglourious Basterds',
    year: '2009',
    nation: 'Germany, USA',
    description: `In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.`,
    trailer: `https://www.youtube.com/embed/KnrRy6kSFF0`
  },
  {
    id: 4,
    image: 'assets/images/4.jpg',
    title: 'Saving Private Ryan',
    year: '1998',
    nation: 'USA',
    description: `Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.`,
    trailer: `https://www.youtube.com/embed/zwhP5b4tD6g`
  },
  {
    id: 5,
    image: 'assets/images/5.jpg',
    title: "Schindler's List",
    year: '1993',
    nation: 'USA',
    description: `In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.`,
    trailer: `https://www.youtube.com/embed/gG22XNhtnoY`
  },
  {
    id: 6,
    image: 'assets/images/6.jpg',
    title: 'The Pianist',
    year: '2002',
    nation: 'France, Germany, Poland, England',
    description: `A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.`,
    trailer: `https://www.youtube.com/embed/u_jE7-6Uv7E`
  },
  {
    id: 7,
    image: 'assets/images/7.jpg',
    title: 'American Sniper',
    year: '2014',
    nation: 'USA',
    description: `Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home with his family after four tours of duty, however, Chris finds that it is the war he can't leave behind.`,
    trailer: `https://www.youtube.com/embed/99k3u9ay1gs`
  },
  {
    id: 8,
    image: 'assets/images/8.jpg',
    title: "The King's Man",
    year: '2021',
    nation: 'England, USA',
    description: `In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.`,
    trailer: `https://www.youtube.com/embed/6Nxc-3WpMbg`
  },
  {
    id: 9,
    image: 'assets/images/9.jpg',
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: '1980',
    nation: 'USA',
    description: `After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.`,
    trailer: `https://www.youtube.com/embed/JNwNXF9Y6kY`
  },
  {
    id: 10,
    image: 'assets/images/10.jpg',
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: '1983',
    nation: 'USA',
    description: `After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.`,
    trailer: `https://www.youtube.com/embed/5UfA_aKBGMc`
  },
  {
    id: 11,
    image: 'assets/images/11.jpg',
    title: 'Star Wars: Episode VII - The Force Awakens',
    year: '2015',
    nation: 'USA',
    description: `As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.`,
    trailer: `https://www.youtube.com/embed/sGbxmsDFVnE`
  },
  {
    id: 12,
    image: 'assets/images/12.jpg',
    title: 'Star Wars: Episode VIII - The Last Jedi',
    year: '2017',
    nation: 'USA',
    description: `Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.`,
    trailer: `https://www.youtube.com/embed/Q0CbN8sfihY`
  }
]

export default listOfFilms
