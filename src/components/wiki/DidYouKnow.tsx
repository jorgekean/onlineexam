import { faCaretRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

// Define the type for the items
type Item = string;

// Define the props interface for the component
interface DidYouKnowProps {
    items: Item[];
}

const DidYouKnow: React.FC<DidYouKnowProps> = ({ items }) => {
    return (
        <Card>
            <Card.Header>
                <h4 className='border-bottom border-2 pb-2'>Did you Know?</h4>
            </Card.Header>
            <Card.Body className='pt-0'>
                <div>
                    {items.map((item, index) => (
                        <div className={`border-bottom border-1 py-2`} key={index}>
                            <FontAwesomeIcon icon={faCaretRight} className="me-1" />{' '}
                            {item}
                        </div>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
}

export default DidYouKnow;