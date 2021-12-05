class Renderer {
    renderData (data) {
        let source = $("#data-template").html(); 
        let template = Handlebars.compile(source)
        let html = template({results: results})
        $(".results").empty().append(html)
    }
}