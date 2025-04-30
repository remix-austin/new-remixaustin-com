CREATE TABLE `talk` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`status` text NOT NULL,
	`date` text DEFAULT (CURRENT_DATE),
	`link` text,
	`updatedAt` integer,
	`createdAt` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
