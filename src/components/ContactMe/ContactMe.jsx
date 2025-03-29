import '../ContactMe/ContactMe.css'


export function ContactMe() {
    return (
        <div id='contact'>

            <div id='contact-title'>
                Get in touch
            </div>
            <div id='contactme-grid'>
                <div id='contactme-grid-left'>
                    <div id='letstalk'>Let's talk</div>
                    <div>Have a project idea, job opportunity, or just want to connect? Feel free to reach out! I'm always open to discussing new opportunities, collaborations, or anything related to web development. Let’s turn ideas into reality!</div>
                    <div className='bi bi-envelope-at '>&nbsp;rehanbagwan2113@gmail.com</div>
                    <div className='bi bi-telephone  '>&nbsp; 9067389593</div>
                    <div className='bi bi-geo-alt '>&nbsp; Shrirampur , maharashtra , india </div>
                </div>
                
                <div className='contactme-grid-right'>
                   <form action="https://api.web3forms.com/submit" method="POST"id='contact-form'>
                    <dl>
                     <input type="hidden" name="access_key" value="3707ed6f-b823-4fcf-8e5f-f2da15219d26"/>
                        <dt>Your Name</dt>
                        <dd><input className='w-100' name='name' type="text" /></dd>
                        <dt>Your Email</dt>
                        <dd><input className='w-100' name='email' type="text" /></dd>
                        <dt>Write You're Message Here</dt>
                        <dd><textarea name="message" id="message"  cols="59" rows="6"></textarea></dd>
                        <dd><button type='submit' className='btn-visit'>Submit</button></dd>
                    </dl>
                   </form>
                </div>
            </div>
        </div>
    )
}