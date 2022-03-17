import Content from "../../components/Content";
import { Formik } from 'formik';
import { Form, Button } from "react-bootstrap";
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { savePost } from '../../redux/api';

const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required()
});

const AddPost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const createPost = async (values) => {
        await dispatch(savePost(values))
        navigate('/')
    }
    return (
        <>
            <Link to="/" className="mb-3 d-block"><FaArrowLeft /> Back</Link>
            <Content title="Add Post Form">
                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => createPost(values)}
                    initialValues={{
                        title: ''
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="title"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isInvalid={!!errors.title}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.title}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={10}
                                    placeholder="please input your content"
                                    name="content"
                                    value={values.content}
                                    onChange={handleChange}
                                    isInvalid={!!errors.content}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.content}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    )}
                </Formik>
            </Content>
        </>
    )
}

export default AddPost