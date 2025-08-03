import '../css/TitleBar.css';

function TitleBar() {
  return (
    <div className="title-bar">
      <div className="logo">
        <img src="./images/logo.svg" alt="logo" />
      </div>

      <button className="icon-moon">
        <img src="./images/icon-moon.svg" alt="icon-moon" />
      </button>
    </div>
  );
}

export default TitleBar;
