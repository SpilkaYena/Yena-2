create database yena;
use yena;
drop database yena;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `google_user_id` varchar(255) UNIQUE NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `profile_picture` varchar(255),
  `created_at` timestamp DEFAULT (current_timestamp),
  `updated_at` timestamp DEFAULT (current_timestamp),
  `description` VARCHAR(512),
  `stack` JSON,
  `linkedin` varchar(2048),
  `telegram` varchar(2048),
  `github` varchar(2048),
  `reddit` varchar(2048),
  `facebook` varchar(2048)
);

CREATE TABLE `credentials` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `access_token` VARCHAR(512) NOT NULL,
  `refresh_token` VARCHAR(512) NOT NULL,
  `token_expiry` timestamp NOT NULL,
  `created_at` timestamp DEFAULT (current_timestamp),
  `updated_at` timestamp DEFAULT (current_timestamp),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);

CREATE TABLE `technologies` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `projects` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `creator_id` int,
  `member_ids` JSON,
  `name` varchar(255) UNIQUE NOT NULL,
  `description` VARCHAR(512) UNIQUE NOT NULL,
  `stack` JSON,
  `status` ENUM('active', 'pending', 'completed', 'archived') NOT NULL,
  `private` boolean DEFAULT false,
  `accepted` boolean DEFAULT false,
  FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
);
