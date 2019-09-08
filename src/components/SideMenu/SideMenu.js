import React from 'react'
import './SideMenu.css'

const sideMenu = props => {
  let classes = ['side-menu', 'bg-secondary', 'p-2']
  classes.push(props.isOpen ? 'open' : 'close')
  return (
    <div className={classes.join(' ')}>
      <div className="menu-h">
        <p>SETTINGS</p>
        <i className="fas fa-times" onClick={props.closeMenu} />
      </div>
      <label htmlFor="interval" className="label">
        Change interval (min)
      </label>
      <input
        type="text"
        className="form-control"
        onChange={e => {
          props.changeInterval(e)
          props.freezeTime()
        }}
        placeholder="Enter new interval..."
      />
      <button className="submitBtn" onClick={props.updateInterval}>
        Confirm
      </button>
      <div className="credentials">
        <p>Built with React</p>
        <i className="fab fa-react" />
        <p className="copyright">&copy; 2019 Pavel Srom</p>
      </div>
    </div>
  )
}

export default sideMenu
