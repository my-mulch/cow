
export default class FileDrop {
    constructor(props) {
        this.zone = props.zone
        this.files = []
        this.reader = new FileReader()

        this.zone.addEventListener("drop", this.drop.bind(this), false)
        this.zone.addEventListener("dragover", this.noop, false)
    }

    listen(event, action) { }

    drop(event) {
        event.stopPropagation();
        event.preventDefault();

        this.files = Array.from(event.dataTransfer.files)
        this.files.forEach(console.log)
    }

    read() { }
    
    noop(event) {
        event.stopPropagation()
        event.preventDefault()
    }
}