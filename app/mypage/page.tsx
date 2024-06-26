'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession({ required: true });
  console.log(session);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6">
        { session && 
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">마이페이지</h1>
            <Label>닉네임</Label>
            <Input defaultValue={session?.user?.name} />
            <Label>이메일</Label>
            <Input defaultValue={session?.user?.email} />
          </div>
        }
      </div>
    </div>
  )
}