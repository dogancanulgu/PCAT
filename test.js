const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

// read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// update photo
// const id = '617dc9fa78c0665145e63457';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 111 Updated',
//     description: 'Photo description 111 updated',
//   },
//   { new: true },
//   (err, data) => {
//     console.log(data);
//   }
// );

// delete a photo
const id = '617dcb2af3a2cce7094c7f99';
Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed..');
});
