
export default class ParmesanProgramManager {
    static createShader({ context, type, source }) {
        const shader = context.createShader(type)

        context.shaderSource(shader, source)
        context.compileShader(shader)

        const didCompile = context.getShaderParameter(shader, context.COMPILE_STATUS)

        if (!didCompile) {
            console.error(`Error with compile: ${context.getShaderInfoLog(shader)}`)
            context.deleteShader(shader)

            return null
        }

        return shader
    }

    static createProgram({ context, vertex, fragment }) {
        const program = context.createProgram()

        context.attachShader(program, this.createShader({
            context,
            type: context.VERTEX_SHADER,
            source: vertex
        }))

        context.attachShader(program, this.createShader({
            context,
            type: context.FRAGMENT_SHADER,
            source: fragment
        }))

        context.linkProgram(program)

        const didLink = context.getProgramParameter(program, context.LINK_STATUS)

        if (!didLink) {
            console.error(`Error with link: ${context.getProgramInfoLog(program)}`)
            context.deleteProgram(program)

            return null
        }

        return program
    }

}
