import React from "react";
// import { useBox } from '@react-three/cannon';
import { connect } from "react-redux";
import { getPosition } from "../store/position";

class EndZone extends React.Component {
  constructor() {
    super();
    this.zoneRef = React.createRef();
  }

  componentDidMount() {
    this.props.getPosition(this.zoneRef.current.position);
  }

  render() {
    return (
      <mesh ref={this.zoneRef} position={[0, 0, -480]}>
        <boxBufferGeometry attach="geometry" args={[30, 50, 20]} />
        <meshStandardMaterial
          wireframe={false}
          attach="material"
          color="yellow"
          transparent
          opacity={0.6}
        />
      </mesh>
    );
  }
}

const mapDispatch = (dispatch) => ({
  getPosition: (position) => dispatch(getPosition(position)),
});

export default connect(null, mapDispatch)(EndZone);
