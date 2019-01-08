$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shahnazpervin/Desktop/Tahsan/eBayBDD/eBayCucumber/src/test/java/feature/Register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Feature",
  "description": "",
  "id": "register-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctoinalTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Register Feature test",
  "description": "",
  "id": "register-feature;register-feature-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user in the register page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "put first name",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "put last name",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "provide email",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "give password",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click create account button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_in_the_register_page()"
});
formatter.result({
  "duration": 4445020525,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_first_name()"
});
formatter.result({
  "duration": 689596092,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_last_name()"
});
formatter.result({
  "duration": 95675058,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.provide_email()"
});
formatter.result({
  "duration": 82673539,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.give_password()"
});
formatter.result({
  "duration": 359851183,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.click_create_account_button()"
});
formatter.result({
  "duration": 3100888805,
  "status": "passed"
});
});