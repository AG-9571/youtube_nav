// Search 
import { NextResponse } from 'next/server';

// get search results
export async function GET( require : Request )
{
    try
    {
        const AllVideos = "";

        return NextResponse.json({messenge:  AllVideos},{ status: 200 });
    }catch(err)
    {

    }

}