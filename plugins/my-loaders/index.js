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
                plugins: [
                    new webpack.ProvidePlugin({
                        Buffer: ['buffer', 'Buffer'],
                    }),
                ],
            };
        },
    };
};
