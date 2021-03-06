import React from 'react';
import { Form, Input } from 'antd';
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import axios from "axios";

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        // event.preventDefault();
        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
        return (
        <div>
            <form
                onSubmit={event =>
                    this.handleFormSubmit(
                        event,
                        this.props.requestType,
                        this.props.articleID
                    )
                }
            >
                <Form.Item label="Title">
                <Input name="title" placeholder="Put Title" />
                </Form.Item>
                <Form.Item label="Content">
                <Input name="content" placeholder="Put Content" />
                </Form.Item>
                <Form.Item>
                <button type="primary" htmlType="submit">
                    {this.props.btnText}
                </button>
                </Form.Item>
            </form>
        </div>
        );
    }
}

export default CustomForm;