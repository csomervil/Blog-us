const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
// initializing Comment class
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1]}
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: 'user'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: 'post'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
); module.exports = Comment;