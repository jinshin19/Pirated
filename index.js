// Variables

const btns = document.querySelectorAll('button');
const gameDetail = document.querySelector('.game-detail');
let onclickImages = document.querySelectorAll('img');
let imgs = document.querySelectorAll('.img');

// Array, Objects

let getSet = [];

const ppssppGameLists = [
  {
    Main_Picture:'acb.jpg',
    Screenshots: ['ac1.jpg', 'ac2.jpg', 'ac3.jpg', 'ac4.jpg'],
    Title: 'Assassin\'s Creed: Bloodlines',
    Summary: 'During the Autumn of 1191, the Assassin Altaïr Ibn-La\'Ahad had heard of the Templars\' plan to depart for Cyprus. While the Templars made preparations to leave from Acre\'s harbor, Altaïr led an assault in order to intercept them and learn more. Encountering Maria Thorpe, Robert de Sable\'s former stewardess, Altaïr subdued and took Maria as his prisoner.',
    File_Name: 'pirated-assassins-creed-bloodlines.iso',
    File_Size: '600MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Role-Playing, Adventure',
    Download_Link: 'www.google.com',
    name: 'assassinscreedbloodlines'
  },
  {
    Main_Picture:'tk6.jpg',
    Screenshots: ['tk1.jpg', 'tk2.jpg', 'tk3.png', 'tk4.jfif'],
    Title: 'Tekken 6',
    Summary: 'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    File_Name: 'tekken-6.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Role-Playing, Fighting, PVP',
    Download_Link: 'www.facebook.com',
    name: 'tekken6'
  }
];

// Regular Functions

function set(picture, screenshots, title, summary, file_name, file_size, file_type, region, language, genre, download_link) {

  gameDetail.firstElementChild.firstElementChild.src = 'imgs/' + picture;

  childrens  = document.querySelector('.game-images').children;

  childValues = Array.from(childrens);

  for(i = 0; i < screenshots.length; i++) {

    for(i = 0; i < childValues.length; i++) {
      childValues[i].src = 'imgs/' + screenshots[i];
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

function gameDetailPanelOpen () {

  gameDetail.classList.add('game-detail-s');

  gameDetail.addEventListener('animationend', opacity);

    function opacity() {
      
      imgs.forEach(img => {

        img.classList.add('opacity');

        gameDetail.removeEventListener('animationend', opacity);

      })

    }

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

  }
}

btns.forEach(btn => {

  btn.onclick = e => {

    ranger = e.target;

    switch(ranger == ranger) {

      case ranger.textContent == '<': console.log('1st fire');
    
        break;

      case ranger.textContent == '>': console.log('2nd fire');

        break;

      case ranger.textContent == 'View Details':

        ranger.classList.add('clicked');

        setTimeout(() => ranger.classList.remove('clicked', 50));

        onSet(ranger.parentElement.parentElement.firstElementChild.firstElementChild.textContent);

        gameDetailPanelOpen();

        break;

      case ranger.classList.contains('search-button'):

        ranger.parentElement.classList.toggle('expand')

        ranger.previousElementSibling.classList.toggle('show');  
    
        break;

      case ranger.classList.contains('game-detail-c'): 

        gameDetailPanelClose();

        break;
      
      default: alert(ranger);
  }

  }

})

onclickImages.forEach(onImg => {

  onImg.onclick = e => {

    scan = e.target;

    switch(scan == scan) {

      case scan == ppssppGameLists.filter(getScan => getScan.Screenshots == scan.value): alert('WORKING!') ;

        break;

      // An idea popped up into my head and that idea is to use switch. Now I'm using it. 
      // Next is to make a functionality for the images when clicked and that's for tomorow because the time now is 11:23pm sheesh I need to sleep

    }

  }

})