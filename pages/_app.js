import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />{' '}
    <footer>
      <p>2022 RHB</p>
    </footer>
  </>
}
