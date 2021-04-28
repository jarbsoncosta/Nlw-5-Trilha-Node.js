import { Router } from 'express'
import { messagesRouter } from './messages.routes'
import { settingRoutes } from './settings.routes'
import {usersRouter} from './users.routes'

const routes = Router()

routes.use('/settings', settingRoutes)
routes.use('/users', usersRouter)
routes.use('/messages', messagesRouter )

export default routes