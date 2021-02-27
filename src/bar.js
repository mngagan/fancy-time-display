import React from 'react'
import _ from 'underscore'

export default function Bar({ count, timeData }) {

    let tempArray = _.range(0, count + 1)
    let className = 'each-box'

    return (
        <div className='bar-outer'>
            {tempArray.map((val, index) => {
                if (+val == +timeData) {
                    className += ' text-bold'
                }
                let otherClassName = +val == +timeData ? 'overlay-div-anim' : ''
                return <div style={{ height: '58px' }}>
                    <div className={className}>{val}</div>
                    <div className={otherClassName}></div>
                </div>
            })}
        </div>
    )
}
