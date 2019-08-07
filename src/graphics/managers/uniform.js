
export default class UniformManager {
    constructor(options) {
        this.context = options.context
        this.program = options.program

        this.uniforms = this.createUniforms()
    }

    createUniforms() {
        const uniforms = {}

        const uniformCount = this.context.getProgramParameter(this.program, this.context.ACTIVE_UNIFORMS)

        for (let i = 0; i < uniformCount; i++) {
            const uniformInfo = this.context.getActiveUniform(this.program, i)
            const uniformLocation = this.context.getUniformLocation(this.program, uniformInfo.name)

            uniforms[uniformInfo.name] = this.createUniform({ type: uniformInfo.type, location: uniformLocation })
        }

        return uniforms
    }

    createUniform({ type, location }) {
        if (type === this.context.FLOAT_MAT2)
            return (function (array) { this.context.uniformMatrix2fv(location, false, array.data) }).bind(this)

        if (type === this.context.FLOAT_MAT3)
            return (function (array) { this.context.uniformMatrix3fv(location, false, array.data) }).bind(this)

        if (type === this.context.FLOAT_MAT4)
            return (function (array) { this.context.uniformMatrix4fv(location, false, array.data) }).bind(this)
    }
}
