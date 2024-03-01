module.exports = (sequelize, DataTypes) => {
    const Organization = sequelize.define('Organization', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        status: DataTypes.ENUM('activated', 'deactivated'),
    });

    Organization.associate = (models) => {
        Organization.hasMany(models.User, { foreignKey: 'OrganizationId', as: 'users' });
    };

    return Organization;
};
