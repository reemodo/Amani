const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

const addActivity = function(){
    activityController.addActivity()
}
