CREATE DATABASE ducks_db;
USE ducks_db;

CREATE TABLE user
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	username VARCHAR (20),
	email VARCHAR (40),
	password VARCHAR (20),
	logs_site_A INTEGER,
	logs_site_B INTEGER,
	total_wins INTEGER,
	total_losses INTEGER,
	PRIMARY KEY (id)
);