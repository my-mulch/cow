
export default class FileDrop {
    constructor(props) {
        this.zone = props.zone
        this.onData = props.onData

        this.reader = new FileReader()
        this.reader.onloadend = this.expose.bind(this)

        this.zone.addEventListener("drop", this.read.bind(this), false)
        this.zone.addEventListener("dragover", this.noop, false)
    }

    expose() { this.onData(this.reader.result) }

    read(event) {
        event.stopPropagation();
        event.preventDefault();

        Array.from(event.dataTransfer.files)
            .forEach(this.reader.readAsArrayBuffer.bind(this.reader))
    }

    noop(event) {
        event.stopPropagation()
        event.preventDefault()
    }
}