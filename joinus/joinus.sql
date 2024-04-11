create database joinus;
use joinus;

drop table if exists users;

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT into users (email) values ('test@gmail.com'), ('test2@gmail.com');

SELECT 
    *
FROM
    users;
    
