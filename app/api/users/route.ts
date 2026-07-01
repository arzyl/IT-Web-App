import { drizzle } from 'drizzle-orm/neon-http';
import { historyTable, userTable } from '../../db/schema';
import { eq, ne } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

export async function GET(request: Request) {
    // For example, fetch data from your DB here


    const user = await db.select().from(userTable).where(ne(userTable.status, 'Done'));

    return new Response(JSON.stringify(user), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    const { activity = '', assignee = '', priority = '', status = '' } = await request.json();

    const user: typeof userTable.$inferInsert = { activity, assignee, status, priority };
    await db.insert(userTable).values(user);

    return Response.json(user, { status: 201 });
}

export async function PATCH(req: Request) {
    const { id, ...fieldsToUpdate } = await req.json();

    await db
        .update(userTable)
        .set(fieldsToUpdate)
        .where(eq(userTable.id, id));

    return Response.json({ success: true });
}