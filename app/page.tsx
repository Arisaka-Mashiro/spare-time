'use client';

import { Container, Marker, NaverMap, useNavermaps } from "react-naver-maps";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';

export default function Home() {
  const navermaps = useNavermaps();
  const { data: session } = useSession();
  const [isMarkerClick, setIsMarkerClick] = useState(false);
  const [cardOffset, setCardOffset] = useState({x: 0, y: 0});

  const handleMarkerClick = (e: any) => {
    const { clientX, clientY } = e.domEvent;
    console.log(e);

    setCardOffset({ x: clientX, y: clientY });
    setIsMarkerClick(!isMarkerClick);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12">
      <div className="z-10 w-full max-w-xl items-center justify-between font-mono text-sm flex flex-col">
        {isMarkerClick &&
          <Card className="z-10 absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2" style={{ left: `${cardOffset.x}px`, top: `${cardOffset.y}px` }}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        }
        <Container
          className="w-full h-80 sm:h-96 md:h-112"
        >
          <NaverMap
            defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
            defaultZoom={15}
          >
            <Marker position={new navermaps.LatLng(37.3595704, 127.105399)} onClick={handleMarkerClick} />
          </NaverMap>
        </Container>
        <div className="absolute top-4 right-4 z-20">
          {session?.user?.email ? (
            <div className="bg-white p-2 rounded-full shadow-md text-lg font-bold">
              {session.user.email.substring(0, 2)} {/*호버시 로그아웃 버튼 띄우도록 하기? */}
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
            >
              네이버 로그인/회원가입
            </button>
          )}
        </div>
      </div>
      <div className="flex space-x-48 mt-8">
        <div className="cursor-pointer">
          <img src="/icons/home.svg" alt="Homepage" className="w-16 h-16" />
        </div>
        <div className="cursor-pointer">
          <img src="/icons/list.svg" alt="Reviews" className="w-16 h-16" />
        </div>
        <Link href="mypage/">  {/*이거 링크를 사장이면 사장 마이페이지로, 체험단이면 체험단 마이페이지로 이동시키도록 수정해야함. */}
          <div className="cursor-pointer">
            <img src="/icons/user.svg" alt="MyPage" className="w-16 h-16" />
          </div>
        </Link>
      </div>
    </main>
  );
}
