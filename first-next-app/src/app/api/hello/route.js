export async function GET() {
    return Response.json({message : 'Hello API!'})
}

export async function POST(req) {
    const data = await req.json();
    return Response.json({recieved : data})
}