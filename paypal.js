
function createPaypal() {

  script = document.createElement('script');

  script.src = 'https://www.paypal.com/sdk/js?client-id=AeHItiA19kIuymj5rJeZEZMDWphTcAc8Rg8xfrvfVOdpB74HdktA6u7gqVx43CeB5PAUehG38RVE-W-N';

  document.head.prepend(script);

}

function paypalButton() {

  paypal.Buttons({

    style: {
      color: 'blue',
      label: 'pay'
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {value: '1'}
        }]
      })
    }
  }).render('#button-1');

  paypal.Buttons({

    style: {
      color: 'blue',
      label: 'pay'
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {value: '2'}
        }]
      })
    }
  }).render('#button-2');

  paypal.Buttons({

    style: {
      color: 'blue',
      label: 'pay'
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {value: '3'}
        }]
      })
    }
  }).render('#button-3');

  paypal.Buttons({

    style: {
      color: 'blue',
      label: 'pay'
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {value: '4'}
        }]
      })
    }
  }).render('#button-4');

  paypal.Buttons({

    style: {
      color: 'blue',
      label: 'pay'
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {value: '5'}
        }]
      })
    }
  }).render('#button-5');

}