
export default class FileDrop {
    constructor(args) {
        this.target = args.target

        this.target.addEventListener("dragover", this.ignore, false)
        this.target.addEventListener("drop", this.read.bind(this), false)
    }

    ignore(event) { event.stopPropagation(); event.preventDefault() }

    read(event) {
        this.ignore(event)

        for (const file of event.dataTransfer.files) {
            const reader = new FileReader()

            reader.onloadend = (function () {
                this.export({ meta: file, data: reader.result })
            }).bind(this)

            reader.readAsArrayBuffer(file)
        }
    }
}
