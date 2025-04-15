import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { Env } from '../src'

export const getR2Client = (env: Env) => {
  return new S3Client({
    region: 'auto',
    endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: env.R2_ACCESS_KEY_ID,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    }
  })
}

export const uploadToR2 = async (
  env: Env,
  file: File,
  key: string,
  contentType: string
) => {
  const s3 = getR2Client(env)

  const arrayBuffer = await file.arrayBuffer()

  const command = new PutObjectCommand({
    Bucket: env.R2_BUCKET_NAME,
    Key: key,
    Body: new Uint8Array(arrayBuffer),
    ContentType: contentType
  })

  await s3.send(command)
}
