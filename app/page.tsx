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
      </div>
    </main>
  );
}
