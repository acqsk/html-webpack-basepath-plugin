# Html Webpack Basepath Plugin

Plugin for simple enhancement html webpack plugin for make possibility to define basePath option. basePath option will overwrite the path for all the JS and CSS files injected by webpack-html-plugin into html file.

```bash
  npm i --save-dev html-webpack-basepath-plugin
```

```bash
  yarn add --dev html-webpack-basepath-plugin
```

Plugin solves problem with JS/CSS basePath on any templating systems, like on following example:

```js
new HtmlWebpackPlugin({
    filename: ROOT_PATH + '/app/presenters/templates/@layout.latte',
    template: ROOT_PATH + '/app/assets/@layout.latte',
    basePath: '{$basePath}/dist/'
 }),
 ```

...it will inject into HTML:
```js
<script src="{$basePath}/dist/app.js" ...
```

...and `{$basePath}` will be replaced by the base url path by the templating engine.
