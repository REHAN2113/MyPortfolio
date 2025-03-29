import '../AboutMe/AboutMe.css'
import aboutImg from '../../assets/rehan-portfolio-img.jpg'
export function AboutMe() {

    return (
        <div id="about">
            <div id='about-title'>
                About me
            </div>
            <div id='about-grid'>
                <div id='aboutme-img'>
                    <img src={aboutImg} alt="" width="250px" />
                </div>
                <div id='about-grid-right'>
                    <div id='about-info'>
                        <p>A Passionate Full Stack Developer Turning Ideas into Reality

                            "I’m a MERN Stack Developer from Shrirampur, Maharashtra, India, with a strong passion for building dynamic, scalable, and user-friendly web applications. After completing my Bachelor of Computer Science (BCS),
                            I further honed my skills by taking a MERN Stack course, diving deep into front-end and back-end development. <br /> <br /> With expertise in React.js, Node.js, Express, and MongoDB, I specialize in crafting seamless digital experiences. I thrive on solving complex problems, optimizing performance, and bringing innovative ideas to life. Always eager to learn and stay ahead in tech, I’m on a mission to create impactful digital solutions."</p>
                    </div>
                    <div id='eduction'>
                        <div className='my-3 fs-4 fw-bold'>Education</div>
                        <table className='table table-hover table-dark '>

                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>School/College Name</th>
                                    <th>University/Board</th>
                                    <th>Year</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SSC</td>
                                    <td>Modern English School</td>
                                    <td>Maharashtra State Board</td>
                                    <td>2018-2019</td>
                                    <td>61.20%</td>
                                </tr>
                                <tr>
                                    <td>HSC</td>
                                    <td>R.B.N.B College Shrirampur</td>
                                    <td>Maharashtra State Board</td>
                                    <td>2020-2021</td>
                                    <td>76.50%</td>
                                </tr>
                                <tr>
                                    <td>BCS</td>
                                    <td>R.B.N.B College Shrirampur</td>
                                    <td>Savitribai Phule Pune University</td>
                                    <td>2021-2024</td>
                                    <td>80.08%</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div>
                        <div className='mb-2'>
                            <span className='certificate-title'>Certificate</span> : <span className='certificate-name'>Full Stack Web Development (MERN Stack) – Naresh IT Institute</span>
                        </div>
                        <div>
                            <a href='/certificate.pdf' className='certificate-btn'>View Certificate</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}