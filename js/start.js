const canvas = document.getElementById('myCanvas')
const context = canvas.getContext("2d")

const rect = new Rectangle(
    new Point(225, 225),
    new Point(350, 225),
    new Point(350, 300),
    new Point(225, 300))
    // always return 'this' so we can chain!
    .setContext(context)
    .render()

