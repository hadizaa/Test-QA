module.exports = {
    'step one: chek if all elements have a good color' : function (browser) {
      browser
        .url('https://www.axa.com/en/timeline/axa-adventure')
        .waitForElementVisible('body', 1000);
    },
  };