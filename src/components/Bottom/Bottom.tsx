import React from 'react'

const Bottom = () => {
  return (
    <div className='bottomParentDiv'>
        <div className="socialMedia">
            <div className="anchorlinks">
                <a href="/some-link" aria-label="Go to some link">
                <img src="icon.png" alt="icon" />
                </a>
            </div>

            <div className="anchorlinks">
                <a href="/some-link" aria-label="Go to some link">
                <img src="icon.png" alt="icon" />
                </a>
            </div>

            <div className="anchorlinks">
                <a href="/some-link" aria-label="Go to some link">
                <img src="icon.png" alt="icon" />
                </a>
            </div>

                </div>
        <div className="linkables">
            <div className="categoriess">
                <ul>
                    <li>Cakes</li>
                    <li>Snacks</li>
                    <li>hampers</li>
                </ul>
            </div>
            <div className="services">
            <ul>
                    <li>Delivery</li>
                    <li>Payment</li>
                    <li>Enqueries</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Bottom