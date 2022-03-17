import { Table, Button } from "react-bootstrap"
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import { formatDateTime } from "../../utils/formatDateTime";
import { Link } from 'react-router-dom';

const PostList = ({ columns, fields, onDelete }) => {
    return (
        <Table bordered>
            <thead>
                <tr>
                    {columns.map( (v, i) => (
                        <th key={i}>{v}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {fields.map((v, i) => (
                    <tr key={v.id}>
                        <td>{i + 1}</td>
                        <td>{v.title}</td>
                        <td>{formatDateTime(v.published_at)}</td>
                        <td>{formatDateTime(v.created_at)}</td>
                        <td>
                            <Link to={`/edit/${v.id}`} className="btn btn-sm btn-info"><FaPencilAlt /></Link>
                            <Button variant="danger" size="sm" onClick={() => onDelete(v.id)}>
                                <FaTrashAlt />    
                            </Button> 
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

PostList.propTypes = {
    columns: PropTypes.array.isRequired,
    fields: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default PostList