class Renderer {
    constructor(){
        this.bodyContainer = $("#activities-container")
        this.activitiesTemplate = $("#activities-template")
        this.myActivitiesTemplate = $("#my-activities-template")
        
    }
    renderActivities (activities) {
        let source = this.activitiesTemplate.html(); 
        let template = Handlebars.compile(source)
        let html = template({activities: activities})
        this.bodyContainer.empty().append(html)
    }
    renderMyActivities(myActivities){
        let source = this.myActivitiesTemplate.html(); 
        let template = Handlebars.compile(source)
        let html = template({myActivities: myActivities})
        this.bodyContainer.empty().append(html)

    }
}