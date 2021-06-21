module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    assets: './assets',
                    img: './assets/img',
                    font: './assets/font',
                    animations: './assets/animations',
                },
            },
        ],
    ],
}
