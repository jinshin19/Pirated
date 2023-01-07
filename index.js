// Variables

const btns = document.querySelectorAll('button');
const searchInput = document.querySelector('.search-input');
const gameDetail = document.querySelector('.game-detail');
const previewImage = document.querySelector('.preview-image');
const images = document.querySelectorAll('.img-preview');
const images2 = document.querySelectorAll('.images');
const viewDetails = document.querySelectorAll('.viewBtn');
let imgs = document.querySelectorAll('.img');
let path = /^.*[\\\/]/;
let num = 0;
let x = [];

// Array, Objects

values = [];

let getSet = [];

const ppssppGameLists = [
  {
    Main_Picture:'acb.jpg',
    Screenshots: ['ac1.png', 'ac2.jpg', 'ac3.jpg', 'ac4.png'],
    Title: 'Assassin\'s Creed: Bloodlines',
    Summary: 'During the Autumn of 1191, the Assassin Altaïr Ibn-La\'Ahad had heard of the Templars\' plan to depart for Cyprus. While the Templars made preparations to leave from Acre\'s harbor, Altaïr led an assault in order to intercept them and learn more. Encountering Maria Thorpe, Robert de Sable\'s former stewardess, Altaïr subdued and took Maria as his prisoner.',
    File_Name: 'pirated-assassins-creed-bloodlines.iso',
    File_Size: '600MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure, Stealth',
    Download_Link: 'www.google.com',
    name: 'assassinscreedbloodlines'
  },
  {
    Main_Picture:'bch.jpg',
    Screenshots: ['bs1.jpg', 'bs2.png', 'bs3.jpg', 'bs4.jpg'],
    Title: 'Basara Chronicle Heroes',
    Summary: 'The game is similar to the previous PSP release Sengoku Basara: Battle Heroes. Gamers create a team consisting of two heroes from the series and face off in battle against another player. The game will support up to four players ad hoc. This game feature characters from Sengoku Basara: Samurai Heroes (called Sengoku Basara 3 in Japan) like Ishida Mitsunari and the revamped Tokugawa Ieyasu.',
    File_Name: 'basara-chronicle-heroes.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action Hack and slash, Fighting Beat em up',
    Download_Link: 'www.facebook.com',
    name: 'basarachronicleheroes'
  },
  {
    Main_Picture:'cv.jpg',
    Screenshots: ['cv1.jpg', 'cv2.jpg', 'cv3.jpg', 'cv4.jpg'],
    Title: 'Castlevania : The Dracula X Chronicles',
    Summary: 'In the halcyon days of yore, overripe with peace and prosperity, not a soul believed that tomorrow could bring anything but more of the tranquil plenty about them...But peace and prosperity give always give rise to the wicked: those who deny mankind comfort, and grow bored of peace. A dark congregation of such villains began to gather, plotting to revive an unholy power to destroy the decadent world and begin anew.',
    File_Name: 'castlevania-the-dracula-x-chronicles.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Platform, Adventure',
    Download_Link: 'www.facebook.com',
    name: 'castlevaniathedraculaxchronicles'
  },
  {
    Main_Picture:'di.jpg',
    Screenshots: ['di1.jpg', 'di2.jpg', 'di3.png', 'di4.jpg'],
    Title: 'Dante\'s Inferno',
    Summary: 'It follows Dante, imagined as a Templar knight from The Crusades, who, guided by the spirit of the poet Virgil, must fight through the nine Circles of Hell to rescue Beatrice from the clutches of Lucifer himself. In the game, players control Dante from a third-person perspective.',
    File_Name: 'dantes-inferno.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure, Hack \'N Slash',
    Download_Link: 'www.facebook.com',
    name: 'dantesinferno'
  },
  {
    Main_Picture:'dj.jpg',
    Screenshots: ['dj1.jpg', 'dj2.jpg', 'dj3.jpg', 'dj4.jpg'],
    Title: 'Def Jam Fight For New York',
    Summary: 'The game\'s story is a prequel to the events of Def Jam Vendetta. However, the game uses many of the same situations and characters from Fight for NY, which is the third game in the series, chronologically. You still play a nameless up-and-coming gangsta brought into the world of underground street fighting after rescuing one of the game\'s personalities from trouble with the police.',
    File_Name: 'def-jam-fight-for-ny.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Fighting Game, Action Game',
    Download_Link: 'www.facebook.com',
    name: 'defjamfightfornewyork'
  },
  {
    Main_Picture:'ff7.jpg',
    Screenshots: ['ff71.jpg', 'ff72.jpg', 'ff73.jpg', 'ff74.jpg'],
    Title: 'Final Fantasy VII: Crisis Core',
    Summary: 'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    File_Name: 'final-fantasy-vii-crisis-core.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Role-Playing, Action-Adventure',
    Download_Link: 'www.facebook.com',
    name: 'finalfantasyviicrisiscore'
  },
  {
    Main_Picture:'ffd.jpg',
    Screenshots: ['ff71.jpg', 'ff72.jpg', 'ff73.jpg', 'ff74.jpg'],
    Title: 'Final Fantasy : Dissidia',
    Summary: 'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    File_Name: 'final-fantasy-dissidia.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Fighting, Adventure, Action',
    Download_Link: 'www.facebook.com',
    name: 'finalfantasydissidia'
  },
  {
    Main_Picture:'ge2.jpg',
    Screenshots: ['ge2-1.jpg', 'ge2-2.jpg', 'ge2-3.jpg', 'ge2-4.jpg'],
    Title: 'God Eater 2 (Japan)',
    Summary: 'The game takes place 3 years after the original.  A new fatal pandemic called the Black Plague, caused by red rain, has struck the Far East area. Members of Special Forces Blood, an affiliate of Fenrir who reside in a mobile base, are sent to assist. The player takes control of the new Protagonist (God Eater 2) who is a new recruit to Blood.',
    File_Name: 'god-eater-2-japan.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action Role-Playing, Adventure',
    Download_Link: 'www.facebook.com',
    name: 'godeater2japan'
  },
  {
    Main_Picture:'geb.jpg',
    Screenshots: ['geb1.jpg', 'geb2.jpg', 'geb3.jpg', 'geb4.jpg'],
    Title: 'God Eater : Burst',
    Summary: 'After the defeat of Director Schicksal, the Protagonist\'s God Arc begins to malfunction. After a successful mission against a new species of Aragami called Hannibal, Soma devours the core but the monster comes back to life and attacks Kota. The protagonist blocks the attack, but their God Arc can\'t handle the damage and its core is damaged.',
    File_Name: 'god-eater-burst.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action Role-Playing, Adventure',
    Download_Link: 'www.facebook.com',
    name: 'godeaterburst'
  },
  {
    Main_Picture:'gw.jpg',
    Screenshots: ['ff71.jpg', 'ff72.jpg', 'ff73.jpg', 'ff74.jpg'],
    Title: 'God Of War : Chain Of Olympus',
    Summary: 'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    File_Name: 'god-of-war-chain-of-olympus.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Hack \'N Slash',
    Download_Link: 'www.facebook.com',
    name: 'godofwarchainofolympus'
  },
  {
    Main_Picture:'gw2.jpg',
    Screenshots: ['ff71.jpg', 'ff72.jpg', 'ff73.jpg', 'ff74.jpg'],
    Title: 'God Of War : Ghost Of Sparta',
    Summary: 'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    File_Name: 'god-of-war-ghost-of-sparta.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Hack \'N Slash',
    Download_Link: 'www.facebook.com',
    name: 'godofwarghostofsparta'
  },
  {
    Main_Picture:'kdhbs.jpg',
    Screenshots: ['kdhbs1.jpg', 'kdhbs2.jpg', 'kdhbs3.jpg', 'kdhbs4.jpg'],
    Title: 'Kingdom Hearts : Birth By Sleep',
    Summary: 'It is a prequel to the original Kingdom Hearts, taking place ten years before. The game centers on the journeys of Terra, Aqua and Ventus, characters briefly featured in Kingdom Hearts II in their quest to locate the missing Master Xehanort, and protect the worlds from creatures known as the Unversed.',
    File_Name: 'kingdom-hearts-birth-by-sleep.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Action Role-Playing',
    Download_Link: 'www.facebook.com',
    name: 'kingdomheartsbirthbysleep'
  },
  {
    Main_Picture:'mhfu.jpg',
    Screenshots: ['mhfu1.jpg', 'mhfu2.jpg', 'mhfu3.jpg', 'mhfu4.jpg'],
    Title: 'Monster Hunter Freedom Unite',
    Summary: 'Just like its predecessors, Monster Hunter and Monster Hunter G, this game revolves around the player completing quests and gathering materials to upgrade their equipment in order to advance. The more rare the items and equipment, the stronger the main physical aspects of the character will be. Unlike other hack slash games, this game requires planning and skill in order to overcome large monsters instead of brute force.',
    File_Name: 'monster-hunter-freedom-unite.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Action Role-Playing',
    Download_Link: 'www.facebook.com',
    name: 'monsterhunterfreedomunite'
  },
  {
    Main_Picture:'nsmw.jpg',
    Screenshots: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    Title: 'Need For Speed : Most Wanted',
    Summary: '',
    File_Name: 'need-for-speed-most-wanted.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Racing, Adventure',
    Download_Link: 'www.facebook.com',
    name: 'needforspeedmostwanted'
  },
  {
    Main_Picture:'nsni.jpg',
    Screenshots: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    Title: 'Naruto Shippuden : Ultimate Ninja Impact',
    Summary: '',
    File_Name: 'naruto-shippuden-ultimate-ninja-impact.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure, Fighting Game',
    Download_Link: 'www.facebook.com',
    name: 'narutoshippudenultimateninjaimpact'
  },
  {
    Main_Picture:'pp.jpg',
    Screenshots: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    Title: 'Prince Of Persia : Rival Swords',
    Summary: '',
    File_Name: 'prince-of-persia-rival-swords.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Action Role-Playing',
    Download_Link: 'www.facebook.com',
    name: 'princeofpersiarivalswords'
  },
  {
    Main_Picture:'saoim.jpg',
    Screenshots: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    Title: 'Sword Art Online : Infinity Moments',
    Summary: '',
    File_Name: 'sword-art-online-infinity-moments.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Action Role-Playing',
    Download_Link: 'www.facebook.com',
    name: 'swordartonlineinfinitymoments'
  },
  {
    Main_Picture:'sho.jpg',
    Screenshots: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    Title: 'Silent Hill : Origin',
    Summary: '',
    File_Name: 'silent-hill-origin.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Survival Horror',
    Download_Link: 'www.facebook.com',
    name: 'silenthillorigin'
  },
  {
    Main_Picture:'t6.jpg',
    Screenshots: ['tk1.jpg', 'tk2.jpg', 'tk3.png', 'tk4.jfif'],
    Title: 'Tekken 6',
    Summary: 'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    File_Name: 'tekken-6.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action, Fighting, PVP',
    Download_Link: 'www.facebook.com',
    name: 'tekken6'
  },
  {
    Main_Picture:'ttb.jpg',
    Screenshots: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    Title: 'The Third Birthday',
    Summary: '',
    File_Name: 'the-third-birthday.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Action Role-Playing',
    Download_Link: 'www.facebook.com',
    name: 'thethirdbirthday'
  },
  {
    Main_Picture:'tw.jpg',
    Screenshots: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    Title: 'The Warriors',
    Summary: '',
    File_Name: 'the-warriors.iso',
    File_Size: '',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Action-Adventure Game, Fighting',
    Download_Link: 'www.facebook.com',
    name: 'thewarriors'
  }
];

// Regular Functions

function set(picture, screenshots, title, summary, file_name, file_size, file_type, region, language, genre, download_link) {

  gameDetail.firstElementChild.firstElementChild.src = 'imgs/' + picture;

  children1 = document.querySelector('.game-images').children;

  children2 = document.querySelector('.cols-2').nextElementSibling.children;

  childValues1 = Array.from(children1);

  childValues2 = Array.from(children2);

  for(i = 0; i < screenshots.length; i++) {

    for(i = 0; i < childValues1.length; i++) {
      childValues1[i].src = 'imgs/' + screenshots[i];
    }

    for(i = 0; i < childValues2.length; i++) {
      childValues2[i].src = 'imgs/' + screenshots[i];
    }

  }

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText = title;

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText = summary;

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.innerText = file_name;

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerText = file_size;

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText = file_type;

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText = region;

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText = language;

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText = genre;

  gameDetail.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.href = download_link;

}

function onSet(value) {
  value = value.split('').filter(get => get == get.match(/\w/)).join('').toLowerCase();

  getSet = ppssppGameLists.filter(get => {
    return get.name == value;
  })

  set(getSet[0].Main_Picture, getSet[0].Screenshots, getSet[0].Title, getSet[0].Summary, getSet[0].File_Name, getSet[0].File_Size, getSet[0].File_Type, getSet[0].Region, getSet[0].Language, getSet[0].Genre, getSet[0].Download_Link);

}

function scanner() {

  childrens = document.querySelector('.cols-2').nextElementSibling.children;

  childValues = Array.from(childrens);

  test = childValues.forEach(child => {
    if(child.src == document.querySelector('.opac').src) child.classList.add('selected');
    false;
  });

}

function selected() {

  images2.forEach(images2 => images2.classList.remove('selected'));
  
  images2.forEach(images2 => {
    if(images2.src == document.querySelector('.opac').src) return images2.classList.add('selected');
  });

}

function gameDetailPanelOpen () {

  gameDetail.classList.add('game-detail-s');

  gameDetail.addEventListener('animationend', opacity);

  function opacity() {
      
    imgs.forEach(img => {

      img.classList.add('opacity');

        gameDetail.removeEventListener('animationend', opacity);

    })

  }

  document.querySelector('.search-button').disabled = true;

}

function gameDetailPanelClose() {

  getSet = getSet.filter(get => get == ppssppGameLists);

  ranger.classList.add('clicked');

  ranger.addEventListener('animationend', ascend);

  function ascend() {

    gameDetail.classList.add('game-detail-c');

    gameDetail.addEventListener('animationend', ascended);

    function ascended() {

      gameDetail.removeEventListener('animationend', ascended);

      ranger.removeEventListener('animationend', ascend);

      imgs.forEach(img => {
        img.classList.remove('opacity');
      })

    }

    setTimeout(() => gameDetail.classList.remove('game-detail-s') || gameDetail.classList.remove('game-detail-c') || ranger.classList.remove('clicked'), 170)

    document.querySelector('.search-button').disabled = false;

  }
}

function setUp() {

  middle = document.querySelector('.opac').src.replace(path, '');

  values = ppssppGameLists.filter(ppssppGameLists => ppssppGameLists.Screenshots.includes(middle));

  values = values[0].Screenshots;

  return values;

}

function prev() {

  if(num <= 0) num = values.length;

  num--;

  middleImg();

  selected();

}

function next() {

  if ( num >= values.length - 1) num = - 1;

  num++;

  middleImg();

  selected();

}

function middleImg() {

  return  document.querySelector('.opac').setAttribute('src', 'imgs/' + values[num])

}

function previewImageOpen() {

  document.querySelector('.opac').src = selectedImg.src;

  scanner();

  setUp();

  previewImage.classList.add('slideFromRight');
  
  previewImage.addEventListener('animationend', imageOpacity);

  function imageOpacity() {

    imgsOpa = document.querySelectorAll('.opac');

    imgsOpa.forEach(imgsOpa => imgsOpa.classList.add('opacity'));

  }

  x = childValues.filter(get => {
    return get.src == document.querySelector('.opac').src;
  })

  num = childValues.indexOf(x[0]);

}

function previewImageClose() {

  ranger.classList.add('clicked');

  setTimeout(() => ranger.classList.remove('clicked'), 50);

  setTimeout(() => previewImage.classList.add('slideToRight'), 150);

  previewImage.addEventListener('animationend', slideToRight);

  function slideToRight() {

    previewImage.classList.remove('slideFromRight');

    previewImage.classList.remove('slideToRight');

    imgsOpa.forEach(imgsOpa => imgsOpa.classList.remove('opacity'));

    imgsOpa.forEach(imgsOpa => imgsOpa.classList.remove('selected'));

    previewImage.removeEventListener('animationend', slideToRight);

  }

  x = childValues.filter(get => {
    return get.src == ppssppGameLists[0].Title;
  })

}

function appendList(val) {

  searchList = document.querySelector('.search-list');
  list = document.querySelectorAll('.list');

  for(i = 0; i < x.length; i++) {

    anchor = document.createElement('button'); // Button

    anchor.classList.add('list');

    anchor.type = 'button';

    anchor.innerText = x[i].Title;

    searchList.appendChild(anchor);

    anchor.onclick = e => {

      if(ppssppGameLists.filter(get => get.name == e.target.textContent.toLowerCase())) {

        e.target.classList.add('clicked');

        setTimeout(() => e.target.classList.remove('clicked'), 50);

        onSet(e.target.textContent.toLowerCase());

        gameDetailPanelOpen();

        searchInput.value = '';

        setTimeout(() => {

          x = ppssppGameLists.filter(value => value.name == getSet);

          appendList();

          list.forEach(list => list.remove());

          document.querySelector('.search-wrapper').classList.remove('border-radius');

          searchInput.classList.remove('show');

          document.querySelector('.search-wrapper').classList.remove('expand');

        }, 100);

      } else {

        false;

      }

    }

  }

  for(i = 0; i < list.length; i++) {

    if(list[i].innerText.indexOf(val)[0] > -1) true;
    list[i].remove();

  }

}

function searchBoxResults() {

  searchBoxWrapper = document.querySelector('.search-box-result-wrapper');

  for(i = 0; i < x.length; i++) {

    box = document.createElement('button');
    boxImg = document.createElement('img');
    ul = document.createElement('ul');
    li1 = document.createElement('li');
    li2 = document.createElement('li');
    h4 = document.createElement('h4');
    //
    box.classList.add('boxes');
    box.classList.add('result-list')
    box.type = 'button';
    // 
    boxImg.src = 'imgs/' + x[i].Main_Picture;
    h4.innerText = x[i].Title;
    li2.innerHTML = '<b>File Size </b>' + x[i].File_Size;
    //
    li1.appendChild(h4);
    ul.append(li1, li2);
    box.append(boxImg, ul);
    //
    searchBoxWrapper.appendChild(box);
    //

    box.onclick = e => {
      
      clicked = e.currentTarget;

      clicked.classList.add('clicked');

      setTimeout(() => clicked.classList.remove('clicked'), 50)
        
      setTimeout(() => {

        onSet(clicked.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerText);

        document.querySelector('.search-box-result').classList.remove('show');
    
        x = ppssppGameLists.filter(value => {
    
          return value.name == getSet;
    
        })
        
        resultList = document.querySelectorAll('.result-list');
    
        resultList.forEach(result => result.remove());

        gameDetailPanelOpen();
      
      }, 300);

    }

    document.querySelector('.search-wrapper').classList.remove('border-radius');

    list = document.querySelectorAll('.list');

    list.forEach(list => list.remove());

    searchInput.value = '';

  }

}

// Arrow Functions

searchInput.onkeyup = e => {

  val = e.target.value;
  
  if(searchInput.value.length > 0) {

    x = ppssppGameLists.filter(value => {

      return value.name.indexOf(e.target.value.toLowerCase().replace(/\W[_]*/, '')) > -1; 

    })

    appendList(e.target.value);

  } else if(searchInput.value.length == 0) {

    x = ppssppGameLists.filter(value => {

      return value.name == getSet;

    })

    appendList();
    
  }

  if(document.querySelector('.search-list').childElementCount > 0) {

    document.querySelector('.search-wrapper').classList.add('border-radius');

  } else {

    document.querySelector('.search-wrapper').classList.remove('border-radius');

  }

}

btns.forEach(btn => {

  btn.onclick = e => {

    ranger = e.target;

    switch(ranger == ranger) {

      case ranger.textContent == '<': prev();
    
        break;

      case ranger.textContent == '>': next();

        break;

      case ranger.textContent == 'View Details':

        ranger.classList.add('clicked');

        setTimeout(() => ranger.classList.remove('clicked', 50));

        onSet(ranger.parentElement.parentElement.firstElementChild.firstElementChild.textContent);

        gameDetailPanelOpen();

        searchInput.parentElement.classList.remove('expand')

        searchInput.classList.remove('show');

        break;

      case ranger.classList.contains('search-button'):

        ranger.parentElement.classList.toggle('expand')

        ranger.previousElementSibling.classList.toggle('show');

        if(ranger.previousElementSibling.value.length > 0) document.querySelector('.search-box-result').classList.add('show');
        
        searchBoxResults();

        false;
        
        break;

      case ranger.classList.contains('game-detail-c'): 

        gameDetailPanelClose();

        break;

      case ranger.textContent == 'x':

        if(ranger.classList.contains('preview-image-c')) {

          previewImageClose();

        } else if(ranger.classList.contains('search-box-c')) {

          ranger.classList.add('clicked');

          setTimeout(() => ranger.classList.remove('clicked'), 50);

          setTimeout(() => {

            document.querySelector('.search-box-result').classList.remove('show');

            x = ppssppGameLists.filter(value => {

              return value.name == getSet;
        
            })
            
            resultList = document.querySelectorAll('.result-list');

            resultList.forEach(result => result.remove());
          
          }, 300);

        }

        break;
      
      default: alert(ranger);

    }

  }

})

images.forEach(imgOnlick => {

  imgOnlick.onclick = e => {

    selectedImg  = e.target;

    selectedImg.classList.add('clicked');

    setTimeout(() => selectedImg.classList.remove('clicked'), 50);

    setTimeout(() => previewImageOpen(), 100);
      
  }

})

images2.forEach(imgOnlick2 => {

  imgOnlick2.onclick = e => {

    document.querySelector('.opac').src = e.target.src;

    imgsOpa.forEach(imgsOpa => imgsOpa.classList.remove('selected'));

    e.target.classList.add('selected');

    num = childValues.indexOf(e.target);

  }

})

previewImage.onmousemove = e => {

  if(e.clientY < 280) return document.querySelector('.preview-image-c').classList.add('peekaboo');
  return document.querySelector('.preview-image-c').classList.remove('peekaboo');;

}

document.querySelector('.search-box-result').onmousemove = e => {

  if(e.clientY < 280) return document.querySelector('.search-box-c').classList.add('peekaboo');
  return document.querySelector('.search-box-c').classList.remove('peekaboo');;

}