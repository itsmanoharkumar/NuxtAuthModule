export default function({ $axios, redirect, route }) {
  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/sorry')
    }
    if (error.response.status === 401 && !route.name === 'login') {
      redirect('/')
    }
  })
}
