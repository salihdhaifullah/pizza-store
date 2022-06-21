import Image from 'next/Image'
import React from 'react'
import { useSession } from 'next-auth/react';

interface Props {
    seed?: string
    large?: boolean
}
const Avatar = ({seed, large}: Props) => {
    const { data: session } = useSession()
    return (
        <div className={`overflow-hidden relative h-10 w-10 rounded-full border-gary-300 border bg-white ${large && "w-20 h-20"}`}>
            <Image
                layout='fill'
                src={`https://avatars.dicebear.com/api/avataaars/${seed || session?.user?.name || "hello moms"}.svg`}
                alt="doge" />
        </div>
    )
}

export default Avatar