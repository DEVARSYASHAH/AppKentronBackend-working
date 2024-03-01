const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const { Strategy, ExtractJwt } = passportJWT;
const db = require('./models');
const routes = require('./routes');
// const authRoutes = require('./routes/authRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const sequelize = require('./config/database');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'test123', // Replace with your actual secret key
};

const jwtStrategy = new Strategy(jwtOptions, async (payload, done) => {
    try {
        const user = await db.User.findByPk(payload.userId);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
});

passport.use(jwtStrategy);
app.use(passport.initialize());

// Routes setup
app.use('/api', routes);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});