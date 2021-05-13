const webpack = require('webpack');

module.exports = function(context, options) {
    return {
        name: 'custom-plugin',
        configureWebpack(config, isServer, utils) {
            return {
                resolve: {
                    alias: {
                        buffer: 'buffer',
                    }
                },
                devServer: {
                    proxy: {
                        '/storagesvc/**': {
                            target: 'http://localhost:8001',
                            pathRewrite: {'^/storagesvc': ''},
                            secure: false,
                            prependPath: false,
                            changeOrigin: true
                        }
                    },
                },
                plugins: [
                    new webpack.ProvidePlugin({
                        Buffer: ['buffer', 'Buffer'],
                    }),
                ],
            };
        },
    };
};
