
const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

const addActivity = function(){
    activityController.addActivity()
}

const filterActivity= function(){
    
}
async function deleteActivity(activityID){
    await activityController.deleteMyActivity(activityID)
    
}

async function myActivity(){
    const allActivities = await activityController.showMyActivities()
}

async function init() {
    await activityController.filterActivities()
}


init()








