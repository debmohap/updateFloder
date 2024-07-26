// const path = require('path')
// const fss = require('fs')
// const fetch = require('node-fetch')

// const swaggerUrl = 'https://fakerestapi.azurewebsites.net/swagger/v1/swagger.json'
// const testDatoutputDir = path.join(__dirname, 'test-data')
// const jsonFilePath = path.join(testDatoutputDir, 'swagger.json')

// if (!fss.existsSync(testDatoutputDir)) {
//   fss.mkdirSync(testDatoutputDir, {recursive: true})
// }
// fetch(swaggerUrl)
//   .then(response => response.json())
//   .then(swagger => {
//     fss.writeFileSync(jsonFilePath, JSON.stringify(swagger, null, 2))
//     console.log(`Swagger JSON saved to ${jsonFilePath}`)
//   })
//   .catch(err => {
//     console.error('Error fetching Swagger schema:', err)
//   })

// const fs = require('fs'),
//   stt = require('swagger-test-templates'),
//   swagger = require(`${testDatoutputDir}\\swagger.json`),
//   config = {
//     assertionFormat: 'expect',
//     testModule: 'supertest',
//     pathName: [],
//     maxLen: 80,
//     tags: [],
//   }

// let tests = stt.testGen(swagger, config)
// console.log(tests)
// const outputDir = path.join(__dirname, 'generated-tests')
// fs.mkdirSync(outputDir, {recursive: true})
// tests.forEach(test => {
//   const filePath = path.join(outputDir, `${test.name}.js`)
//   fs.writeFileSync(filePath, test.test)
//   console.log(`Generated test file: ${filePath}`)
// })

// console.log('Test generation completed.')
