import { exec } from "child_process";
import { readdirSync, statSync } from "fs";
import { join } from "path";

function minifyJsFilesInDir(dirPath) {
  const files = readdirSync(dirPath);

  files.forEach(file => {
    const filePath = join(dirPath, file);
    const fileStat = statSync(filePath);

    if (fileStat.isDirectory()) {
      minifyJsFilesInDir(filePath);
    } else if (
      fileStat.isFile() &&
      file.endsWith(".js") &&
      !file.endsWith(".min.js")
    ) {
      const minifiedPath = join(dirPath, file.replace(".js", ".min.js"));

      exec(
        `terser ${filePath} -o ${minifiedPath} --compress --mangle`,
        (err, stdout, stderr) => {
          if (err) {
            console.error(`Error during file minering ${file}:`, stderr);
          } else {
            console.log(`File ${file} successfully mined.`);
          }
        }
      );
    }
  });
}

const publicJsPath = join(process.cwd(), "public/js");
minifyJsFilesInDir(publicJsPath);
