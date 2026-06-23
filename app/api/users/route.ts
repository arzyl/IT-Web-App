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

export async function POST(request: Request) {
    const db = drizzle(process.env.DATABASE_URL!);
    const { activity = '', assignee = '', priority = '', } = await request.json();

    const user: typeof userTable.$inferInsert = { activity, assignee, priority };
    await db.insert(userTable).values(user);

    return Response.json(user, { status: 201 });
}