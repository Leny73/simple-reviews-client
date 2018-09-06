import React, {Component} from 'react'
import Route, {Link} from "react-router-dom"
import SignInStyleWrapper from "./signin.style"

class Resetpassword extends Component {
    render(){
        return (
            <div>
                <div class="isoForgotPassPage sc-VigVT gfRoN1" data-rtl="ltr">
                    <div class="isoFormContentWrapper">
                        <div class="isoFormContent">
                            <div class="isoLogoWrapper">
                                <img class="logo-image" src="/src/image/logo-dark.png" alt="SimpleReviews Logo"/>
                            </div>
                            <div class="isoFormHeadText">
                                <h3>
                                    <span>Forgotten your password?</span>
                                </h3>
                                <p>
                                    <span>Enter you e-mail or telephone number and we will send you a reset link.</span>
                                </p>
                            </div>
                            <div class="isoForgotPassForm">
                                <div class="isoInputWrapper">
                                    <input class="ant-input ant-input-lg" placeholder="Email" type="text"/>
                                </div>
                                <div class="isoInputWrapper">
                                    <button data-rtl="ltr" type="button" class="ant-btn ant-btn-primary">
                                        <span>Send request</span>
                                    </button>
                                    <button data-rtl="ltr" type="button" class="ant-btn ant-btn-primary">
                                        <Link className="close-create-contact" to ="/">Close</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resetpassword