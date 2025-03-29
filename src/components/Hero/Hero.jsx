
import '../Hero/Hero.css'
import myImg from '../../assets/rehan-portfolio-img.jpg'
export function Hero() {
    return (
        <div id="hero">
            <div id='img-row'>
                <img src={myImg} className='myimg' alt="" />
            </div>
            <div id='intro-title-con'>
                <div><span id='myname'>Hi, I'm Rehan Bagwan</span>, a Full Stack</div>
                <div>MERN Developer</div>
            </div>
            <div id='title-description' >
                <p>I specialize in building dynamic, user-friendly web applications with React, Node.js, Express, and MongoDB. Passionate about creating seamless digital experiences.</p>
            </div>
            <div id='btn-con'>
               <a href='/REHAN_FINAL_RESUME.pdf' download className='btn-resume' >Download Resume</a>
               <a href='#contact' className='btn-connect'>Connect With Me</a>
            </div>
{/* ............................................. */}

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul id='navbar-canvas' >
                <li>
                   <a className='nav-a-canvas text-dark' href="#hero">Home</a>
                </li>
                <li>
                   <a className='nav-a-canvas text-dark' href="#about"> About Me</a>
                </li>
                <li>
                    <a  className='nav-a-canvas text-dark' href="#projects">Projects</a>
                </li>
                
                <li>
                    <a  className='nav-a-canvas text-dark' href="#contact">Contact Me</a>
                </li>

            </ul>
  </div>
</div>

        </div>
    )

}