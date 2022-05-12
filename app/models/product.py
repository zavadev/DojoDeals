from .db import db

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String, nullable=False)
  description = db.Column(db.String, nullable=False)
  price = db.Column(db.Float, nullable=False)
  image = db.Column(db.String, nullable=False)
  category = db.Column(db.String, nullable=False)

  reviews = db.relationship('Review', back_populates='product')
  cart = db.relationship('Cart_content', back_populates='products')

  def to_dict(self):
    return {
      'id': self.id,
      'title': self.title,
      'description': self.description,
      'price': self.price,
      'image': self.image,
      'category': self.category,
      # 'reviews': [review.to_dict() for review in self.reviews]
    }
