import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  return NextResponse.json({
    message: 'API endpoint for system overview data',
    timestamp: new Date().toISOString()
  });
}