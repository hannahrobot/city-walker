import React from 'react';

class NoPermission extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="title">
            <h1>Please allow use of device microphone.</h1>
          </div>
        </div>
      </>
    );
  }
}

export default NoPermission;
