module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        author: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Posts;
}
