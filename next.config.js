const withTypescript             = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin        = require('tsconfig-paths-webpack-plugin');

const nextConfig = withTypescript({

    // override webpack configurations below
    webpack(config, options) {

        // do not run type checking twice:
        if (options.isServer) {

            // forks type checking to separate thread from compilation
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }
        
        // inform resolver to handle TS and JS file formats
        config.resolve.extensions = ['.ts', '.tsx', '.js', '.json'];

        // copies tsconfig.json aliases into webpack's aliases
        config.resolve.plugins = [
            new TsconfigPathsPlugin({
              configFile: './tsconfig.json',
              logLevel:   'info',
            })];

      return config;
    }
});
// nextConfig.useFileSystemPublicRoutes = false;
module.exports = nextConfig;