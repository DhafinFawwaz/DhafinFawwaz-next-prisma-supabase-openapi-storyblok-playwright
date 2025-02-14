import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // if (request.method === 'OPTIONS') { // For CORS, but we don't need this tho since the api is on the same domain
    //     return new Response("ok", {status: 200});
    // }

    const authHeader = request.headers.get('authorization');
    // Do some auth stuff here
    // If using NextAuth, call getServerSession here. 

    const res = NextResponse.next();
    return res;
}
 
export const config = {
    matcher: [
        
    ],
}