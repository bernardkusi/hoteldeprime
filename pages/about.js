import React from 'react'
import Header from './components/Header'
import Pageheader from './components/Pageheader'

const about = ({closenav}) => {
  return (
    <>
    <Pageheader title="Hotel about"/>
    <div className='page'>
        <Header title={"About hotelDeprime"} closenav={closenav}/>
       <h3 className="heading">Who we are</h3>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores
        officia quaerat commodi sequi aspernatur libero debitis non ea nesciunt.
        Architecto obcaecati ratione consequatur inventore similique iusto unde
        ullam eius at. In reiciendis mollitia voluptatem, dolorem quasi sint.
        Architecto obcaecati ratione consequatur inventore similique iusto unde
        ullam eius at. In reiciendis mollitia voluptatem, dolorem quasi sint.
        Odio iste rem ut officia dignissimos, unde ullam harum et tempore
        quisquam provident fugiat ipsa doloremque. Sed, eaque!
      </p>

      <h3 className="heading">What we do</h3>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit atque
        velit asperiores sapiente ipsa alias? Error ipsa dignissimos quibusdam
        voluptates, aut vitae possimus saepe blanditiis molestias! In molestias
        ducimus maiores cumque laudantium eveniet ea est culpa suscipit. Rem
        asperiores accusamus fugit voluptatibus error repudiandae molestias odit
        nobis excepturi debitis similique dolorum libero sed tempore, modi
        laudantium! Perferendis consequuntur a optio!
      </p>

      <h3 className="heading">How it works</h3>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit atque
        velit asperiores sapiente ipsa alias? Error ipsa dignissimos quibusdam
        voluptates, aut vitae possimus Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Necessitatibus, modi mollitia. Fuga recusandae ipsam
        rerum modi nostrum! saepe blanditiis molestias! In molestias ducimus
        maiores cumque laudantium eveniet ea est culpa suscipit. Rem asperiores
        accusamus fugit voluptatibus error repudiandae molestias odit nobis
        excepturi debitis similique dolorum libero sed tempore, modi laudantium!
        Perferendis consequuntur a optio!
      </p>
    </div></>
  )
}

export default about