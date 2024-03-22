import Button from "../button/Button"
import Input from "../input/Input"
import './landingpage.css'
const LandingPage=()=>{
    return(
        <div className="">
            <div className="poster-container" >
                {/* <img src={Poster} alt="" /> */}
            <div className="first-contain" >
                <h1>Netflix</h1>
                <div>
                <input type="text" />
                <Button content="Sign In" />
                </div>
            </div>
            <div className="unlimit-contain">
            <div className="unlimit-container">
                <div>
                     <h1 className="unlimit">Unlimited movies, TV <br />shows and more</h1>
                     <h3>Starts at ₹149. Cancel anytime.</h3>
                     <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
            <div className="email-contain">
            <Input/>
            <Button content="Get Started" />
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default LandingPage