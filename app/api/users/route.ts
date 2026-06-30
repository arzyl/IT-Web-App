import { drizzle } from 'drizzle-orm/neon-http';
import { historyTable, userTable } from '../../db/schema';

export async function GET(request: Request) {
    // For example, fetch data from your DB here

    const db = drizzle(process.env.DATABASE_URL!);

    const user = await db.select().from(userTable);

    return new Response(JSON.stringify(user), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    const db = drizzle(process.env.DATABASE_URL!);
    const { activity = '', assignee = '', priority = '', status = '' } = await request.json();

    const user: typeof userTable.$inferInsert = { activity, assignee, status, priority };
    await db.insert(userTable).values(user);

    return Response.json(user, { status: 201 });
}