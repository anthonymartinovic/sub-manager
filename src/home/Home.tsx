import logo from '../assets/images/logo.png';

const centerPositionLogo: React.CSSProperties = {
  marginTop: '-50px'
};

export default function Home() {
  return (
    <div id="Home" className="container d-flex flex-column align-items-center justify-content-center h-100">
      <img src={logo} alt="Sub Manager" style={centerPositionLogo}></img>
    </div>
  );
}
