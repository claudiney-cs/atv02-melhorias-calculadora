module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    plugins: [
        "react", 
        "prettier"
      ],
        rules: {
          "prettier/prettier": "error",
          "react/jsx-filename-extension": [
          "warn", { 
            extensions: [".jsx", ".js"] 
          }
        ],
        "import/prefer-default-export": "off",
        "no-param-reassign": "off",
        "no-console": ["error", { allow: ["tron"] }]
        }
      } 
