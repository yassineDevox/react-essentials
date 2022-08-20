import PropTypes from 'prop-types';

const ColorComp = ({ color }) => {
  return <> {color}</>
}

function App() {
  // error hooks can't be declared inside if 
  // if (true) {
  //   const [first, setfirst] = useState("second")
  // }
  return (
    <ColorComp />
  );
}

ColorComp.propTypes = {
  color: PropTypes.string.isRequired
};

ColorComp.defaultProps = {
  color: "red"
}

export default App;
