import React from 'react';
import styled from 'styled-components';
import imglogo from '../images/logo.svg'
const Bg = styled.div`
background-color: hsl(356, 100%, 66%);
`;

class Header extends React.Component {
  render() {
    return(
      <div>
        <Bg>
          <img src={imglogo} alt='logo blog' />
          <nav>
            <li><a href="/">Product <i class="fa-solid fa-angle-down"></i> </a></li>
            <li><a href="/">Company <i class="fa-solid fa-angle-down"></i></a></li>
            <li><a href="/">Connect <i class="fa-solid fa-angle-down"></i></a></li>
          </nav>
          <a href="/">Login</a>
          <button>Sing Up</button>

          <section>
            <h1>A modern publishing platform</h1>
            <h2>Grow your audience and build your online brand</h2>
            <button>Star for Free</button>
            <button>Learn More</button>
          </section>
        </Bg>
      </div>
    );
  }
}

export default Header;
