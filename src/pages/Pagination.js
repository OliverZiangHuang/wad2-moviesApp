import React from 'react'

import Row from "@material-ui/core/Select";
import Col from "@material-ui/core/Select";
import Button from "@material-ui/core/Select";


const Pagination = props => (
    <>
        <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
                {props.data.prevPage &&
                    <Button
                        onClick={props.prevPage}
                        type='primary'
                        icon='arrow-left'
                        shape='circle'
                        style={{ fontSize: 20, marginRight: 20 }}
                        theme="outlined" />}

                {props.data.nextPage
                    && props.data.totalPages > 1 &&
                    <Button
                        onClick={props.nextPage}
                        type='primary'
                        icon='arrow-right'
                        shape='circle'
                        style={{ fontSize: 20 }}
                        theme="outlined" />}
            </Col>
        </Row>
    </>
)

export default Pagination