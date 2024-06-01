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

export default function Home() {
  const navermaps = useNavermaps();
  const [isMarkerClick, setIsMarkerClick] = useState(false);
  const [cardOffset, setCardOffset] = useState({x: 0, y: 0});

  const handleMarkerClick = (e: any) => {
    const { clientX, clientY } = e.domEvent;
    console.log(e);

    setCardOffset({ x: clientX, y: clientY });
    setIsMarkerClick(!isMarkerClick);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {isMarkerClick &&
          <Card 
            className="z-10 absolute w-[300px]" 
            style={{ left: `${cardOffset.x}px`, top: `${cardOffset.y}px` }}
          >
            <CardHeader>
              <CardTitle className="text-lg">명륜진사갈비 서울사당점</CardTitle>
              <CardDescription className="text-xs">테스트 설명 테스트 설명 테스트 설명 테스트 설명 테스트 설명</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200212_225%2F158145954086477wLo_JPEG%2FaAZ9b7UIWzP-TBTpFNfdIAs8.jpg"></img>
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
