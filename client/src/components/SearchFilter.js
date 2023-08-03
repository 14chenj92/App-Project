import '../styles/SearchFilter.css';
import { Button } from 'antd';

const SearchFilter= (props) => {
    return (
      <>
  <Button className="searchCard">
  <div className="imgIcon">
    <img src={props.icon} alt="" className="searchIcon"/>
  </div>
    <h4>{props.activity}</h4>
    <p>{props.description}</p>
  </Button>
    </>
    )
}

export default SearchFilter;

