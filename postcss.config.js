module.exports = {
    plugins: [
        require('precss'),
        require('postcss-initial'),
        require('postcss-preset-env'),
        require('autoprefixer'),
        require('postcss-plugin-px2rem'),
        require('postcss-modules')
    ]
}