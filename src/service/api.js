import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-juntos.herokuapp.com/results'
})

export default api
