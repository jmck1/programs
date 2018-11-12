from system.core.model import Model
import re
EMAIL_REGEX = re.compile(r'^[a-za-z0-9\.\+_-]+@[a-za-z0-9\._-]+\.[a-za-z]*$')

class User(Model):
    def __init__(self):
        super(User, self).__init__()

    def get_all_users(self):
        return self.db.query_db("""SELECT * FROM users
                                   ORDER BY courses.created DESC""")

    def login_user(self, email, password):
        query = "SELECT * FROM users WHERE email = :email"
        data = { 'email': email}
        user = self.db.query_db(query, data)
        return self.bcrypt.check_password_hash(user[0]['password'], password)

    def add_user(self, user):
        valid = True
        if not user['firstname']:
            valid = False
        elif len(user['firstname']) < 2:
            valid = False
        if not user['lastname']:
            valid = False
        elif len(user['lastname']) < 2:
            valid = False
        if not user['email']:
            valid = False
        elif not EMAIL_REGEX.match(user['email']):
            valid = False
        if not user['password']:
            valid = False
        elif len(user['password']) < 8:
            valid = False
        elif user['password'] != user['confirm']:
            valid = False

        if valid:
            pwhash = self.bcrypt.generate_password_hash(user['password'])
            query = """INSERT INTO users (firstname, lastname, email, password, created)
                     VALUES (:firstname, :lastname, :email, :password, NOW())"""
            data = {'firstname': user['firstname'], 'lastname': user['lastname'],
                  'email':user['email'], 'password':pwhash}
            self.db.query_db(query, data)
        return valid

    def update_user(self, user):
        # Building the query for the update
        query = """UPDATE users
        SET firstname=:firstname, lastname=:lastname, email=:email, password=:password
                WHERE id = :id1"""
        # we need to pass the necessary data
        data = {'firstname': user['firstname'], 'lastname': user['lastname'],
                'email':user['email'], 'password':user['password'],
                'id1': course['id1']}
        # run the update
        return self.db.query_db(query, data)

    def delete_user(self, id1):
        query = "DELETE FROM courses WHERE id = :id1"
        data = { "id1": id1 }
        return self.db.query_db(query, data)