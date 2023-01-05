// Variables

const btns = document.querySelectorAll('button');
const gameDetail = document.querySelector('.game-detail');
const previewImage = document.querySelector('.preview-image');
const images = document.querySelectorAll('.img-preview');
const images2 = document.querySelectorAll('.images');
let imgs = document.querySelectorAll('.img');
let path = /^.*[\\\/]/;
let num = 0;

// Array, Objects

values = [];

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
  },
  {
    Main_Picture:'dj.jpg',
    Screenshots: ['dj1.jpg', 'dj2.jpg', 'dj3.jpg', 'dj4.png'],
    Title: 'Def Jam Fight For Ny',
    Summary: 'Following his victory in the previous tournament, Jin Kazama has taken charge of the Mishima Zaibatsu and now appears to possess tyrannical ambitions. Using the organisation’s resources, he severs the Mishima Zaibatsu\'s national ties, declare independence, and openly wages war against all nations.',
    File_Name: 'def-jam-fight-for-ny.iso',
    File_Size: '800MB',
    File_Type: 'ISO',
    Region: 'United States',
    Language: 'English, Europe, Japanese',
    Genre: 'Fighting, PVP',
    Download_Link: 'www.facebook.com',
    name: 'defjamfightforny'
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

}

// Onlick Events

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

        break;

      case ranger.classList.contains('search-button'):

        ranger.parentElement.classList.toggle('expand')

        ranger.previousElementSibling.classList.toggle('show');  
    
        break;

      case ranger.classList.contains('game-detail-c'): 

        gameDetailPanelClose();

        break;

      case ranger.textContent == 'x': 
      previewImageClose()
      
      ;

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