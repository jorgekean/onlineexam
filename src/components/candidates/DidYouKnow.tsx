import { faCaretRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card } from 'react-bootstrap'


const DidYouKnow = () => {
    return (
        <Card>
            <Card.Header>
                <h4 className='border-bottom border-2 pb-2'>Did you Know?</h4>
            </Card.Header>
            <Card.Body className='pt-0'>
                <div>
                    <div className="border-bottom border-1 pb-2">
                        <FontAwesomeIcon icon={faCaretRight} className="me-1" />{' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="border-bottom border-1 py-2">
                        <FontAwesomeIcon icon={faCaretRight} className="me-1" />{' '}
                        Nulla facilisi. Sed tincidunt nisl sed ipsum interdum, at suscipit quam facilisis.
                    </div>
                    <div className="border-bottom border-1 py-2">
                        <FontAwesomeIcon icon={faCaretRight} className="me-1" />{' '}
                        Fusce dapibus ex eget justo venenatis, sit amet bibendum dolor consectetur.
                    </div>
                    <div className="border-bottom border-1 py-2">
                        <FontAwesomeIcon icon={faCaretRight} className="me-1" />{' '}
                        Duis vel dolor dapibus, iaculis sem at, commodo sapien. Aenean vitae quam ex.
                    </div>
                    <div className="py-2">
                        <FontAwesomeIcon icon={faCaretRight} className="me-1" />{' '}
                        Integer vitae elit ut nisl pharetra dictum eget at mauris. Cras nec fermentum eros.
                    </div>
                </div>
            </Card.Body>
        </Card>

    )
}

export default DidYouKnow