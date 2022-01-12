const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Swamp Thing (2019)</h1>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    backgroundColor: '#6e6f0e',
                    borderRadius: '12px'
                }}> 
                Fabuła Serialu</a>

                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#6e6f0e',
                    borderRadius: '12px'
                }}>Obsada</a>
            
            </div>
        </nav>
    );
}
 
export default Navbar;