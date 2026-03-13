

const Navigation = () => {
  return (
   <nav>
        <div className="logo">
          <img src="/brand_logo.png" alt="logo" style={{ width : '85px', height: '45px'}}/>
        </div>

        <ul>
          <li href = "#">Menu</li>
          <li href = "#">Location</li>
          <li href = "#">About</li>
          <li href = "#">Contact</li>
        </ul>

        <button>login</button>
      </nav>
  )
}

export default Navigation