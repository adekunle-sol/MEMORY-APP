const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended:true}));
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})

const postSchema = new mongoose.Schema({
    form_title: String,
        form_message: String,
        form_tag: String,
        form_creator: String
    
});

const Model = mongoose.model('Posts_Model', postSchema);

app.post('/create/post',  async (req, res) => {
    try {
        const post = await Model.create(req.body);
        
        res.json(post);
    } catch (error) {
        console.log(error);
  }
});

app.get('/posts/get_data', async (req, res) => {
    try {
        const posts = await Model.find();

        res.json(posts);
    } catch (error) {
        console.log(error);
    }
});
const PORT = 5000;

const CONNECTION_URI = 'mongodb+srv://memories_app:memory@cluster0.cbnebee.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)))
    .catch((error) => console.log(error));