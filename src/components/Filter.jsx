import '../css/Filter.css';
import Button from './Button';

function Filter() {
  return (
    <div className="filter-section">
      <h2>Extensions List</h2>
      <div>
        <Button name={'All'} />
        <Button name={'Active'} />
        <Button name={'Inactive'} />
      </div>
    </div>
  );
}

export default Filter;
