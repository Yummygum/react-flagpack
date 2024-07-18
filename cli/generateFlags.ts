import fs from 'fs'
import path from 'path'
import babel from '@babel/core';


// Assuming synchronous reading for simplicity and direct control
const countryCodeList = JSON.parse(fs.readFileSync(path.resolve('node_modules/flagpack-core/countryCodeList.json'), 'utf-8'))

const distDir = './dist/flags'

interface Country {
  alpha2: string;
  alpha3?: string;
  numeric?: string;
}

const countryObject: Record<string, Country> = {}
countryCodeList.forEach((country: Country) => {
  countryObject[country.alpha2] = country
})

const sizes = ['s', 'm', 'l']

const createDist = () => {
  // Create flags folder and subdirectories
  function createFlagsDirectory() {
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir)
      console.log('Created flags folder')
    }
  }

  function createSizeDirectories() {
    sizes.forEach((size) => {
      const sizeDirPath = `${distDir}/${size}`
      if (!fs.existsSync(sizeDirPath)) {
        fs.mkdirSync(sizeDirPath)
        console.log(`Created folder: /flags/${size}`)
      }
    })
  }

  createFlagsDirectory()
  createSizeDirectories()
}

const copyFlags = () => {
  const sourceDirPrefix = 'node_modules/flagpack-core/svg'

  sizes.forEach((size) => {
    const sourceDir = `${sourceDirPrefix}/${size}/`
    fs.readdir(sourceDir, (err, files) => {
      if (err) {
        console.log(err)
        return
      }

      files.forEach(file => {
        const fileNameBase = file.split('.')[0] // filename without file extension
        const suffix = '.svg'

        const {
          alpha2,
          alpha3,
          numeric
        } = countryObject[fileNameBase] || {}

        const values = [alpha2, alpha3, numeric].filter(Boolean)

        console.log(`Flag for ${fileNameBase}: ${values.map(value => `${value}`).join(' | ')}`)

        values.forEach((value) => {
          if (value) {
            // Copy the base SVG file
            fs.copyFileSync(
              path.join(sourceDir, file),
              path.join(distDir, size, `${value}${suffix}`)
            )
          }
        })
      })
    })
  })
}

createDist()
copyFlags()
