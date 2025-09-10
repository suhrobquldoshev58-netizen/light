



import './App.css'
import der from './assets/der.png'









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





    </>
  )
}

export default App
