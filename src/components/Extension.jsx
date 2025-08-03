import Button from './Button';

function Extension({ name }) {
  return (
    <div>
      {name}
      <img src="./images/logo-devlens.svg" alt="logo-devlens" />
      <p>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo
        vel maleficia?
      </p>
      <Button name={'Remove'} />
    </div>
  );
}

export default Extension;
