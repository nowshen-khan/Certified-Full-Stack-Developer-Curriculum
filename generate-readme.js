import fs from "fs";
import path from "path";

const BASE_DIR = "./01-responsive-web-design"; // change if needed

function toTitleCase(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function detectTech(files) {
  const tech = new Set();

  files.forEach((file) => {
    if (file.endsWith(".html")) tech.add("HTML5");
    if (file.endsWith(".css")) tech.add("CSS3");
    if (file.endsWith(".js")) tech.add("JavaScript");
  });

  return Array.from(tech);
}

function generateReadme(projectPath) {
  const files = fs.readdirSync(projectPath);
  const projectName = path.basename(projectPath);
  const title = toTitleCase(projectName);

  const techStack = detectTech(files);

  const screenshotPath = fs.existsSync(
    path.join(projectPath, "screenshot.png")
  )
    ? "./screenshot.png"
    : null;

  const readmeContent = `# 📌 ${title}

## 🔍 Overview
This project is part of my freeCodeCamp Full Stack Developer learning journey.

---

## 🚀 Features
- Clean and structured implementation  
- Based on freeCodeCamp project requirements  
- Beginner-friendly and responsive  

---

## 🛠️ Tech Stack
${techStack.map((t) => `- ${t}`).join("\n")}

---

## 📷 Screenshot
${
  screenshotPath
    ? `![${title}](${screenshotPath})`
    : "_Add screenshot here_"
}

---

## 🔗 Live Demo
_Add your live demo link here_

---

## 📚 What I Learned
- Practical implementation of core concepts  
- Improved problem-solving skills  
- Hands-on project experience  

---

## 🧠 Improvements
- Add more interactivity  
- Improve UI/UX design  
`;

  fs.writeFileSync(path.join(projectPath, "README.md"), readmeContent);
  console.log(`✅ README created: ${projectName}`);
}

function scanDir(dir) {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);

    if (fs.lstatSync(fullPath).isDirectory()) {
      const files = fs.readdirSync(fullPath);

      // check if it's a project folder
      if (files.some((f) => f.endsWith(".html"))) {
        generateReadme(fullPath);
      } else {
        scanDir(fullPath); // recursive
      }
    }
  });
}

scanDir(BASE_DIR);