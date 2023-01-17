const express = require('express');
const initModels = require('./models/initModel');
const db = require('./utils/database');
//Models =>




const app = express();
app.use(express.json());

const PORT = 8008;

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