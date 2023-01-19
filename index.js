// Variables

const All_Inputs = document.querySelectorAll('input');
const reportform = document.querySelector('.report-form');
const btns = document.querySelectorAll('button');
const searchInput = document.querySelector('.search-input');
const gameDetail = document.querySelector('.game-detail');
const previewImage = document.querySelector('.preview-image');
const images = document.querySelectorAll('.img-preview');
const images2 = document.querySelectorAll('.images');
let _selected = reportform['selected'];
const rName = reportform['rname'];
const gName = reportform['gname'];
const fName = reportform['fname'];
const lName = reportform['lname'];
const _email = reportform['email'];
const _message = reportform['text'];
let _items = document.querySelectorAll('.search-list, .game-detail');
let imgs = document.querySelectorAll('.img');
let path = /^.*[\\\/]/;
let num = 0;
let x = [];

// Array, Objects

let color = JSON.parse(localStorage.getItem('color')) || [];

let values = [];

let getSet = [];

// Regular Functions

function color_scheme() {

  let _dark_mode_ = 'dark-mode';

  ranger.classList.toggle('dark-mode');

  if(ranger.classList.contains('dark-mode')) {

    boxes = document.querySelectorAll('.boxes');

    color.push(_dark_mode_);

    localStorage.setItem('color', JSON.stringify(color));

    // Dom Calls

    document.querySelector('.color-scheme').classList.add('dark-mode');

    document.querySelector('body').classList.add('dark-mode');

    document.querySelector('nav').classList.add('dark-mode');

    document.querySelector('footer').classList.add('dark-mode');

    document.querySelector('.controller-icon').classList.add('dark-mode');
    
    document.querySelector('.warning-icon').classList.add('dark-mode');
    
    document.querySelector('.facebook').classList.add('dark-mode');
    
    document.querySelector('.github').classList.add('dark-mode');

    reportform.classList.add('dark-mode');

    _items.forEach(item => item.classList.add('dark-mode'));
    
    boxes.forEach(box => box.classList.add('dark-mode'));

    if(document.URL == 'http://127.0.0.1:5500/index.html' || document.URL == 'https://jinshin19.github.io/Pirated/index.html') {

      document.querySelector('header').classList.add('dark-mode');

    } else {

      false;

    }
    

  } else {

    color.pop();

    localStorage.clear();

    document.querySelector('.color-scheme').classList.remove('dark-mode');

    document.querySelector('body').classList.remove('dark-mode');

    document.querySelector('nav').classList.remove('dark-mode');

    document.querySelector('footer').classList.remove('dark-mode');

    document.querySelector('.controller-icon').classList.remove('dark-mode');
    
    document.querySelector('.warning-icon').classList.remove('dark-mode');
    
    document.querySelector('.facebook').classList.remove('dark-mode');
    
    document.querySelector('.github').classList.remove('dark-mode');
    
    reportform.classList.remove('dark-mode');

    _items.forEach(item => item.classList.remove('dark-mode'));
    
    boxes.forEach(box => box.classList.remove('dark-mode'));

    if(document.URL == 'http://127.0.0.1:5500/index.html' || document.URL == 'https://jinshin19.github.io/Pirated/index.html') {

      document.querySelector('header').classList.remove('dark-mode');

    } else {

      false;

    }

  }

}

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
    return get.Title.replace(/[\W\s]/gm, '').toLowerCase() == value;
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

function createElement() {

  for(let i = 0; i < ppssppGameLists.length; i++) {

    boxes = document.createElement('div');
    boxImg = document.createElement('img');
    hr = document.createElement('hr');
    ul = document.createElement('ul');
    li1 = document.createElement('li');
    li2 = document.createElement('li');
    li3 = document.createElement('li');
    h4 = document.createElement('h4');
    button = document.createElement('button');
    //
    boxes.classList.add('boxes');
    boxes.id = 'test';
    button.classList.add('viewBtn');
    button.type = 'button';
    //
    boxImg.src = 'imgs/' + ppssppGameLists[i].Main_Picture;
    h4.innerText = ppssppGameLists[i].Title;
    li2.innerHTML = '<b>File Size: </b>' + ppssppGameLists[i].File_Size;
    button.innerText = 'View Details';
    //
    li1.appendChild(h4);
    li3.appendChild(button);
    ul.append(li1,li2,li3);
    boxes.append(boxImg, hr, ul);

    document.querySelector('.games-wrapper').appendChild(boxes);
    
    const viewDetails = document.querySelectorAll('.viewBtn');

    viewDetails.forEach(btn => {

      btn.onclick = e => {
  
        e.target.classList.add('clicked');
  
        setTimeout(() => e.target.classList.remove('clicked', 50));
  
        onSet(e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent);
  
        gameDetailPanelOpen();
  
        searchInput.parentElement.classList.remove('expand');
  
        searchInput.classList.remove('show');
  
      }
  
    })

  }

}

// Validation

function clearReportInput() {

  gName.value = '';
  fName.value = '';
  lName.value = '';
  _email.value = '';
  _message.value = '';
  _selected.value = 'Report';

  gName.classList.remove('green');
  gName.classList.remove('red');
  _email.classList.remove('green');
  _email.classList.remove('red');
  _email.classList.remove('orange');

  document.querySelector('.gNameResult').innerText = '';
      
  document.querySelector('.gNameResult').classList.remove('gNameResult-s');

}

function Game_Name_Validation() {

  gName.placeholder = 'Game Name ( Paste the link )';

  gName.classList.remove('red');

  gName.classList.remove('fred');

  gName.onkeyup = e => {

    game_title_result = ppssppGameLists.filter(ppsspp => {
  
      return ppsspp.Title.toLowerCase().replace(/[\W\s]*/gm, '').indexOf(e.target.value.toLowerCase().replace(/[\W\s]*/gm, '')) > -1;
  
    });

    game_link_result = ppssppGameLists.filter(link => {

      return link.Download_Link.toLowerCase().replace(/[\W\s]*/g, '').indexOf(e.target.value.toLowerCase().replace(/[\W\s]*/gm, '')) > -1;

    });

    if(gName.value.length > 0) {

      if(game_title_result.length == 1) {
        
        if(game_title_result[0].Title.toLowerCase().replace(/[\W\s]*/g,'') == e.target.value.toLowerCase().replace(/[\W\s]*/g,'')) {

          gName.classList.remove('orange');
              
          gName.classList.remove('red');
      
          gName.classList.add('green');
      
          document.querySelector('.gNameResult').innerText = '';
      
          document.querySelector('.gNameResult').classList.remove('gNameResult-s');
      
        } else {

          gName.classList.remove('orange');
              
          gName.classList.add('red');
      
          gName.classList.remove('green');

          document.querySelector('.gNameResult').innerText = game_title_result[0].Title;
      
          document.querySelector('.gNameResult').classList.add('gNameResult-s');

        };
  
      } else if(game_link_result.length == 1) {

        if(game_link_result[0].Download_Link.toLowerCase().replace(/[\W\s]*/g,'') == e.target.value.toLowerCase().replace(/[\W\s]*/g,'')) {

          gName.classList.remove('orange');
              
          gName.classList.remove('red');
      
          gName.classList.add('green');
      
          document.querySelector('.gNameResult').innerText = '';
      
          document.querySelector('.gNameResult').classList.remove('gNameResult-s');
      
        } else {

          gName.classList.remove('orange');
              
          gName.classList.add('red');
      
          gName.classList.remove('green');

        };
  
      } else {

        gName.classList.add('orange');
              
        gName.classList.remove('red');
      
        gName.classList.remove('green');
  
        document.querySelector('.gNameResult').innerText = '';
      
        document.querySelector('.gNameResult').classList.remove('gNameResult-s');
  
      }

    } else {

      gName.classList.remove('orange');
              
      gName.classList.remove('red');
      
      gName.classList.remove('green');
  
      document.querySelector('.gNameResult').innerText = '';
      
      document.querySelector('.gNameResult').classList.remove('gNameResult-s');

      game_title_result = ppssppGameLists.filter(van => van.Title == x);

      game_link_result = ppssppGameLists.filter(van => van.Download_Link == x);

    }

  }

}

function Email_Validation() {

  _selected.value == 'Report' ? _email.placeholder = 'Email ( Be notified if the link is fixed - Optional )'  : _selected.value == 'Message' ? _email.placeholder = 'Email ( Required )' : '';

  _email.classList.remove('red');

  _email.classList.remove('fred');

  email_regex = /^[a-z0-9.]*(@gmail\.com|@yahoo\.com)$/gm;

  _email.onkeyup = e => {

    email_value_length = e.currentTarget.value.length;

    switch(email_value_length == email_value_length) {

      case email_value_length == 0: 
      
        _email.classList.remove('green');

        _email.classList.remove('red');

        _email.classList.remove('orange');
  
          break;
      
      case email_value_length > 10: 
      
        if(_email.value.toLowerCase().match(email_regex)) {

          _email.classList.add('green');

          _email.classList.remove('red');

          _email.classList.remove('orange');

        } else {

          _email.classList.remove('green');

          _email.classList.remove('orange');

          _email.classList.add('red');

        }
  
          break;
  
      case email_value_length > 1 < 10:

        _email.classList.remove('green');

        _email.classList.add('orange');

        _email.classList.remove('red');
  
          break;
  
      default: false;
  
    }

  }

}

// Window Onload 

window.onload = () => {

  document.URL == 'http://127.0.0.1:5500/games.html' || document.URL == 'https://jinshin19.github.io/Pirated/games.html' ? createElement() : false;

  if(color.length > 0) {

    boxes = document.querySelectorAll('.boxes');

    document.querySelector('.color-scheme').classList.add(color.toString());

    document.querySelector('body').classList.add(color.toString());

    document.querySelector('nav').classList.add(color.toString());

    document.querySelector('footer').classList.add(color.toString());

    document.querySelector('.controller-icon').classList.add(color.toString());
    
    document.querySelector('.warning-icon').classList.add(color.toString());
    
    document.querySelector('.facebook').classList.add(color.toString());
    
    document.querySelector('.github').classList.add(color.toString());
    
    reportform.classList.add(color.toString());

    _items.forEach(item => item.classList.add(color.toString()));
    
    boxes.forEach(box => box.classList.add(color.toString()));

    if(document.URL == 'http://127.0.0.1:5500/index.html' || document.URL == 'https://jinshin19.github.io/Pirated/index.html') {

      document.querySelector('header').classList.add(color.toString());

    } else {

      false;

    }

  } else {

    localStorage.clear();

  }

  // if(ppssppGameLists.filter(t => t.Main_Picture == '').length > 0) {

  //   /// TESTING FETCH

  //   fetch('https://archive.org/download/dragon-ball-z-shin-budokai_202103/Dragon%20Ball%20Z%20Shin%20Budokai.jpg').then(response => {

  //     return response.blob();

  //   }).then(blob => {

  //     list = document.querySelectorAll('#test');

  //     list.forEach(each => {

  //       if(each.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.textContent == 'Dragon Ball') 

  //      return each.firstElementChild.src = URL.createObjectURL(blob)

  //     })

  //   })
    
  // } else {

  //   return console.log('Did Not Match Any');
  
  // }
  
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

      if(ppssppGameLists.filter(get => get.Main_Picture == e.target.textContent.toLowerCase())) {

        e.target.classList.add('clicked');

        setTimeout(() => e.target.classList.remove('clicked'), 50);

        onSet(e.target.textContent.toLowerCase());

        gameDetailPanelOpen();

        searchInput.value = '';

        setTimeout(() => {

          x = ppssppGameLists.filter(value => value.Name == getSet);

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
    
          return value.Name == getSet;
    
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

function reportOpen() {
  
  if(_selected.value.toLowerCase() == 'report') {

    reportform.firstElementChild.textContent = ' Make a ' + _selected.value.toLowerCase();

    reportStr = `Inlude the name of the game's broken download link <br> ( e.g : Assassin's Creed : Bloodline ) <br> Or <br>
    Copy & paste the broken game download link.`;
  
    document.querySelector('.report-form').firstElementChild.nextElementSibling.innerHTML = reportStr;
  
    fName.classList.add('hide');

    lName.classList.add('hide');
  
    gName.classList.remove('hide');
  
    gName.placeholder = 'Game Name ( Paste the link )';
  
    _email.placeholder = 'Email ( Be notified if the link is fixed - Optional )';

  }

  document.querySelector('.report-wrapper').classList.add('report-wrapper-s');
  document.querySelector('.report-wrapper').classList.add('descend');

  document.querySelector('.report-wrapper').addEventListener('animationend', slideFromRight);

  function slideFromRight() {

    document.querySelector('.report-form').classList.add('form-s');
    document.querySelector('.report-form').classList.add('slideFromRight');
    document.querySelector('.report-wrapper').removeEventListener('animationend', slideFromRight)

  }

}

function reportClose() {

  document.querySelector('.report-form').classList.remove('slideFromRight');
  document.querySelector('.report-form').classList.add('slideToRight');

  document.querySelector('.report-form').addEventListener('animationend', slideToRight);

  function slideToRight() {

    document.querySelector('.report-form').classList.remove('form-s');
    document.querySelector('.report-wrapper').classList.add('ascend');

    document.querySelector('.report-wrapper').addEventListener('animationend', ascend);

    function ascend() {

      clearReportInput();

      document.querySelector('.report-form').classList.remove('slideToRight');
    
      document.querySelector('.report-form').removeEventListener('animationend', slideToRight);

      document.querySelector('.report-wrapper').removeEventListener('animationend', ascend);

      setTimeout(() => {
        document.querySelector('.report-wrapper').classList.remove('ascend');
        document.querySelector('.report-wrapper').classList.remove('report-wrapper-s');
        setTimeout(() => document.querySelector('.report').disabled = false, 50);
      }, 200);

    }

  }

}

// Arrow Functions

searchInput.onkeyup = e => {

  val = e.target.value;
  
  if(searchInput.value.length > 0) {

    x = ppssppGameLists.filter(value => {

      return value.Title.toLowerCase().replace(/[\W\s]*/gm, '').indexOf(e.target.value.replace(/[\W\s]*/gm, '').toLowerCase()) > -1;

    })
    
    appendList(e.target.value);

  } else if(searchInput.value.length == 0) {

    x = ppssppGameLists.filter(value => {

      return value.Name == getSet;

    })

    appendList();
    
  }

  if(document.querySelector('.search-list').childElementCount > 0) {

    document.querySelector('.search-wrapper').classList.add('border-radius');

  } else {

    document.querySelector('.search-wrapper').classList.remove('border-radius');

  }

}

document.querySelector('select').onclick = e => {

  selectedValue = e.target.value.toLowerCase();

  mainStr =  reportform.firstElementChild.textContent = ' Make a ' + selectedValue;

  reportStr = `Inlude the name of the game's broken download link <br> ( e.g : Assassin's Creed : Bloodline ) <br> Or <br>
  Copy & paste the broken game download link.`;

  messageStr = `Message me instead?`;

  requestStr = `If you have something in mind to suggest or should be added then don't hesitate to state your message. Thanks!`;

  otherStr = `Your choice`;

  switch(selectedValue == selectedValue) {

    case selectedValue == 'report': 

      document.querySelector('.report-form').firstElementChild.nextElementSibling.innerHTML = reportStr;

      fName.classList.add('hide');

      lName.classList.add('hide');

      rName.classList.add('hide');

      gName.classList.remove('hide');

      gName.classList.remove('red');

      gName.classList.remove('fred');

      gName.placeholder = 'Game Name ( Paste the link )';

      _email.placeholder = 'Email ( Be notified if the link is fixed - Optional )';
      
      break;
    
    case selectedValue == 'message': 
    
      document.querySelector('.report-form').firstElementChild.nextElementSibling.innerHTML = messageStr;

      gName.classList.add('hide');

      rName.classList.add('hide');

      fName.classList.remove('hide');

      lName.classList.remove('hide');

      _email.classList.remove('hide');

      _email.classList.remove('red');

      _email.classList.remove('fred');

      _email.placeholder = 'Email ( Required )';

      _message.placeholder = ' Your Message Here';

      break;

    case selectedValue == 'request': 

      document.querySelector('.report-form').firstElementChild.nextElementSibling.innerHTML = requestStr;

      fName.classList.add('hide');

      lName.classList.add('hide');

      gName.classList.add('hide');

      rName.value = '';

      rName.classList.remove('hide');

      rName.placeholder = 'Game Name ( PPSSPP game only )';

      _email.placeholder = 'Email ( Be notified if the game is added - Optional )';

      break;

    case selectedValue == 'other': 

      document.querySelector('.report-form').firstElementChild.nextElementSibling.innerHTML = otherStr;

      reportform.firstElementChild.textContent = ' Other ';

      fName.classList.remove('hide');

      lName.classList.remove('hide');

      _email.classList.remove('hide');

      gName.classList.add('hide');

      rName.value = '';

      rName.classList.remove('hide');

      rName.placeholder = 'Your Own Subject';

      _email.placeholder = 'Email';

      _message.placeholder = ' Your Message Here';

      break;

    default: throw Error('Invalid!');

  }

}

btns.forEach(btn => {

  btn.onclick = e => {

    ranger = e.currentTarget;

    switch(ranger == ranger) {

      case ranger.textContent == '<': prev();
    
        break;

      case ranger.textContent == '>': next();

        break;

      case ranger.classList.contains('search-button'):

        ranger.parentElement.classList.toggle('expand')

        ranger.previousElementSibling.classList.toggle('show');

        if(ranger.previousElementSibling.value.length > 0) 
        document.querySelector('.search-box-result').classList.add('show');
        
        searchBoxResults();
      
        false;
        
        break;

      case ranger.classList.contains('report'): 

        ranger.disabled = true;
      
        ranger.classList.add('clicked');

        setTimeout(() => ranger.classList.remove('clicked'), 50);

        reportOpen();

        break;

      case ranger.classList.contains('gNameResult'):

        ranger.classList.add('clicked');

        setTimeout(() => ranger.classList.remove('clicked'));

        gName.value = ranger.innerText;

        gName.classList.remove('orange');
        
        gName.classList.remove('red');

        gName.classList.add('green');

        document.querySelector('.gNameResult').innerText = '';

        document.querySelector('.gNameResult').classList.remove('gNameResult-s');

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

              return value.Name == getSet;
        
            })
            
            resultList = document.querySelectorAll('.result-list');

            resultList.forEach(result => result.remove());
          
          }, 300);

        } else if(ranger.classList.contains('report-wrapper-c')) {

          ranger.classList.add('clicked');

          setTimeout(() => ranger.classList.remove('clicked'), 50);

          setTimeout(() => {

            reportClose();
          
          }, 300);

        }

        break;

      case ranger.classList.contains('color-scheme'):
        
        ranger.parentElement.classList.add('rotate');

        setTimeout(() => ranger.parentElement.classList.remove('rotate'), 500);

        color_scheme();

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


All_Inputs.forEach(inputs => {

  inputs.onfocus = e => {

    gvalue = gName.value.toLowerCase().replace(/[\W\s]*/g, '');

    ppssppGameLists.map(look => look.Download_Link.replace(/[\W\s]*/g, '') == gvalue ? gName.classList.add('green') : '');

    currentFocus = e.currentTarget.name;

    Game_Name_Validation();
      
    Email_Validation();

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

document.querySelector('.report-wrapper').onmousemove = e => {

  if(document.querySelector('.submit').disabled == true) {

    '';

  } else {

    if(e.clientY < 250) return document.querySelector('.report-wrapper-c').classList.add('peekaboo');
    return document.querySelector('.report-wrapper-c').classList.remove('peekaboo');;

  }

  

}
