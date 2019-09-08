import React, { Component, Fragment } from 'react'
import './App.css'
import TimeRemaining from './components/TimeRemaining/TimeRemaining'
import ProgressBar from './components/ProgressBar/ProgressBar'
import ControlPanel from './components/ControlPanel/ControlPanel'
import SideMenu from './components/SideMenu/SideMenu'

class App extends Component {
  state = {
    timeRemaining: 1500,
    intervalLength: 25,
    newInterval: null,
    isRunning: false,
    settingsOpen: false
  }
  timeRunning = () => {
    this.setState(prevState => {
      return {
        timeRemaining: prevState.timeRemaining - 1
      }
    })
  }
  runTime = () => {
    this.interval = setInterval(this.timeRunning, 1000)
    this.setState({ isRunning: true })
  }
  freezeTime = () => {
    clearInterval(this.interval)
    this.setState({ isRunning: false })
  }
  resetTime = () => {
    let totalResetTime = this.state.intervalLength * 60
    this.setState({ timeRemaining: totalResetTime, isRunning: false })
    clearInterval(this.interval)
  }
  openMenu = () => this.setState({ settingsOpen: true })
  closeMenu = () => {
    this.setState({ settingsOpen: false })
  }
  changeInterval = e => {
    // tenhle je pro input
    this.setState({ newInterval: Number(e.target.value) })
  }
  updateInterval = () => {
    // tenhle je pro button
    this.setState(prevState => {
      if (
        !prevState.newInterval ||
        prevState.newInterval <= 0 ||
        prevState.newInterval > 120
      ) {
        alert('Enter any value between 1 and 120')
      } else {
        return {
          intervalLength: prevState.newInterval,
          newInterval: null,
          timeRemaining: prevState.newInterval * 60
        }
      }
    })
  }
  render() {
    return (
      <Fragment>
        <header className="container-fluid bg-dark text-center py-2 mb-5">
          <h1 className="text-white">Pomodorify</h1>
        </header>
        <div className="container bg-light border">
          <TimeRemaining timeLeft={this.state.timeRemaining} />
          <ProgressBar
            int={this.state.intervalLength}
            rem={this.state.timeRemaining}
          />
          <ControlPanel
            isRunning={this.state.isRunning}
            runTime={this.runTime}
            freezeTime={this.freezeTime}
            resetTime={this.resetTime}
            openMenu={this.openMenu}
          />
          <SideMenu
            isOpen={this.state.settingsOpen}
            closeMenu={this.closeMenu}
            interval={this.state.intervalLength}
            changeInterval={this.changeInterval}
            freezeTime={this.freezeTime}
            updateInterval={this.updateInterval}
          />
        </div>
      </Fragment>
    )
  }
}

export default App
