const TransportationIcons = { "Bus": "fa-bus", "Car": "fa-car" }
const PreferedGenderText = { "f": "Female", "m": "Male", "u": "No Prefered Gender" }
function changeText() {
    const outputElement = $("#picked");
    const to = $("#toSchool");
    if (to.is(":checked")) {
      outputElement.text("To");
    } else{
      outputElement.text("From");
    }
}
  const USER_ID = 0 
  const SUCCESS = "Your Activity was added, you can see it in My Activities page"
  function isEmpty(obj) {
      return Object.keys(obj).length === 0 && obj.constructor === Object
}

