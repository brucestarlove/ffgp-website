CREATE TABLE "petition_signatures" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"zip_code" text,
	"phone" text,
	"message" text,
	"keep_informed" boolean DEFAULT false,
	"add_to_friends_list" boolean DEFAULT false,
	"contact_to_help" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"ip_address" text
);
