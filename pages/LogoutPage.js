var prot = require('protractor');

function logoutPage() {
    
    this.clickLogout = async function() {
       await prot.element(prot.by.linkText("Logout")).click();
    };
    
    this.getHelloText = async function() {
        return await prot.element(prot.by.xpath("//h1[text()='Home']")).getText();
    };

    this.getLoggedInText = async function() {
        return await prot.element(prot.by.xpath("//p[text()='You\'re logged in!!']")).getText();
    };
}
module.exports = new logoutPage();