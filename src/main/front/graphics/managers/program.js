
export default class GraphicsProgramManager {

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

    static createProgram({ context, shaders }) {
        const program = context.createProgram()

        context.attachShader(program, shaders.vertex)
        context.attachShader(program, shaders.fragment)
        
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
