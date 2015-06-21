// spec.js
describe('A suite of stories about the header', function() {
  var header = element(by.id('header'));
  var logo = element(by.id('logo'));

  beforeEach(function() {
    browser.get('http://localhost/projects/angular_architecture/#/');
  });

  it('should contain the text Site Logo', function() {
    expect(logo.getText()).toEqual('Site Logo');
  });

});