import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" type="image/png" href="/assets/favicon.png" />

          <script
            src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
            async
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                  OneSignal.init({
                    appId: "6939aa49-4fe9-4d18-9b8a-e820d788d90c",
                  });
                });
              `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
