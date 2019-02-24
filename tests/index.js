module.exports = {
  'step one: check if all elements have a good color' : function (browser) {
    browser
      .url('https://www.axa.com/en/timeline/axa-adventure')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('button[data-response="yes"]', 1000)
        .click('button[data-response="yes"]')
        .pause(100)
        .waitForElementVisible('.period-3')
        .click('.period-5')
        .expect.element('#period-2010-2018').text.to.contains("2010 - 2018");
  }
};
module.exports = {
'Check if le menu is open on the buton click': function (browser) {
  browser
      .url('https://www.axa.com')
      .waitForElementVisible(".banner-message__header" ,3600)
      .click('.banner-message__header')
      .expect.element('button[aria-expanded="true"]').to.be.visible;

}
}