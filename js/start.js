const canvas = document.getElementById('myCanvas')
const context = canvas.getContext("2d")

const rect = new Rectangle(
    new Point(100, 100),
    new Point(600, 100),
    new Point(600, 400),
    new Point(100, 400))
    // always return 'this' so we can chain!
    .setContext(context)
    .render()

