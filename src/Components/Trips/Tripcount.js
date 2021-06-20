import React from 'react'


const getProgress = (total,goal) =>{
    return Math.floor((total/goal)*100)+'%';
}

const getProgressBarWidth = (width) =>{
    return {width};
}

export const Tripcount = ({total,tropic,trek,club, goal=15}) => {
    return (
        <div className='trips-count'>
            <div className='content'>
                <div className='total'><h1>Total {total}</h1>trips</div>
                <div className='trek'><h1><i class="fas fa-campground"></i>{trek}</h1>trips</div>
                <div className='club'><h1><i class="fas fa-coffee"></i>{club}</h1>trips</div>
                <div className='tropic'><h1><i class="fas fa-umbrella-beach"></i>{tropic}</h1>trips</div>
                <div className='goal'>
                    <div className='progress' style={getProgressBarWidth(getProgress(total,goal))}>   
                    </div>
                    <p>Goal reached:{getProgress(total,goal)}</p>
                </div>
            </div>
        </div>
    )
}

