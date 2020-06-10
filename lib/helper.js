const fs = require('fs')

function readFile(file) {
  return new Promise(function (resolve, reject) {
    let final_data = ''
    const readStream = fs.createReadStream(file)
    readStream.on('data', (data) => {
      data = data.toString()
      if (data) {
        final_data = final_data + data
      }
    })
    readStream.on('end', () => {
      final_data = final_data.trim()
      resolve(final_data)
    })
    readStream.on('error', (err) => {
      if (err) reject(err)
    })
  })
}

module.exports.readFile = readFile