export async function POST(req) {
    const data = await req.json();
    let evalcode = data.operand==="*" || data.operand==="/" ? "1" : "0";
    data.operands.forEach(operand => {
        evalcode += (data.operation + operand);
    });
    const answer = eval(evalcode);
    return Response.json({result : answer})
}