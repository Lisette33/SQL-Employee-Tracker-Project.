--Department table--
CREATE DATABASE IF NOT EXISTS business_db;
USE business_db;

CREATE TABLE IF NOT EXISTS department (
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(100),
    PRIMARY KEY(ID)
);

--Role table--
CREATE TABLE IF NOT EXISTS role (
    ID INT NOT NULL AUTO_INCREMENT,
    Title VARCHAR(30),
    Salary DECIMAL(10,2),
    Department_id INT,
    PRIMARY KEY(ID),
    FOREIGN KEY(Department_id)REFERENCES role(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

--Employee table--
CREATE TABLE IF NOT EXISTS employee (
    ID INT NOT NULL AUTO_INCREMENT,
    First_name VARCHAR(30),
    Last_name VARCHAR(30),
    Role_id INT,
    Manager_id INT,
    PRIMARY KEY(ID),
    FOREIGN KEY(Manager_id)REFERENCES employee(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

