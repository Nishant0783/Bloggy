import React from 'react'

const SubmitBtn = ({content, classes, type}) => {
    return (
        <>
            <button className={`bg-gray-400 px-[60px] py-[8px] text-[1.2rem] font-semibold ${classes}`} type={type}>
                {content}
            </button>
        </>
    )
}

export default SubmitBtn