import React from 'react'
// import PropTypes from 'prop-types'


const Header = ({titulo}) => (
  <header>
    <h1 className="text-center">{ titulo } </h1>
  </header>
);
// Header.prototype = {
//   titulo : PropTypes.func.isRequired
// }

export default Header;