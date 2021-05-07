import React, { useState } from 'react'
import data from './data'

const List = () => {
  const [people, setPeople] = useState(data)

  return (
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        const { id, image, age, name } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
      <button className='button' onClick={() => setPeople([])}>
        Clear All
      </button>
    </section>
  )
}

export default List
