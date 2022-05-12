from app.models import db, Review

def seed_reviews():
  review1 = Review(
    user_id=1,
    product_id=1,
    title="Great gloves",
    content="These are the best gloves I have ever used!",
    rating=5
    )
  review2 = Review(
    user_id=1,
    product_id=2,
    title="Decent gi",
    content="Not the best gi I have ever used...",
    rating=3
    )
  review3 = Review(
    user_id=2,
    product_id=1,
    title="Pretty solid gloves",
    content="These gloves are very high quality, would buy again",
    rating=4
    )
  review4 = Review(
    user_id=2,
    product_id=2,
    title="Not worth it",
    content="Made with cheap materials, would not buy again",
    rating=2
    )

  db.session.add(review1)
  db.session.add(review2)
  db.session.add(review3)
  db.session.add(review4)

  db.session.commit()

def undo_reviews():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
  db.session.commit()
