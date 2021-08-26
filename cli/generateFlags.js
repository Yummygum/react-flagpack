import fs from 'fs'
const countryCodeList = JSON.parse(fs.readFileSync('node_modules/flagpack-core/countryCodeList.json'))

const distDir = './dist/flags'

const countryObject = {}
countryCodeList.map((country) => {
  countryObject[country.alpha2] = country
})
// console.log(countryObject)

const sizes = ['s', 'm', 'l']

const createDist = () => {
  // Clean the dist

  createFlagsDirectory()
  createSizeDirectoies()

  // Create flags folder and subdirectories
  function createFlagsDirectory() {
    fs.mkdir(distDir, (err) => {
      if(err) throw err
      console.log('created flags folder')
    })
  }

  function createSizeDirectoies() {
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

          // if(alphaTwoValue === undefined ||
          //   alphaThreeValue === undefined ||
          //   numericValue === undefined) {
          //   }
          console.log(`Flag for ${fileNameBase}: alpha2: ${alphaTwoValue} ${alphaThreeValue ? `| alpha3: ${alphaThreeValue}`: ''} ${numericValue ? `| numeric: ${numericValue}`: ''}`)

          values.forEach((value) => {
            if (value === undefined){
              return
            }

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
