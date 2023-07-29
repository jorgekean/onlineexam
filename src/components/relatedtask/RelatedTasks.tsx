import { faCaretRight, faCloudArrowDown, faCloudArrowUp, faFileExport, faGreaterThan, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


interface RelatedTasksProps {
    children?: ReactNode;
}

const RelatedTasks: React.FC<RelatedTasksProps> = ({ children }) => {
    return (
        <Card>
            <Card.Header>
                <h4 className='border-bottom border-2 pb-2'>Related Tasks</h4>
            </Card.Header>
            <Card.Body className='pt-0'>
                <div>
                    {children ? (
                        <div>
                            {children}
                        </div>
                    ) :
                        <>
                            <div className="border-bottom pb-2">
                                <FontAwesomeIcon size='2x' icon={faCloudArrowUp} style={{ marginRight: '8px' }} />{' '}
                                <Link to={''} className=''>Import Candidates</Link>
                            </div>
                            <div className="border-bottom py-2">
                                <FontAwesomeIcon size='2x' icon={faCloudArrowDown} style={{ marginRight: '8px' }} />{' '}
                                <Link to={''}>Export your data</Link>
                            </div>
                        </>
                    }
                </div>
            </Card.Body>
        </Card>
    );
}

export default RelatedTasks;