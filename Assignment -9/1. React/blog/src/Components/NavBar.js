const NavBar = () => {
    let name = "john";

    return (
        <div className ="nav">
            <nav className ="nav-bar">
                <ul>
                    <li><a href ="#">Home</a></li>
                    <li><a href ="#">About</a></li>
                    <li><a href ="#">Portfolio</a></li>
                    <li><a href ="#">Services</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;