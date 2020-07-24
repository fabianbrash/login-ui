import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export const Login = () => {
    return (
    
            <MDBContainer className="mt-5">
                 <h1 className="text-center">Login Page</h1>
            <MDBRow className="justify-content-center">
                <MDBCol md="6" className="mt-5">
                <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="deep-purple-text">
                    <MDBInput label="Type your email" icon="at" group type="email" validate error="wrong"
                        success="right" />
                    <MDBInput label="Type your password" icon="lock" group type="password" validate />
                    </div>
                    <div className="text-center">
                    <MDBBtn color="deep-purple">Login</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
       </MDBContainer>
    )
}
