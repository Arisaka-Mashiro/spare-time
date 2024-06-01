import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

export async function POST(request: NextRequest) {
  try {
    console.log('start')
    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const { name, mobile, profile } = await request.json();

    const { data, error } = await supabase
      .from('owner') // 테이블 이름
      .insert([{ name, mobile, profile }]);
  
    if (error) {
      console.error(error.code, error.details, error.hint, error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error(e);
  }
}
