import type { NextPage } from 'next'
import Post from '../components/Post'

const Home: NextPage = () => {
  return (
    <div className="max-w-[100vw] max-h-[100vh]">
      <Post />
    </div>
  )
}

export default Home
