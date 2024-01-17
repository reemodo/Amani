const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

async function login(){
    await activityController.login()
}