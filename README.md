# eager-import-webpack-plugin

This plugin takes inspiration from work done with @TheLarkInn on [webpack #8644](https://github.com/webpack/webpack/issues/8644). It defaults all dynamic imports to [`eager` mode](https://webpack.js.org/api/module-methods/#magic-comments), to relieve webpack of the expensive cost of having to determine what modules go into what emitted bundles.

Since that work (and webpack 5) are not yet released, this plugin is designed to deliver that same optimization to webpack v4.

### *This should never be used in production builds*

## Usage

```ts
import EagerImportsPlugin from 'eager-imports-webpack-plugin';

const webpackConfig = {
    plugins: [
        new EagerImportsPlugin(),
        // other plugins ...
    ]
    // other webpack config ...
}
```