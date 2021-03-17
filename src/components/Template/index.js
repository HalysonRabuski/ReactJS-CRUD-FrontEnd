import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

function Template({ component, title, subtitle }) {
  return (
    // <div className="col-12 container">
    //   <TopBar />
    //   <div className="d-flex">
    //     <Sidebar />
    <div className="component">
      <h4 className="mt-4 title">{title}</h4>
      <p className="ml-3 subtitle">{subtitle}</p>
      {component}
    </div>
    //   </div>
    // </div>
  )
}

Template.propTypes = {
  component: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Template
