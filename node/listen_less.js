const exec = require('child_process').exec
const fs = require('fs')

let times = 0 //计次，防止多次执行
const listenDir = 'css/'
fs.watch(listenDir, (eventType, filename) => {
		if(times > 0) { times = 0; return }
		console.log(eventType + " " + filename)

		if(/^(?!.*?\.less$)/.test(filename)) return

		let cmd = `lessc ${listenDir + filename} ${listenDir + filename.replace(/\.less$/, '.css')}`
		exec(cmd, (error) => {
			if(error) console.log(error)

			console.log('less -> css done')
		})
		times ++
	}
)

console.log('监听 less 文件开始')
