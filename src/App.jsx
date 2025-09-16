






import './App.css'

import second from './assets/second.png'

import der from './assets/der.png'
import sectionii from './assets/sectionii.png'


import dish from './assets/dish.png'
import fast from './assets/fast.png'



import dessert from './assets/dessert.png'
import ALL from './assets/ALL.png'




import salad1 from './assets/salad1.png'

import salad3 from './assets/salad3.png'




import green1 from './assets/green1.png'
import green2 from './assets/green2.png'
import green3 from './assets/green3.png'
import green4 from './assets/green4.png'




function App() {

  return (
    <>
      <header className='head container'>
        <img src={der} alt="" />
        <ul >
          <li><a href="">home</a></li>
          <li><a href="">menu</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Offers</a></li>
        </ul>

        <div className='mine'>
          <i className="fa-brands fa-searchengin"></i>
          <button className='fa'> <i className="fa-solid fa-phone-volume"></i>  Contact</button>
        </div>
      </header>

      <section className='section-1 container'>
        <div className='dolter-1'>
          <h1>
            Dive into Delights
            Of Delectable Food
          </h1>
          <br />
          <p>Where Each Plate Weaves a Story of Culinary
            Mastery and Passionate Craftsmanship</p>
          <br />
          <div className='fle'>
            <button className='order'>Order Now</button> <p>Watch Video</p>
          </div>

        </div>

        <div className='dolter'>
          <img src={sectionii} alt="" />
        </div>

      </section>


      <section className='sectian-2'>

        <p className='red'>Customer Favorites</p>
        <h2 className='bonw container'>Popular Categories</h2>



        <div className='Dam'>





          <div className='dam'>
            <img src={dish} alt="" />
            <h3>Main Dish</h3>
            <p>(86 dishes)</p>
          </div>


          <div className='dam'>
            <img src={fast} alt="" />
            <h3>Break Fast</h3>
            <p className='grant'>(12 break fast )</p>
          </div>

          <div className='dam'>
            <img src={dessert} alt="" />
            <h3>Dessert</h3>
            <p className='grant'>(48 dessert)</p>
          </div>

          <div className='dam'>
            <img src={ALL} alt="" />
            <h3>Browse  All</h3>
            <p className='grant'>(255 items )</p>
          </div>

        </div>


      </section>










      <section className='section-2 container'>


        <p className='redp'>Special Dishes</p>
        <h2 className='botlw'><b>
          Standout Dishes <br />
          From Our Menu</b></h2>

        <div className='bigres'>





          <div className='bital' >
            <img src={salad1} alt="" />
            <p><b>Fattoush salad</b>  <br /></p>
            <p className='grant'>Description of the item</p> <br />

            <div className='salad'><p><b>$24.00</b></p>    <p className='grant'>4.9</p>
            </div>
          </div>


          <div className='bital'>
            <img src={salad1} alt="" />
            <p><b>Vegetable salad</b></p>
            <p className='grant'>Description of the item</p>
            <div className='salad'>     <p className='grant'>4.6</p>
            </div>



          </div>





          <div className='bital' >
            <img src={salad3} alt="" />
            <p><b>Egg vegi salad</b></p>
            <p className='grant'>Description of the item</p>
            <div className='salad'>
              <p><b>$23.00</b></p>    <p className='grant'>4.5</p></div>
          </div>




        </div>
      </section>





      <section className='section-3 container'>

        <div>
          <img src={second} alt="" />



        </div>


        <div>
          <p className='nat'>Testimonials</p>
          <h1>
            What Our Customers <br />
            Say About Us
            <br />
          </h1>
          <p className='grant'>
            “I had the pleasure of dining at Foodi last night, and <br />
            I'm still raving about the experience! The attention to <br />
            detail in presentation and service was impeccable”
          </p> <br />
          <p><b>Customer Feedback</b></p>

          <div>    <img src=" " alt="" />   <p><b>4.9</b></p>  <p className='grant'>(18.6k Reviews)</p> </div>

        </div>





      </section>



      <section className='section-4 container'>


        <div className='rop'>
          <p className='mu'>Our Story & Services</p>
          <br />
          <br />
          <h1>Our Culinary Journey  <br />
            And Services</h1>
          <br />
          <p className='gray'>Rooted in passion, we curate unforgettable dining  <br />
            experiences and offer exceptional services, <br />
            blending culinary artistry with warm hospitality.</p>
          <br />
          <br />
          <button className='Explore'>Explore</button>
        </div>






        <div className='vali'>


          <div className='GreenFood1'>
            <img className='fly' src={green1} alt="" />
            <div>
              <h2 className='green1'>Catering</h2>
              <p className='green1'>Delight your guests with our flavors and  presentation</p>
            </div>
          </div>

          <div className='GreenFood1' >
            <img className='fly' src={green2} alt="" />
            <div>
              <h2 className='green1' >Fast delivery</h2>
              <p className='green1'>We deliver your order promptly to your door</p>
            </div>
          </div>

          <div className='GreenFood1'>
            <img className='fly' src={green3} alt="" />
            <div>
              <h2 className='green1'>Online Ordering</h2>
              <p className='green1'>Explore menu & order with ease using our Online Ordering </p>
            </div>
          </div>

          <div className='GreenFood1'>
            <img src={green4} alt="" />
            <div>
              <h2 className='green1'>Gift Cards</h2>
              <p className='grant green1'>Give the gift of exceptional dining with Foodi Gift Cards</p>
            </div>
          </div>

        </div>

      </section>








      <section className='section-5 container'>

        <div>
          <img src={der} alt="" />
          <p className='grant'>Savor the artistry where <br />
            every dish is a culinary <br />
            masterpiece</p>
        </div>



        <div>
          <p><b>Useful links</b></p>
          <p className='grant'>About us</p>
          <p className='grant'>Events</p>
          <p className='grant'>Blogs</p>
          <p className='grant'>FAQ</p>
        </div>


        <div>
          <p><b>Main Menu</b></p>
          <p className='grant'>Home </p>
          <p className='grant'>Events</p>
          <p className='grant'>Offers</p>
          <p className='grant'>Menus</p>
          <p className='grant'>Reservation</p>
        </div>

        <div>
          <p><b>Contact Us </b></p>
          <p className='grant'>example@email.com </p>
          <p className='grant'>+64 958 248 966</p>
          <p className='grant'>Social media</p>
        </div>


      </section>





      <footer className='container' >



        <p className='grant'>Copyright       2023 Dscode | All rights reserved</p>



      </footer>

    </>
  )
}

export default App
