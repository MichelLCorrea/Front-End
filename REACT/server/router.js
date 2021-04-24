const routes = [
  require('./domain/contact').routes
]

function configure(app) {
  routes.forEach(route => {
    route.configure(app)
  })
}

module.exports = {
  configure
}