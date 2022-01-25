import {Button} from 'react-bootstrap';
import React, {useContext, useState, useEffect} from 'react';

const Pagination = ({pages, setCurrentPage, totalEmployees, currentEmployees}) => {

    const numOfPages = [];

    for (let i=1; i<=pages; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage]);

    return(
        <div className="clearfix">
            <div className="hint-text">
                Showing <b>{
                        (currentButton === 1)?
                        currentEmployees
                        :
                        (currentButton === numOfPages.length)?
                        ((currentButton - 1) * 10 + 1) + " to " + totalEmployees
                        :
                        ((currentButton - 1) * currentEmployees + 1) + " to " + currentButton * currentEmployees
                }</b> out of <b>{totalEmployees}</b> entries
            </div>
            <ul className="pagination">
                <li className={`$if{currentButton === 1 ? 'page-item disabled' : 'page-item'}`}>
                    <a href="#!" onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev-1)} className="page-link">
                        Previous
                    </a>
                </li>

                {numOfPages.map((page, index) => {
                    return(
                        <li key={index} className={`$if{currentButton === page ? 'page-item active' : 'page-item'}`}>
                            <a href="#!" className="page-link" onClick={() => setCurrentButton(page)}>{page}</a>
                        </li>
                    )
                })}

                <li className={`$if{currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}>
                    <a href="#!" onClick={() => setCurrentButton((next) => next === numOfPages.length ? next : next+1)} className="page-link">
                        Next
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;

{/* <li className="page-item disabled"><a href="#!" className="page-link">Previous</a></li>
<li className="page-item"><a href="#!" className="page-link">1</a></li>
<li className="page-item active"><a href="#!" className="page-link">2</a></li>
<li className="page-item"><a href="#!" className="page-link">3</a></li>
<li className="page-item"><a href="#!" className="page-link">Next</a></li> */}