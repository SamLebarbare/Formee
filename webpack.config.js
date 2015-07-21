module.exports = {
    entry: "./client/src/formee.js",
    devtool: 'source-map',
    output: {
        path: "./client/release/",
        filename: "formee-client.js"
    },
    resolve: {
		    modulesDirectories: ['node_modules'],
	  },
    module: {
        loaders: []
    }
};
