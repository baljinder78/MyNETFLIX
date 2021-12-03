import React from 'react'
import { Link } from 'react-router-dom';




function Welcome() {
    return (
      <div>
        <h1 className='w_text'>Unlimited movies, TV shows and more.</h1>
        <Link to="/signup">
        <button className="btn_getstarted button_">{"Get Started >"}</button>
        </Link>
        {/* <Button
        content="Get Started >"
        height="2"
        width="10"
        margin="auto"
        fontsize="2"
        padding="3% 0"
        /> */}
      </div>
    );
}

export default Welcome
