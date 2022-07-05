import type { NextPage } from 'next'
import Post from '../components/Post'

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
        <Post />
    </div>
  )
}

export default Home