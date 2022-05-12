from flask.cli import AppGroup
from .users import seed_users, undo_users
from .cart_contents import seed_cart_contents, undo_cart_contents
from .products import seed_products, undo_products
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_products()
    seed_reviews()
    seed_cart_contents()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_cart_contents()
    undo_reviews()
    undo_products()
    undo_users()
    # Add other undo functions here
