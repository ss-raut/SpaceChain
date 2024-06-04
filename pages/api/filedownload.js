import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const https = require("https");
const fs = require("fs");
import { Web3Storage, getFilesFromPath } from 'web3.storage'

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGEwZDhmM0I0YUQ5OTZEM2I3Rjg4NDI4N0MxZTUxQjlDNjg4NTUyRjQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTAwMTI2MjQ0NDAsIm5hbWUiOiJUZXN0In0.azU9jV1rJ5GbFQS23HETwHRYF6I-h3EAJpvsnYqjuwU"

async function Downloading(req, res){
if (req.method == 'POST'){
  var _cid = req.body.d;
}
async function get_file_name (cid) {
    
    const client = new Web3Storage({ token })
     const res = await client.get(cid)
     console.log(`Got a response! [${res.status}] ${res.statusText}`)
     if (!res.ok) {
       throw new Error(`failed to get ${cid}`)
     }
 
     const files = await res.files()
     var fname
     var fsize
   for (const file of files) {
     //console.log(`${file.cid} -- ${file.name} -- ${file.size}`)
     fname = file.name
     fsize = file.size
   }
   console.log("File name : "+fname + "\nFile Size : "+fsize)
   return fname
  }
  

  async function download(url, dest) {
    return new Promise((resolve, reject) => {
      // Check file does not exist yet before hitting network
      fs.access(dest, fs.constants.F_OK, (err) => {
  
          if (err === null) reject('File already exists');
  
          const request = https.get(url, response => {
              if (response.statusCode === 200) {
         
                const file = fs.createWriteStream(dest, { flags: 'wx' });
                file.on('finish', () => resolve());
                file.on('error', err => {
                  file.close();
                  if (err.code === 'EEXIST') reject('File already exists');
                  else fs.unlink(dest, () => reject(err.message)); // Delete temp file
                });
                response.pipe(file);
              } else if (response.statusCode === 302 || response.statusCode === 301) {
                //Recursively follow redirects, only a 200 will resolve.
                download(response.headers.location, dest).then(() => resolve());
              } else {
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
              }
            });
        
            request.on('error', err => {
              reject(err.message);
            });
      });
    });
  }


  var FileName = await get_file_name(_cid)
  console.log("TEMP: " +FileName)

  var _url = "https://"+_cid+".ipfs.dweb.link/"+FileName
  var _dest = "/Users/sarthakraut/Desktop/Next Website/website/pages/uploads/"+FileName
  console.log("URL: " +_url)
  console.log("DEST: " +_dest)
  
  await download(_url, _dest)
  return res.status(201).json("Download Successful")
}

export default Downloading;