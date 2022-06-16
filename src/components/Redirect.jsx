import React from 'react'
import { connect } from 'react-redux'

export const Redirect = (props) => {
  return (
    <div>Redirect</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Redirect)