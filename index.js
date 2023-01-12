// Variables

const btns = document.querySelectorAll('button');
const searchInput = document.querySelector('.search-input');
const gameDetail = document.querySelector('.game-detail');
const previewImage = document.querySelector('.preview-image');
const images = document.querySelectorAll('.img-preview');
const images2 = document.querySelectorAll('.images');
let _items = document.querySelectorAll('.search-wrapper, .search-list, .a1, .game-detail');
let __items = document.querySelectorAll('body, nav');
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

  let 
    boxes_shadow = 'boxes-shadow',
    _body = 'body',
    _moon = 'moon',
    _rotate = 'rotate',
    search_w = 'search-w',
    font_color = 'font-color',
    controller_icon = 'controller-icon-w.png',
    warning_icon = 'warning-icon-w.png';

  ranger.classList.toggle('moon');

  if(ranger.classList.contains('moon')) {

    boxes = document.querySelectorAll('.boxes, .viewBtn');

    color.push(boxes_shadow, _body, _moon, _rotate, search_w, font_color, controller_icon, warning_icon);

    localStorage.setItem('color', JSON.stringify(color));

    boxes.forEach(box => box.classList.add('boxes-shadow'));

    _items.forEach(item => item.classList.add('boxes-shadow'));

    __items.forEach(item => item.classList.add(_body));
  
    document.querySelector('.a1').classList.add(_rotate);
  
    document.querySelector('.search-button').classList.add(search_w);
  
    searchInput.classList.add(font_color);
  
    document.querySelector('.controller-icon').src = 'icons/' + controller_icon;
  
    document.querySelector('.warning-icon').src = 'icons/' + warning_icon;

  } else {

    boxes.forEach(box => box.classList.remove('boxes-shadow'));

    _items.forEach(item => item.classList.remove(boxes_shadow));

    __items.forEach(item => item.classList.remove(_body));
  
    document.querySelector('.a1').classList.remove(_rotate);
  
    document.querySelector('.search-button').classList.remove(search_w);
  
    searchInput.classList.remove(font_color);
  
    document.querySelector('.controller-icon').src = 'icons/controller-icon.png';
  
    document.querySelector('.warning-icon').src = 'icons/warning-icon-b.png';

    localStorage.clear();

    color = color.filter(color => color == values);

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

window.onload = () => {

  document.URL == 'http://127.0.0.1:5500/games.html' || document.URL == 'https://jinshin19.github.io/Pirated/games.html' ? createElement() : false;

  if(color.length > 0) {

    boxes = document.querySelectorAll('.boxes, .viewBtn');

    boxes.forEach(box => box.classList.add(color[0]));

    _items.forEach(item => item.classList.add(color[0]));

    __items.forEach(item => item.classList.add(color[1]));

    document.querySelector('.a1').firstElementChild.classList.add(color[2]);
  
    document.querySelector('.a1').classList.add(color[3]);
  
    document.querySelector('.search-button').classList.add(color[4]);
  
    searchInput.classList.add(color[5]);
  
    document.querySelector('.controller-icon').src = 'icons/' + color[6];
  
    document.querySelector('.warning-icon').src = 'icons/' + color[7];

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

btns.forEach(btn => {

  btn.onclick = e => {

    ranger = e.target;

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

        }

        break;

      case ranger.classList.contains('color-scheme'): color_scheme();

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

