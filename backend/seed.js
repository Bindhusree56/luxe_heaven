require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: "Giorgio Armani", category: "sunglasses", price: 24999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344125/Lunetterie_G%C3%A9n%C3%A9rale_Eyewear_Campaign__Fashion_photography._Vintage_Aesthetic._Sunglasses_Made_in_Japan._Fashion_lookbook_jjmiqf.jpg", description: "Classic Italian craftsmanship meets modern design in these iconic Armani sunglasses." },
  { name: "Sotirio Bulgari", category: "sunglasses", price: 32999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344124/download_1_n09egv.jpg", description: "Exquisite Roman elegance with signature serpenti details and premium UV protection." },
  { name: "Oakley Wraps", category: "sunglasses", price: 18999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344129/%D0%A1%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B0_%D0%BE%D1%87%D0%BA%D0%BE%D0%B2_%EF%B8%8F_Idol_Production_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_m6c4cz.jpg", description: "Sport-inspired design with cutting-edge lens technology for maximum performance." },
  { name: "TomFord", category: "sunglasses" , price : 17999, image:"https://res.cloudinary.com/dv1cjngnl/image/upload/v1763396985/5c7bdded1ee07b0ef7721e625800ac36_okyi3r.jpg" , description: "A bold fusion of urban elegance and cutting-edge craftsmanship."},
  {name: "COTIA Fashion", category: "sunglasses", price: 15999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344125/download_synvm6.jpg", description: "Contemporary fashion-forward frames that make a bold statement." },
  {name: "Velorian Retro Shades", category: "sunglasses", price: 34292, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763396929/4730b90871a9c1eef936925d46c16429_z6r46v.jpg", description: "Inspired by vintage Hollywood glamour." },
  {name: "Eclipse Shadow Frames", category: "sunglasses", price: 23897, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763396958/6f56e93d7401c237ae1eb4fb7e408cde_oruwax.jpg", description: "Engineered with polarized optics." },
  {name: "Astra Nova Polarized", category: "sunglasses", price: 77689, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763396914/e1e6cc1b7135f1332b60a14c52d34886_xh4h41.jpg", description: "Architectural precision meets luxury." },
  { name: "LOEWE Puzzle Bag", category: "handbags", price: 189999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350613/I_m_a_Stylist_and_I_Think_These_Are_the_Designer_Bags_Worth_Buying_hbrlkl.jpg", description: "Iconic Spanish leather luxury bag." },
  { name: "Billini Tote", category: "handbags", price: 12999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_3_kgt1ky.jpg", description: "Spacious tote bag perfect for everyday luxury." },
  { name: "Sac a main de Voyage", category: "handbags", price: 45999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_4_ifzj7e.jpg", description: "Premium leather travel handbag." },
  { name: "Anne Klein Signature", category: "handbags", price: 28999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/Ruched_Chain_Baguette_Bag_ofeeze.jpg", description: "Timeless signature luxury bag." },
  { name: "Aurelia Structured Tote", category: "handbags", price: 34789, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763397617/70b20b6b2fa6f2acb0733aca5449ad6f_k7zyk4.jpg", description: "Italian leather tote." },
  { name: "Marbella Quilted Shoulder Bag", category: "handbags", price: 15443, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763397652/fa97a87ed95243ede822a8b63ec26076_jahunb.jpg", description: "Coastal European glamour." },
  { name: "Verona Mini Satchel", category: "handbags", price: 67543, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763397609/884409f3fb034b06532abcde7f23788a_sw44pb.jpg", description: "Compact luxurious satchel." },
  { name: "Belgravia Croc Embossed Tote", category: "handbags", price: 23999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763397600/70480087bba22b1f883c999963ee7021_duixr4.jpg", description: "Bold croc-embossed finish." },
  { name: "Chanel No. 5", category: "perfumes", price: 14999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/AI_creator_-_%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F_%D0%A1%D0%9E%D0%A6%D0%9C%D0%95%D0%A0%D0%95%D0%96_ah8bq6.jpg", description: "The legendary timeless fragrance." },
  { name: "YSL Libre", category: "perfumes", price: 11999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_2_h0ozpr.jpg", description: "Bold iconic YSL perfume." },
  { name: "Imensi Intense", category: "perfumes", price: 8999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_1_iqcyll.jpg", description: "Rich oriental fragrance." },
  { name: "YSL Black Opium", category: "perfumes", price: 13999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350613/download_qjw2gr.jpg", description: "Intense vanilla & coffee blend." },
  { name: "Aurora Elixir", category: "perfumes", price: 23999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398004/4a7fe428e421237facd266ced2a99000_o5fgij.jpg", description: "Radiant blend of jasmine and amber." },
  { name: "Velvet Oud Royale", category: "perfumes", price: 15999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398032/5a0d58ede6ba9b441c205bd7dc8cef09_ithopn.jpg", description: "Rich daring oudwood fragrance." },
  { name: "Étoile Blanche", category: "perfumes", price: 37543, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398086/82e4863cd3fab176dbf1592e8efe5fc1_qzwqsf.jpg", description: "Fresh Parisian morning scent." },
  { name: "Noir Intenso", category: "perfumes", price: 28999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398044/6592528249c889b584db20252441f04b_ok4pw0.jpg", description: "Bold nighttime fragrance." },
  { name: "Gold Serpent Chain", category: "neckchains", price: 89999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344126/Jewellery_Photography_For_Abbott_Lyon_enfkre.jpg", description: "18K gold serpentine chain." },
  { name: "Layered Gold Necklace", category: "neckchains", price: 65999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344126/Twenty_Compass_FW22_part2_-_Sarah_Emily_S__zub8jx.jpg", description: "Elegant multi-layered gold." },
  { name: "Diamond Pendant Chain", category: "neckchains", price: 124999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344124/milliaoficial_vs8d7n.jpg", description: "Diamond on premium gold." },
  { name: "Herringbone Chain", category: "neckchains", price: 45999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344707/7MM_LEROS_HERRINGBONE_CHAIN_mwq964.jpg", description: "Premium classic herringbone." },
  { name: "Luna Halo Layered Necklace", category: "neckchains", price: 24999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398435/b79da2438939a45be996f4971c6f2c74_do969t.jpg", description: "Delicate double-layer design." },
  { name: "Solitaire Circle Charm", category: "neckchains", price: 18499, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398430/09954f7c0c768f2c0b4ce9794f01fce2_md1njn.jpg", description: "Timeless circle charm." },
  { name: "Twin Orbit Gold", category: "neckchains", price: 29999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398362/7fce1144a79cf9ca9f11b2f5b2aadb82_h1mgyu.jpg", description: "Interlocking gold rings." },
  { name: "Aurora Leaf Crystal", category: "neckchains", price: 34999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398348/6551e78989d23e386cccf04bbe254b2e_uhujgz.jpg", description: "Leaf-shaped crystals." },
  { name: "Viera Gold Chevron", category: "neckchains", price: 22999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398359/f5a43c98cc15ca946f78340bc135ad8b_yhrpsm.jpg", description: "Sleek V-shaped pendant." }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert products
    await Product.insertMany(products);
    console.log(`✅ ${products.length} products inserted successfully`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
