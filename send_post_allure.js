var axios = require("axios");
const fs = require('fs')
const resultDirectory = './test/reports/allure-results'

results = []
files = []
fs.readdirSync(resultDirectory).forEach(file => {
    files.push(file)
})

files.forEach(function(file, index){
    result = {}
    const filePath = resultDirectory + '/' + file
    var data = fs.readFileSync(filePath, 'base64');
    
    if(data){
    result['file_name'] = file
    result['content_base64'] = data
    results.push(result)
    }else{
        console.log('File skipped: '+ file)
    }
})
axios({
  method: 'post',
  url: 'http://allure:5050/send-results',
  headers: {'Content-Type': 'application/json'},
  data: {'results': results}
})
.then(function (response) {
    console.log(response);
  })
.catch(function (error) {
    console.log(error);
});