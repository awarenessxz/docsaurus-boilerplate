import React from 'react';
import Layout from '@theme/Layout';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"

const ApiReferencePage = () => {
    return (
        <Layout>
            <div className="container">
                <h1>My React page</h1>
                <SwaggerUI url="/storagesvc/api-docs" />
            </div>
        </Layout>
    )
};

export default ApiReferencePage;
