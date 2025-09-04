export async function POST(req) {
    const data = await req.json();
    const answer = eval(data.expression);
    return Response.json({result : answer})
}