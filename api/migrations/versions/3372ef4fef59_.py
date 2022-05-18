"""empty message

Revision ID: 3372ef4fef59
Revises: 019c21253d64
Create Date: 2022-02-26 19:56:29.578156

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3372ef4fef59'
down_revision = '019c21253d64'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('test',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('test')
    # ### end Alembic commands ###
