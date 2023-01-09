
let ppssppGameLists = [];

class Datas {
  
  constructor
  (
    main_picture, 
    screenshots, 
    title, 
    summary, 
    file_name, 
    file_size,
    file_type,
    region,
    language,
    genre,
    download_link,
    name
  ) 
  {

    this.main_picture = main_picture;
    this.screenshots = screenshots;
    this.title = title;
    this.summary = summary;
    this.file_name = file_name;
    this.file_size = file_size;
    this.file_type = file_type;
    this.region = region;
    this.language = language;
    this.genre = genre;
    this.download_link = download_link;
    this.name = name;
    this.push
    (
      main_picture, 
      screenshots, 
      title, 
      summary, 
      file_name, 
      file_size,
      file_type,
      region,
      language,
      genre,
      download_link,
      name
    );

    ppssppGameLists.sort((a,b) => a.Title > b.Title ? 1 : -1);

  }

  push
  (
    Main_Picture, 
    Screenshots, 
    Title, 
    Summary, 
    File_Name, 
    File_Size,
    File_Type,
    Region,
    Language,
    Genre,
    Download_Link,
    Name
  )
  {
    
    ppssppGameLists.push
    ({
      Main_Picture, 
      Screenshots, 
      Title, 
      Summary, 
      File_Name, 
      File_Size,
      File_Type,
      Region,
      Language,
      Genre,
      Download_Link,
      Name
    })

  }

}

const data1 = new Datas
(
  // Main Picture
  'acb.jpg',

    
  // Screenshots
  ['ac1.png', 'ac2.jpg', 'ac3.jpg', 'ac4.png'],

    
  // Title
  'Assassin\'s Creed: Bloodlines',
  
    
  // Summary
  'During the Autumn of 1191, the Assassin Altaïr Ibn-La\'Ahad had heard of the Templars\' plan to depart for Cyprus. While the Templars made preparations to leave from Acre\'s harbor, Altaïr led an assault in order to intercept them and learn more. Encountering Maria Thorpe, Robert de Sable\'s former stewardess, Altaïr subdued and took Maria as his prisoner.',

  // File Name
  'assassins-creed-bloodlines.iso',

  // File Size
  '600MB',

  // File Type
  'ISO',

  // Region
  'United States',

  // Language
  'English, Europe, Japanese',

  // Genre
  'Action-Adventure, Stealth',

  // Download Link
  '#',

  // Name
  'assassinscreedbloodlines'
)

const data2 = new Datas
(
  // Main Picture
  'bch.jpg',
    
  // Screenshots
  ['bs1.jpg', 'bs2.png', 'bs3.jpg', 'bs4.jpg'],
    
  // Title
  'Basara Chronicle Heroes',
    
  // Summary
  'The game is similar to the previous PSP release Sengoku Basara: Battle Heroes. Gamers create a team consisting of two heroes from the series and face off in battle against another player. The game will support up to four players ad hoc. This game feature characters from Sengoku Basara: Samurai Heroes (called Sengoku Basara 3 in Japan) like Ishida Mitsunari and the revamped Tokugawa Ieyasu.',
    
  // File_Name
  'basara-chronicle-heroes.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action Hack and slash, Fighting Beat em up',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'basarachronicleheroes'
)

const data3 = new Datas
(
  // Main Picture
  'cv.jpg',
    
  // Screenshots
  ['cv1.jpg', 'cv2.jpg', 'cv3.jpg', 'cv4.jpg'],
    
  // Title
  'Castlevania : The Dracula X Chronicles',
    
  // Summary
  'In the halcyon days of yore, overripe with peace and prosperity, not a soul believed that tomorrow could bring anything but more of the tranquil plenty about them...But peace and prosperity give always give rise to the wicked: those who deny mankind comfort, and grow bored of peace. A dark congregation of such villains began to gather, plotting to revive an unholy power to destroy the decadent world and begin anew.',
    
  // File_Name
  'castlevania-the-dracula-x-chronicles.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Platform, Adventure',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'castlevaniathedraculaxchronicles'
)

const data4 = new Datas
(
  // Main Picture
  'di.jpg',
    
  // Screenshots
  ['di1.jpg', 'di2.jpg', 'di3.png', 'di4.jpg'],
    
  // Title
  'Dante\'s Inferno',
    
  // Summary
  'It follows Dante, imagined as a Templar knight from The Crusades, who, guided by the spirit of the poet Virgil, must fight through the nine Circles of Hell to rescue Beatrice from the clutches of Lucifer himself. In the game, players control Dante from a third-person perspective.',
    
  // File_Name
  'dantes-inferno.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure, Hack \'N Slash',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'dantesinferno'
)

const data5 = new Datas
(
  // Main Picture
  'dj.jpg',
    
  // Screenshots
  ['dj1.jpg', 'dj2.jpg', 'dj3.jpg', 'dj4.jpg'],
    
  // Title
  'Def Jam Fight For New York',
    
  // Summary
  'The game\'s story is a prequel to the events of Def Jam Vendetta. However, the game uses many of the same situations and characters from Fight for NY, which is the third game in the series, chronologically. You still play a nameless up-and-coming gangsta brought into the world of underground street fighting after rescuing one of the game\'s personalities from trouble with the police.',
    
  // File_Name
  'def-jam-fight-for-ny.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Fighting Game, Action Game',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'defjamfightfornewyork'
)

const data6 = new Datas
(
  // Main Picture
  'ff7.jpg',
    
  // Screenshots
  ['ff71.jpg', 'ff72.jpg', 'ff73.jpg', 'ff74.jpg'],
    
  // Title
  'Final Fantasy VII: Crisis Core',
    
  // Summary
  'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    
  // File_Name
  'final-fantasy-vii-crisis-core.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Role-Playing, Action-Adventure',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'finalfantasyviicrisiscore'
)

const data7 = new Datas
(
  // Main Picture
  'ffd.jpg',
    
  // Screenshots
  ['ff71.jpg', 'ff72.jpg', 'ff73.jpg', 'ff74.jpg'],
    
  // Title
  'Final Fantasy : Dissidia',
    
  // Summary
  'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    
  // File_Name
  'final-fantasy-dissidia.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Fighting, Adventure, Action',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'finalfantasydissidia'
)

const data8 = new Datas
(
  // Main Picture
  'ge2.jpg',
    
  // Screenshots
  ['ge2-1.jpg', 'ge2-2.jpg', 'ge2-3.jpg', 'ge2-4.jpg'],
    
  // Title
  'God Eater 2 (Japan)',
    
  // Summary
  'The game takes place 3 years after the original.  A new fatal pandemic called the Black Plague, caused by red rain, has struck the Far East area. Members of Special Forces Blood, an affiliate of Fenrir who reside in a mobile base, are sent to assist. The player takes control of the new Protagonist (God Eater 2) who is a new recruit to Blood.',
    
  // File_Name
  'god-eater-2-japan.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action Role-Playing, Adventure',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'godeater2japan'
)

const data9 = new Datas
(
  // Main Picture
  'geb.jpg',
    
  // Screenshots
  ['geb1.jpg', 'geb2.jpg', 'geb3.jpg', 'geb4.jpg'],
    
  // Title
  'God Eater : Burst',
    
  // Summary
  'After the defeat of Director Schicksal, the Protagonist\'s God Arc begins to malfunction. After a successful mission against a new species of Aragami called Hannibal, Soma devours the core but the monster comes back to life and attacks Kota. The protagonist blocks the attack, but their God Arc can\'t handle the damage and its core is damaged.',
    
  // File_Name
  'god-eater-burst.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action Role-Playing, Adventure',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'godeaterburst'
)

const data10 = new Datas
(
  // Main Picture
  'gw.jpg',
    
  // Screenshots
  ['ff71.jpg', 'ff72.jpg', 'ff73.jpg', 'ff74.jpg'],
    
  // Title
  'God Of War : Chain Of Olympus',
    
  // Summary
  'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    
  // File_Name
  'god-of-war-chain-of-olympus.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Hack \'N Slash',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'godofwarchainofolympus'
)

const data11 = new Datas
(
  // Main Picture
  'gw2.jpg',
    
  // Screenshots
  ['ff71.jpg', 'ff72.jpg', 'ff73.jpg', 'ff74.jpg'],
    
  // Title
  'God Of War : Ghost Of Sparta',
    
  // Summary
  'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    
  // File_Name
  'god-of-war-ghost-of-sparta.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Hack \'N Slash',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'godofwarghostofsparta'
)

const data12 = new Datas
(
  // Main Picture
  'kdhbs.jpg',
    
  // Screenshots
  ['kdhbs1.jpg', 'kdhbs2.jpg', 'kdhbs3.jpg', 'kdhbs4.jpg'],
    
  // Title
  'Kingdom Hearts : Birth By Sleep',
    
  // Summary
  'It is a prequel to the original Kingdom Hearts, taking place ten years before. The game centers on the journeys of Terra, Aqua and Ventus, characters briefly featured in Kingdom Hearts II in their quest to locate the missing Master Xehanort, and protect the worlds from creatures known as the Unversed.',
    
  // File_Name
  'kingdom-hearts-birth-by-sleep.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Action Role-Playing',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'kingdomheartsbirthbysleep'
)

const data13 = new Datas
(
  // Main Picture
  'mhfu.jpg',
    
  // Screenshots
  ['mhfu1.jpg', 'mhfu2.jpg', 'mhfu3.jpg', 'mhfu4.jpg'],
    
  // Title
  'Monster Hunter Freedom Unite',
    
  // Summary
  'Just like its predecessors, Monster Hunter and Monster Hunter G, this game revolves around the player completing quests and gathering materials to upgrade their equipment in order to advance. The more rare the items and equipment, the stronger the main physical aspects of the character will be. Unlike other hack slash games, this game requires planning and skill in order to overcome large monsters instead of brute force.',
    
  // File_Name
  'monster-hunter-freedom-unite.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Action Role-Playing',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'monsterhunterfreedomunite'
)

const data14 = new Datas
(
  // Main Picture
  'nsmw.jpg',
    
  // Screenshots
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    
  // Title
  'Need For Speed : Most Wanted',
    
  // Summary
  '',
    
  // File_Name
  'need-for-speed-most-wanted.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Racing, Adventure',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'needforspeedmostwanted'
)

const data15 = new Datas
(
  // Main Picture
  'nsni.jpg',
    
  // Screenshots
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    
  // Title
  'Naruto Shippuden : Ultimate Ninja Impact',
    
  // Summary
  '',
    
  // File_Name
  'naruto-shippuden-ultimate-ninja-impact.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure, Fighting Game',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'narutoshippudenultimateninjaimpact'
)

const data16 = new Datas
(
  // Main Picture
  'pp.jpg',
    
  // Screenshots
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    
  // Title
  'Prince Of Persia : Rival Swords',
    
  // Summary
  '',
    
  // File_Name
  'prince-of-persia-rival-swords.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Action Role-Playing',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'princeofpersiarivalswords'
)

const data17 = new Datas
(
  // Main Picture
  'saoim.jpg',
    
  // Screenshots
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    
  // Title
  'Sword Art Online : Infinity Moments',
    
  // Summary
  '',
    
  // File_Name
  'sword-art-online-infinity-moments.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Action Role-Playing',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'swordartonlineinfinitymoments'
)

const data18 = new Datas
(
  // Main Picture
  'sho.jpg',
    
  // Screenshots
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    
  // Title
  'Silent Hill : Origin',
    
  // Summary
  '',
    
  // File_Name
  'silent-hill-origin.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Survival Horror',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'silenthillorigin'
)

const data19 = new Datas
(
  // Main Picture
  't6.jpg',
    
  // Screenshots
  ['tk1.jpg', 'tk2.jpg', 'tk3.png', 'tk4.jfif'],
    
  // Title
  'Tekken 6',
    
  // Summary
  'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    
  // File_Name
  'tekken-6.iso',
    
  // File_Size
  '800MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action, Fighting, PVP',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'tekken6'
)

const data20 = new Datas
(
  // Main Picture
  'ttb.jpg',
    
  // Screenshots
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    
  // Title
  'The Third Birthday',
    
  // Summary
  '',
    
  // File_Name
  'the-third-birthday.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Action Role-Playing',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'thethirdbirthday'
)

const data21 = new Datas
(
  // Main Picture
  'tw.jpg',
    
  // Screenshots
  ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    
  // Title
  'The Warriors',
    
  // Summary
  '',
    
  // File_Name
  'the-warriors.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Fighting',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'thewarriors'
)


const data22 = new Datas
(
  // Main Picture
  'mhp3.jpg',
    
  // Screenshots
  ['mhp1.jpg', 'mhp2.png', 'mhp1.jpg', 'mhp2.png'],
    
  // Title
  'Monster Hunter Portable 3rd',
    
  // Summary
  '',
    
  // File_Name
  'the-warriors.iso',
    
  // File_Size
  '',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Fighting',
  
  // Download_Link
  'www.facebook.com',
  
  // name
  'monsterhunterportable3rd'
)



















// const sample = new Datas
// (
//   // Main Picture
//   '',

    
//   // Screenshots
//   ['', '', '', ''],

    
//   // Title
//   '',
  
    
//   // Summary
//   '',

//   // File Name
//   '',

//   // File Size
//   '',

//   // File Type
//   '',

//   // Region
//   '',

//   // Language
//   '',

//   // Genre
//   '',

//   // Download Link
//   '',

//   // Name
//   ''
// )
