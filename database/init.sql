-- Run this file to initialize your SQLite demo DB.
.read ../backend/src/sampleSchemas/users.sql
.read ../backend/src/sampleSchemas/products.sql
.read ../backend/src/sampleSchemas/orders.sql

-- Insert some demo data
INSERT INTO users (name, email, created_at) VALUES ('Alice', 'alice@example.com', '2025-01-01');
INSERT INTO users (name, email, created_at) VALUES ('Bob', 'bob@example.com', '2025-02-01');

INSERT INTO products (name, price, stock) VALUES ('Laptop', 1200.00, 10);
INSERT INTO products (name, price, stock) VALUES ('Phone', 800.00, 25);

INSERT INTO orders (user_id, product_id, quantity, order_date) VALUES (1, 1, 1, '2025-03-01');
INSERT INTO orders (user_id, product_id, quantity, order_date) VALUES (2, 2, 2, '2025-03-05');
