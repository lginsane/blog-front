export default ($axios) => (path) => {
  return {
    getImage: (params) => $axios.$get(`/random`, { params })
  }
}
