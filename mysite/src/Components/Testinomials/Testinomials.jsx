import React, {useEffect,useRef} from 'react'
import './Testinomials.css'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const Testinomials = () => {
    const slider = useRef();
        let tx =0;

    const handleNext = () =>
    {
        if(tx > -50){
            tx-=25;
        }
        console.log(tx);
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const handleBack = () =>
    {
        if(tx < 0){
            tx+=25;
        }
        console.log(tx);
        slider.current.style.transform = `translateX(${tx}%)`;

    }







  return (
  <div className="testinomials" id="testimonials">
<BsArrowLeft className="back" size={80} onClick={handleBack}/>
<BsArrowRight className="next" size={80} onClick={handleNext}/>
<div className="slider">
    <ul ref={slider}>
<li> 
<div className="slide">
<img src={user1} alt='user1' />
<div>
    <div className='user'>
    <h3> Dwayne Johnson </h3>
    <span>Proffesional actor</span>
    </div>
    <p> 
    I have been working with this company for 5 years and I am very satisfied with the results. I recommend it to everyone.       
    </p>
</div>

</div>
</li>

<li>
<div className="slide">
<img src={user2} alt='user2' />
<div>
    <div className='user'>
    <h3> Ryan Gosling </h3>
    <span>Famous person</span>
    </div>
    <p> 
    This company is the best in the market. I have been working with them for 3 years and I am very satisfied with the results.       
    </p>
</div>
</div>

</li>
<li>
<div className="slide">
<img src={user3} alt='user3' />
<div>
    <div className='user'>
    <h3> Billie Eilish </h3>
    <span>Singer</span>
    </div>
    <p> 
    I have been working with this company for 2 years and I am very satisfied with the results. I recommend it to everyone.       
    </p>
    </div>



</div>

</li>
    </ul>


</div>

  </div>
  
    )

}

export default Testinomials