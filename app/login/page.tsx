'use client';

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";
import { SiNaver } from "react-icons/si";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">빈 시간에 로그인</h1>
          <p className="text-gray-500 dark:text-gray-400">로그인을 해주세요.</p>
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full bg-[#03C75A] text-white" onClick={() => signIn('naver')}>
            <SiNaver className="mr-2 h-4 w-4" />
            네이버 로그인
          </Button>
        </div>
      </div>
    </div>
  )
}