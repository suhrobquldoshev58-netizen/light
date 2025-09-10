



import './App.css'


import der from './assets/der.png'
import sectionii from './assets/sectionii.png'








function App() {
  
  return (
    <>
<header  className='head container'>
  <img src={der} alt="" />
  <ul >
   <li><a href="">home</a></li>
   <li><a href="">menu</a></li>
   <li><a href="">Services</a></li>
   <li><a href="">Offers</a></li>
  </ul>

  <div className='mine'> 
    <i className="fa-brands fa-searchengin"></i>
    <button className='fa'> <i class="fa-solid fa-phone-volume"></i>  Contact</button>
  </div>
</header>

<section className='section-1'>
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





    </>
  )
}

export default App
