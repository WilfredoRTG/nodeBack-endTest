DROP DATABASE IF EXISTS test;
CREATE DATABASE test CHARACTER SET utf8 COLLATE utf8_general_ci;

USE test;

CREATE TABLE test1(
	idtest int NOT NULL AUTO_INCREMENT,
    label varchar(200) not null,
    PRIMARY KEY (idtest)
);

INSERT INTO `test1`(`label`) VALUES ('test 1');
INSERT INTO `test1`(`label`) VALUES ('test 2');
INSERT INTO `test1`(`label`) VALUES ('test 3');
INSERT INTO `test1`(`label`) VALUES ('test 4');
