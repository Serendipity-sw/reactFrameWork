module.exports = {
    plugins: [
        require('precss'),
        require('postcss-preset-env'),
        require('autoprefixer'),
        require('postcss-plugin-px2rem')
    ]
}