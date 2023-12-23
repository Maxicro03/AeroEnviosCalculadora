import session from 'express-session'
import connectMongo from 'connect-mongo'
import { MDB_CONNECT, SESSION_SECRET} from '../service/config.js' 

const store = connectMongo.create({
  mongoUrl: MDB_CONNECT,
  ttl: 60 * 60 
})

export const sessions = session({
  store,
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
})

export function onlyLoguedWeb(req, res, next) {
  if (!req.session['user']) {
    return res.redirect('/Aeroenvios/login')
  }
  next()
}