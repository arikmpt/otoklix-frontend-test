import { useEffect } from 'react';
import Content from '../../components/Content';
import PostList from './PostList';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts, deletePost } from '../../redux/api';

const columns = [
  "#","Title","Publish At","Created At","Action"
]


const PostPage = () => {
    
    const { datas, message, error } = useSelector((state) => state.post)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts())
    },[dispatch])

    const onDelete = (id) => {
      dispatch(deletePost(id))
    }

    return (
      <>
        {message && (
          <div className={`alert alert-${error ? 'danger' : 'success'}`}>
            <p className="mb-0">
              {message}
            </p>
          </div>
        )}
        <Content title="Post List Data" action={<Link to="/add" className="btn btn-primary">Add New Post</Link>}>
          <PostList columns={columns} fields={datas} onDelete={onDelete}/>
        </Content>
      </>
    );
}
  
export default PostPage;
  