'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function MyPage() {
  const { data: session } = useSession({ required: true });
  console.log(session);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6">
        {session && (
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">마이페이지</h1>
            <Label>닉네임</Label>
            <Input defaultValue={session?.user?.name} />
            <Label>이메일</Label>
            <Input defaultValue={session?.user?.email} />
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                메인으로
              </Link>
              <Link href="/addStore" className="px-4 py-2 bg-green-600 text-white rounded-md">
              가게 추가
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
