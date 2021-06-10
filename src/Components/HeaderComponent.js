import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron} from 'reactstrap';
class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="">
                        <NavbarBrand href="/">Dishes Detail</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-4 col-sm-6">
                                <h1>Dishes Details</h1>
                                <p>We take inspiration from the World's best cuisine!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header;