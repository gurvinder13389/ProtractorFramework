var pgeLogin = require('./../pages/LoginPage.js');
var pgeHome = require('./../pages/HomePage.js');
var pgeUserList = require('./../pages/UserListPage.js');
var pgeAddUserPage = require('./../pages/AddUserPage.js');

describe('Test Suite',function() {

    beforeAll(async function() {
        await pgeLogin.login("admin","Password@ps01");
        browser.ignoreSynchronization = true;
    });

    afterAll(async function() {
        await pgeHome.clickSignOut();
        browser.ignoreSynchronization = false;
    });

    it('Test Case List user',async function() {
        await pgeHome.navigateToUserList();
        await pgeUserList.selectRegion("Western");
        await pgeUserList.selectState("California");
    });

    fit('Test Case Add user',async function() {
        await pgeHome.navigateToAddUser();
        await pgeAddUserPage.setDateOfHire("7/11/2019");
        browser.sleep(3000);
    });
    
});
