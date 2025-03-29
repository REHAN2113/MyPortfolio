import '../NavBar/NavBar.css'

export function NavBar()
{
    return (
        //for large screen
       <header>
         <nav>
          <div><span id='title'>Rehan</span></div>
          <div id='navbar-middle'>
            <ul id='navbar-menu' >
                <li>
                   <a className='nav-a' href="#hero">Home</a>
                </li>
                <li>
                   <a className='nav-a' href="#about"> About Me</a>
                </li>
                <li>
                    <a className='nav-a' href="#projects">Projects</a>
                </li>
                
                <li>
                    <a className='nav-a' href="#contact">Contact Me</a>
                </li>

            </ul>
          </div>
          <div id='navbar-right'>
            <a href='#contact' className="btn-contact">
                Contact With Me
            </a>
          </div>
          <div id='nav-short-btn' >
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas" className='bi bi-list btn btn-dark'></button>
          </div>
        </nav>
       </header>
    )
}