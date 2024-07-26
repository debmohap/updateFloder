import {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
  TestStep,
} from '@playwright/test/reporter'
import * as fs from 'fs'
import * as path from 'path'

class CustomReporter implements Reporter {
  private logFolder = path.join(__dirname, 'log')

  onBegin(config: FullConfig, suite: Suite) {
    if (!fs.existsSync(this.logFolder)) {
      fs.mkdirSync(this.logFolder, {recursive: true})
    }
    fs.writeFileSync(path.join(this.logFolder, 'test-log.txt'), `Starting test suite\n`, {
      flag: 'w',
    })
  }

  onTestBegin(test: TestCase) {
    fs.appendFileSync(path.join(this.logFolder, 'test-log.txt'), `Starting test: ${test.title}\n`)
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const status = result.status === 'passed' ? 'PASSED' : 'FAILED'
    fs.appendFileSync(
      path.join(this.logFolder, 'test-log.txt'),
      `Finished test: ${test.title} - ${status}\n`
    )
  }
  onEnd(result: FullResult) {
    fs.appendFileSync(path.join(this.logFolder, 'test-log.txt'), `Finished test suite\n`)
  }
}

export default CustomReporter
