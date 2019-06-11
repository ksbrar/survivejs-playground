exports.devServer = ({host, port} = {host: 'localhost', port: 8081}) => ({
    devServer: {
        stats: "errors-only",
        host,
        port,
        open: true,
        overlay: true,
    }
})