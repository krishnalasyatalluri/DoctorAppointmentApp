// // import { useDispatch, useSelector } from 'react-redux'
// // import { useState, useRef } from 'react'
// // import { asyncCategoryList } from '../redux/actions/homePageActions'

// // import {Card,CardHeader,ListGroup,ListGroupItem} from 'reactstrap'
// // import {useEffect} from 'react'
// // import axios from 'axios'
// // const HomePage = (props) => {
// //     const dispatch = useDispatch()
// //     useEffect(()=>{
// //         axios.get('localhost:3050/api/categories')
// //             .then((res)=>{
// //                 console.log(res.data)
// //             })
// //             .catch((err)=>{
// //                 console.log(err)
// //             })
        
// //     },[])
// //     return (
// //         <div>
// //             <h1>Home page</h1>
// //             <Card
// //                 style={{
// //                     width: '18rem'
// //                 }}
// //             >
// //                 <CardHeader>
// //                     Featured
// //                 </CardHeader>
// //                 <ListGroup flush>
// //                     <ListGroupItem><button>An item</button>
                        
// //                     </ListGroupItem>
// //                     <ListGroupItem>
// //                         A second item
// //                     </ListGroupItem>
// //                     <ListGroupItem>
// //                         And a third item
// //                     </ListGroupItem>
// //                 </ListGroup>
// //             </Card>


// //         </div>
// //     )
// // }
// // export default HomePage
// import '../index.css'
// import { CardTitle, Card, ListGroup, ListGroupItem, CardBody, Button } from 'reactstrap';
// import { useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { asyncCategoryList } from '../redux/actions/categoryActions';
// const CategoryList = (props) => {
//     const dispatch = useDispatch()
//     const categoryList = useSelector((state) => {
//         return state.categoryList 
//     })
//     useEffect(() => {
//         (async () => {
//             dispatch(asyncCategoryList())
//         })()
//     }, [])

//     return (
//         <div className='catContainer'>
//             {categoryList.map((category) => {
//                 return (
//                     <Card
//                         style={{
//                             width: '18rem'
//                         }}
//                         className='catCard'
//                         key={category._id}
//                     >
//                         <CardBody>
//                             <CardTitle tag="h5" className='catTitle'>
//                                 {category.title}
//                             </CardTitle>
//                             {/* <CardText>
//                                 available services
//                             </CardText> */}
//                         </CardBody>
//                         <ListGroup flush >
//                             {categoryList.title.map((cat) => {
//                                 return <ListGroupItem className='services'>
//                                     {cat.title} - Rs {cat.price}/-
//                                 </ListGroupItem>
//                             })}

//                         </ListGroup>
//                         <CardBody>
//                             {/* <CardLink href="#">
//                                 Card Link
//                             </CardLink>
//                             <CardLink href="#">
//                                 Another Card Link
//                             </CardLink> */}
//                             <Button
//                                 color="primary"
//                                 outline
//                             >
//                                 Find Doctor
//                             </Button>
//                         </CardBody>
//                     </Card>
//                 )
//             })}
//         </div>
//     )
// }

// export default CategoryList
import '../index.css'
import CategoryList from '../components/categoryList';
import NavBar from '../components/NavBar';

const HomePage = (props) => {
  return (
    <div>
      <NavBar />
      <CategoryList />
    </div>)
}
export default HomePage