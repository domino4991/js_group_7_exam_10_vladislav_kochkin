CREATE DATABASE IF NOT EXISTS news_db;

USE news_db;

CREATE TABLE IF NOT EXISTS news(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    body LONGTEXT NOT NULL,
    image VARCHAR(30) DEFAULT NULL,
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS comments(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    news_id INT NOT NULL,
    author VARCHAR(50) DEFAULT "Anonymous",
    `comment` MEDIUMTEXT NOT NULL,
    CONSTRAINT FK_news_id
    FOREIGN KEY (news_id)
    REFERENCES news(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

INSERT INTO news(title, body) VALUES ("Джаред Лето снова сыграет роль Джокера в культовом фильме", "Фронтмен рок-группы 30 Seconds To Mars Джаред Лето - харизматичный красавец с магической внешностью искусителя женских сердец. Он с успехом снимался в Бойцовском клубе, Американском психопате, Александре и Господине Никто. А в 2016 году дебютировал в одной из самых заветных и влекущих зрителя ролей - Джокера в фильме Отряд самоубийц… Персонажа, которого на экране замечательно воплощали Джек Николсон и Хоакин Феникс. Но лидер 30 Seconds To Mars никогда не боялся конкуренции. Теперь Джаред Лето сыграет роль Джокера у режиссера Зака Снайдера - в фильме Лига справедливости. Об этом сообщает портал Hollywood Reporter, не раскрывая своих источников своей информации. Музыкант-актер вновь перевоплотится в мрачноватого шутника и бузотера с зелеными волосами и черным чувством юмором. Изначально, в сценарии ничего подобного не было. Но Джаред Лето так потребовался Заку Снайдеру в его режиссерской версии фильма, что нужные сцены и диалоги дописали. Актерский состав в итоге подобрался очень впечатляющий: Бен Аффлек, Эмбер Хёрд, Рэй Фишер, Галь Гадот… Ожидается, что Лига справедливости Зака Снайдера выйдет в формате четырехсерийного мини-сериала на стриминговом сервисе HBO Max.");
INSERT INTO comments(news_id, author, `comment`) VALUES (1, "Харли Квинн", "Говорят, я довольно надоедливая особа. Просто предупреждаю.");