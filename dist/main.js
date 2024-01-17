
const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

const addActivity = function () {
    activityController.addActivity()
}

async function filterActivity() {
    await activityController.filterActivities(filtered = true)
}
async function deleteActivity(activityID) {
    await activityController.deleteMyActivity(activityID)

}

async function editActivity(activityID) {
    const capacity = $(`#capacity-${activityID}`).val()
    await activityController.editCapacity(activityID, capacity)
}

async function myActivity() {
    await activityController.showMyActivities()
}

async function init() {
    if(isLogged())
    {
        await activityController.filterActivities()
    }
   else{
        window.location.href = './pages/login.html';
    }
    
}

function isLogged(){
    if(localStorage.token)
    {
        return true
    }
    else
    {
        return false
    }

}
init()








