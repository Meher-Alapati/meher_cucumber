$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("carSearch.feature");
formatter.feature({
  "line": 1,
  "name": "validation of car search page",
  "description": "In order to validate car search\r\nas a buyer\r\nI navigate http://www.carsguide.com.au",
  "id": "validation-of-car-search-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8778825481,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Searching for a new car",
  "description": "",
  "id": "validation-of-car-search-page;searching-for-a-new-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the home page http://www.carsguide.com.au of carsguide website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to Car for Sale Menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Search Cars",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select Make as \"BMW\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select Model as \"1 SERIES\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location as \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price as \"$10,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see list of searched cars from \"BMW\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the page title should be \"Bmw 1 Series Cars Under $10000 for Sale | CarsGuide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_am_on_the_home_page_http_www_carsguide_com_au_of_carsguide_website()"
});
formatter.result({
  "duration": 13118552269,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_Car_for_Sale_Menu()"
});
formatter.result({
  "duration": 10574092129,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Search_Cars()"
});
formatter.result({
  "duration": 174621365,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027view_car_deal123\u0027]/ul/li[1]/a\"}\nCommand duration or timeout: 168 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027DESKTOP-FNF69NB\u0027, ip: \u0027192.168.68.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3c578a5c-6c2f-4b96-a631-866f1669ca89\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027view_car_deal123\u0027]/ul/li[1]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat steps.CarSearchSteps.i_click_on_Search_Cars(CarSearchSteps.java:69)\r\n\tat ✽.Then I click on Search Cars(carSearch.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027view_car_deal123\u0027]/ul/li[1]/a\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027DESKTOP-FNF69NB\u0027, ip: \u0027192.168.68.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Selenium/AppData/Local/Temp/anonymous1728250831089214248webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/Selenium/AppData/Local/Temp/anonymous1728250831089214248webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Selenium/AppData/Local/Temp/anonymous1728250831089214248webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Selenium/AppData/Local/Temp/anonymous1728250831089214248webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Selenium/AppData/Local/Temp/anonymous1728250831089214248webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 18
    }
  ],
  "location": "CarSearchSteps.i_select_Make_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_Model_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_select_location_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_price_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 41
    }
  ],
  "location": "CarSearchSteps.i_should_see_list_of_searched_cars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Cars Under $10000 for Sale | CarsGuide",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2626907466,
  "status": "passed"
});
});