import Content from "../../components/Content";
import { Formik } from 'formik';
import { Form, Button } from "react-bootstrap";
import * as yup from 'yup';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost, updatePost } from '../../redux/api';
import { useEffect } from "react";

const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required()
});


const EditPost = () => {
    const { id } = useParams("id");
    const { data } = useSelector((state) => state.post)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(getPost(id))
    },[dispatch])

    const patchPost = async (values) => {
        const data = {
            ...values,
            id : id
        }
        await dispatch(updatePost(data))
        navigate('/')
    }

    return (
        <>
            <Link to="/" className="mb-3 d-block"><FaArrowLeft /> Back</Link>
            <Content title="Edit Post Form">
                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => patchPost(values)}
                    enableReinitialize
                    initialValues={{
                        title: data?.title ?? '',
                        content: data?.content ?? ''
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

export default EditPost