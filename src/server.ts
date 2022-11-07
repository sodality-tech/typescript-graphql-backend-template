import 'dd-trace/init'
import app from './app'
import logger from './log'

app.listen(8000, () => {
	logger.info('server listening on port 8000')
})
