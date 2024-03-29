#!/usr/bin/env node
import meow from 'meow'
import { copy } from 'fs-extra'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import chalk from 'chalk'

const log = console.log

const cli = meow(
  `
  Usage
    $ react-flagpack [options]

  Options
    --framework=default|gatsby  The framework to generate flags for. Default is 'default'.`,
  {
    importMeta: import.meta,
    flags: {
      framework: {
        type: 'string',
        default: 'default',
        shortFlag: 'f',
        choices: ['default', 'gatsby']
      }
    }
  }
)

function copyFrameworkAware(framework) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const source = `${__dirname}/../dist/flags`
  const targetLevel = path.resolve(__dirname, '../../../')
  let destination = path.resolve(targetLevel, './public/flags')

  if (framework === 'gatsby') {
    destination = path.resolve(targetLevel, '/static/flags')
  }

  console.log(
    `${chalk.blue('info')} React flagpack is copying flags to ${destination}`
  )
  copy(source, destination, function (err) {
    if (err) {
      console.log(`${chalk.red('error')} React flagpack failed to copy flags`)
      return console.error(err)
    }

    console.log(
      `${chalk.green('success')} React flagpack copied flags successfully`
    )
  })
}

copyFrameworkAware(cli.flags.framework)
