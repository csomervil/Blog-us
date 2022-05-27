const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

// Associations
// Comment belongs to Post User
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
// Each Post can have many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});
// And the Post must belong to the User
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
// The User can create many Posts have many Comments
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });  

module.exports = { User, Post, Comment };
