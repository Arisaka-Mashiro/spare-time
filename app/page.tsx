'use client';

import { Container, Marker, NaverMap, useNavermaps } from "react-naver-maps";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const navermaps = useNavermaps();
  const [isMarkerClick, setIsMarkerClick] = useState(false);
  const [cardOffset, setCardOffset] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMarkerClick = (e: any) => {
    const { clientX, clientY } = e.domEvent;

    setCardOffset({ x: clientX, y: clientY });
    setIsMarkerClick(!isMarkerClick);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-2xl font-mono text-sm">
        <div className="relative flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl">
            <FaBars />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
              <Link href="/mypage" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">마이페이지</Link>
              <Link href="/addStore" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">가게 추가</Link>
            </div>
          )}
        </div>
        {isMarkerClick &&
          <Card className="z-10 absolute" style={{ left: `${cardOffset.x}px`, top: `${cardOffset.y}px` }}>
            <CardHeader>
              <CardTitle className="text-lg">명륜진사갈비 서울사당점</CardTitle>
              <CardDescription className="text-xs">테스트 설명 테스트 설명 테스트 설명 테스트 설명 테스트 설명</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200212_225%2F158145954086477wLo_JPEG%2FaAZ9b7UIWzP-TBTpFNfdIAs8.jpg" className="w-[200px] h-[200px] object-cover"></img>
            </CardContent>
            <CardFooter>
              <p className="text-xs">서울 동작구 사당로23길 6</p>
            </CardFooter>
          </Card>
        }
        <Container
          style={{
            width: '100%',
            height: '600px',
          }}
        >
          <NaverMap
            defaultCenter={new navermaps.LatLng(37.4843309, 126.9772744)}
            defaultZoom={15}
          >
            <Marker position={new navermaps.LatLng(37.4843309, 126.9772744)} onClick={handleMarkerClick} />
          </NaverMap>
        </Container>
      </div>
    </main>
  );
}