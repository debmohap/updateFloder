import {request} from '@playwright/test'

const url = process.env.API_URL as string
const user = process.env.USER as string
const pass = process.env.PASS as string
async function globalSetup() {
  const context = await request.newContext()
  const response = await context.post(`${url}/auth`, {
    data: {
      username: user,
      password: pass,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.ok()) {
    const responseBody = await response.json()
    const token = responseBody.token
    process.env.API_TOKEN = token
  } else {
    console.error('Failed to login', await response.text())
    process.exit(1)
  }
  await context.dispose()
}

export default globalSetup
