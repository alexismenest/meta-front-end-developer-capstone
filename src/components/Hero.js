import restaurantfood from '../assets/restaurant-food.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container-grid">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
          <a href="/">Reserve a table</a>
        </div>
        <div className="hero-right">
          <img src={restaurantfood} alt="Restaurant food" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
