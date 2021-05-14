import React, { useState } from 'react';
import Layout from '@theme/Layout';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import config from "../../../web-config.json";
import styles from "./api-reference.module.css";

const ApiReferencePage = () => {
    const [swaggerIdx, setSwaggerIdx] = useState(-1);

    return (
        <Layout>
            <div className={`container ${styles.container}`}>
                <div className='row'>
                    <div className='col'>
                        <h1>Swagger - API Documentation</h1>
                        <div className={styles.selectWrapper}>
                            <select className="form-select" aria-label="Select API Swagger" defaultValue={-1} onChange={e => setSwaggerIdx(e.target.value)}>
                                <option value="-1">Select API Swagger</option>
                                {config.apis.map((url, idx) => <option key={idx} value={idx}>{url}</option> )}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.breakline} />
                <div className='row'>
                    <div className='col'>
                        {swaggerIdx >= 0 ? (
                            <SwaggerUI url={config.apis[swaggerIdx]} />
                        ) : (
                            <div className={styles.alert}>No API Selected</div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default ApiReferencePage;
