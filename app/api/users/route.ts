import { drizzle } from 'drizzle-orm/neon-http';
import { userTable } from '../../db/schema';

export async function GET(request: Request) {
    // For example, fetch data from your DB here

    const db = drizzle(process.env.DATABASE_URL!);

    const users = await db.select().from(userTable);

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}