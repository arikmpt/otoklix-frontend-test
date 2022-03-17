import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Nabvar from './Navbar';

const Main = () => {
    return (
        <Fragment>
            <Nabvar />
            <div className="App">
                <Container>
                    <Outlet />
                </Container>
            </div>
        </Fragment>
    )
}

export default Main