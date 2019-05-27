
export default class GraphicsUniformManager {
    static createUniforms({ context, program }) {
        const uniforms = {}

        const uniformCount = context.getProgramParameter(
            program,
            context.ACTIVE_UNIFORMS
        )

        for (let i = 0; i < uniformCount; i++) {
            const uniformInfo = context.getActiveUniform(program, i)
            const uniformLocation = context.getUniformLocation(program, uniformInfo.name)
            
            uniforms[uniformInfo.name] = this.createUniform({
                context,
                type: uniformInfo.type,
                location: uniformLocation
            })
        }

        return uniforms
    }

    static createUniform({ context, type, location }) {
        if (type === context.FLOAT_MAT2)
            return function (array) { context.uniformMatrix2fv(location, false, array.data) }

        if (type === context.FLOAT_MAT3)
            return function (array) { context.uniformMatrix3fv(location, false, array.data) }

        if (type === context.FLOAT_MAT4)
            return function (array) { context.uniformMatrix4fv(location, false, array.data) }
    }
}
