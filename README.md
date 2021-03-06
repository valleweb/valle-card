# valle-card

> Awesome valle-card - Web Component using Polymer 3

[![npm](https://img.shields.io/npm/v/@valle/valle-card.svg)](https://www.npmjs.com/package/@valle/valle-card)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@valle/valle-card)

## How to install and use:

1 - Install the element using [Yarn](http://yarn.io/):

```sh
$ yarn add @valle/valle-card
```

2 -  Import the element:

```html
<script type="module" src="node_modules/@valle/valle-card/valle-card.js"></script>
```

or in your javascript file

```js
import "@valle/valle-card/valle-card.js";
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="./valle-card.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-card></valle-card>
```

## Styling

The following custom properties and mixins are available for styling:

Custom property           | Default  | Description
:---                      |:---      |:---
--valle-card-bg-color     | `#fff`   | Valle card background color
--valle-card-width        | `400px`  | Valle card max-width
--valle-card-padding      | `16px`   | Valle card padding
--valle-card-margin       | `16px`   | Valle card margin (used to calculate the valle card width)

## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Verify if you have [node](http://nodejs.org/) and [yarn](http://yarn.io/) installed.

2 - Install [Polymer-CLI](https://polymer-library.polymer-project.org/3.0/docs/install-3-0#cli):

```sh
$ [sudo] yarn global add polymer-cli
```

3 - Install local dependencies:

```sh
$ yarn
```

4 - Start the development server:

```sh
$ yarn start
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-card/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-card/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-card/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-card/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
