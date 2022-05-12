from .db import db

class Cart_content(db.Model):
  __tablename__ = 'cart_contents'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
  quantity = db.Column(db.Integer, nullable=False)

  products = db.relationship('Product', back_populates='cart')
  user = db.relationship('User', back_populates='cart')

  def to_dict(self):
      return {
          'id': self.id,
          'user_id': self.user_id,
          'product_id': self.product_id,
          'quantity': self.quantity,
          'product_detail': self.product.to_dict()
      }
