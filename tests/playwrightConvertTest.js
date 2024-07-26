// const fs = require('fs')
// const path = require('path')

// // Directory containing generated JS test files
// const generatedDir = path.join(__dirname, 'generated-tests')
// // Directory to save the converted JS test files
// const convertedDir = path.join(__dirname, 'converted-tests-js')

// // Ensure output directory exists
// if (!fs.existsSync(convertedDir)) {
//   fs.mkdirSync(convertedDir, {recursive: true})
// }

// // Convert each JS test file to Playwright JS
// fs.readdirSync(generatedDir).forEach(file => {
//   if (path.extname(file) === '.js') {
//     const jsFilePath = path.join(generatedDir, file)
//     const jsConvertedFilePath = path.join(convertedDir, file)

//     let content = fs.readFileSync(jsFilePath, 'utf-8')

//     // Simple replacement logic to convert JS test to Playwright JS test
//     content = content.replace(/var chai = require\('chai'\);/g, '')
//     content = content.replace(/var request = require\('request'\);/g, '')
//     content = content.replace(/var expect = chai.expect;/g, '')
//     content = content.replace(/request\(/g, 'await request(')
//     content = content.replace(
//       /describe\(/g,
//       "const { test, expect } = require('@playwright/test');\n\ndescribe("
//     )
//     content = content.replace(/it\(/g, 'test(')

//     // Write the converted content to JS file
//     fs.writeFileSync(jsConvertedFilePath, content)
//     console.log(`Converted test file: ${jsConvertedFilePath}`)
//   }
// })

// console.log('Conversion to Playwright with JavaScript completed.')
