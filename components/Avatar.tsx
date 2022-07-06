import Image from 'next/Image'
import React from 'react'

interface Props {
    large?: boolean
    shadow?: boolean
}
const Avatar = ({large, shadow}: Props) => {
    const session  = null
    return (
        <div className={`overflow-hidden relative h-10 w-10 rounded-full ${shadow && "shadow-md"} border-gary-300 border bg-white ${large && "w-20 h-20"}`}>
            <Image
                layout='fill'
                src={`https://avatars.dicebear.com/api/gridy/${session || "hello moms"}.svg`}
                alt="Avatar" />
        </div>
    )
}

export default Avatar