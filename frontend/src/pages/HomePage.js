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