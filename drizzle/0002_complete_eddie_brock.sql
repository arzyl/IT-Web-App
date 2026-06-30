CREATE TABLE "history" (
	"h_id" integer,
	"finishDate" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "history" ADD CONSTRAINT "history_h_id_users_id_fk" FOREIGN KEY ("h_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;