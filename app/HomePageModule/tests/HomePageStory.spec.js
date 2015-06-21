// spec.js
describe('A suite of stories about the home page', function() {
  var h1 = element(by.id('h1'));

  beforeEach(function() {
    browser.get('http://localhost/projects/angular_scalable/#/');
  });

  it('should have a title called Angular Scalable', function() {
    expect(browser.getTitle()).toEqual('Angular Scalable');
  });

  it('should have an h1 with the text Angular Scalable', function() {
    expect(h1.getText()).toEqual('Angular Scalable');
  });

});