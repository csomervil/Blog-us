const Post = require('./Post');
const Comment = require('./Comment');

// Associations
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { Post, Comment };
