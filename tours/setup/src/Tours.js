import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          //{...tour} --> let me enter to all properties in the tour array
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        })}
      </div>
    </section>
  )
}

export default Tours
