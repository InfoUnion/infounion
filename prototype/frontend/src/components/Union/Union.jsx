import {useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import unions from '../../assets/data/unions';

function Union() {
    const location = useLocation();
    const {u} = location.state;
    useEffect(() => {console.log(u)}, []);
    return (
        <div>
        <div><h1>{u.union.name}</h1>
        <h2>Founded in {u.union.foundingDate}</h2></div>
        <br/><p>Website: <a href={u.union.sameAs} target="_blank">{u.union.sameAs}</a></p>
        <p>Number of Employees: {u.union.numberOfEmployees}</p>
        <p>Description: {u.union.description}</p>
        </div>
    );
}

export default Union;