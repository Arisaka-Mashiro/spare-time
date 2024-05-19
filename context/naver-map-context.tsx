"use client";
import { NavermapsProvider } from "react-naver-maps";

type Props = {
  children: React.ReactNode;
}

export default function NaverMapContext({ children }: Props) {
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID ?? ''}
    >
      {children}
    </NavermapsProvider>);
}