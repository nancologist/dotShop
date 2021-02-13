const Home = () => {
    return (
        <div>{props.products.map(prod => (
            // <h3>{prod.name}</h3>
            <img src={prod.imgPath} />
        ))}</div>
    )
};

export default Home;