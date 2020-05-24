var prot = require('protractor');
var cmnUtil = require('../Util/CommonUtil.js');

function addUserPage() {
   var oHireDate = prot.element(prot.by.xpath("//input[@placeholder='Date of Hire']"));

   this.setDateOfHire = async function(strDate) {
      await cmnUtil.setDataJS(oHireDate,strDate);
   };
  
};
module.exports = new addUserPage();