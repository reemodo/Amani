
const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

const addActivity = function(){
    activityController.addActivity()
}

async function filterActivity (){
    await activityController.filterActivities(filtered = true)
}
async function deleteActivity(activityID){
    await activityController.deleteMyActivity(activityID)
    
}

async function myActivity(){
    await activityController.showMyActivities()
}

async function init() {
    await activityController.filterActivities()
}


init()








