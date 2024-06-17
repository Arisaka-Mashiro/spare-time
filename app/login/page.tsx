'use client';

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { SiNaver } from "react-icons/si";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || "/";

  useEffect(() => {
    if (session) {
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl]);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">빈 시간에 로그인/회원가입</h1>
          <p className="text-gray-500 dark:text-gray-400">로그인/회원가입시 당사 약관에 동의</p>
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full bg-[#03C75A] text-white" onClick={() => signIn('naver', { callbackUrl })}>
            <SiNaver className="mr-2 h-4 w-4" />
            네이버 로그인/회원가입
          </Button>
        </div>
      </div>
    </div>
  );
}
