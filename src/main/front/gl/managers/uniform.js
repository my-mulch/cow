
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
            const uniformType = this.resolveUniformType({ context, type: uniformInfo.type })

            uniforms[uniformInfo.name] = this.createUniform({
                context,
                type: uniformType,
                location: uniformLocation
            })
        }

        return uniforms
    }

    static createUniform({ context, type, location }) {
        return function (data) {
            context[type].call(null, location, false, data)
        }
    }

    static resolveUniformType({ context, type }) {
        if (type === context.FLOAT_MAT2)
            return 'uniformMatrix2fv'
        if (type === context.FLOAT_MAT3)
            return 'uniformMatrix3fv'
        if (type === context.FLOAT_MAT4)
            return 'uniformMatrix4fv'
    }
}
