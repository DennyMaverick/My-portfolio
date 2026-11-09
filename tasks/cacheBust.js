const {readFile, writeFile, rename, readdir} = require("node:fs/promises")

const {resolve, extname, basename, dirname, join} = require("node:path")
const {createHash} = require("node:crypto")

// Конфигурация
const path = require("../config/path.js")

// Ресурсы для хеширования
const assets = [
  {
    file: "css/libs/libs.min.css",
    url: "./css/libs/libs.min.css",
  },
  {
    file: "css/main.min.css",
    url: "./css/main.min.css",
  },
  {
    file: "js/libs/jquery/jquery.min.js",
    url: "./js/libs/jquery/jquery.min.js",
  },
  {
    file: "js/libs/jquery/libs/jquerylibs.min.js",
    url: "./js/libs/jquery/libs/jquerylibs.min.js",
  },
  {
    file: "js/libs/vendors/libs.min.js",
    url: "./js/libs/vendors/libs.min.js",
  },
  {
    file: "js/main.js",
    url: "./js/main.js",
  },
]

// Генерация хеша
const getHash = (content) => {
  return createHash("sha256").update(content).digest("hex").slice(0, 8)
}

// Обработка HTML
const updateHtml = async (replacements) => {
  const htmlFiles = (await readdir(path.root)).filter((file) => file.endsWith(".html"))

  for (const file of htmlFiles) {
    const htmlPath = resolve(path.root, file)

    let html = await readFile(htmlPath, "utf8")

    for (const [oldUrl, newUrl] of replacements) {
      html = html.split(oldUrl).join(newUrl)
    }

    await writeFile(htmlPath, html)
  }
}

// Cache Busting
const cacheBust = async () => {
  const replacements = []

  for (const asset of assets) {
    const filePath = resolve(path.root, asset.file)

    // Читаем содержимое файла
    const content = await readFile(filePath)

    // Генерируем хеш
    const hash = getHash(content)

console.log(`[DEBUG] ${asset.file}: ${content.length} bytes`)

    // Формируем новое имя
    const extension = extname(asset.file)
    const name = basename(asset.file, extension)

    const newFile = `${name}.${hash}${extension}`

    const newPath = join(dirname(filePath), newFile)

    // Переименовываем файл
    await rename(filePath, newPath)

    // Сохраняем новые пути
    replacements.push([asset.url, asset.url.replace(basename(asset.file), newFile)])

    console.log(`[Cache Busting] ${asset.file} → ${newFile}`)
  }

  // Обновляем ссылки в HTML
  await updateHtml(replacements)

  console.log("[Cache Busting] Completed successfully!")
}

module.exports = cacheBust
