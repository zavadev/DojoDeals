from app.models import db, Product

def seed_products():
  product1 = Product(
    title="Test",
    description="An amazing pair of gloves.",
    price=19.99,
    image="/test",
    category="gloves"
    )
  product2 = Product(
    title="Gi",
    description="A training gi of the highest quality.",
    price=99.99,
    image="/test",
    category="clothing"
    )

  db.session.add(product1)
  db.session.add(product2)

  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
