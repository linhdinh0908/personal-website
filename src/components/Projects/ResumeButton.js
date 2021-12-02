import { Button } from 'react-bootstrap';
import React from 'react'
import Resume from '../../assets/Resume.pdf';


function ResumeButton() {
    return (
        <div>
            <a href={Resume} download ="Resume.pdf">
                <Button variant ="primary" size="lg">View My Resume</Button>
            </a>           
        </div>
    )
}

export default ResumeButton
