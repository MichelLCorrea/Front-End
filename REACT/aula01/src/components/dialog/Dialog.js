import React from 'react'

import './Dialog.css'

export class Dialog extends React.Component {

  render() {
    if(this.props.visible) {
      return (
        <div className="dialog">
          <div className="dialog-container">
            <div className="header">
              <p>Dialog</p>
              <p className="close" onClick={this.props.onClose}>Fechar</p>
            </div>

            <div className="content">
              {this.props.children}
            </div>

            <div className="footer">
              {this.props.footer}
            </div>
          </div>
        </div>
      )
    }
    return null
  }
}