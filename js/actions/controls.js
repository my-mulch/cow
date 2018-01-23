HANDLERS = {
    /*  MOVEMENT */
    ArrowUp: (velocity) => SELECTED.shift(new Point(0, -velocity)),
    ArrowDown: (velocity) => SELECTED.shift(new Point(0, velocity)),
    ArrowLeft: (velocity) => SELECTED.shift(new Point(-velocity, 0)),
    ArrowRight: (velocity) => SELECTED.shift(new Point(velocity, 0)),

    /*  ROTATION */
    s: () => SELECTED.rotate(Math.PI / 8),
    a: () => SELECTED.rotate(-Math.PI / 8),
}

