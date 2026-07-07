import "./globals.css";

export const metadata = {
  title: "E7Match — 외국인 전문인력 매칭 & 비자 원스톱",
  description:
    "한국에서 일하려는 외국인 인재와 한국 고용기관을 연결합니다. E-7 비자 자격 자동 검토부터 비자 신청 대행까지, E7Match에서 한 번에.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/woff2/SUIT.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Escoredream';
                font-weight: 400;
                src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff') format('woff');
                font-display: swap;
              }
              @font-face {
                font-family: 'Escoredream';
                font-weight: 700;
                src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
                font-display: swap;
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
