import React from 'react'

const Contactform = ({contactform,closemodals}) => {
  return (
    <div className={[contactform?'backdrop visible':'backdrop']}  onClick={e=>closemodals(e)}>
        <div className="form">
            <form action="">
                <p className="label">Send us Your Message/Review</p>
                <div className="formcontrol">
                    <input type="text" name="name"id='name' />
                    <label htmlFor="name">Your Name</label>
                </div>
                <div className="formcontrol">
                    <input type="text" name="email"id='email' />
                    <label htmlFor="email">Your email</label>
                </div>
                <div className="formcontrol">
                      <textarea name="message" id="message" rows="3"></textarea>
                    <label htmlFor="message">Your telephone</label>
                </div>
             
                <button className="click">Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Contactform