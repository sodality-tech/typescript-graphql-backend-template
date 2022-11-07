import 'dd-trace/init'
import app from './app'

app.listen(8000, () => {
	console.log('app listening on port 8000')
})
