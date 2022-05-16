from flask import Blueprint, jsonify, request
from app.models import db, Cart_content, Product

cart_routes = Blueprint('cart', __name__)

#GET All Cart Contents (filtered for Current User)
@cart_routes.route('/<int:user_id>')
def get_cart(user_id):
    user_cart = Cart_content.query.filter(Cart_content.user_id == user_id).all()
    return {'Cart_contents': [cart.to_dict() for cart in user_cart]}

#POST New Cart Entry / Iterate an Existing One w/ 'Add to Cart' button on a product's details page
@cart_routes.route('/<int:user_id>/<int:product_id>', methods=['POST'])
def add_product_to_cart(user_id, product_id):
  added_product = Cart_content.query.filter(Cart_content.user_id == user_id, Cart_content.product_id == product_id).first()
  if added_product:
    if added_product.quantity < 5:
      prodQuantity = added_product.quantity
      added_product.quantity = prodQuantity + 1
      db.session.commit()
      return {'Cart_content': added_product.to_dict()}
    return {'Error': 'Quantity limit reached (5)'}, 400
  else:
    new_cart_entry = Cart_content(
      user_id=user_id,
      product_id=product_id,
      quantity=1
    )
    db.session.add(new_cart_entry)
    db.session.commit()
    return {'Cart_content': new_cart_entry.to_dict()}

#UPDATE Entry in Cart (Edits Quantity)
@cart_routes.route('/<int:user_id>/<int:product_id>', methods=['PATCH'])
def edit_cart_entry(user_id, product_id):
  carted_product = Cart_content.query.filter(Cart_content.user_id == user_id, Cart_content.product_id == product_id).first()
  update = request.get_json()
  newQuantity = update['quantity']
  if isinstance(newQuantity, int):
    if newQuantity <= 5 and newQuantity > 0:
      carted_product.quantity = newQuantity
      db.session.commit()
      return carted_product.to_dict()
  return {"Error": "Please enter a valid number (Quantity limit: 5 per product)"}, 400

#DELETE One Entry in Cart (All Quantities)
@cart_routes.route('/<int:user_id>/<int:product_id>', methods=['DELETE'])
def delete_cart_entry(user_id, product_id):
    carted_product = Cart_content.query.filter(Cart_content.user_id == user_id, Cart_content.product_id == product_id).first()
    db.session.delete(carted_product)
    db.session.commit()
    return {"SUCESS": "ENTRY DELETED"}

#DELETE All Entries/All Quantities in Cart ("CLEAR CART")
@cart_routes.route('/<int:user_id>', methods=['DELETE'])
def clear_cart(user_id):
  carted_products = Cart_content.query.filter(Cart_content.user_id == user_id).all()
  for product in carted_products:
    db.session.delete(product)
    db.session.commit()
  return carted_products
