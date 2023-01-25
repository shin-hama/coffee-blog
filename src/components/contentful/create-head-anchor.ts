import crypto from 'crypto'

export const createAnchor = (value: string) => {
  return crypto.createHash('md5').update(value).digest('hex')
}
