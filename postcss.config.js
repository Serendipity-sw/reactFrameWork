module.exports = {
    plugins: [
        require('precss'),
        // require('postcss-cssnext')
        require('autoprefixer'),
        require('postcss-plugin-px2rem')
    ]
}