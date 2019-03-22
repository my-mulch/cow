
export default class FileDrop {
    constructor(props) {
        this.dom = props.dom
        this.handler = props.handler

        this.dom.livefeed.addEventListener("drop", this.read.bind(this), false)
        this.dom.livefeed.addEventListener("dragover", this.ignore, false)
    }

    ignore(event) { event.stopPropagation(); event.preventDefault() }

    read(event) {
        this.ignore(event)

        for (const file of event.dataTransfer.files) {
            const reader = new FileReader()

            reader.onloadend = (function () {
                this.handler({
                    meta: file, data: reader.result
                })
            }).bind(this)

            reader.readAsArrayBuffer(file)
        }
    }
}
