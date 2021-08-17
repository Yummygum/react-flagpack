import fs from 'fs'
import { countryCodeList } from 'flagpack-core/lib/countryCodeList.js'

const distDir = './dist/flags'

const countryObject = {}
countryCodeList.map((country) => {
  countryObject[country.alpha2] = country
})
// console.log(countryObject)

const sizes = ['s', 'm', 'l']

const createDist = () => {
  // TODO: Remove dist/flags folder before creating a new one

  // Create flags folder and subdirectories
  fs.mkdir(distDir, (err) => {
    if(err) throw err
    console.log('created flags folder')
    createSizeFolders()
  })

  function createSizeFolders() {
    sizes.forEach((size) => {
      fs.mkdir(`${distDir}/${size}`, (err) => {
        if(err) throw err
        console.log(`created folder: /flags/${size}`)
      })
    })
  }
}

const copyFlags = () => {
  const sourceDirPrefix = 'node_modules/flagpack-core/svg'

  sizes.forEach((size) => {
    fs.readdir(`${sourceDirPrefix}/${size}/`, (err, files) => {
      if (err) {
        console.log(err)
      }

      else {
        // base file name
        files.forEach(file => {
          // full fileName including file extension
          const fileName = file

          // filename without file extension
          const fileNameBase = fileName.split('.')[0]

          // file extension
          const suffix = '.svg'

          // alpha 2 value
          const alphaTwoValue = countryObject[fileNameBase]?.alpha2

          // alpha 3 value
          const alphaThreeValue = countryObject[fileNameBase]?.alpha3

          // numeric value
          const numericValue = countryObject[fileNameBase]?.numeric

          // Iterable array from
          const values = [alphaTwoValue, alphaThreeValue, numericValue]

          values.forEach((value) => {
            fs.copyFile(
              `${sourceDirPrefix}/${size}/${fileName}`,
              `${distDir}/${size}/${value}${suffix}`,
              (err) => {if(err) throw err} )
          })
        })
      }
    })
  })
}

createDist()
copyFlags()
