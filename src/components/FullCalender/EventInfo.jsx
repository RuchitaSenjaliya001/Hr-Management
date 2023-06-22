import React from 'react'

export default function EventInfo({ info }) {
    const { event } = info

    return (
        <div className='bg-yellow-400 w-full outline-none border-none py-1  text-center rounded-md'>
            <p className='bg-yellow-400'>{event.title}</p>
        </div>
    )
}
