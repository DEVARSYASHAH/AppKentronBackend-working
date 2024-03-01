const { User } = require('../models');

exports.addUser = async (req, res) => {
    try {
        const { name, email, role = 'viewer', status = 'activated' } = req.body;
        const admin = req.user; // Passport sets the authenticated user in req.user

        if (!admin || admin.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        const newUser = await User.create({
            name,
            email,
            role,
            status,
            OrganizationId: admin.OrganizationId,
            password: 'test123', // You may want to generate a random password
        });

        res.json({ message: 'User added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
