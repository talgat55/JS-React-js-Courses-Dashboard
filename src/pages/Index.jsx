import React from 'react';
import {  Row, Col } from 'reactstrap';
import Main from "../layout/Main";

import Header from "../components/Header/Header";
import GreetingBlock from "../components/GreetingBlock/GreatingBlock";

const Index = () => {

    return (
        <>
            <Main
                header={<Header/>}
            >
                <Row>
                    <Col lg="6" xs="12">
                        <GreetingBlock/>
                    </Col>
                    <Col  lg="6" xs="12">
                        search
                    </Col>
                </Row>
            </Main>
        </>
    )
};

export default Index;