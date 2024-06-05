import styles from './Styles/Home.module.css'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div className={styles.Home}>
      <Navbar>
      </Navbar>
      <h1>Welcome to Style</h1>
    </div>
  )
}
