module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module",
    },
    "env": {
        "es6": true,
        "mocha": true,
        "browser": true,
    },
    "plugins": [
        "react"
    ]
};