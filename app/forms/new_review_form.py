from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired

class NewReviewForm(FlaskForm):
    user_id = IntegerField('user_id')
    product_id = IntegerField('product_id')
    title = StringField('title', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
