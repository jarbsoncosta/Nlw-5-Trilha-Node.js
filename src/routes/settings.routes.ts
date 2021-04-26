import { Router } from 'express'
import {SettingsController} from '../controllers/SettingsController'

const settingsController = new SettingsController()

const settingRoutes = Router()

settingRoutes.post("/", settingsController.create )

export  {settingRoutes}