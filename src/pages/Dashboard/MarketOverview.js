import React from 'react';
import MetaTags from 'react-meta-tags';
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
    Container,
    Row
} from "reactstrap";


import Locations from './Locations';

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Dashboard</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard" />
                  
                    <Row>
                        <Locations />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;