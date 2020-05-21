var prot = require('protractor');
var cmnUtil = require('./../Util/CommonUtil.js');
//===================Locators========================
var oRegion = prot.element(prot.by.xpath("//span[text()='Region']"));
var oState = prot.element(prot.by.xpath("//span[text()='State']"));
var oSearch = prot.element(prot.by.xpath("//input[@placeholder='Search']"));

function userListPage() {
   this.clickRegion = async function() {
       await cmnUtil.clickElement(oRegion);
    };

   this.clickState = async function() {
      await cmnUtil.clickElement(oState);
   };

   this.setSearch = async function(strSearch) {
      await cmnUtil.setData(oSearch,strSearch);
   };
//================Operation============================
   this.selectRegion = async function(strRegion) {
      await this.clickRegion();
      await cmnUtil.clickText(strRegion);
   };

   this.selectState = async function(strState) {
      await this.clickState();
      await this.setSearch(strState);
      await cmnUtil.clickText(strState);
   };
  
};
module.exports = new userListPage();