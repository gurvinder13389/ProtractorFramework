var prot = require('protractor');
var cmnUtil = require('./../Util/CommonUtil.js');
var EC = prot.ExpectedConditions;

function homePage() {
    var oManageUsers = prot.element(prot.by.xpath("//*[contains(text(),'Manage Users')]"));
    var oUsersList = prot.element(prot.by.xpath("//*[contains(text(),'User List')]"));
    var oSignOutImage = prot.element(prot.by.css("div.user-dropdown img.profile-pic"));
    var oSignOutButton = prot.element(prot.by.partialButtonText("Sign Out"));
    var oAddUser = prot.element(prot.by.xpath("//*[contains(text(),'Add User')]"));
    var oManageFacility = prot.element(prot.by.xpath("//*[contains(text(),'Manage Facility')]"));
    var oFacilityList = prot.element(prot.by.xpath("//*[contains(text(),'Facility List')]"));
    var oAddFacility = prot.element(prot.by.xpath("//*[contains(text(),'Add Facility')]"));

    this.clickSignOutImage = async function() {
        await cmnUtil.clickElement(oSignOutImage);
    };

    this.clickSignOutButton = async function() {
        await cmnUtil.clickElement(oSignOutButton);
    };

    this.clickManageUsers = async function() {
        await cmnUtil.clickElement(oManageUsers);
    };

    this.clickUserList = async function() {
        await cmnUtil.clickElement(oUsersList);
    };

    this.clickAddUser = async function() {
        await cmnUtil.clickElement(oAddUser);
    };

    this.clickManageFacility = async function() {
        await cmnUtil.clickElement(oManageFacility);
    };

    this.clickFacilityList = async function() {
        await cmnUtil.clickElement(oFacilityList);
    };

    this.clickAddFacility = async function() {
        await cmnUtil.clickElement(oAddFacility);
    };
//=======================================Operation======================================
    this.navigateToUserList = async function() {
        await this.clickManageUsers();
        await this.clickUserList();
    };

    this.navigateToAddUser = async function() {
        await this.clickManageUsers();
        await this.clickAddUser();
    };

    this.navigateToFacilityList = async function() {
        await this.clickManageFacility();
        await this.clickFacilityList();
    };

    this.navigateToAddFacility = async function() {
        await this.clickManageFacility();
        await this.clickAddFacility();
    };

    this.clickSignOut = async function() {
        await this.clickSignOutImage();
        await this.clickSignOutButton();
    };

}
module.exports = new homePage();