import { Router } from 'express'
import { settingRoutes } from './settings.routes'
import {usersRouter} from './users.routes'

const routes = Router()

routes.use('/settings', settingRoutes)
routes.use('/users', usersRouter )

export default routes