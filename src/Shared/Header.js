import React from 'react'
import '../App.css';
import { Container, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';




export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modal1: false


        };
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal,


        });
    }
    toggle1 = () => {
        this.setState({
            modal1: !this.state.modal1,
            modal: !this.state.modal

        });
    }


    render() {
        return (





            <div>


                <header>




                    <nav className="navbar   navbar-fixed-bottom navbar-inner my-nav navbar-expand-lg">


                        <div className="logoImg">

                        </div>


                        {/* <form className="form-inline siva">
                    <div className="md-form my-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </form> */}
                        <form className='form-inline my-2 my-lg-0 sai'>
                            <input className='form-control   box-width ' type='search' placeholder='Try New York' aria-label='Search' ></input>
                            <div className="logoImg1"></div>
                        </form>

                        <div>
                            <div className="signin">
                                <Container>
                                    <h5 onClick={this.toggle}>SignUp</h5>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} >
                                        <ModalHeader toggle={this.toggle}>Signup</ModalHeader>
                                        <ModalBody >
                                            <div className="modal-body mx-3">
                                                <div className="md-form mb-5">
                                                    <h6>Name</h6>
                                                    <input type="name" placeholder="name" required className="form-control validate" />
                                                    <h6>Email</h6>
                                                    <input type="email" placeholder="email" required className="form-control validate" />
                                                    <h6>Password</h6>
                                                    <input type="password" placeholder="password" required className="form-control validate" />
                                                    <h6>Reenter Password</h6>
                                                    <input type="password" placeholder="password" required className="form-control validate" />
                                                    <div className="text-center">
                                                        <a href="" className="btn btn-default btn-rounded" data-toggle="modal" data-target="#modalLoginAvatar">SignUp</a>
                                                    </div>

                                                </div>
                                            </div >

                                        </ModalBody>
                                        <ModalFooter>  <p onClick={this.toggle && this.toggle1}>Already account <u> sign In</u></p>
                                        </ModalFooter>
                                    </Modal>
                                </Container>
                            </div>

                            <div className="signup">
                                <Container>
                                    {/* <h4 onClick={this.toggle1}>SignIn</h4> */}
                                    <Modal isOpen={this.state.modal1} toggle={this.toggle1} >
                                        <ModalHeader toggle1={this.toggle1}>SignIn</ModalHeader>
                                        <ModalBody >
                                            <div className="modal-body mx-3">
                                                <div className="md-form mb-5">

                                                    <h6>Email</h6>
                                                    <input type="email" placeholder="email" className="form-control validate" />
                                                    <h6>Password</h6>
                                                    <input type="password" placeholder="password" className="form-control validate" />
                                                    <div className="text-center">
                                                        <a href="" className="btn btn-default btn-rounded" data-toggle="modal" data-target="#modalLoginAvatar">Login</a>
                                                    </div>

                                                </div>
                                            </div >

                                        </ModalBody>
                                        <ModalFooter>  <p onClick={this.toggle && this.toggle1} >No  Account <u>sign up</u></p>
                                        </ModalFooter>
                                    </Modal>
                                </Container>
                            </div>
                        </div>



                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse siva" id="basicExampleNav">


                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link"  >More
        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item siva">
                                    <a className="nav-link"  >Cart</a>
                                </li>




                            </ul>



                        </div>

                    </nav>
                </header>
                <nav className="navbar  navbar-fixed-bottom navbar-inner1 navbar-expand-lg navbar-color">

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav siv">
                            <li className="nav-item active ">
                                <a className="nav-link text-dark" href="#">Pizza <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item siva">
                                <a className="nav-link text-dark" href="#">Food</a>
                            </li>
                            <li className="nav-item siva">
                                <a className="nav-link text-dark" href="#">Grains& States</a>
                            </li>
                            <li className="nav-item siva">
                                <a className="nav-link disabled text-dark" href="#">Sweets</a>
                            </li>
                            <li className="nav-item siva">
                                <a className="nav-link disabled text-dark" href="#">Snacks</a>
                            </li>
                            <li className="nav-item siva">
                                <a className="nav-link disabled text-dark" href="#">Milk &products</a>
                            </li>
                            <li className="nav-item siva">
                                <a className="nav-link disabled text-dark" href="#">Ovf Valuepack</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>

                </div>

            </div >


        )
    }
};



export default Header;








