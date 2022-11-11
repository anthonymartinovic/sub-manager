import Welcome from '../ui/atoms/Welcome';

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

const user1: User = {
  firstName: 'Tony',
  lastName: 'Martin'
}

const element = (
  <h1 className="mb-4">
    Hello, {formatName(user1)}
  </h1>
);

const element2 = <Welcome name="Tony Martin 2" />;

function manyWelcomes() {
  const welcomes = [];

  for (let i = 0; i < 3; i++) {
      welcomes.push(<Welcome key={i} name={`Tony${i}`} />)
  }

  return <div>{welcomes}</div>;
}

function Home(props: any) {
  return (
    <div id="Home">
      {element}
      {element2}
      {manyWelcomes()}
      <button type="button" className="btn btn-danger">{props.buttonText}</button>
    </div>
  );
}

export default Home;
