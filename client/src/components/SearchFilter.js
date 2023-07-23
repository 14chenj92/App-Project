import '../styles/SearchFilter.css';

const SearchFilter= (props) => {
    return (
      <>
  <div class="searchCard">
  <div className="imgIcon">
    <img src={props.icon} alt="" className="searchIcon"/>
  </div>
    <h4>{props.activity}</h4>
    <p>{props.description}</p>
  </div>
    </>
    )
}

export default SearchFilter;
