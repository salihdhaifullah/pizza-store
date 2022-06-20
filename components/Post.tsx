
import { useSession } from 'next-auth/react';

const Post = () => {
    const { data: session } = useSession();
    return (
        <form>
            <div>
                <label className="sr-only" htmlFor="title">Title</label>
                <input
                    disabled={!session}
                    className="p-2 pl-5 flex flex-1 rounded-md outline-none bg-gray-50"
                    type="text"
                    id="title"
                    placeholder={`${session 
                    ? "Create a title for your post"
                    : "Sing in to create a post"}
                    `} />
            </div>
        </form>
    )
}

export default Post