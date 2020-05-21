var prot = require('protractor');

function loginPage() {
    this.setUserName = async function(strUserName) {
       await prot.element(prot.by.xpath("//input[@placeholder='Username']")).sendKeys(strUserName);
    };

    this.setPassword = async function(strPassword) {
       await prot.element(prot.by.xpath("//input[@placeholder='Password']")).sendKeys(strPassword);
        
    };
    this.clickLogin = async function() {
       await prot.element(prot.by.xpath("//span[text()='Log in']")).click();
    };

    this.login = async function(strUserName,strPassword) {
      await this.setUserName(strUserName);
      await this.setPassword(strPassword);
      await this.clickLogin();
       
   };
    
};
module.exports = new loginPage();