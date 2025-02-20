import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getOrganizer(id) {
    return apiClient.get('/organizers/'+ id)
  },
  getOrganizers() {
    return apiClient.get('/organizers')
  },
  saveOrganizers(organizer){
    return apiClient.post('/organizers',organizer)
  },
  uploadFile(file){
    let formData = new FormData()
    formData.append('file',file)
    return apiClient.post('/uploadFile',formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
