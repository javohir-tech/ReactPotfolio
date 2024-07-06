import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarList from '../../assets/Combined Shape.png';
import BrandImg from '../../assets/Shapebrand.png';
import search from '../../assets/Shapesearch.png';
import video from '../../assets/Combined-Shape.png';
import katagoriya from '../../assets/Combined Shape (1).png';
import UserImg from '../../assets/Userpic.png';
import './Navbar.css'


function BasicExample() {
    const user = [
        {
            id: 1,
            img: UserImg
        }
    ]
    return (
        <>
        <Navbar expand="lg" className="">
            <Navbar.Brand><img src={NavbarList} alt="list" id='modal'/></Navbar.Brand>
            <NavbarBrand><img src={BrandImg} alt="brand" className='ms-3' /></NavbarBrand>
            <NavbarBrand><h3 className='NavbarName d-inline ms-2 mb-0'>YouTube</h3></NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto d-flex align-items-center">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
                    <form action="#">
                        <div className='input-box position-relative'>
                            <input type="search" className='navbar-input rounded-pill form-control w-100' />
                            <div className='position-absolute d-flex justify-content-between input-box-absolute align-items-center'>
                                <p className='mb-0 ms-4 input-text'>search</p>
                                <img src={search} alt="navbarsearch" className='searchImg' />
                            </div>
                        </div>
                    </form>
                </Nav>
                <Nav className='d-flex align-items-center'>
                    <Nav.Link href="#" className='me-4'><img src={video} alt="video" /></Nav.Link>
                    <Nav.Link href="#" className='me-4'><img src={katagoriya} alt="kategoriya" /></Nav.Link>
                    {
                        user.map((user) => (
                            <Nav.Link href="#" className='me-2'><img src={user.img} alt="Userpic" /></Nav.Link>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
        
    );
}

export default BasicExample;
