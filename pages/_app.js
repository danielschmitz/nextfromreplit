import '../styles/global.css'
import TopBar from '../components/app/topbar'

function MyApp({ Component, pageProps }) {
  return <div>
    <TopBar />
    <Component {...pageProps} />
  </div>
}

export default MyApp