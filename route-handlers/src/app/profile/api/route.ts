// Headers in Route handlers and Cookies

import { headers , cookies} from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest  } from "next/server";

// access headers fom request
export async function GET(request : NextRequest){
    // One technique
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));
   
    // using nextjs function
    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    const theme = request.cookies.get("theme");
    console.log(theme);

    // using nextjs function
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage" , "20");
    console.log(cookieStore.get('resultsPerPage'));
    // set  headers
    return new Response("<h1>Hello , From Profile Route</h1>" , {
        headers : {
            "Content-Type" : "text/html",
            "Set-Cookie" : "theme=dark"
        }
    })
    redirect('/hello');

    // to set headers you need to return a new response with costom headers
}