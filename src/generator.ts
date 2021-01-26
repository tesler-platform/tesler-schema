import { resolve } from 'path'
import * as stringify from 'json-stable-stringify'
import * as TJS from 'typescript-json-schema'

const settings: TJS.PartialArgs = {
    required: true
}

const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true
}

const program = TJS.getProgramFromFiles([resolve('./src/interfaces/ScreenMetaJson.d.ts')], compilerOptions)
const generator = TJS.buildGenerator(program, settings)

const ScreenMetaJson = generator.getSchemaForSymbol('ScreenMetaJson')
const json = stringify(ScreenMetaJson, { space: 4 }) + '\n\n'
require('fs').writeFile('schemas/ScreenMeta.json', json, function (err: Error) {
    if (err) {
        throw new Error('Unable to write output file: ' + err.message)
    }
})
