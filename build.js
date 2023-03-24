const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
require("dotenv").config();
const folders = fs
  .readdirSync("./packages")
  .filter((folder) => folder.startsWith("hometask"));

const copyRecursiveSync = function (src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

folders.forEach((folder) => {
  execSync(`npm run build --workspace=packages/${folder}`);
  copyRecursiveSync(`./packages/${folder}/dist/`, `./dist/${folder}`);
});

let indexHtml = fs.readFileSync("./index.html", "utf-8");
indexHtml = indexHtml.replace(
  "{linkPlaceholder}",
  folders
    .map(
      (folder) => `<li>
  <a href="/${process.env.homePage}/${folder}">Home task ${folder.replace(
        "hometask",
        ""
      )}</a>
</li>`
    )
    .join("\n")
);

fs.writeFileSync("./dist/index.html", indexHtml);
