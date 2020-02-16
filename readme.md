# Html Webpack Basepath Plugin

Plugin for html webpack plugin for make possibility to define basePath option. basePath option will overwrite the path for JS and CSS files injected by webpack-html-plugin into html file.

Plugin solves problem with JS/CSS basePath on any templating systems, like on following example:

`new HtmlWebpackPlugin({
    filename: ROOT_PATH + '/app/presenters/templates/@layout.latte',
    template: ROOT_PATH + '/app/assets/@layout.latte',
    basePath: '{$basePath}/dist/',
    chunks: ['index_head', 'front']
 }),`

...it will inject into HTML:
`< script src="{$basePath}/dist/app.js" ...`