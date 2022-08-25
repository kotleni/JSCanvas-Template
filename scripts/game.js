const MAX_FPS = 60

var canvas, context

onload = function() {
    canvas = document.getElementById("canvas")
    context = canvas.getContext("2d")

    // resize canvas
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight

    this.setInterval(updateRender, 1000 / MAX_FPS)
}

function updateRender() {
    context.fillStyle = "#ff00ff"
    context.fillRect(0, 0, canvas.width, canvas.height)
}