import { resolve } from 'path'
import * as stringify from 'json-stable-stringify'
import * as TJS from 'typescript-json-schema'

const settings: TJS.PartialArgs = {
    required: true
}

const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true
}

const schemas = ['ScreenMeta', 'ViewMeta', 'WidgetMeta', 'SqlBc']

const program = TJS.getProgramFromFiles(
    schemas.map(item => resolve(`./src/interfaces/${item}.d.ts`)),
    compilerOptions
)
const generator = TJS.buildGenerator(program, settings)

write(schemas)

function write(src: string[]) {
    src.forEach(item => {
        const definition = generator.getSchemaForSymbol(`${item}Json`)
        require('fs').writeFile(`schemas/${item}.json`, stringifyJson(definition), function (err: Error) {
            if (err) {
                throw new Error('Unable to write output file: ' + err.message)
            }
        })
    })
}

function stringifyJson(src: TJS.Definition) {
    return stringify(src, { space: 4 }) + '\n\n'
}
