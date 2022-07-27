const path = require('path')
const express = require('express');
const dotenv = require('dotenv')
const morgan =  require('morgan')
const exphbs = require('express-handlebars')

// Load config
dotenv.config({ path: './config/config.env' })

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

