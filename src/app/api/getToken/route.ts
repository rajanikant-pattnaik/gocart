import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";

export async function GET(request:NextRequest){

  try {
    const userToken=await getDataFromToken(request);
   

    return NextResponse.json({
       message:"User Found",
       data:userToken
    })

  } catch (error:any) {
    return NextResponse.json({
        error:error.message,
        data:"No user is present"
    },
    {
        status:400
    });
  }

}