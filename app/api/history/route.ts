import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { historyTable, userTable } from '../../db/schema';


const db = drizzle(process.env.DATABASE_URL!);


export async function GET(request: Request) {
    // For example, fetch data from your DB here

    const users = await db.select()
    .from(userTable)
    .where(eq(userTable.status, 'Done'))
    .leftJoin(historyTable, eq(userTable.id, historyTable.h_id));

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    const { h_id = '' } = await request.json();

    const history: typeof historyTable.$inferInsert = { h_id };
    await db.insert(historyTable).values(history);

    return Response.json(history, { status: 201 });
}