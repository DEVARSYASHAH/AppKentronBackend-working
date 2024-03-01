const express = require('express');
const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const passport = require('passport');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/admin', passport.authenticate('jwt', { session: false }), adminRoutes);
router.use('/create', passport.authenticate('jwt', { session: false }), adminRoutes);
router.use('/edit', passport.authenticate('jwt', { session: false }), adminRoutes);
router.use('/delete', passport.authenticate('jwt', { session: false }), adminRoutes);

module.exports = router;