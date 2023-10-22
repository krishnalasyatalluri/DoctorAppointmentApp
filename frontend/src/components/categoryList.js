// // // // // // // // // import '../index.css'
// // // // // // // // // import NavBar from './NavBar';
// // // // // // // // // import {  Card, ListGroup, ListGroupItem,CardHeader } from 'reactstrap';
// // // // // // // // // import { useEffect } from 'react';
// // // // // // // // // import { useDispatch, useSelector } from 'react-redux'
// // // // // // // // // import { asyncGetAllCategories } from '../redux/actions/categoryActions';
// // // // // // // // // const CategoryList = (props) => {
// // // // // // // // //     const dispatch = useDispatch()
// // // // // // // // //     const categories = useSelector((state) => {
// // // // // // // // //         return state.categories
// // // // // // // // //     })
// // // // // // // // //     useEffect(() => {
// // // // // // // // //         (async () => {
// // // // // // // // //             dispatch(asyncGetAllCategories())
// // // // // // // // //         })()
// // // // // // // // //     }, [])

// // // // // // // // //     return (
// // // // // // // // //         <div>
// // // // // // // // //             <Card
// // // // // // // // //                 style={{
// // // // // // // // //                     width: '18rem'
// // // // // // // // //                 }}
// // // // // // // // //             >
// // // // // // // // //                 <CardHeader>
// // // // // // // // //                     {categories.map((cat)=>{
// // // // // // // // //                         return cat.title
// // // // // // // // //                     })}
// // // // // // // // //                 </CardHeader>
// // // // // // // // //                 {/* <ListGroup flush>
// // // // // // // // //                     <ListGroupItem>
// // // // // // // // //                         {
// // // // // // // // //                             categories.healthIssues.map((issues)=>{
// // // // // // // // //                                 return <li key={issues}>{issues}</li>
// // // // // // // // //                             })
// // // // // // // // //                         }
// // // // // // // // //                     </ListGroupItem>
// // // // // // // // //                 </ListGroup> */}
// // // // // // // // //             </Card>
// // // // // // // // //         </div>
// // // // // // // // //     )
// // // // // // // // // }

// // // // // // // // // export default CategoryList
// // // // // // // // import React, { useEffect } from 'react';
// // // // // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // // // // import { asyncGetAllCategories } from '../redux/actions/categoryActions';
// // // // // // // // const CategoryList = (props) => {
// // // // // // // //     const dispatch = useDispatch();
// // // // // // // //     const categories = useSelector((state) => state.categories);

// // // // // // // //     useEffect(() => {
// // // // // // // //         (async () => {
// // // // // // // //             dispatch(asyncGetAllCategories());
// // // // // // // //         })();
// // // // // // // //     }, [])

// // // // // // // //     return (
// // // // // // // //         <div>
// // // // // // // //             <div class="d-flex align-items-start">
// // // // // // // //                 <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
// // // // // // // //                     {categories.map((cat)=>{
// // // // // // // //                         return <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{cat.title}</button>
// // // // // // // //                     })}

// // // // // // // //                     {/* <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
// // // // // // // //                     <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
// // // // // // // //                     <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button> */}
// // // // // // // //                 </div>

// // // // // // // //                 <div class="tab-content" id="v-pills-tabContent">
// // // // // // // //                     {categories.map((cat)=>{
// // // // // // // //                         return <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{cat.healthIssues.title}</div>
// // // // // // // //                     })}

// // // // // // // //                     {/* <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
// // // // // // // //                     <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
// // // // // // // //                     <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </div>




// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default CategoryList;
// // // // // // // // CategoryList.js
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // // // import { asyncGetAllCategories } from '../redux/actions/categoryActions';
// // // // // // // import '../index.css'; // Import the CSS file


// // // // // // // const CategoryList = () => {
// // // // // // //     const dispatch = useDispatch();
// // // // // // //     const categories = useSelector((state) => state.categories);
// // // // // // //     const [activeCategory, setActiveCategory] = useState(null);

// // // // // // //     useEffect(() => {
// // // // // // //         (async () => {
// // // // // // //             dispatch(asyncGetAllCategories());
// // // // // // //         })();
// // // // // // //     }, []);

// // // // // // //     const handleCategoryClick = (index) => {
// // // // // // //         setActiveCategory(index);
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <div>
// // // // // // //             <div class="d-flex align-items-start">
// // // // // // //                 <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
// // // // // // //                     {categories.map((cat,i)=>{
// // // // // // //                         return <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" key={i} onClick={()=>{
// // // // // // //                             handleCategoryClick(i)}}>{cat.title}</button>
// // // // // // //                     })}

// // // // // // //                 </div>
// // // // // // //                 <div class="tab-content" id="v-pills-tabContent">
// // // // // // //                     {categories.map((cat)=>{
// // // // // // //                         return <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{cat.healthIssues.title}</div>
// // // // // // //                     })}
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default CategoryList;
// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // // import { asyncGetAllCategories } from '../redux/actions/categoryActions';
// // // // // // import '../index.css'; // Import the CSS file

// // // // // // const CategoryList = () => {
// // // // // //     const dispatch = useDispatch();
// // // // // //     const categories = useSelector((state) => state.categories);
// // // // // //     const [activeCategory, setActiveCategory] = useState(null);

// // // // // //     useEffect(() => {
// // // // // //         (async () => {
// // // // // //             dispatch(asyncGetAllCategories());
// // // // // //         })();
// // // // // //     }, []);

// // // // // //     const handleCategoryClick = (index) => {
// // // // // //         setActiveCategory(index);
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="container mt-4">
// // // // // //             <div className="row">
// // // // // //                 <div className="col-3">
// // // // // //                     <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
// // // // // //                         {categories.map((cat, i) => (
// // // // // //                             <button
// // // // // //                                 className={`nav-link ${i === activeCategory ? 'active' : ''}`}
// // // // // //                                 id={`v-pills-${cat.title}-tab`}
// // // // // //                                 data-bs-toggle="pill"
// // // // // //                                 data-bs-target={`#v-pills-${cat.title}`}
// // // // // //                                 type="button"
// // // // // //                                 role="tab"
// // // // // //                                 aria-controls={`v-pills-${cat.title}`}
// // // // // //                                 aria-selected={i === activeCategory}
// // // // // //                                 key={i}
// // // // // //                                 onClick={() => {
// // // // // //                                     handleCategoryClick(i);
// // // // // //                                 }}
// // // // // //                             >
// // // // // //                                 {cat.title}
// // // // // //                             </button>
// // // // // //                         ))}
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //                 <div className="col-9">
// // // // // //                     <div className="tab-content" id="v-pills-tabContent">
// // // // // //                         {categories.map((cat, i) => (
// // // // // //                             <div
// // // // // //                                 className={`tab-pane fade ${i === activeCategory ? 'show active' : ''}`}
// // // // // //                                 id={`v-pills-${cat.title}`}
// // // // // //                                 role="tabpanel"
// // // // // //                                 aria-labelledby={`v-pills-${cat.title}-tab`}
// // // // // //                                 key={i}
// // // // // //                             >
// // // // // //                                 {cat.healthIssues.title}
// // // // // //                             </div>
// // // // // //                         ))}
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default CategoryList;


// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { useDispatch, useSelector } from 'react-redux';
// // // // // import { asyncGetAllCategories } from '../redux/actions/categoryActions';
// // // // // import '../index.css'; // Import the CSS file
// // // // // import { Button } from 'reactstrap'
// // // // // import {Route} from 'react-router-dom'
// // // // // import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// // // // // const CategoryList = (props) => {
// // // // //     const dispatch = useDispatch();
// // // // //     const categories = useSelector((state) => state.categories);
// // // // //     const [activeCategory, setActiveCategory] = useState(null);

// // // // //     useEffect(() => {
// // // // //         (async () => {
// // // // //             dispatch(asyncGetAllCategories());
// // // // //         })();
// // // // //     }, []);

// // // // //     const handleCategoryClick = (index) => {
// // // // //         setActiveCategory(index);
// // // // //     };
// // // // //     // const redirect=()=>{
// // // // //     //     props.history.push('/doctors')
// // // // //     // }
// // // // //     const handleClick=(activeCategory)=>{
// // // // //         history.push('/doctors')
// // // // //     }

// // // // //     return (
// // // // //         <div className="container mt-4">
// // // // //             <div className="row">
// // // // //                 <div className="col-3">
// // // // //                     <div className="list-group">
// // // // //                         {categories.map((cat, i) => (
// // // // //                             <button
// // // // //                                 className={`list-group-item list-group-item-action ${i === activeCategory ? 'active' : ''}`}
// // // // //                                 key={i}
// // // // //                                 onClick={() => {
// // // // //                                     handleCategoryClick(i);
// // // // //                                 }}
// // // // //                             >
// // // // //                                 {cat.title}
// // // // //                             </button>
// // // // //                         ))}
// // // // //                     </div>
// // // // //                 </div>
// // // // //                 <div className="col-9">
// // // // //                     {activeCategory !== null && (
// // // // //                         <div className="tab-pane fade show active">
// // // // //                             <h4>{categories[activeCategory].title}</h4>
// // // // //                             <ul>
// // // // //                                 {categories[activeCategory].healthIssues.map((issue, index) => (

// // // // //                                     <li key={index}>
// // // // //                                         <Button
// // // // //                                             color="primary"
// // // // //                                             outline
// // // // //                                             // onClick={redirect}
// // // // //                                             onClick={()=>{
// // // // //                                                 handleClick(activeCategory)
// // // // //                                             }}
// // // // //                                         >
// // // // //                                             {issue.title} - Rs. {issue.price}
// // // // //                                         </Button>

// // // // //                                         {/* <button>{issue.title}</button> - Rs. {issue.price} */}
// // // // //                                     </li>
// // // // //                                 ))}
// // // // //                             </ul>
// // // // //                         </div>
// // // // //                     )}
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default CategoryList;
// // // // import React, { useEffect, useState } from 'react';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import { asyncGetAllCategories } from '../redux/actions/categoryActions';
// // // // import '../index.css'; // Import the CSS file
// // // // import { Button } from 'reactstrap';
// // // // import { useHistory } from 'react-router-dom';

// // // // const CategoryList = () => {
// // // //     const dispatch = useDispatch();
// // // //     const categories = useSelector((state) => state.categories);
// // // //     const [activeCategory, setActiveCategory] = useState(null);
// // // //     const history = useHistory(); // Access the history object using useHistory hook

// // // //     useEffect(() => {
// // // //         (async () => {
// // // //             dispatch(asyncGetAllCategories());
// // // //         })();
// // // //     }, [dispatch]);

// // // //     const handleCategoryClick = (index) => {
// // // //         setActiveCategory(index);
// // // //     };

// // // //     const handleClick = (activeCategoryIndex) => {
// // // //         // Retrieve the selected category using activeCategoryIndex
// // // //         const selectedCategory = categories[activeCategoryIndex];

// // // //         // Redirect to the next page with necessary data (if needed)
// // // //         history.push({
// // // //             pathname: '/doctors',
// // // //             state: { selectedCategory } // Pass selected category as state if needed on the next page
// // // //         });
// // // //     };

// // // //     return (
// // // //         <div className="container mt-4">
// // // //             <div className="row">
// // // //                 <div className="col-3">
// // // //                     <div className="list-group">
// // // //                         {categories.map((cat, i) => (
// // // //                             <button
// // // //                                 className={`list-group-item list-group-item-action ${i === activeCategory ? 'active' : ''}`}
// // // //                                 key={i}
// // // //                                 onClick={() => {
// // // //                                     handleCategoryClick(i);
// // // //                                     handleClick(i); // Call handleClick function when category is clicked
// // // //                                 }}
// // // //                             >
// // // //                                 {cat.title}
// // // //                             </button>
// // // //                         ))}
// // // //                     </div>
// // // //                 </div>
// // // //                 {/* ... */}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // export default CategoryList;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { asyncGetAllCategories } from '../redux/actions/categoryActions';
// import '../index.css'; // Import the CSS file
// import { Button } from 'reactstrap';
// import { useHistory } from 'react-router-dom';

// const CategoryList = () => {
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.categories);
//     const [activeCategory, setActiveCategory] = useState(null);
//     const history = useHistory(); // Access the history object using useHistory hook

//     useEffect(() => {
//         (async () => {
//             dispatch(asyncGetAllCategories());
//         })();
//     }, [dispatch]);

//     const handleCategoryClick = (index) => {
//         setActiveCategory(index);
//     };

//     const handleIssueClick = (issue) => {
//         // Redirect to the next page with the selected category and issue
        
//         history.push({
//             pathname:'/doctors',
//             state:{activeCategory:categories[activeCategory],
//                 issue:issue}
//             })
//         // /${activeCategory.title}/${issue.title}`);
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-3">
//                     <div className="list-group" >
//                         {categories.map((cat, i) => (
//                             <button
//                                 className={`list-group-item list-group-item-action ${i === activeCategory ? 'active' : ''}`}
//                                 key={i}
//                                 onClick={() => {
//                                     handleCategoryClick(i);
//                                 }}
//                             >
//                                 {cat.title}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-9">
//                     {activeCategory !== null && (
//                         <div className="tab-pane fade show active">
//                             <h4>{categories[activeCategory].title}</h4>
//                             <ul>
//                                 {categories[activeCategory].healthIssues.map((issue, index) => (
//                                     <li key={index}>
//                                         <Button
//                                             color="primary"
//                                             outline
//                                             onClick={() => {
//                                                 handleIssueClick( issue);
//                                             }}
//                                         >
//                                             {issue.title} - Rs. {issue.price}
//                                         </Button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CategoryList;
// // // import { useSelector } from "react-redux"
// // // import { useState, useEffect } from "react"
// // // import { useDispatch } from "react-redux"
// // // import { asyncGetAllCategories } from "../redux/actions/categoryActions"
// // // const CategoryList = (props) => {
// // //     const [activeCategory, setActiveCategory] = useState(null)
// // //     const dispatch = useDispatch()
// // //     const categories = useSelector((state) => state.categories)
// // //     useEffect(() => {
// // //         (async () => {
// // //             dispatch(asyncGetAllCategories())

// // //         })()

// // //     }, [dispatch])
// // //     const handleCategoryClick = (i) => {
// // //         setActiveCategory(i)
// // //     }
// // //     return (
// // //         <div>
// // //             <div class="d-flex align-items-start">
// // //                 <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
// // //                     {categories.map((cat, i) => {
// // //                         return <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" key={cat._id} onClick={() => {
// // //                             handleCategoryClick(i)
// // //                         }}>{cat.title}</button>
// // //                     })}
// // //                 </div>

// // //                 <div class="tab-content" id="v-pills-tabContent">
// // //                     {categories[activeCategory].healthIssues.map((issue, i) => {
// // //                         return (

// // //                             <div>

// // //                                 <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" key={i}>{issue.title} - Rs. {issue.price}</div>
// // //                             </div>
// // //                         )

// // //                     })}




// // //                 </div>
// // //             </div >
// // //         // </div >
// // //     )
// // // }
// // // export default CategoryList
// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { asyncGetAllCategories } from '../redux/actions/categoryActions';
// // import '../index.css'; // Import the CSS file

// // const CategoryList = () => {
// //     const dispatch = useDispatch();
// //     const categories = useSelector((state) => state.categories);
// //     const [activeCategory, setActiveCategory] = useState(null);

// //     useEffect(() => {
// //         (async () => {
// //             dispatch(asyncGetAllCategories());
// //         })();
// //     }, []);

// //     const handleCategoryClick = (index) => {
// //         setActiveCategory(index);
// //     };

// //     return (
// //         <div className="container mt-4">
// //             <div className="row">
// //                 <div className="col-3">
// //                     <div className="list-group">
// //                         {categories.map((cat, i) => (
// //                             <button
// //                                 className={`list-group-item list-group-item-action ${i === activeCategory ? 'active' : ''}`}
// //                                 key={i}
// //                                 onClick={() => {
// //                                     handleCategoryClick(i);
// //                                 }}
// //                             >
// //                                 {cat.title}
// //                             </button>
// //                         ))}
// //                     </div>
// //                 </div>
// //                 <div className="col-9">
// //                     {activeCategory !== null && (
// //                         <div className="tab-pane fade show active">
// //                             <h4>{categories[activeCategory].title}</h4>
// //                             <ul>
// //                                 {categories[activeCategory].healthIssues.map((issue, index) => (
// //                                     <li key={index}>{issue}</li>
// //                                 ))}
// //                             </ul>
// //                         </div>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default CategoryList;
// CategoryList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllCategories } from '../redux/actions/categoryActions';
import '../index.css'; // Import the CSS file

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const [activeCategory, setActiveCategory] = useState(0); // Default active category index

    useEffect(() => {
        (async () => {
            dispatch(asyncGetAllCategories());
        })();
    }, []);

    return (
        <div className="container mt-5">
            <ul className="nav nav-pills">
                {categories.map((cat, index) => (
                    <li className="nav-item" key={index}>
                        <button
                            className={`nav-link ${activeCategory === index ? 'active' : ''}`}
                            onClick={() => setActiveCategory(index)}
                        >
                            {cat.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="tab-content mt-3">
                {categories.map((cat, index) => (
                    <div
                        className={`tab-pane fade ${activeCategory === index ? 'show active' : ''}`}
                        key={index}
                    >
                        <ul>
                            {cat.healthIssues.map((issue, i) => (
                                <li key={i}>{issue}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;

