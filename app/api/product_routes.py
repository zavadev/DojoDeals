from math import prod
from flask import Blueprint, request
from app.models import db, Product, Review
from app.forms.new_review_form import NewReviewForm
from app.api.auth_routes import validation_errors_to_error_messages
from flask_login import current_user, login_required

product_routes = Blueprint('products', __name__)

#GET All Products
@product_routes.route('/')
def products():
  products = Product.query.all()
  return {'products': [product.to_dict() for product in products]}

#GET Single Product + Reviews
@product_routes.route('/<int:id>')
def single_product(id):
  product = Product.query.get(id)
  reviews = Review.query.filter(Review.product_id == id).all()
  product = {'product': product.to_dict(), 'reviews': [review.to_dict() for review in reviews]}
  return product

# #GET Reviews
@product_routes.route('/<int:id>/reviews')
def get_reviews(id):
  reviews = Review.query.filter(Review.product_id == id).all()
  return { 'reviews': [review.to_dict() for review in reviews] }


#POST New Review
@product_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def add_review(id):
  form = NewReviewForm()
  user_id = current_user.id
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    newReview = Review(
      user_id=user_id,
      product_id=id,
      title=form.data["title"],
      content=form.data["content"],
      rating=form.data["rating"]
    )
    db.session.add(newReview)
    db.session.commit()
    return newReview.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#UPDATE a Review
@product_routes.route('/<int:id>/reviews/<int:userId>/edit', methods=['PUT'])
@login_required
def update_review(id, userId):
  updatedReview = Review.query.filter(Review.user_id == userId, Review.product_id == id).first()
  form = NewReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    updatedReview.title=form.data["title"]
    updatedReview.content=form.data["content"]
    updatedReview.rating=form.data["rating"]
    db.session.commit()
    return updatedReview.to_dict()
  return {"errors": validation_errors_to_error_messages(form.errors)}, 401

#DELETE a Review
@product_routes.route('/<int:productId>/reviews/<int:userId>', methods=['DELETE'])
@login_required
def delete_review(productId, userId):
  deletedReview = Review.query.filter(Review.product_id == productId, Review.user_id == userId).first()
  db.session.delete(deletedReview)
  db.session.commit()
  return deletedReview.to_dict()
