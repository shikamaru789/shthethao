import * as moment from "moment";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "moment/locale/vi";
export default function Document() {
  return (
    <Html lang="vi">
      <Head></Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
