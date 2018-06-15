let fs = require("fs"),
    path = require("path");

const CHUNK_FILE_NAME_REG = /[a-zA-z0-9_-]*\.[a-zA-z0-9]{8}\.js/;

class ChunkCleanPlugin {
    constructor(path) {
        this.targetPath = path;
    }

    apply(compiler) {
        compiler.plugin("before-run", (complication, callback) => {
            let files = fs.readdirSync(this.targetPath),
                chunkFiles = this.pickChunkFileNames(files);

            if (chunkFiles.length > 0) {
                for (let i = 0, j = chunkFiles.length; i < j; ++i) {
                    fs.unlinkSync(path.join(this.targetPath, chunkFiles[i]));
                }
            }
            callback();
        });
    }

    pickChunkFileNames(files) {
        return files.filter((item) => this.isChunkFileName(item));
    }

    isChunkFileName(fileName) {
        return CHUNK_FILE_NAME_REG.test(fileName);
    }
}

module.exports = ChunkCleanPlugin;