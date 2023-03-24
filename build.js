const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

require("dotenv").config();

const { tasks } = require("./config/tasks");

const folders = fs
  .readdirSync("./packages")
  .filter(
    (folder) => folder.startsWith("hometask") || folder.startsWith("classtask")
  );

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

function createTaskHTMLElement(folder) {
  const taskData = tasks.find((task) => task.id === folder) ?? {};
  const isHometaskFolder = folder.includes("hometask");
  const createLink = (prefix = "hometask") => {
    // inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700
    return `
      <a 
        href="/${process.env.homePage}/${folder}">
        class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
      >
        Home task ${folder.replace(prefix, "")}
      </a>
    `;
  };
  const createImgSrc = () => {
    return `/packages/${folder}/${taskData.img}`
  }

  return `
    <li class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img class="h-48 w-full object-cover md:h-full md:w-48" src="${createImgSrc()}" alt="Modern building architecture">
        </div>
       
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            ${isHometaskFolder ? "Home task" : "Class task"}
          </div>
          
          ${createLink(isHometaskFolder && "classtask")}
          
          <p class="mt-2 text-slate-500">
            ${taskData.description}
          </p>


        </div>
      </div>
    </li>
  `;
}

let indexHtml = fs.readFileSync("./index.html", "utf-8");
indexHtml = indexHtml.replace(
  "{linkPlaceholder}",
  folders.map((folder) => createTaskHTMLElement(folder)).join("\n")
);

fs.writeFileSync("./dist/index.html", indexHtml);
