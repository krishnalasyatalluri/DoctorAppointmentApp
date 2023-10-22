
// import '../index.css'
// import { Button } from 'reactstrap'
// const LogoutPage = (props) => {
//     const redirectOne=()=>{
//         localStorage.removeItem('token')
//         localStorage.removeItem('role')
//         props.history.push('/home')
//     }
//     const redirectTwo=()=>{
//         props.history.push('/home')
//     }
//     return (
//         <div>
//             <h1 className="aboutUsHeading">Exit Here</h1>
//             <div className="aboutUsContainer">
//                 <div className="boxContainer">
//                     <div className="textarea">
//                         <p className='logout'>
//                             Are you sure?
//                         </p>
//                         <Button
//                             color="primary"
//                             outline
//                             onClick={redirectOne}
//                         >
//                             Yes !
//                         </Button>
                        
//                         <Button
//                             style={{marginLeft:"20px",paddingLeft:"20px",paddingRight:"20px"}}
//                             color="primary"
//                             outline
//                             onClick={redirectTwo}
//                         >
//                             No
//                         </Button>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default LogoutPage
import React from 'react';
import { Button } from 'reactstrap';
import '../index.css';

const LogoutPage = (props) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        props.history.push('/home');
    };

    const handleCancel = () => {
        props.history.push('/home');
    };

    return (
        <div className="logout-container">
            <h1 className="logout-heading">Are you sure to exit?</h1>
            <div className="logout-content">
                <div className="logout-box">
                    <div className="logout-textarea">
                        <p className="logout-message">Are you sure?</p>
                        <Button color="primary" className="logout-btn" onClick={handleLogout}>
                            Yes!
                        </Button>
                        <Button color="secondary" className="logout-btn" onClick={handleCancel}>
                            No
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutPage;
