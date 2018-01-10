CREATE DATABASE ducks_db;
USE ducks_db;

CREATE TABLE user
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	username VARCHAR (20),
	email VARCHAR (40),
	password VARCHAR (20),
	last_visit_time DATE,
	last_logged_site VARCHAR (1),
	logs_site_A INTEGER,
	logs_site_B INTEGER,
	lifetime_logs INTEGER,
	PRIMARY KEY (id)
);