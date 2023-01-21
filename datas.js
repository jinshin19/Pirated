
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
    download_link
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
    Download_Link
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
      Download_Link
    })

  }

}

const data1 = new Datas
(
  // Main Picture
  'acb.jpg',

    
  // Screenshots
  ['acb1.jpg', 'acb2.jpg', 'acb3.jpg', 'acb4.jpg'],

    
  // Title
  'Assassin\'s Creed: Bloodlines',
  
    
  // Summary
  'During the Autumn of 1191, the Assassin Altaïr Ibn-La\'Ahad had heard of the Templars\' plan to depart for Cyprus. While the Templars made preparations to leave from Acre\'s harbor, Altaïr led an assault in order to intercept them and learn more. Encountering Maria Thorpe, Robert de Sable\'s former stewardess, Altaïr subdued and took Maria as his prisoner.',

  // File Name
  'assassins-creed-bloodlines.iso',

  // File Size
  '772MB',

  // File Type
  'ISO',

  // Region
  'United States',

  // Language
  'English, Europe, Japanese',

  // Genre
  'Action-Adventure, Stealth',

  // Download Link
  'https://testingtesting.com'
)

const data2 = new Datas
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
  '1.46GB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Fighting Game, Action Game',
  
  // Download_Link
  'link.link.link'
)

const data3 = new Datas
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
  '1.36GB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action Role-Playing, Adventure',
  
  // Download_Link
  'link.link.link'
)

const data4 = new Datas
(
  // Main Picture
  'gw.jpg',
    
  // Screenshots
  ['gw1.jpg', 'gw2.jpg', 'gw3.jpg', 'gw4.jpg'],
    
  // Title
  'God Of War : Chain Of Olympus',
    
  // Summary
  'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    
  // File_Name
  'god-of-war-chain-of-olympus.iso',
    
  // File_Size
  '1.49GB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Hack \'N Slash',
  
  // Download_Link
  'link.link.link'
)

const data5 = new Datas
(
  // Main Picture
  'gw2m.jpg',
    
  // Screenshots
  ['gw2-1.jpg', 'gw2-2.jpg', 'gw2-3.jpg', 'gw2-4.jpg'],
    
  // Title
  'God Of War : Ghost Of Sparta',
    
  // Summary
  'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    
  // File_Name
  'god-of-war-ghost-of-sparta.iso',
    
  // File_Size
  '1.62GB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Hack \'N Slash',
  
  // Download_Link
  'link.link.link'
)

const data6 = new Datas
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
  '845MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action-Adventure Game, Action Role-Playing',
  
  // Download_Link
  'link.link.link'
)

const data7 = new Datas
(
  // Main Picture
  'nsmw.jpg',
    
  // Screenshots
  ['nsmw1.jpg', 'nsmw2.jpg', 'nsmw3.jpg', 'nsmw4.jpg'],
    
  // Title
  'Need For Speed : Most Wanted',
    
  // Summary
  '',
    
  // File_Name
  'need-for-speed-most-wanted.iso',
    
  // File_Size
  '883MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Racing, Adventure',
  
  // Download_Link
  'link.link.link'
)

const data8 = new Datas
(
  // Main Picture
  't6.jpg',
    
  // Screenshots
  ['tk1.jpg', 'tk2.jpg', 'tk3.jpg', 'tk4.jpg'],
    
  // Title
  'Tekken 6',
    
  // Summary
  'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    
  // File_Name
  'tekken-6.iso',
    
  // File_Size
  '816MB',
    
  // File_Type
  'ISO',
  
  // Region
  'United States',
  
  // Language
  'English, Europe, Japanese',
  
  // Genre
  'Action, Fighting, PVP',
  
  // Download_Link
  'link.link.link'
)