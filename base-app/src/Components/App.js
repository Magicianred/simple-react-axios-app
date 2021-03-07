// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react'
import { HashRouter as Router, NavLink } from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap'
import SiteRoutes from '../Sections/SiteRoute'

const App = () => {
    return (
        <Fragment>
            <Router>
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Item>
                                    <NavLink to="home">Home</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="categories">
                                        Categories
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="tags">Tags</NavLink>
                                </Nav.Item>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        className="mr-sm-2"
                                    />
                                    <Button variant="outline-success">
                                        Search
                                    </Button>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Row>
                        <Col>
                            <SiteRoutes />
                        </Col>
                    </Row>
                </Container>
            </Router>
        </Fragment>
    )
}

export default App
