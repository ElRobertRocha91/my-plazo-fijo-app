import { NextResponse } from "next/server";

export async function GET(request){

    return NextResponse.json({ tasas:
        [ {
            name: "pesos",
            TNA: 70
        },
        {
            name: "dolares",
            TNA: 0.30
        } ] 
    }, {status: 200});
}