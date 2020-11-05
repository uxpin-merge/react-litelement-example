# UXPin Merge - Example Wrapping LitElement Components

This is an example React app that wraps [LitElement components](https://lit-element.polymer-project.org/) for use with [UXPin Merge](uxpin.com/merge). It is based on the [LitElement JavaScript starter project](https://github.com/PolymerLabs/lit-element-starter-js).

## Structure

* Merge-wrappers and presets are in `src/merge`. These use the same naming as the base LitElement component.

## Setup

* Clone this repo
* `npm install`

## Running Merge Experiment Mode

```
uxpin-merge
```

## Dev Server

This sample uses open-wc's [es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) for previewing the project without additional build steps. ES dev server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.

## TODO

* Styles
* Pass through the child component
* Properties example
