const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'leetcode-clone-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }
}));

app.use((req, res, next) => {
  if (req.session && req.session.userId) {
    const { findById } = require('./data/users');
    res.locals.currentUser = findById(req.session.userId);
  } else {
    res.locals.currentUser = null;
  }
  next();
});

const indexRoutes = require('./routes/index');
const problemRoutes = require('./routes/problems');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const pageRoutes = require('./routes/pages');

app.use('/', indexRoutes);
app.use('/problems', problemRoutes);
app.use('/', authRoutes);
app.use('/u', userRoutes);
app.use('/', pageRoutes);

app.use((req, res) => {
  res.status(404).render('404', { message: 'Page not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`LeetCode Clone running at http://localhost:${PORT}`);
});
