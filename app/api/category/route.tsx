import { headers } from 'next/headers';
import data from '../data.json';
import { NextApiRequest, NextApiResponse } from 'next';
import { ServerResponse } from 'http';
import { NextResponse } from 'next/server';

// GET
export async function GET( require : Request )
{
    try
    {
        const AllVideos = data.Categoria;

        return NextResponse.json({messenge:  AllVideos},{ status: 404 });
    }catch(err)
    {

    }

}
