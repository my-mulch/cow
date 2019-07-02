
export default class ParmesanFileDrop {
    constructor(options) {
        this.target = document.querySelector('canvas')
        this.export = options.export

        this.read = this.read.bind(this)
        this.ignore = this.ignore.bind(this)

        this.target.addEventListener('drop', this.read, false)
        this.target.addEventListener('dragover', this.ignore, false)
    }

    ignore(event) {
        event.stopPropagation()
        event.preventDefault()
    }

    read(event) {
        this.ignore(event)

        Object
            .values(event.dataTransfer.files)
            .forEach(this.export)
    }
}
