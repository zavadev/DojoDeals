from app.models import db, Product

def seed_products():
  product1 = Product(
    title="MMA Gloves (Leather)",
    description="An amazing pair of gloves.",
    price=99.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652340344/DojoDeals/gloves_vbtz6c.png",
    category="gloves"
    )
  product2 = Product(
    title="Gi (Blue)",
    description="A training gi of the highest quality.",
    price=99.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652340348/DojoDeals/gi_nkunia.png",
    category="clothing"
    )
  product3 = Product(
    title="Muay Thai Pads",
    description="Premium Muay Thai/Kickboxing pads, suitable for multiple disciplines",
    price=149.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652400095/DojoDeals/thai_pads_hjt8wy.png",
    category="pads"
    )

  db.session.add(product1)
  db.session.add(product2)
  db.session.add(product3)

  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
