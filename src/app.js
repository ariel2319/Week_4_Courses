const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/initModel');
initModels();
//Models =>
const usersRoutes = require('./routes/users.routes');
const videosRoutes = require('./routes/videos.routes');
const catRoutes = require('./routes/categories.routes');
const coursesRoutes = require('./routes/courses.routes');



const app = express();
const PORT = 8008;

app.use(express.json());

app.use('/api/v1', usersRoutes);
app.use('/api/v1', videosRoutes);
app.use('/api/v1', catRoutes);
app.use('/api/v1', coursesRoutes);

db.authenticate()
   .then(() => console.log('*** Successfull authentication! :D ***'))
   .catch((error) => console.log(error))

db.sync({ force: false })
   .then(() => console.log('*** synchronized DB... ***'))
   .catch((error) => console.log(error))

initModels();

app.listen(PORT, () => {
   console.log(`Server is running in PORT =>> ${PORT}`)
})