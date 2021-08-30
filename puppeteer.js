//npm i puppeteer
let puppeteer = require("puppeteer");
//ctreates headless browser
let browserStartPromises = puppeteer.launch({
    //visibe
    headless: false,
    //type 1sec
    //slowMo: 1000;
    //
    defaultViewport: null,
    //setting
    args:["--start-maximized", "--disable-notifications"]
});
let page,browser,rTab;
browserStartPromises
    .then(function(browserObj){
    console.log("Browser opened");
    browser = browserObj
    let browserTabOpenPromise = browserObj.newPage(); // opening new tab
    return browserTabOpenPromise; // will return the empty page of browser
}).then(function (newTab){
    page = newTab; // now page is changed to newTab
        console.log("New Tab Opened");
        let gPageOpenPromises = newTab.goto("https://www.google.com/");
        return gPageOpenPromises; // will return the google homepage
}).then(function(){
        console.log("Google Homepage Opened");
        let waitForTypingPromise = page.type("input[title='Search']", "pepcoding");
        return waitForTypingPromise; // this promise will type the text in search box of google
}).then(function(){
    console.log("Pepcoding is been typed successfully✔");
    let enterWillBeDonePromise = page.keyboard.press('Enter', {delay: 100});
    return enterWillBeDonePromise; // this promise will press Enter and pepcoding will be searched
}).then(function(){
    console.log("Google has searched pepcoding successfully!!👍");
    let searchedPepcodingPromise = page.waitForSelector(".LC20lb.DKV0Md", {visible: true});
    return searchedPepcodingPromise; // this promise will wait for google to bring the require url
}).then(function(){
    // mouse function
    let clickPromise = page.click(".LC20lb.DKV0Md");
    return clickPromise; // this promise will click on the pepcoding url
}).then(function(){
    console.log("Homepage of pepcoding is opened successfully✔");
    let closePopupModalPromise = page.click("#lp_modal_close");
    return closePopupModalPromise; // this promise will close the popupmodal appearing in pepcoding homepage
}).then(function(){
    console.log("pop-up-modal is closed successfully✔");
    let allListPromises = page.$$(".site-nav-li");
    return allListPromises; // this promise will return the array of the lists present in the heading part of page
}).then(function(allElem){
    let elemWillBeClickedPromise = allElem[6].click();
    return elemWillBeClickedPromise; // this promise will click on the link of require element and open it
}).then(function(){
    console.log("Opened the link in new page");
    let waitPromise = page.waitFor(2000); // waiting 2 sec till page is fully loaded
    return waitPromise; // this promise will wait till the page is fully loaded
}).then(function(){
    console.log("Link is fully opened!!")
    let listofOpenedTabsPromise = browser.pages();
    return listofOpenedTabsPromise; // this promise will give all the tabs opened in browser
}).then(function(arrayOfTabs){
    rTab = arrayOfTabs[arrayOfTabs.length - 1];
    let waitForLevel1Promise = rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',
    { visible: true });
return waitForLevel1Promise; // this promise will wait to select the link described above i.e Level-1 of resources part
}).then(function(){
    let clickLevel1Promise = rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
    return clickLevel1Promise; // this promise will click and open the level-1 link .
}).then(function(){
    console.log("Level is opened Successfully✔");
})


