import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { userTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);
const formData: FormData = new FormData();

async function main() {
  const user: typeof userTable.$inferInsert = {
    assignee: formData.get('assignee') as string,
    priority: formData.get('priority') as string,
    activity: formData.get('activity') as string,
    status: formData.get('status') as string,
  };

  await db.insert(userTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(userTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */
}
main();
