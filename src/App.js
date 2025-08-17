import ProductCard from './Components/ProductCard';
import './App.css';

function App() {

  const productData = [
    {
      id: 1,
      image: '/Images/1_leatherexecbag.jpg',
      name: 'Leather Executive Bag',
      price: 1599,
      description: 'Premium handcrafted Italian leather, built for durability and elegance. Perfect for business or travel.',
      message: 'Clicked the Leather Executive Bag'
    },
    {
      id: 2,
      image: '/Images/2_diamondwatch.jpg',
      name: 'Diamond-Accented Watch',
      price: 3000,
      description: 'A timeless stainless-steel watch with subtle diamond markers — classic luxury on your wrist.',
      message: 'Clicked the Diamond-Accented Watch'
    },
    {
      id: 3,
      image: 'Images/3_scarf.jpg',
      name: 'Silk Scarf',
      price: 599,
      description: 'Made from 100% pure mulberry silk, soft and smooth with a touch of sophistication.',
      message: 'Clicked the Silk Scarf'
    },
    {
      id: 4,
      image: 'Images/4_sunglass.jpg',
      name: 'Designer Sunglasses',
      price: 999,
      description: 'UV-protected lenses with a bold frame design. Luxury fashion that protects your eyes.',
      message: 'Clicked the Designer Sunglasses'
    },
    {
      id: 5,
      image: 'Images/5_pen.jpg',
      name: 'Gold Plated Pen',
      price: 799,
      description: 'A sleek, finely crafted pen that elevates your writing experience with a golden finish.',
      message: 'Clicked the Gold Plated Pen'
    },
    {
      id: 6,
      image: 'Images/6_sweater.jpg',
      name: 'Cashmere Sweater',
      price: 499,
      description: 'Ultra-soft premium cashmere, lightweight yet warm — the definition of comfort and luxury.',
      message: 'Clicked the Cashmere Sweater'
    },
    {
      id: 7,
      image: 'Images/7_perfume.jpg',
      name: 'Luxuria Perfume',
      price: 1200,
      description: 'A long-lasting fragrance blend of oud, amber, and floral notes — elegance in a bottle.',
      message: 'Clicked the Luxuria Perfume'
    },
    {
      id: 8,
      image: 'Images/8_phonecase.jpg',
      name: 'Marble Phone Case',
      price: 450,
      description: 'A protective yet stylish case crafted with a marble-inspired luxury finish.',
      message: 'Clicked the Marble Phone Case'
    },
    {
      id: 9,
      image: 'Images/9_glass.jpg',
      name: 'Crystal Whiskey Glass Set',
      price: 1000,
      description: 'Hand-cut crystal glasses that bring a touch of class to every sip.',
      message: 'Clicked the Crystal Whiskey Glass Set'
    },
    {
      id: 10,
      image: 'Images/10_jewelrybox.jpg',
      name: 'Velvet Jewelry Box',
      price: 300,
      description: 'A soft velvet-lined organizer for your precious jewelry — where luxury meets protection.',
      message: 'Clicked the Velvet Jewelry Box'
    }
  ]



  return (
    <div>
      <header className="Header">
        <div className="Header-content">
          <h1 className="AppName">
            <span className="AppName-earl">Earl</span>
            <span className="AppName-luxe">luxe</span>
          </h1>
          <p className="Tagline">Where Elegance Meets Affordability</p>
        </div>
      </header>
      <h2 className="ShopTitle">🛒 Shop Now!</h2>
      <div className="Card-container">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            onBuy={() => console.log(`Clicked the ${product.name}`)}
          />
        ))}
      </div>
    </div>
  )

  
}

export default App;