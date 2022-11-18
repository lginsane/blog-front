const devConfig = {
  baseURL: 'http://localhost:3000',
  wsURL: 'http://localhost:3002',
  uploadURL: 'https://file.jiangly.com/api/upload/file',
}
const proConfig = {
  baseURL: 'https://api.xxxx.com',
  wsURL: 'https://ws.xxxxx.com',
  uploadURL: 'https://file.jiangly.com/api/upload/file',
}
const config = process.env.NODE_ENV === 'development' ? devConfig : proConfig
export default config
