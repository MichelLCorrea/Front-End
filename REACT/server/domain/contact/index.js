const repository = require('./repository')
const ContactController = require('./controller')
const ContactRoutes = require('./routes')

const controller = new ContactController(repository)
const routes = new ContactRoutes(controller)

module.exports = {
  routes
}