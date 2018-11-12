from system.core.model import Model

class Product(Model):
    def __init__(self):
        super(Product, self).__init__()

    def get_all(self):
        return self.db.query_db("SELECT * FROM products ORDER BY products.id ASC")

    def get_by_id(self, id):
        # pass data to the query like so
        query = "SELECT * FROM products WHERE id = :id"
        data = { 'id': id}
        return self.db.query_db(query, data)

    def add(self, product):
        # Build the query first and then the data that goes in the query
        query = """INSERT INTO products (name, description, price, created, updated)
                VALUES (:name, :description, :price, NOW(), NOW())"""
        data = {'name':product['name'], 'description':product['description'],
                'price':product['price']}
        return self.db.query_db(query, data)

    def update(self, product):
        # Building the query for the update
        query = """UPDATE products
                SET name=:name, description=:description, price=:price
                WHERE id = :id"""
        # we need to pass the necessary data
        data = {'name':product['name'], 'description':product['description'],
                'price':product['price'], 'id':product['id']}
        # run the update
        return self.db.query_db(query, data)

    def delete(self, id):
        query = "DELETE FROM products WHERE id = :id"
        data = { "id": id }
        return self.db.query_db(query, data)