import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <div className="page">
            <h3 className="heading">Contact Us</h3>
            <div className="contactflex">
                <div className="contact">
                    <h3>Get In Touch With Us</h3>
                    <p className="telephone">
                    <i class="fa-solid fa-phone"></i>
                        <a href="tel:+233592724408">+233592724408</a>
                        <a href="tel:+233592724408">+233592724408</a>
                    </p>
                    <p className="social"><i class="fa-brands fa-square-facebook"></i><a href="#">Facebook</a></p>
                    <p className="social"><i class="fa-brands fa-square-instagram"></i><a href="#">Instagram</a></p>
                    <p className="social"><i class="fa-brands fa-square-twitter"></i><a href="#">Twitter</a></p>
                    <p className="social"><i class="fa-brands fa-linkedin"></i><a href="#">LinkedIn</a></p>
                </div>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.43135023063!2d-0.19841308569500524!3d5.650567334263379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1663650741563!5m2!1sen!2sgh" width={"100%"} height={"100%"} style={{border:"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact