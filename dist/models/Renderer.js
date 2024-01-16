class Renderer {
    constructor() {
        this.bodyContainer = $("#activities-container")
        this.activitiesTemplate = $("#activities-template")
        this.myActivitiesTemplate = $("#my-activities-template")
        this.addActivitiesTemplate = $("#add-activity-template")
        this.modal = false
    }
    defineModal(){
        if(!this.modal){
        this.modalTitle = $(".modal-title")
        this.modalBody = $(".modal-body")
        this.modalFooter = $(".modal-footer")
        this.closeButton = $(`<input value="Ok" type="button" class="btn btn-warning" onclick="window.location.reload();"/>`)
        this.modal = true
        }

    }

    render(htmlTemplate, container, data, empty = true) {
        if (empty) {
            container.empty()
        }
        let source = htmlTemplate.html();
        let template = Handlebars.compile(source)
        let html = template(data)
        container.append(html)

    }
    renderActivities(activities) {
        this.render(this.activitiesTemplate, this.bodyContainer, { activities: activities })
    }
    renderMyActivities(myActivities) {
        this.render(this.myActivitiesTemplate, this.bodyContainer, { myActivities: myActivities })
    }
    renderModal(modalData) {
        this.render(this.addActivitiesTemplate, this.bodyContainer, modalData, false)
        $('#transportationType').change(function() {
            var selectedVehicle = $(this).val();
            var capacityInput = $('#capacityInput');
        
            if (selectedVehicle === 'Car') {
              capacityInput.show();
            } else {
              capacityInput.hide();
            }
        });
    }
    handleSuccess(message) {
        this.defineModal()
        this.modalTitle.text("Success")
        this.modalBody.empty()
        this.modalBody.append($(`<p>${message}</p>`))
        this.modalFooter.empty()
        this.modalFooter.append(this.closeButton)

    }
    handleError(error) {
        this.defineModal()
        this.modalTitle.text("Error")
        this.modalBody.empty()
        this.modalBody.append($(`<p>An Error happened</p>`))
        this.modalFooter.empty()
        this.modalFooter.append(this.closeButton)

    }
}