import axios from 'axios'
require('axios-debug-log')

export default() => {
  return axios.create({
    baseURL: 'https://webdollar.network:5001'
  })
}
