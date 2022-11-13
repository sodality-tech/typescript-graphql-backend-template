/**
 * All models should be imported here to be exported again as an array.
 * The db/models/index.ts iterates through the models and initializes each one,
 * passing the singleton sequelize connection in at init time.
 */

import { ModelDefiner } from '../../@types/models'
import User from './user.model'

const models: ModelDefiner[] = [User]

export default models
