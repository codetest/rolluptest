import {uglify} from "rollup-plugin-uglify"

export default {
    input: "main.js",
    output: {
        file: "bundle.js",
        format: "cjs"
    },
    plugins: [
        uglify({ mangle: { toplevel: true }})
    ]
};