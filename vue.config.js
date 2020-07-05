module.exports = {
    
    devServer: {
        proxy:{
            '/api': {
                target: 'http://123.207.32.32:8000', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            }
        },
    },
}