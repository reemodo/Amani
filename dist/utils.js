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


