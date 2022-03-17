import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types';

const Content = ({title, children, action}) => {
    return (
      <>
        <Card>
            <Card.Header>
                <div className="d-flex justify-content-between">
                    <Card.Title>
                        {title}    
                    </Card.Title>
                    {action}
                </div>
            </Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
      </>
    );
}

Content.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.element,
    children: PropTypes.element.isRequired
};
  
export default Content;

