import {uglify} from "rollup-plugin-uglify"
import gzipPlugin from "rollup-plugin-gzip"
import resolve from "rollup-plugin-node-resolve"
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: "main.js",
    output: {
        file: "bundle.js",
        format: "cjs"
    },
    plugins: [
        uglify({ mangle: { toplevel: true }}),
        gzipPlugin({}),
        resolve(),
        commonjs(),
    ]
};