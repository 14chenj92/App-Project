import '../../styles/SearchIcon.css';
import { Button } from 'antd';

const SearchIcon= (props) => {
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

export default SearchIcon;

