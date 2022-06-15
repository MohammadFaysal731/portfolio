import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();
    return (
        <section className='section'>
            <div className="">
                <h1>  {id}</h1>
            </div>
        </section>
    );
};

export default ProjectDetail;