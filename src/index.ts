import * as webpack from 'webpack';

export default class EagerImportsPlugin {
    apply(compiler: webpack.Compiler) {
        compiler.hooks.compilation.tap(
            'EagerImportPlugin',
            (compilation, { normalModuleFactory }) => {
                ['javascript/auto', 'javascript/dynamic', 'javascript/esm'].forEach(type => {
                    normalModuleFactory.hooks.parser.for(type).tap('EagerImportPlugin', parser => {
                        const oldParseCommentOptions = parser.parseCommentOptions;

                        parser.parseCommentOptions = function() {
                            const { options, ...remainingRetValue } = oldParseCommentOptions.apply(
                                parser,
                                arguments
                            );

                            return {
                                options: {
                                    ...options,
                                    webpackMode: 'eager',
                                },
                                ...remainingRetValue,
                            };
                        };
                    });
                });
            }
        );
    }
}
