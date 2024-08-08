// Product and Feedback table to store feedback for product and fetech the average  rating product wise



CREATE TABLE Product (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Feedback (
    id INT PRIMARY KEY,
    productId INT,
    rating INT CHECK (rating >= 0 AND rating <= 5),
    comment TEXT,
    FOREIGN KEY (productId) REFERENCES Product(id)
);

INSERT INTO Product (id, name) VALUES 
(1, 'Smartphone'), 
(2, 'Laptop'), 
(3, 'Tablet'), 
(4, 'Smartwatch'), 
(5, 'Camera'), 
(6, 'Headphones'), 
(7, 'Speaker'), 
(8, 'Drone'), 
(9, 'VR Headset'), 
(10, 'Fitness Tracker');

INSERT INTO Feedback (id, productId, rating, comment) VALUES
(1, 1, 5, 'Excellent product!'),
(2, 2, 4, 'Very good.'),
(3, 3, 3, 'Average product.'),
(4, 4, 3, 'Average product.'),
(5, 5, 2, 'Poor product.'),
(6, 6, 3, 'Average product.'),
(7, 7, 1, 'Bad product.'),
(8, 8, 3, 'Average product.'),
(9, 9, 3, 'Average product.'),
(10, 10, 2, 'Bad product.');


SELECT 
    p.name AS GadgetName,
    AVG(f.rating) AS AverageRating
FROM 
    Product p
LEFT JOIN 
    Feedback f ON p.id = f.productId
GROUP BY 
    p.name;


select * from product

select * from Feedback
