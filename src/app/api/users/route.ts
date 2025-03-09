import { prisma } from "@/lib/db";
import { userSchema } from "@/lib/schemas/user.schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


export async function GET(){
   try {
    const users = await prisma.user.findMany();
    
    return NextResponse.json({users});
      
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   } 
}




export async function POST(request: NextRequest){
   try {

      const body = await request.json();

      const {telefono,medio,status,assignedTo } =userSchema.parse(body);

    await prisma.user.create({
      data: {
        telefono,
        medio,
        status,
        assignedTo
      },
    });
    
    return NextResponse.json({message : "User created successfully"});
      
   } catch (error: any) {
      if (error instanceof z.ZodError) {
         return NextResponse.json({ error: error.errors }, { status: 400 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
   } 
}