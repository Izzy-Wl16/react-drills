import React, {Component} from 'react'

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg' />
        <div>559</div>
        <div>Conflict</div>
      </div>
    )
  }
}

import React, {Component} from 'react'

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} />
        <div>Error 599</div>
      </div>
    )
  }
}