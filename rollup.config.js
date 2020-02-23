import {uglify} from "rollup-plugin-uglify"
import gzipPlugin from "rollup-plugin-gzip"
import resolve from "rollup-plugin-node-resolve"
import commonjs from 'rollup-plugin-commonjs'

var common = {
    output: {
        format: "cjs",
        dir: "main"
    },
    plugins: [
        uglify({ mangle: { toplevel: true }}),
        gzipPlugin({}),
        resolve(),
        commonjs(),
    ],
    manualChunks: {
        vendor: ["md5"]
    }
}

var page1 = {
    input: ["main.js"],
};


var page2 = {
    input: ["main1.js"],
};

module.exports = [Object.assign({}, page1, common), Object.assign({}, page2, common)]