function _success() {

  switch(_selected.value == _selected.value) {

    case _selected.value == 'Report': 
    
      reportform.firstElementChild.classList.add('fgreen');
      reportform.firstElementChild.textContent = ' Your ' + _selected.value.toLowerCase() + ' is successfully sent!';

      setTimeout(() => {
        
        reportform.firstElementChild.classList.remove('fgreen');

        reportform.firstElementChild.textContent = ' Make a ' + _selected.value.toLowerCase();

        document.querySelector('.submit').value= 'Submit';

        document.querySelector('.submit').disabled = false;

      }, 1500)

        break;
    
    case _selected.value == 'Message': 
      
      reportform.firstElementChild.classList.add('fgreen');
      reportform.firstElementChild.textContent = ' Your ' + _selected.value.toLowerCase() + ' is successfully sent!';

      setTimeout(() => {
        
        reportform.firstElementChild.classList.remove('fgreen');

        reportform.firstElementChild.textContent = ' Make a ' + _selected.value.toLowerCase();

        document.querySelector('.submit').value= 'Submit';

        document.querySelector('.submit').disabled = false;

      }, 1500)

        break;

    case _selected.value == 'Request': 

      reportform.firstElementChild.classList.add('fgreen');
      reportform.firstElementChild.textContent = ' Your ' + _selected.value.toLowerCase() + ' is successfully sent!';

      setTimeout(() => {
        
        reportform.firstElementChild.classList.remove('fgreen');

        reportform.firstElementChild.textContent = ' Make a ' + _selected.value.toLowerCase();

        document.querySelector('.submit').value= 'Submit';

        document.querySelector('.submit').disabled = false;

      }, 1500)

        break;

    case _selected.value == 'Other': 
    
      reportform.firstElementChild.classList.add('fgreen');
      reportform.firstElementChild.textContent = ' Successfully sent!';

      setTimeout(() => {
        
        reportform.firstElementChild.classList.remove('fgreen');

        reportform.firstElementChild.textContent = _selected.value;

        document.querySelector('.submit').value= 'Submit';

        document.querySelector('.submit').disabled = false;

      }, 1500)

        break;

    default: alert('Failed To Submit');

  }

}

function _failed() {

  switch(_selected.value == _selected.value) {

    case _selected.value == 'Report': 
    
      reportform.firstElementChild.classList.add('fred');
      reportform.firstElementChild.classList.remove('fgreen');
      reportform.firstElementChild.textContent = ' Failed to send your ' + _selected.value.toLowerCase() + '.';

      if(gName.value.length > 0 && game_title_result.length == 0) {

        gName.classList.add('orange');

      } else {

        gName.classList.add('red');
        gName.classList.add('fred');
        gName.placeholder = ' This is required ';

      }

      setTimeout(() => {
        
        reportform.firstElementChild.classList.remove('fgreen');
        reportform.firstElementChild.classList.remove('fred');
        reportform.firstElementChild.textContent = ' Make a ' + _selected.value.toLowerCase();

      }, 1500)

        break;
    
    case _selected.value == 'Message': 
      
      reportform.firstElementChild.classList.add('fred');
      reportform.firstElementChild.classList.remove('fgreen');
      reportform.firstElementChild.textContent = ' Failed to send your ' + _selected.value.toLowerCase() + '.';

      if(_email.value.length === 0) {

        _email.classList.add('red');
        _email.classList.add('fred');
        _email.placeholder = ' This is required ';

      };

      setTimeout(() => {
        
        reportform.firstElementChild.classList.remove('fgreen');
        reportform.firstElementChild.classList.remove('fred');
        reportform.firstElementChild.textContent = ' Make a ' + _selected.value.toLowerCase();

      }, 1500)

        break;

    case _selected.value == 'Request': 

      reportform.firstElementChild.classList.add('fred');
      reportform.firstElementChild.classList.remove('fgreen');
      reportform.firstElementChild.textContent = ' Failed to send your ' + _selected.value.toLowerCase() + '.';

      setTimeout(() => {
        
        reportform.firstElementChild.classList.remove('fgreen');
        reportform.firstElementChild.classList.remove('fred');
        reportform.firstElementChild.textContent = ' Make a ' + _selected.value.toLowerCase();

      }, 1500)

        break;

    case _selected.value == 'Other': 
    
      reportform.firstElementChild.classList.add('fred');
      reportform.firstElementChild.classList.remove('fgreen');
      reportform.firstElementChild.textContent = ' Failed to send. ';

      setTimeout(() => {
        
        reportform.firstElementChild.classList.remove('fgreen');
        reportform.firstElementChild.classList.remove('fred');
        reportform.firstElementChild.textContent = _selected.value;

      }, 1500)

        break;

    default: alert('Failed To Submit');

  }

}

function send(body) {

  Email.send({

    SecureToken : "58cd7a9a-cd0f-49ea-963e-f46af148771a",

    To : 'piratedwares.info@gmail.com',

    From : 'piratedwares.info@gmail.com',

    Subject : _selected.value,

    Body : body

  })

  .then(() => {

    _success();

    gName.value = '';
    fName.value = '';
    lName.value = '';
    _email.value = '';
    _message.value = '';

    gName.classList.remove('green');
    gName.classList.remove('red');
    _email.classList.remove('green');
    _email.classList.remove('red');
    _email.classList.remove('orange');

    document.querySelector('.gNameResult').innerText = '';
      
    document.querySelector('.gNameResult').classList.remove('gNameResult-s');

  })

}

document.querySelector('.submit').onclick = e => {

  switch(_selected.value == _selected.value) {

    case _selected.value == 'Report': 
    
      if
      (
        gName.classList.contains('green') && _email.classList.contains('green') ||
        gName.classList.contains('green') && _email.value.length == 0
      ) 
      {

        report = 
        `Subject: Someone ${_selected.value.toLowerCase()}ed a game.
        <br> 
        Game Name: <span style="text-decoration: underline;"><b>${gName.value}</b></span link is broken. <br>
        Email: ${_email.value.toLowerCase()} Let me know if the link is fixed. <br> 
        Message: ${_message.value} <br>`;

        e.currentTarget.disabled = true;

        document.querySelector('.submit').value = 'Please Wait';

        send(report);

      } else {

        _failed();

      }

      break;
    
    case _selected.value == 'Message': 
      
      if(_email.classList.contains('green')) {

        message = 
        `Subject: <span style="text-transform: capitalize;"> You have a ${_selected.value}!</span> <br> 
        Firstname: ${fName.value} <br> 
        Lastname: ${lName.value} <br> 
        This is my email: ${_email.value.toLowerCase()} <br> 
        Message: ${_message.value} <br>`;

        e.currentTarget.disabled = true;

        document.querySelector('.submit').value = 'Please Wait';

        send(message);

      } else {

        _failed();

      }

      break;

    case _selected.value == 'Request': 

      request = 
        `Subject: <span style="text-transform: capitalize;"> You received a ${_selected.value}</span> 
        <br> 
        Game Name: <span style="text-decoration: underline;"><b>${gName.value}</b></span next to be added. <br>
        Email: ${_email.value.toLowerCase()} let me know if the game I requested is added! <br> 
        Message: ${_message.value} <br>`;

        e.currentTarget.disabled = true;

        document.querySelector('.submit').value = 'Please Wait';

        send(request);

          break;

    case _selected.value == 'Other': 
    
      body = 
        `Subject: <span style="text-transform: capitalize;">${_selected.value}</span> 
        <br> 
        Title: <span style="text-decoration: underline;"><b>${gName.value}</b></span <br> 
        Firstname: ${fName.value} <br> 
        Lastname: ${lName.value} <br> 
        Email: ${_email.value.toLowerCase()} an email sent to you! <br> 
        Message: ${_message.value} <br>`;

        e.currentTarget.disabled = true;

        document.querySelector('.submit').value = 'Please Wait';
      
        send();

        break;

    default: alert('Failed To Submit');

  }

}