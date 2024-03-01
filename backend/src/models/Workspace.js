// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {
//         name: DataTypes.STRING,
//         email: DataTypes.STRING,
//         password: DataTypes.STRING,
//         role: DataTypes.ENUM('admin', 'user', 'viewer'),
//         status: DataTypes.ENUM('activated', 'deactivated'),
//     });

//     User.associate = (models) => {
//         User.belongsTo(models.Organization, { foreignKey: 'OrganizationId', as: 'organization' });
//     };

//     return User;
// };
