
const USER_ID = 0

const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

const addActivity = function(){
    activityController.addActivity()
}


async function init() {
    const allActivities = await activityModel.getAllActivities(USER_ID)
    renderer.renderData(allActivities)
}
  
init()

