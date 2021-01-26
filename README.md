# Tesler Schema

This package includes schemas shared by [Tesler](https://github.com/tesler-platform/tesler) and [Tesler-UI](https://github.com/tesler-platform/tesler-ui) in form of Typescript types, their corresponding JSON schemas and utilities to extend built-in types and rebuild the schemas.

## Usage

### Install this as a dependency for your project:

```sh
yarn add @tesler-ui/schema
```
### Add a launch command to the `script` section of your `package.json` file:
```json
"scripts": {
    "gen:schema": "node ./node_modules/@tesler-ui/schema/bin/build-schema"
},
```

### Launch command to generate schemas
```sh
yarn gen:schema
```

After that JSON files describing schema for Tesler screens, views, widgets and sql business components should appear in `schemas` folder of your project

## Extending schemas for your project

Coming soon