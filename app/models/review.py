from .db import db

class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
  title = db.Column(db.String(20), nullable=False)
  content = db.Column(db.String(1000), nullable=False)
  rating = db.Column(db.Integer, nullable=False)

  user = db.relationship('User', back_populates='reviews')
  product = db.relationship('Product', back_populates='reviews')


  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'product_id': self.product_id,
      'title': self.title,
      'content': self.content,
      'rating': self.rating
    }
