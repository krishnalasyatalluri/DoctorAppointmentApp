import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllCategories } from '../redux/actions/categoryActions';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const [activeCategory, setActiveCategory] = useState(null);
    const history = useHistory();

    useEffect(() => {
        dispatch(asyncGetAllCategories());
    }, [dispatch]);

    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    };

    const handleIssueClick = (issue) => {
        const selectedCategory = categories[activeCategory];
        history.push({
            pathname: '/bookings',
            state: { activeCategory: selectedCategory, issue: issue }
        });
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-3">
                    <div className="list-group">
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
                                                handleIssueClick(issue);
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
