const args = process.argv.slice(2, process.argv.longth)
// console.log(args)
const domain = args[0]
// console.log(domain)
const path = args[1].slice(2, args[1].length)
// console.log(path)
const fullDomain = domain + path
// console.log(fullDomain)

const fs = require('fs');
const request = require('request');
request((fullDomain), (error, response, body) => {
  // console.log('error:', error); 
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  fs.writeFile('/Users/youssefragab/Documents/LighthouseLabs/w2/d3/page-fetcher/test.txt', body, err => {
    if (err) {
      console.error(err)
      return
    }
  })
});