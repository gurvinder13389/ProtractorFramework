var prot = require('protractor');
var cmnUtil = require('./../Util/CommonUtil.js');

function loginPage() {
   var oUserName = prot.element(prot.by.xpath("//input[@placeholder='Username']"));
   var oPassword = prot.element(prot.by.xpath("//input[@placeholder='Password']"));
   var oLogin = prot.element(prot.by.xpath("//span[text()='Log in']"));

   this.setUserName = async function(strUserName) {
      await cmnUtil.setData(oUserName,strUserName);
   };

   this.setPassword = async function(strPassword) {
      await cmnUtil.setData(oPassword,strPassword);
   };

   this.clickLogin = async function() {
      await cmnUtil.clickElementWOWait(oLogin);
   };

   this.login = async function(strUserName,strPassword) {
      await this.setUserName(strUserName);
      await this.setPassword(strPassword);
      await this.clickLogin();
   };
};
module.exports = new loginPage();