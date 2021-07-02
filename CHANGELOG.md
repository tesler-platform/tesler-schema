# Version 0.3.2 (Jule 2, 202)

## Fixes

* `json-stable-stringify` erroneously considered non-browser in 0.3.1

# Version 0.3.1 (Jule 2, 2021)

## Fixes

* `const enum` replaced with `enum` for compatibility with CRA and other environments configured with `isolatedModules: true` ts param 
* Runtime dependencies were not marked as non-browser in package.json
* Erroneously applied `declare` modifiers of exported types

# Version 0.3.0 (Febraury 15, 2021)

## Features

* Actions in `actionGroups` widget option can now be set separately for each business component

# Version 0.2.0 (January 28, 2021)

## Features

* Source types for JSON schemas are now exported and can be extended in your application to customize generated schemas.
0.3.0 is scheduled to export a function that will take customized types as arguments and will generate schemas based on provided customization.
```ts
import { ScreenMetaJson } from '@tesler-ui/schema'

export interface CustomScreenMetaJson extends ScreenMeta {
    customField: number // add or modify fields if your *.screen.json file format is different
}
```

* Some types that previously were declared in [Tesler-UI](https://github.com/tesler-platform/tesler-ui) are moved here as they in fact affect both backend and frontend applications; Tesler UI will reexport those types so nothing should break if you referenced them from your application directly.

# Version 0.1.3 (January 26, 2021)

## Fixes

* `typescript-json-schema` should be runtime dependency

# Version 0.1.2 (January 26, 2021)

## Fixes

* Broken publish workflow

# Version 0.1.1 (January 26, 2021)

## Fixes

* Incorrect `main` reference in `package.json`

# Version 0.1.0 (January 26, 2021)

* Public release
