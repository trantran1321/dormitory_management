const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const session = require('express-session')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const sitesRouter = require('./routes/sites')
const accountRoute = require('./routes/auth')
const roomRouter = require('./routes/room')
const userRouter = require('./routes/user')
const db = require('./config/db')
const passport = require('passport')

// const server = http.createServer((req, res))

// 
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// app.use(session({
//   resave: false,
//   saveUninitialized: true,
//   secret: 'bla bla bla' 
// }));
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));
// sitesRouter(app)
// accountRoute(app)
// roomRouter(app)
app.use(passport.initialize());
app.use(passport.session());

app.use(accountRoute)
app.use(roomRouter)
app.use(sitesRouter)
app.use(userRouter)

require('./config/passport')

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})