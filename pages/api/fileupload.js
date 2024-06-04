import { Web3Storage, getFilesFromPath } from 'web3.storage'

async function Tempupload(req, res) {
  if (req.method == 'POST'){
    var _x = req.body.d;
  }
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGEwZDhmM0I0YUQ5OTZEM2I3Rjg4NDI4N0MxZTUxQjlDNjg4NTUyRjQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTAwMTI2MjQ0NDAsIm5hbWUiOiJUZXN0In0.azU9jV1rJ5GbFQS23HETwHRYF6I-h3EAJpvsnYqjuwU"
  const storage = new Web3Storage({ token })
  console.log(__dirname + "/" + _x)
  var path = "/Users/sarthakraut/Desktop/Next Website/website/choppy.jpeg";
  var files = []
  var pathFiles = await getFilesFromPath(path)
  files.push(...pathFiles)
  console.log(`Uploading ${files.length} files`)
  var cid = await storage.put(files)
  console.log('Content added with CID:', cid)
  return res.status(200).json(cid)
}

export default Tempupload
