import { Hono } from 'hono'
import { uploadToR2 } from '../lib/s3'
import { getImageUrl } from '../lib/cdn'

export type Env = {
  R2_ACCOUNT_ID: string
  R2_ACCESS_KEY_ID: string
  R2_SECRET_ACCESS_KEY: string
  R2_BUCKET_NAME: string
  CDN_BASE_URL: string
}

const app = new Hono<{ Bindings: Env }>()

app.post('/upload', async (c) => {
  const contentType = c.req.header('content-type') || ''

  if (!contentType.includes('multipart/form-data')) {
    return c.text('Content-Type must be multipart/form-data', 400)
  }

  const formData = await c.req.formData()
  const file = formData.get('file') as File | null

  if (!file || !file.name) {
    return c.text('File not provided', 400)
  }

  const key = `${file.name}`
  await uploadToR2(c.env, file, key, file.type || 'application/octet-stream')
  const url = getImageUrl(key, c.env.CDN_BASE_URL)

  return c.json({ message: 'Upload successful', key, url })
})

app.get('/image/:key', (c) => {
  const key = c.req.param('key')
  const url = getImageUrl(key, c.env.CDN_BASE_URL)
  
  // Set Cache-Control header for the image response (optimize for caching)
  const cacheControl = 'public, max-age=86400, immutable' // 1 day cache

  c.header('Cache-Control', cacheControl)
  return c.redirect(url)
})

export default app
