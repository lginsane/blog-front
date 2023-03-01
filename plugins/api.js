import createUserApi from '@/apis/user'

export default ({ $axios }, inject) => {
  const repositories = {
    user: createUserApi($axios)('/api/user'),
  }

  inject('API', repositories)
}
