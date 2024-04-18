import React from 'react'

const Navbar = () => {
  return (
    <header class="header">
    <a href="#" class="logo"> Portfolio</a>
    <nav class="navbar">
        <a href="#" style="--i:1" class="active">Home</a>
        <a href="#" style="--i:2">About</a>
        <a href="#" style="--i:3">Skills</a>
        <a href="#" style="--i:4">Portfolio</a>
        <a href="#" style="--i:5">Contact</a>
      
    </nav>
</header> 
  )
}

export default Navbar