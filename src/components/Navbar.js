import React from 'react'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">UGN</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.n1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Log in</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggletheme} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode==="light"?'dark':'light'}</label>
</div>
    </div>
  </div>
</nav>

    <br />

      <h1>Welcome TO TextCase Converter</h1>


    </div>
  )
}

// Navbar.propTypes = {n1 : PropTypes.string}
// Navbar.defaultProps = {n1 : 'Uttam'}
