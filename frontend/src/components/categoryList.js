

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllCategories } from '../redux/actions/categoryActions';
import '../index.css'; // Import the CSS file
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const [activeCategory, setActiveCategory] = useState(null);
    const history = useHistory(); // Access the history object using useHistory hook

    useEffect(() => {
        (async () => {
            dispatch(asyncGetAllCategories());
        })();
    }, [dispatch]);

    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    };

    const handleIssueClick = (issue) => {
        // Redirect to the next page with the selected category and issue
        
        history.push({
            pathname:'/doctors',
            state:{activeCategory:categories[activeCategory],
                issue:issue}
            })
        // /${activeCategory.title}/${issue.title}`);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-3">
                    <div className="list-group" >
                        {categories.map((cat, i) => (
                            <button
                                className={`list-group-item list-group-item-action ${i === activeCategory ? 'active' : ''}`}
                                key={i}
                                onClick={() => {
                                    handleCategoryClick(i);
                                }}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-9">
                    {activeCategory !== null && (
                        <div className="tab-pane fade show active">
                            <h4>{categories[activeCategory].title}</h4>
                            <ul>
                                {categories[activeCategory].healthIssues.map((issue, index) => (
                                    <li key={index}>
                                        <Button
                                            color="primary"
                                            outline
                                            onClick={() => {
                                                handleIssueClick( issue);
                                            }}
                                        >
                                            {issue.title} - Rs. {issue.price}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
// import { useSelector } from "react-redux"
// import { useState, useEffect } from "react"
// import { useDispatch } from "react-redux"
// import { asyncGetAllCategories } from "../redux/actions/categoryActions"
// const CategoryList = (props) => {
//     const [activeCategory, setActiveCategory] = useState(null)
//     const dispatch = useDispatch()
//     const categories = useSelector((state) => state.categories)
//     useEffect(() => {
//         (async () => {
//             dispatch(asyncGetAllCategories())

//         })()

//     }, [dispatch])
//     const handleCategoryClick = (i) => {
//         setActiveCategory(i)
//     }
//     return (
//         <div>
//             <div class="d-flex align-items-start">
//                 <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//                     {categories.map((cat, i) => {
//                         return <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" key={cat._id} onClick={() => {
//                             handleCategoryClick(i)
//                         }}>{cat.title}</button>
//                     })}
//                 </div>

//                 <div class="tab-content" id="v-pills-tabContent">
//                     {categories[activeCategory].healthIssues.map((issue, i) => {
//                         return (

//                             <div>

//                                 <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" key={i}>{issue.title} - Rs. {issue.price}</div>
//                             </div>
//                         )

//                     })}




//                 </div>
//             </div >
//         // </div >
//     )
// }
// export default CategoryList