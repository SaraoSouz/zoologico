	CREATE TABLE reptil (id SERIAL NOT NULL PRIMARY KEY,
						 nome VARCHAR(50) NOT NULL, 
						 idade INT, 
						 genero VARCHAR(12) NOT NULL,
						 tipo_de_escamas VARCHAR(30));
						 
		
						 
	CREATE TABLE ave (id SERIAL NOT NULL PRIMARY KEY,
						 nome VARCHAR(50) NOT NULL, 
						 idade INT, 
						 genero VARCHAR(12) NOT NULL,
						 envergadura FLOAT);	
						 
						 
						 
	CREATE TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY,
						 nome VARCHAR(50) NOT NULL, 
						 idade INT, 
						 genero VARCHAR(12) NOT NULL,
						 raça VARCHAR (50) NOT NULL);	
						 
						 
	INSERT INTO mamifero (nome, idade, genero, raça)
		VALUES
	('Simba', 2, 'Macho', 'Leão'),
	('timao', 2, 'Macho', 'Suricato'),
	('Pumba', 2, 'Macho', 'javali'), 
	('Nala', 2, 'Femea', 'Leoa');
	
	INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
		VALUES
	('lala', 2, 'Femea', 'dermicas'),
	('lili', 2, 'Desconhecido', 'escudos'),
	('lulu', 2, 'Macho', 'quiliferas');
	
	ALTER TABLE reptil
	ALTER COLUMN tipo_de_escamas TYPE VARCHAR(50);
	
	INSERT INTO ave (nome, idade, genero, envergadura)
		VALUES
	('lala', 2, 'Femea', 4),
	('lili', 2, 'Desconhecido', 3),
	('lulu', 2, 'Macho', 2);
	
	SELECT * FROM mamifero;
	
	--ALTER TABLE reptil
	--ALTER COLUMN tipo_de_escamas TYPE VARCHAR(50);
	
	--SELECT * FROM mamifero;
	--SELECT * FROM ave;
	--SELECT * FROM reptil;
	
	