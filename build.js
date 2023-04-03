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

  return `
    <li class="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-slate-700 dark:text-gray-700">
      <div class="md:flex">
        <div class="md:shrink-0">
          <div class="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-300 dark:to-fuchsia-300"></div>
        </div>
       
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm ${isHometaskFolder ? 'text-indigo-500 dark:text-indigo-300' : 'text-orange-500  dark:text-orange-300'} font-semibold">
            ${isHometaskFolder ? "Home task" : "Class task"}
          </div>
          
          <a 
            href="/${process.env.homePage}/${folder}"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline dark:text-gray-200"
          >
            ${folder.replace(isHometaskFolder ? "hometask-" : "classtask-", "")}
          </a>
          
          <p class="mt-2 text-slate-500 dark:text-gray-300">
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
