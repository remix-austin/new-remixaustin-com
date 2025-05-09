CREATE TABLE `signins` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text NOT NULL,
	`email` text NOT NULL,
	`company` text NOT NULL,
	`remote` integer NOT NULL,
	`familiarity` integer NOT NULL,
	`referrer` text NOT NULL,
	`desires` text NOT NULL,
	`updatedAt` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`createdAt` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
