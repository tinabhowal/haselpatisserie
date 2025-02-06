import React from 'react'
import Navigation from '../Navigation/Navigation';
import './Delivery.css'
import Bottom from '../Bottom/Bottom';
import Footer from '../Footer/Footer';

const Delivery = () => {
  return (
    <div className='deliveryParent'>
        <Navigation />
        <div className='deliveryContent'>
            <h2>"Handle with Care – It’s Not Just a Cake, It’s an Edible Masterpiece!"</h2>

            <div className="deliverP">

            <p>
              <p className='deliverP-intro'>Baking a 500-gram cake isn’t just mixing and frosting—it’s a 12-hour labor of love. We put our hearts into crafting cakes that are as stunning as they are delicious, ensuring that what you envision is exactly what you receive. Naturally, they need to be transported with care.</p>

              <p className='deliverySteps'><p className='deliverySteps-intro'>Here’s how we ensure a smooth cake pickup or delivery:</p>
                <ul>
                    <li><span>🛍 Self-Pickup:</span> If you’re picking up the cake yourself, we’ll share the location in advance. If you’re sending someone else, just share their contact details with us.</li>

                    <li><span>🚖 Cab Delivery (For When Life Gets Busy!):</span> If you can’t make it, don’t worry! We’ll send the cake via a cab. The safest spot in the car (the footrest) will be used for placement. Cab fares apply as-is.</li>

                    <li><span>📞 Stay Reachable:</span> If we’re sending the cake via a cab, we’ll share the driver and cab details. Please be available to collect it directly from the vehicle, as doorstep delivery isn’t provided. Also, share an alternate contact in case we or the driver can’t reach you.</li>

                    <li><span>🎂 Travel-Ready Cakes:</span> All our cakes are made travel ready with all reinforcements. We make sure that the cake can travel a comfortable distance in cars. And so, once the cake is out of our kitchen,  we DO NOT take responsibility. </li>

                    <li><span>🎁 No Surprise Deliveries:</span> If you’re planning a surprise for your loved one, please arrange for someone to be present at the location to receive and handle the cake.</li>

                    <li><span>🏆 Show-Stopper Cakes:</span> These beauties are assembled at the venue and may include returnable items (like spacers, Cake Dummies, Levitating maching, Rotating machine, etc.). A refundable safety deposit will be collected for these elements which will be refunded on return.
                    .</li>
                    </ul>
              </p>
              </p>
              </div>
        </div>
        <div className='closingLine'>Thank you for trusting us with your special moments—we promise to keep them sweet! 😊</div>
        <section>
        <Bottom />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Delivery