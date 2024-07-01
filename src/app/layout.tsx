import type { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/shared/layouts/main-layout';

export const metadata: Metadata = {
  title: `호씨 Portfolio`,
  description: '프론트엔드 개발자 황윤호의 포트폴리오',
  openGraph: {
    title: '호씨 Portfolio',
    description: '프론트엔드 개발자 황윤호의 포트폴리오',
    url: 'https://hossi.vercel.app/',
    // images: [
    //   {
    //     url: 'https://example.com/image.jpg',
    //     width: 800,
    //     height: 600,
    //     alt: 'Alt text for the image',
    //   },
    // ],
    type: 'website',
  },
};

/**
 * RootLayout? 서버가 전체 앱에 반환하는 HTML을 한 번에 조작하는 방법
 * 서버 컴포넌트이며 페이지 이동 시 다시 렌더링 되지 않음
 * 즉, 레이아웃의 모든 데이터나 상태는 앱의 수명주기 내내 유지
 * @param param0
 * @returns
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
