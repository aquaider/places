const functions = require('firebase-functions');
const fs = require('fs');
const UUID = require('uuid-v4');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'rn-course-216709',
  keyFilename: 'rn-course.json'
});

exports.storeImage = functions.https.onRequest((request, response) => {
  const base64 = request.body.image;
  fs.writeFileSync('/tmp/uploaded-image.jpg', base64, 'base64', (err) => {
    if(err) {
      return response.status(500).json({
        message: 'unexpected Error'
      })
    }
  });
  const bucketName = 'rn-course-216709.appspot.com'
  const bucket = storage.bucket(bucketName);
  const uuid = UUID();
  bucket.upload('/tmp/uploaded-image.jpg', {
    uploadType: 'media',
    destination: '/places/'+uuid+'.jpg',
    metadata: {
      metadata: {
        contentType: 'image/jpeg',
        firebaseStorageDownloadTokens: uuid
      }
    }
  }, (err, file) => {
    if(err) {
      return response.status(500).json({
        message: 'unexpected Error: Can not upload image'
      })
    }
    return response.status(200).json({
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/'+bucketName+'/o/'+
      encodeURIComponent(file.name)+'?alt=media&'+'token='+uuid,
    });
  });
});
