const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

class HtmlWebpackBasePathPlugin {

    _processReplacePath(basePath, obj) {
        if (obj.attributes.src)
            obj.attributes.src = path.join(basePath, path.basename(obj.attributes.src));
        else if (obj.attributes.href)
            obj.attributes.href = path.join(basePath, path.basename(obj.attributes.href));
    }

    apply(compiler) {
        // HtmlWebpackPlugin version 4.0.0-beta.5
        if (HtmlWebpackPlugin.getHooks) {
            compiler.hooks.compilation.tap('HtmlWebpackInjectorPlugin', (compilation) => {
                HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(
                    'HtmlWebpackInjectorPlugin', (data, callback) => {

                        let basePath = data.plugin.options.basePath || false;
                        data.bodyTags.forEach((obj) => {
                            if (basePath) this._processReplacePath(basePath, obj);
                        });
                        data.headTags.forEach((obj) => {
                            if (basePath) this._processReplacePath(basePath, obj);
                        });

                        callback(null, data)
                    }
                )
            });
        } else {
            // HtmlWebpackPlugin version 3.2.0
            compiler.plugin("compilation", compilation => {
                compilation.plugin("html-webpack-plugin-alter-asset-tags", data => {

                    let basePath = data.plugin.options.basePath || false;
                    data.bodyTags.forEach((obj) => {
                        if (basePath) this._processReplacePath(basePath, obj);
                    });
                    data.headTags.forEach((obj) => {
                        if (basePath) this._processReplacePath(basePath, obj);
                    });

                });
            });
        }
    }
}

module.exports = HtmlWebpackBasePathPlugin;