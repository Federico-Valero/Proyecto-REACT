import CartWidget from "./CartWidget";

const NavBar = () => {

    const stylenavbar={
        display:"flex",
    }

    return(

        <div style={stylenavbar}>
            <p>GamerThings</p>
            <button>Productos</button>
            <button>Arma tu PC</button>
            <button>Ayuda</button>
            <CartWidget/>
        </div>

    );

};

export default NavBar;