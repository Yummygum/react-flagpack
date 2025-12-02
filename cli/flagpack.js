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
    --framework=default|gatsby  The framework to generate flags for. Default is 'default'.
    --path=string      The path to copy the flags to. Default is 'public/flags' relative to the project.`,
  {
    importMeta: import.meta,
    flags: {
      framework: {
        type: 'string',
        default: 'default',
        shortFlag: 'f',
        choices: ['default', 'gatsby']
      },
      path: {
        type: 'string',
        shortFlag: 'a'
      }
    }
  }
)

function copyFrameworkAware(framework, absolutePath) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const source = `${__dirname}/../dist/flags`
  const projectRoot = process.cwd()
  let destination = path.resolve(projectRoot, './public/flags')

  if (framework === 'gatsby') {
    destination = path.resolve(projectRoot, './static/flags')
  }

  if (absolutePath) {
    destination = path.resolve(projectRoot, absolutePath)
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

copyFrameworkAware(cli.flags.framework, cli.flags.path)
