const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Organization } = require('../models');

exports.signup = async (req, res) => {
    try {
        const { name, email, password, role, status } = req.body;

        const organization = await Organization.create({
            name,
            email,
            password: bcrypt.hashSync(password, 10),
            status,
        });

        const user = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, 10),
            role,
            status,
            OrganizationId: organization.id,
        });

        res.json({ message: 'Signup successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log('Login attempt with email:', email);

        const user = await User.findOne({
            where: { email },
            include: [{ model: Organization, as: 'organization', attributes: ['id', 'status'] }],
        });

        console.log('Retrieved user:', user);

        if (!user || !bcrypt.compareSync(password, user.password)) {
            console.log('Invalid credentials');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (user.Organization.status !== 'activated') {
            console.log('Organization is deactivated');
            return res.status(403).json({ message: 'Organization is deactivated' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, 'secret_key');
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


