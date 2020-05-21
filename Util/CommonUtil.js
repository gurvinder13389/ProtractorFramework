var prot = require('protractor');
var EC = prot.ExpectedConditions;

function commonUtil() {
    
    this.winSwitchTitle = async function (strTitle)
    {
        var hndls = await prot.browser.getAllWindowHandles();
        for(let i=0;i<hndls.length;i++) {
            await prot.browser.driver.switchTo().window(hndls[i]);
            var sTitle = await prot.browser.getTitle();
            if(sTitle.indexOf(strTitle)>=0) {
                break;
            }
        }
    }

    this.waitForElement = async function(obj) {
        await prot.browser.wait(EC.elementToBeClickable(obj),30000);
    }

    this.clickElement = async function(obj) {
        await this.waitForElement(obj);
        await obj.click();
    }

    this.setData = async function(obj,strData) {
        await this.waitForElement(obj);
        await obj.sendKeys(strData);
    }

    this.clickText = async function(strText) {
        var obj = await prot.element(prot.by.xpath("//*[text()='" + strText + "']"));
        await this.waitForElement(obj);
        await this.clickElement(obj);
    }
}
module.exports = new commonUtil();