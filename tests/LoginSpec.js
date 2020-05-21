var pgeLogin = require('./../pages/LoginPage.js');
var pgeHome = require('./../pages/HomePage.js');
var pgeUserList = require('./../pages/UserListPage.js');

describe('Test Suite',function() {

    beforeAll(async function() {
        await pgeLogin.login("admin","Password@ps01");
        browser.ignoreSynchronization = true;
        
        // prot.browser.sleep(5000);
    });

    afterAll(async function() {
        await pgeHome.clickSignOut();
        browser.ignoreSynchronization = false;
    });
   

    it('Test Case Add user',async function() {
        await pgeHome.navigateToUserList();
        browser.sleep(2000);
        await pgeUserList.selectRegion("Western");
        await pgeUserList.selectState("California");
    });
});
