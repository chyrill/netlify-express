const https = require('https')
const fs = require('fs')
const { dropboxToken } = require('../configurations/constants')

module.exports = {
    dropboxService: {
        uploadfile: (path) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                if(err) 
                    throw err
                let req = https.request('https://content.dropboxapi.com/2/files/upload', {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${dropboxToken}`,
                                'Dropbox-API-Arg': JSON.stringify({
                                    'path': '/data.csv',
                                    'mode': 'overwrite',
                                    'autorename': true, 
                                    'mute': false,
                                    'strict_conflict': false
                                }),
                                'Content-Type': 'application/octet-stream',
                            }
                        }, (res) => {
                            res.on('data', function(d) {
                                process.stdout.write(d)
                            })
                        })
                req.write(data)
                req.end()
            })
        }
    }
}
