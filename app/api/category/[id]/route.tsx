import { NextRequest, NextResponse } from 'next/server';
import data from '../../data.json';

import { headers } from 'next/headers';

export async function POST(req : Request, res : NextResponse) 
{      
  // header
      const headersList = headers()
      const referer = headersList.get('referer')
  //
    const { searchParams } = new URL(req.url);
    const delay = searchParams.get('name');
    //const url = req.url.pathname.startsWith('/api/category')
    const path2 = await req.url.split('category/')[1]
    const home = await path2.split('?')[0]
    console.log(path2)
    let response = NextResponse.next()
    response.cookies.get('show-banner');

    const name = await req.json();
    const tag = await req;

    return NextResponse.json({
      Messenge : {
        delay,
        name,
        tag,
        referer,
        home
      }
    },{status : 200});
}
/* GET searchParams
* 
*/
export async function GET( require : Request ) {
  try{
    // data from json
    const Category = data.Categoria;
    // get id from url
    const path2 = await require.url.split('category/')[1];
    const id: string  = await path2.split('?')[0];
    let foundGenre = Category.find(genre => genre.id === parseInt(id));
    if(foundGenre !== undefined) {                

        return NextResponse.json({messenge:  foundGenre},{ status: 200 });
    } else {
      return NextResponse.json({messenge:  "Usuario no encontrado"},{ status: 404 });

    }
  }
  catch(error){
    return new Response( error  ,{
      status: 500,
      headers: {
          'Content-Type': 'application/json'
      }
  });
  }
}