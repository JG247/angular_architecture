describe('A suite of stories about the form feature', function() {

	  var form = element(by.id('form'));
	  var user = element(by.model('username'));
	  var password = element(by.model('password'));
	  var submit = element(by.id('submit'));
	  var status = element(by.id('status'));
	  var mock_username = "James";    
	  var mock_password = 'abc';   
	  var status_success = 'You have successfully submitted the form';    

  beforeEach(function() {
    browser.get('http://localhost/projects/angular_architecture/#/');  
  });
  it('should populate username input with the name James', function (){
		element(by.model('username')).sendKeys(mock_username);  
		expect(user.getAttribute('value')).toContain(mock_username);
  });
  it('should populate the password with abc', function (){
		element(by.model('password')).sendKeys(mock_password);  
		expect(password.getAttribute('value')).toContain(mock_password);
  });
  it('should populate username input with the name James and password abc', function (){
		element(by.model('username')).sendKeys(mock_username);  
		element(by.model('password')).sendKeys(mock_password);  
		expect(user.getAttribute('value')).toContain(mock_username);
		expect(password.getAttribute('value')).toContain(mock_password);
  });
  it('should populate username input with the name James and password abc', function (){
		element(by.model('username')).sendKeys(mock_username);  
		element(by.model('password')).sendKeys(mock_password);  
		expect(user.getAttribute('value')).toContain(mock_username);
		expect(password.getAttribute('value')).toContain(mock_password);
		submit.click();
  });
});