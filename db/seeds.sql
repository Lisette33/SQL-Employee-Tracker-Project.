--Department table--
INSERT INTO department(ID,NAME)
VALUES
    (1, "Operations Management"),
    (2, "Finance"),
    (3, "IT"),
    (4, "Marketing"),
    (5, "Product Management"),
    (6, "Sales"),
    (7, "Human Resources");

--Role table--
INSERT INTO role(ID,Title,Salary,Department_id)
VALUES
    (1, "Manager", 60000, 001),
    (2, "Assistant", 30000, 002),
    (3, "Intern", 5000, 003);

--Employee table--
INSERT INTO employee(ID,First_name,Last_name,Role_id,Manager_id)
VALUES
    (1, "Joe", "Rinn", 1, NULL),
    (2, "Bellson", "Hills", 2, NULL),
    (3, "Mina", "Elsher", 3, NULL),