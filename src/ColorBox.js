import React, { Component } from "react";

// First Way to do this:
// export default class ColorBox extends Component {
//   state = {
//     todos: [],
//   };

//   render() {
//     if (this.props.opacity >= 0.2) {
//       return (
//         <div className="color-box" style={{ opacity: this.props.opacity }}>
//           <ColorBox opacity={this.props.opacity - 0.1} />
//         </div>
//       );
//     } else {
//       return null;
//     }
//   }
// }

// Second way to do this:
export default class ColorBox extends Component {
  state = {
    todos: [],
  };

  render() {
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {this.props.opacity >= 0.2 ? (
          <ColorBox opacity={this.props.opacity - 0.1} />
        ) : null}
      </div>
    );
  }
}
