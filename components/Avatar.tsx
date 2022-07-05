import Image from 'next/Image'
import React from 'react'

interface Props {
    seed?: string
    large?: boolean
    shadow?: boolean
}
const Avatar = ({seed, large, shadow}: Props) => {
    const { data: session } = null as any
    return (
        <div className={`overflow-hidden relative h-10 w-10 rounded-full ${shadow && "shadow-md"} border-gary-300 border bg-white ${large && "w-20 h-20"}`}>
            <Image
                layout='fill'
                src={`https://avatars.dicebear.com/api/gridy/${seed || session?.user?.name || "hello moms"}.svg`}
                alt="Avatar" />
        </div>
    )
}

export default Avatar