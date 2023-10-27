import { headers } from 'next/headers';
import data from './data.json';
import { NextResponse } from 'next/server';
export async function GET( require : Request ) 
{
    try
    {
        const AllVideos = data.Videos;

        return NextResponse.json({messenge:  AllVideos},{ status: 200 });
    }catch(err)
    {

    }
}