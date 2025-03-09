import { prisma } from '@/lib/db';
import { userSchema } from '@/lib/schemas/user.schema';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
    params:Promise<{id: string}>;
}

export async function GET(_: any,{params}: Params) {


    try {
        const {id} = await params

        const user =await prisma.user.findFirst({
            where: {
                id
            }
        });

        return NextResponse.json({ user });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}

export async function PUT(request : NextRequest , {params}: Params) {


    try {
        const {id} = await params

        const body = await request.json();

        const {telefono,medio,status,assignedTo } = userSchema.parse(body);

        const user =await prisma.user.update({
            where: {
                id
            },
            data: {
                telefono,
                medio,
                status,
                assignedTo
            }
        });

        return NextResponse.json({ user });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}



export async function DELETE(_: NextRequest , {params}: Params) {


    try {
        const {id} = await params

        await prisma.user.delete({
            where: {
                id
            }    
        });

        return NextResponse.json({ message : "User deleted successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}