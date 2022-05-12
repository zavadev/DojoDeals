from app.models import db, Cart_content

def seed_cart_contents():
    cart1 = Cart_content(
        product_id=1, user_id=1, quantity=1)
    cart2 = Cart_content(
        product_id=2, user_id=1, quantity=2)

    db.session.add(cart1)
    db.session.add(cart2)

    db.session.commit()

def undo_cart_contents():
    db.session.execute('TRUNCATE cart_contents RESTART IDENTITY CASCADE;')
    db.session.commit()
