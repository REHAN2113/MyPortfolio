import '../Projects/Projects.css'
import videolibararyimg from '../../assets/videolibrary.png'
import todo from '../../assets/todo.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'
import img11 from '../../assets/img11.png'
import img12 from '../../assets/img12.png'
import img13 from '..//../assets/earbud.png'
export function Projects() {

    return (
        <div id='projects'>

            <div className='fullstack'>
                <div className='project-title'>
                    Projects
                </div>
                <div className='fullstack-top'>
                    <div id='fullstack-project-title'>Full Stack Projects (With Database)</div>
                    <div id='fullstack-project-desc'>Building Scalable & Dynamic Web Applications</div>
                </div>
                <div className='fullstack-grid'>

                    <div id='videolibrary-prj'>
                        <div className='text-center'><a href="https://react-video-library-kappa.vercel.app/"><img className='prj-imgs ui-imgs' src={videolibararyimg} alt="" /></a></div>
                        <div className='text-center p-3 fs-4 fw-bold'>Video Library Project</div>
                        <div className='text-center p-3'><p>A platform where admins can manage videos (add, edit, delete, and categorize) and users
                            can register, search, watch, like, comment, and save videos to "watch later" or check their
                            watch history. Built with React, Node.js, Express.js, and MongoDB Atlas.</p></div>
                        <div className='text-center'>
                            <a href="https://react-video-library-kappa.vercel.app/" className='btn-visit'>Visit</a>
                        </div>
                    </div>
                    <div id='todo-prj'>
                       <div className='text-center'> <a href="http://todo-frontend-37olo5ag2-rehan2113s-projects.vercel.app"><img className='prj-imgs ui-imgs' src={todo} alt="" /></a></div>
                        <div className='text-center p-3 fs-4 fw-bold'>TODO Application</div>
                        <div className='text-center p-3'><p> A task manager with user 
                        sign-up, login, and appointment CRUD functionality. </p></div>
                        <div className='text-center'>
                        <a href="http://todo-frontend-37olo5ag2-rehan2113s-projects.vercel.app" className='btn-visit'>Visit</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='frontend'>
            <div className='fullstack-top'>
                    <div id='fullstack-project-title'>Front-End Templates (UI Designs)</div>
                    <div id='fullstack-project-desc'>Creative & Interactive Web Interfaces</div>
                </div>
                <div id='frontend-grid'>
                 <div> <a href="https://rehan2113.github.io/UiTemplates/login-form.html"> <img className='ui-imgs'  src={img6} alt="" /> </a> 
                  <a  href="https://rehan2113.github.io/UiTemplates/login-form.html" className='btn-visit w-100'>Visit</a>
                  </div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/earbud-resp.html"> <img className='ui-imgs'  src={img13} alt="" /> </a>
                 <a href='https://rehan2113.github.io/UiTemplates/earbud-resp.html'  className='btn-visit'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/index.html"> <img className='ui-imgs'  src={img3} alt="" /> </a>
                 <a  href="https://rehan2113.github.io/UiTemplates/index.html" className='btn-visit w-100'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/amazon-2.html"> <img className='ui-imgs'  src={img4} alt="" /> </a>
                 <a  href="https://rehan2113.github.io/UiTemplates/amazon-2.html" className='btn-visit w-100'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/car.html"> <img className='ui-imgs'  src={img5} alt="" /> </a>
                 <a  href="https://rehan2113.github.io/UiTemplates/car.html" className='btn-visit w-100'>Visit</a> </div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/youtube.html"> <img className='ui-imgs'  src={img1} alt="" /> </a>  <a  href="https://rehan2113.github.io/UiTemplates/youtube.html" className='btn-visit w-100'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/spotify.html"> <img className='ui-imgs'  src={img7} alt="" /> </a>  <a  href="https://rehan2113.github.io/UiTemplates/spotify.html" className='btn-visit w-100'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/weather.html"> <img className='ui-imgs'  src={img8} alt="" /> </a>  <a  href="https://rehan2113.github.io/UiTemplates/weather.html" className='btn-visit w-100'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/github.html"> <img className='ui-imgs'  src={img9} alt="" /> </a>  <a  href="https://rehan2113.github.io/UiTemplates/github.html" className='btn-visit w-100'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/nasa.html"> <img className='ui-imgs'  src={img10} alt="" /> </a>  <a  href="https://rehan2113.github.io/UiTemplates/nasa.html" className='btn-visit w-100'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/marvel.html"> <img className='ui-imgs'  src={img11} alt="" /> </a>  <a  href="https://rehan2113.github.io/UiTemplates/marvel.html" className='btn-visit w-100'>Visit</a></div>
                 <div><a href="https://rehan2113.github.io/UiTemplates/weather-api.html"> <img className='ui-imgs'  src={img12} alt="" /> </a>  <a  href="https://rehan2113.github.io/UiTemplates/weather-api.html" className='btn-visit w-100'>Visit</a></div>
                </div>
            </div>
        </div>
    )
}