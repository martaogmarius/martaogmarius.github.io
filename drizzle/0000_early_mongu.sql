CREATE TABLE `rsvps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`friday` text NOT NULL,
	`saturday` text NOT NULL,
	`dietary` text DEFAULT '' NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `rsvps_email_unique` ON `rsvps` (`email`);