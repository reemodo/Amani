
const TransportationIcons = { "Bus": "fa-bus", "Car": "fa-car" }
const PreferredGenderText = { "f": "Female", "m": "Male", "un": "No Preferred Gender" }
function changeText() {
    const outputElement = $("#picked");
    const to = $("#toSchool");
    if (to.is(":checked")) {
      outputElement.text("To");
    } else{
      outputElement.text("From");
    }
}

  function changeTextFilter() {
    const outputElement = $("#pickedFilter");
    const to = $("#toSchoolFilter");
    if (to.is(":checked")) {
      outputElement.text("To");
    } else{
      outputElement.text("From");
    }
  }

  const USER_ID = 2
  const SUCCESS = "Your Activity was added, you can see it in My Activities page"
  function isEmpty(obj) {
      return Object.keys(obj).length === 0 && obj.constructor === Object
}


