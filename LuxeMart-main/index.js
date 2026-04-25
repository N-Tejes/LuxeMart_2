const menProducts = [
  {name:'Slim Fit Oxford Shirt',brand:'Raymond',price:1499,original:2999,discount:50,rating:4.5,reviews:2847,badge:'sale',img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80',trending:true},
  {name:'Premium Stretch Jeans',brand:'Levis',price:2199,original:3999,discount:45,rating:4.3,reviews:5621,badge:'hot',img:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80'},
  {name:'Oversized Graphic Tee',brand:'H&M',price:699,original:1299,discount:46,rating:4.1,reviews:1203,badge:'new',img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',trending:true},
  {name:'Tailored Blazer Set',brand:'Arrow',price:5499,original:9999,discount:45,rating:4.7,reviews:892,badge:'sale',img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80'},
  {name:'Linen Summer Shirt',brand:'U.S. Polo',price:999,original:1799,discount:44,rating:4.2,reviews:3341,badge:'',img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80'},
  {name:'Chino Slim Trousers',brand:'Peter England',price:1299,original:2499,discount:48,rating:4.4,reviews:1677,badge:'trend',img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80'},
];
const womenProducts = [
  {name:'Midi Dress',brand:'Mango',price:2499,original:4999,discount:50,rating:4.6,reviews:4230,badge:'sale',img:'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80',trending:true},
  {name:'Banarasi Silk Saree',brand:'Fabindia',price:4299,original:8499,discount:49,rating:4.8,reviews:1892,badge:'hot',img:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80'},
  {name:'Block Print Kurti Set',brand:'Biba',price:1299,original:2499,discount:48,rating:4.3,reviews:6721,badge:'new',img:'https://ojjascrafts.com/cdn/shop/files/JB-402-CORD-2.jpg?v=1745248244'},
  {name:'Sling bag',brand:'Caprese',price:1899,original:3999,discount:52,rating:4.5,reviews:2109,badge:'sale',img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',trending:true},
  {name:'Floral Pencil Heels',brand:'Carlton London',price:1499,original:2999,discount:50,rating:4.2,reviews:3344,badge:'',img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80'},
  {name:'Cotton Palazzo Set',brand:'Global Desi',price:899,original:1799,discount:50,rating:4.0,reviews:5503,badge:'trend',img:'https://ik.imagekit.io/4sjmoqtje/tr:c-at_max/cdn/shop/files/blue-printed-cotton-kurta-palazzo-set-with-thread-work-sg344872-1_325bd9b0-7c36-4864-bf43-4df058603537.jpg?v=1762852997&w=1000'},
];
const weddingProducts = [
  {name:'Royal Sherwani — Maroon',brand:'Manyavar',price:12999,original:24999,discount:48,rating:4.9,reviews:1203,badge:'hot',img:'https://m.media-amazon.com/images/I/61T1T0EOHuL._AC_UY350_.jpg',trending:true},
  {name:'Bridal Lehenga — Red',brand:'Kalki Fashion',price:18999,original:35000,discount:45,rating:4.8,reviews:892,badge:'sale',img:'https://dollyjstudio.com/cdn/shop/files/1082_1.jpg?v=1752065907&width=2048'},
  {name:'Indo-Western Suit',brand:'Zodiac',price:8499,original:14999,discount:43,rating:4.6,reviews:654,badge:'new',img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80'},
  {name:'Bridal Jewellery Set',brand:'Tanishq',price:6999,original:12999,discount:46,rating:4.7,reviews:2341,badge:'trend',img:'https://www.amama.in/cdn/shop/files/BRJBR23NKS7_1.jpg?v=1756287355&width=2048'},
  {name:'Mojari Juttis — Gold',brand:'Fizzy Goblet',price:1499,original:2999,discount:50,rating:4.4,reviews:3201,badge:'sale',img:'https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2022-10-18at11.58.37AM_1_580x.jpg?v=1666077865'},
  {name:'Bandhani Dupatta',brand:'Rajkumari',price:899,original:1799,discount:50,rating:4.2,reviews:1105,badge:'',img:'https://www.leheriya.com/cdn/shop/files/maroon-premium-georgette-gharchola-bandhani-dupatta-381622_800x.jpg?v=1735042138'},
];
const festivalProducts = [
  {name:'Shiirts',brand:'Fabindia',price:1799,original:3599,discount:50,rating:4.5,reviews:4892,badge:'sale',img:'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80',trending:true},
  {name:'Anarkali Suit — Peach',brand:'Biba',price:2499,original:4999,discount:50,rating:4.6,reviews:2341,badge:'hot',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS34YJDhGz3ls-DL2tE6E7iImk_wEiRJQoKzkZQhtS-7LXmXYPtIJYU6TJVpJFT4pfCtgjlSbtiuAYHn7-OMFd0KH7SnS2NJJuwyAwIow3nGbDLHEkJHR2yiu8'},
  {name:'Earrings',brand:'Zaveri Pearls',price:599,original:1299,discount:54,rating:4.3,reviews:8901,badge:'new',img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80'},
  {name:'Shirt',brand:'Manyavar',price:1299,original:2499,discount:48,rating:4.4,reviews:3221,badge:'trend',img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80'},
  {name:'Ghagra Choli',brand:'Global Desi',price:2999,original:5999,discount:50,rating:4.5,reviews:1892,badge:'sale',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQumvI1zGZjl5PkIzf86etacTSxNhD8-IQhQJ0WDbLOUYRmjOQ2pw1birUWtQnjnCIM8HCSmdYr3Edt45svkpx3TMp4BHOCsOclEH_vgP3ogcrVCoAGU9GlpA'},
  {name:'Oxidised Silver Necklace',brand:'Anuradha Art',price:799,original:1599,discount:50,rating:4.2,reviews:5632,badge:'',img:'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',trending:true},
];
const shoesProducts = [
  {name:'Air Max Sneakers — White',brand:'Nike',price:7999,original:12999,discount:38,rating:4.8,reviews:12430,badge:'hot',img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',trending:true},
  {name:'Running Shoes Pro',brand:'Adidas',price:5999,original:9999,discount:40,rating:4.6,reviews:9821,badge:'sale',img:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80'},
  {name:'Block Heels — Nude',brand:'Steve Madden',price:2999,original:5999,discount:50,rating:4.5,reviews:3441,badge:'new',img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80'},
  {name:'Men Formal Shoes',brand:'Clarks',price:4499,original:7999,discount:43,rating:4.7,reviews:2109,badge:'trend',img:'data:image/webp;base64,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'},
  {name:'Strappy Sandals — Gold',brand:'Metro',price:1299,original:2499,discount:48,rating:4.2,reviews:6723,badge:'sale',img:'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=400&q=80'},
  {name:'Chunky Platform Boots',brand:'Puma',price:4999,original:8999,discount:44,rating:4.4,reviews:3892,badge:'hot',img:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80',trending:true},
];
const electronicsProducts = [
  {name:'iPhone 16 Pro — Titanium',brand:'Apple',price:129900,original:134900,discount:3,rating:4.9,reviews:45231,badge:'new',img:'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80',trending:true},
  {name:'Galaxy S25 Ultra',brand:'Samsung',price:109999,original:124999,discount:12,rating:4.7,reviews:32109,badge:'hot',img:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80'},
  {name:'AirPods Pro 2nd Gen',brand:'Apple',price:19999,original:26900,discount:25,rating:4.8,reviews:28441,badge:'sale',img:'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&q=80',trending:true},
  {name:'Sony WH-1000XM5',brand:'Sony',price:24999,original:34990,discount:28,rating:4.9,reviews:18923,badge:'hot',img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80'},
  {name:'Apple Watch Series 10',brand:'Apple',price:41900,original:46900,discount:10,rating:4.8,reviews:9832,badge:'new',img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80'},
  {name:'Galaxy Buds Pro 3',brand:'Samsung',price:11999,original:17999,discount:33,rating:4.5,reviews:7231,badge:'sale',img:'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&q=80'},
];
const beautyProducts = [
  {name:'Dior Sauvage EDP — 100ml',brand:'Dior',price:7499,original:12500,discount:40,rating:4.9,reviews:8231,badge:'sale',img:'data:image/webp;base64,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',trending:true},
  {name:'Nude Lipstick Set — 6pc',brand:'MAC',price:2499,original:4200,discount:40,rating:4.6,reviews:12930,badge:'hot',img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80'},
  {name:'Vitamin C Glow Serum',brand:'The Ordinary',price:899,original:1599,discount:43,rating:4.7,reviews:23441,badge:'new',img:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80',trending:true},
  {name:'Lakme Foundation',brand:'Lakme',price:699,original:1299,discount:46,rating:4.3,reviews:45120,badge:'sale',img:'img/Lakme foundation.webp'},
  {name:'Rose Gold Eyeshadow Palette',brand:'Nykaa',price:999,original:1999,discount:50,rating:4.5,reviews:18932,badge:'trend',img:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80'},
  {name:'Chanel No.5 EDP — 50ml',brand:'Chanel',price:8999,original:15000,discount:40,rating:4.9,reviews:5621,badge:'hot',img:'https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1240/n-5-eau-de-parfum-spray-1-7fl-oz--packshot-default-125430-9564912484382.jpg'},
];
const reviews = [
  {name:'Priya Sharma',init:'PS',item:'Wedding Lehenga',rating:5,text:'Absolutely stunning quality! The embroidery is exquisite and delivery was 2 days early. LuxeMart has changed how I shop online.'},
  {name:'Rohan Kapoor',init:'RK',item:'Nike Sneakers',rating:5,text:'100% authentic product, excellent packaging. Wore them to a party and got so many compliments. Will definitely order again!'},
  {name:'Ananya Gupta',init:'AG',item:'Dior Sauvage',rating:5,text:'Got this as a gift. The fragrance is long-lasting and exactly as described. Great discount too — saved ₹5,000 compared to mall price.'},
  {name:'Vikram Singh',init:'VS',item:'Royal Sherwani',rating:5,text:'The Sherwani fit is perfect. Used Manyavar size chart and it was spot on. The fabric quality is premium and returns were hassle-free.'},
  {name:'Meera Nair',init:'MN',item:'Sony Headphones',rating:4,text:'Noise cancellation is truly magical. Wore it on a flight from Mumbai to London — complete silence. Battery lasts 30 hours easily.'},
  {name:'Arjun Mehta',init:'AM',item:'Silk Saree',rating:5,text:'My mother cried when she saw the saree — in a good way! The colours are rich and authentic. Packaging was like a luxury gift box.'},
];

const outfits = {
  college:{title:'College Look ✏️',items:[{icon:'👕',name:'Oversized Graphic Hoodie',detail:'H&M — ₹999'},{icon:'👖',name:'Slim Fit Jeans — Indigo',detail:'Levis 511 — ₹2,199'},{icon:'👟',name:'White Chunky Sneakers',detail:'Nike Air Force 1 — ₹7,999'},{icon:'🎒',name:'Mini Backpack',detail:'Wildcraft — ₹1,299'},{icon:'⌚',name:'Casual Sports Watch',detail:'Casio G-Shock — ₹3,499'}]},
  office:{title:'Office Ready 💼',items:[{icon:'👔',name:'Slim Fit Formal Shirt',detail:'Arrow — ₹1,499'},{icon:'👖',name:'Tailored Chino Trousers',detail:'Peter England — ₹1,299'},{icon:'👞',name:'Oxford Derby Shoes',detail:'Clarks — ₹4,499'},{icon:'⌚',name:'Minimalist Dress Watch',detail:'Titan Edge — ₹6,999'},{icon:'💼',name:'Leather Laptop Bag',detail:'Da Milano — ₹3,999'}]},
  party:{title:'Party Mode 🎉',items:[{icon:'🥻',name:'Sequin Midi Dress',detail:'Zara — ₹3,999'},{icon:'👠',name:'Block Heels — Black',detail:'Steve Madden — ₹2,999'},{icon:'👜',name:'Clutch Bag — Gold',detail:'Caprese — ₹1,499'},{icon:'💄',name:'Nude + Bold Lip Combo',detail:'MAC Set — ₹2,499'},{icon:'💎',name:'Crystal Statement Earrings',detail:'Zaveri Pearls — ₹599'}]},
  wedding:{title:'Wedding Vibes 💒',items:[{icon:'🧣',name:'Royal Sherwani — Maroon',detail:'Manyavar — ₹12,999'},{icon:'👞',name:'Mojari Juttis — Gold',detail:'Fizzy Goblet — ₹1,499'},{icon:'⌚',name:'Classic Gold Watch',detail:'Titan Karishma — ₹8,999'},{icon:'🌹',name:'Silk Pocket Square',detail:'Zodiac — ₹399'},{icon:'🥂',name:'Floral Sherbet Attar',detail:'Forest Essentials — ₹1,800'}]},
  festival:{title:'Festival Glow 🪔',items:[{icon:'👘',name:'Pathani Kurta — Orange',detail:'Fabindia — ₹1,799'},{icon:'🩲',name:'Cotton Pajama — Off-white',detail:'Manyavar — ₹699'},{icon:'👟',name:'Kolhapuri Sandals',detail:'Bata — ₹899'},{icon:'📿',name:'Rudraksha Bracelet',detail:'Anuradha Art — ₹299'},{icon:'🌸',name:'Jasmine Attar Perfume',detail:'Nemat — ₹599'}]},
  casual:{title:'Casual & Cool 😊',items:[{icon:'👕',name:'Plain Crew-Neck Tee',detail:'Uniqlo — ₹799'},{icon:'🩳',name:'Cotton Jogger Shorts',detail:'Puma — ₹999'},{icon:'🥿',name:'Slip-on Sneakers',detail:'Vans — ₹3,499'},{icon:'🧢',name:'Structured Cap',detail:'New Era — ₹1,499'},{icon:'🎧',name:'Wireless Earbuds',detail:'JBL Tune 230NC — ₹2,999'}]}
};
const kidsProducts = [
  {name:'Cartoon T-Shirt',brand:'Hopscotch',price:499,original:999,discount:50,rating:4.3,reviews:1203,badge:'new',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZpTXFDFPbYp6qkiGHWJBzPuKR9JHOelWMyDHmp3JCbaLEZZrSsJJjLbtKv0Rnb1ttnLaQGbqNCEvWvTCihI0LA5qePd_W'},
  {name:'Denim Dungaree',brand:'Mothercare',price:999,original:1999,discount:50,rating:4.5,reviews:892,badge:'sale',img:'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80'},
  {name:'Kids Sneakers',brand:'Puma',price:1299,original:2499,discount:48,rating:4.4,reviews:1452,badge:'hot',img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80'},
  {name:'Party Dress',brand:'Zara Kids',price:1499,original:2999,discount:50,rating:4.6,reviews:781,badge:'new',img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKueda1g-UCyEJ50YxC2pJ5rTCs382Kht2XK2x26deLCBKOvAwe2ZafkQmY2woTJwVVQ1KyW7Adsxxg5Pgy2ZcXIVKxDXFG8EO8RxzUywvaWbUgk5zC-ULGQ'},
  {name:'Winter Jacket',brand:'H&M Kids',price:1999,original:3999,discount:50,rating:4.7,reviews:654,badge:'sale',img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6qBlCd_S4NTlCJ3-EeVZ9W-XxINYimTgq8OMYMJRV0vikzK4lv0ZroLSmnc_hqiUusTIHz7b1rGVEpGqLUl9XvvPh2wAVS45JskW533zG-yUxwD0M6dT1'},
  {name:'School Backpack',brand:'Skybags',price:799,original:1599,discount:50,rating:4.5,reviews:2301,badge:'trend',img:'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&q=80'}
];
const homeProducts = [
  {name:'Wall Painting Frame',brand:'ArtStreet',price:999,original:1999,discount:50,rating:4.4,reviews:321,badge:'sale',img:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&q=80'},
  {name:'Luxury Sofa Set',brand:'Urban Ladder',price:24999,original:39999,discount:38,rating:4.6,reviews:210,badge:'hot',img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80'},
  {name:'Decor Lamp',brand:'Philips',price:1499,original:2999,discount:50,rating:4.3,reviews:145,badge:'new',img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80'},
  {name:'Flower Vase',brand:'Home Centre',price:699,original:1299,discount:46,rating:4.2,reviews:98,badge:'',img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSU-HEflYcqE_d5Mr4yiAja_asBYYTyTf35DI_bcgpjN4fVncwxDQA6IAH0LTTm84qNt_xLn0qv1GfHfUOXArGve8XyF-lZhMPIXofex5g'},
  {name:'Cushion',brand:'DDecor',price:1299,original:2499,discount:48,rating:4.5,reviews:221,badge:'trend',img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80'},
  {name:'Chandlier',brand:'Ajanta',price:599,original:1199,discount:50,rating:4.4,reviews:341,badge:'sale',img:'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&q=80'}
];
const sportsProducts = [
  {name:'Cricket Bat',brand:'SG',price:1999,original:3999,discount:50,rating:4.6,reviews:234,badge:'hot',img:'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&q=80'},
  {name:'Cycle',brand:'Adidas',price:999,original:1999,discount:50,rating:4.4,reviews:543,badge:'sale',img:'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80'},
  {name:'Gym Dumbbells',brand:'Decathlon',price:1499,original:2999,discount:50,rating:4.5,reviews:321,badge:'new',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80'},
  {name:'Rope',brand:'Puma',price:799,original:1599,discount:50,rating:4.3,reviews:432,badge:'',img:'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=400&q=80'},
  {name:'Skipping Rope',brand:'Reebok',price:299,original:699,discount:57,rating:4.2,reviews:210,badge:'trend',img:'https://m.media-amazon.com/images/I/617-FZtUqUL.jpg'},
  {name:'Yoga Mat',brand:'Fitkit',price:19999,original:29999,discount:33,rating:4.6,reviews:120,badge:'hot',img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'}
];
const groceryProducts = [
  {name:'Fresh Apples',brand:'Farm Fresh',price:199,original:299,discount:33,rating:4.5,reviews:120,badge:'sale',img:'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80'},
  {name:'Organic Milk',brand:'Amul',price:60,original:70,discount:14,rating:4.6,reviews:321,badge:'',img:'https://m.media-amazon.com/images/I/61iBRmvxn-L.jpg'},
  {name:'Fruits',brand:'India Gate',price:499,original:699,discount:29,rating:4.7,reviews:543,badge:'hot',img:'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&q=80'},
  {name:'Chicken',brand:'Fortune',price:149,original:199,discount:25,rating:4.4,reviews:210,badge:'sale',img:'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80'},
  {name:'Vegetable Pack',brand:'Local Farm',price:299,original:399,discount:25,rating:4.5,reviews:132,badge:'new',img:'https://5.imimg.com/data5/LX/IM/MY-20759160/vegetable-packing-box-500x500.jpg'},
  {name:'Bread',brand:'Britannia',price:40,original:50,discount:20,rating:4.3,reviews:98,badge:'',img:'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&q=80'}
];

// ── RENDER PRODUCTS ──
function starsHTML(r){let s='';for(let i=1;i<=5;i++)s+=`<i class="fa-${i<=Math.floor(r)?'solid':'regular'} fa-star${i>r&&i<=Math.ceil(r)?'':''}" style="${i<=r?'':'color:var(--text-muted)'}"></i>`;return s}
function renderGrid(products,gridId){
  const el=document.getElementById(gridId);if(!el)return;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
  el.innerHTML=products.map((p,i)=>{
    const id = `${gridId}-${i}`;
    const inCart = cart.some(item => item.id === id);
    const inWishlist = wishlist.some(item => item.name === p.name);
    const pStr = encodeURIComponent(JSON.stringify(p)).replace(/'/g, "%27");
    const safeName = encodeURIComponent(p.name).replace(/'/g, "%27");
    return `
  <div class="product-card" data-id="${id}">
    <div class="prod-img-wrap">
      ${p.badge ? `<span class="badge badge-${p.badge}">${p.badge.toUpperCase()}</span>` : ''}
      ${p.trending?`<div class="trending-badge"><i class="fa-solid fa-fire" style="font-size:0.6rem"></i> Trending</div>`:''}
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="prod-overlay">
        <button class="quick-btn" onclick="openQuickView('${pStr}','${id}');event.stopPropagation()">Quick View</button>
        <button class="wishlist-btn" id="wishBtn-${id}" onclick="addToWishlist(decodeURIComponent('${safeName}'),'${p.price}','${p.img}','${id}');event.stopPropagation()">
          <i class="fa-${inWishlist ? 'solid' : 'regular'} fa-heart" style="${inWishlist ? 'color:#ef4444' : ''}"></i>
        </button>
      </div>
    </div>
    <div class="prod-info">
      <div class="prod-brand">${p.brand}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-rating">
        <div class="stars">${[1,2,3,4,5].map(n=>`<i class="fa-solid fa-star" style="font-size:0.7rem;color:${n<=Math.round(p.rating)?'var(--neon-gold)':'var(--text-muted)'}"></i>`).join('')}</div>
        <span class="rating-count">${p.rating || 4} (${(p.reviews || 100).toLocaleString()})</span>
      </div>
      <div class="prod-price">
        <span class="price-current">₹${p.price.toLocaleString()}</span>
        <span class="price-original">₹${p.original.toLocaleString()}</span>
        <span class="price-discount">${p.discount}% OFF</span>
      </div>
      <button class="add-cart-btn ${inCart ? 'added' : ''}" id="cartBtn-${id}" onclick="toggleCartGrid(decodeURIComponent('${safeName}'),'${id}');event.stopPropagation()">
        ${inCart ? '<i class="fa-solid fa-check"></i> Added' : '<i class="fa-solid fa-bag-shopping"></i> Add to Cart'}
      </button>
    </div>
  </div>`}).join('');
}

// ── CART (Legacy reference removed, using unified cart below) ──

// ── HERO SLIDER ──
let currentSlide=0;
const slides=document.querySelectorAll('.slide');
const dotsEl=document.getElementById('heroDots');
slides.forEach((_,i)=>{const d=document.createElement('div');d.className='dot'+(i===0?' active':'');d.onclick=()=>goSlide(i);dotsEl.appendChild(d)});
function goSlide(n){slides[currentSlide].classList.remove('active');document.querySelectorAll('.dot')[currentSlide].classList.remove('active');currentSlide=(n+slides.length)%slides.length;slides[currentSlide].classList.add('active');document.querySelectorAll('.dot')[currentSlide].classList.add('active')}
function nextSlide(){goSlide(currentSlide+1)}
function prevSlide(){goSlide(currentSlide-1)}
setInterval(nextSlide,5500);

// ── COUNTDOWN ──
let seconds=8*3600+24*60+37;
function tick(){seconds--;if(seconds<0)seconds=8*3600;const h=Math.floor(seconds/3600),m=Math.floor((seconds%3600)/60),s=seconds%60;document.getElementById('ch').textContent=String(h).padStart(2,'0');document.getElementById('cm').textContent=String(m).padStart(2,'0');document.getElementById('cs').textContent=String(s).padStart(2,'0')}
setInterval(tick,1000);

// ── THEME ──
function toggleTheme(){const b=document.body,icon=document.getElementById('themeIcon');if(b.getAttribute('data-theme')==='dark'){b.setAttribute('data-theme','light');icon.className='fa-solid fa-sun'}else{b.setAttribute('data-theme','dark');icon.className='fa-solid fa-moon'}}

// ── SEARCH ──
function handleSearch(v){const s=document.getElementById('searchSugg');if(v.length>1){s.classList.add('active')}else{s.classList.remove('active')}}
function showSuggestions(){if(document.getElementById('searchInput').value.length>0)document.getElementById('searchSugg').classList.add('active')}
function hideSuggestions(){document.getElementById('searchSugg').classList.remove('active')}
function selectSugg(v){document.getElementById('searchInput').value=v;hideSuggestions();showToast('Searching for: '+v,'fa-magnifying-glass')}

// ── TOAST ──
let toastTimer;
function showToast(msg,icon='fa-circle-check'){clearTimeout(toastTimer);const t=document.getElementById('toast');const i=t.querySelector('.toast-icon');i.className='toast-icon fa-solid '+icon;document.getElementById('toast-msg').textContent=msg;t.classList.add('show');toastTimer=setTimeout(()=>t.classList.remove('show'),3200)}
function hideToast(){document.getElementById('toast').classList.remove('show')}

// ── AI ──
function toggleAI(){document.getElementById('aiPopup').classList.toggle('open')}
function showOutfit(occ){
  const outfit=outfits[occ];
  document.getElementById('aiHome').style.display='none';
  document.getElementById('aiResultTitle').textContent='Perfect Outfit for '+outfit.title;
  document.getElementById('aiOutfitItems').innerHTML=outfit.items.map(it=>`<div class="outfit-item"><div class="outfit-icon">${it.icon}</div><div><div class="outfit-name">${it.name}</div><div class="outfit-detail">${it.detail}</div></div></div>`).join('');
  document.getElementById('aiResult').classList.add('show');
}
function resetAI(){document.getElementById('aiHome').style.display='block';document.getElementById('aiResult').classList.remove('show')}

// ── FILTER ──
function filterProducts(el,cat){el.parentElement.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');showToast('Filtering: '+cat,'fa-filter')}

// ── SCROLL ──
function scrollToSection(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})}

// ── MOBILE MENU ──
function openMobileMenu(){document.getElementById('mobileMenu').classList.add('open');document.body.style.overflow='hidden'}
function closeMobileMenu(){document.getElementById('mobileMenu').classList.remove('open');document.body.style.overflow=''}

// ── REVIEWS ──
function renderReviews(){
  const row=document.getElementById('reviewsRow');
  row.innerHTML=reviews.map(r=>`<div class="review-card">
    <div class="review-header">
      <div class="reviewer-avatar">${r.init}</div>
      <div><div class="reviewer-name">${r.name}</div><div class="reviewer-sub">${[1,2,3,4,5].map(n=>`<i class="fa-solid fa-star" style="font-size:0.7rem;color:${n<=r.rating?'var(--neon-gold)':'var(--text-muted)'}"></i>`).join('')}</div></div>
    </div>
    <div class="review-text">"${r.text}"</div>
    <div class="review-product"><i class="fa-solid fa-bag-shopping" style="font-size:0.7rem"></i> Purchased: ${r.item}</div>
  </div>`).join('');
}

// ── INIT ──
renderGrid(menProducts,'menGrid');
renderGrid(womenProducts,'womenGrid');
renderGrid(weddingProducts,'weddingGrid');
renderGrid(festivalProducts,'festivalGrid');
renderGrid(shoesProducts,'shoesGrid');
renderGrid(electronicsProducts,'electronicsGrid');
renderGrid(beautyProducts,'beautyGrid');
renderGrid(kidsProducts,'kidsGrid');
renderGrid(homeProducts,'homeGrid');
renderGrid(sportsProducts,'sportsGrid');
renderGrid(groceryProducts,'groceryGrid');
renderReviews();


//For Login

// OPEN MODAL
function openAuth(){
  document.getElementById("authModal").style.display = "flex";
}

// CLOSE MODAL
function closeAuth(){
  document.getElementById("authModal").style.display = "none";
}

// SWITCH TABS
function switchTab(type){
  const login = document.getElementById("loginForm");
  const signup = document.getElementById("signupForm");

  document.getElementById("loginTab").classList.remove("active");
  document.getElementById("signupTab").classList.remove("active");

  if(type === "login"){
    login.classList.remove("hidden");
    signup.classList.add("hidden");
    document.getElementById("loginTab").classList.add("active");
  } else {
    signup.classList.remove("hidden");
    login.classList.add("hidden");
    document.getElementById("signupTab").classList.add("active");
  }
}

// CREATE ACCOUNT
function createAccount(){
  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;

  if(name && email){
    alert("Account Created Successfully ✅");
    switchTab('login');
  } else {
    alert("Please fill all fields");
  }
}


// LOGIN
function loginUser(){
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;

  if(email && pass){
    alert("Login Successful 🚀");

    closeAuth(); // close modal after login

    // 🔥 REDIRECT / SCROLL TO FOR YOU SECTION
    document.getElementById("forYou").scrollIntoView({
      behavior: "smooth"
    });

  } else {
    alert("Enter valid details");
  }
}
function openWhatsAppPage(){
  window.location.href = "wp.html";
}

////wishlisttt
function addToWishlist(name, price, image, btnId) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let alreadyIndex = wishlist.findIndex(item => item.name === name);

    let btnIcon = null;
    if (btnId) {
        let btn = document.getElementById("wishBtn-" + btnId);
        if (btn) btnIcon = btn.querySelector("i");
    }

    if (alreadyIndex === -1) {
        wishlist.push({name, price, image});
        showToast(name + " added to wishlist ❤️", "fa-heart");
        if (btnIcon) {
            btnIcon.className = "fa-solid fa-heart";
            btnIcon.style.color = "#ef4444";
        }
    } else {
        wishlist.splice(alreadyIndex, 1);
        showToast("Removed from wishlist", "fa-heart-crack");
        if (btnIcon) {
            btnIcon.className = "fa-regular fa-heart";
            btnIcon.style.color = "";
        }
    }
    
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    if (window.LuxeAPI && window.LuxeAPI.Users && localStorage.getItem('luxemart_token')) {
        window.LuxeAPI.Users.updateWishlist(wishlist).catch(e=>console.log(e));
    }
}

function updateWishlistCount() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let count = document.getElementById("wishCount");
    if (count) {
        count.innerText = wishlist.length;
    }
}

// Ensure state updates when returning to page
updateWishlistCount();
window.addEventListener("pageshow", updateWishlistCount);


// ================= CART =================

// Unified toggle for main grid
function toggleCartGrid(name, id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.findIndex(item => item.id === id);

    const btn = document.getElementById('cartBtn-' + id);

    if (exists !== -1) {
        // Remove
        cart.splice(exists, 1);
        if (btn) {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add to Cart';
        }
        showToast("Removed from cart", "fa-trash");
    } else {
        // Add
        const card = document.querySelector(`[data-id="${id}"]`);
        if (!card) return;
        const priceText = card.querySelector('.price-current').innerText;
        const price = parseInt(priceText.replace(/[₹,]/g,''));
        const img = card.querySelector('img').src;

        cart.push({ id, name, price, img });
        
        if (btn) {
            btn.classList.add('added', 'cart-animate');
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            setTimeout(() => btn.classList.remove('cart-animate'), 400);
        }
        showToast(name.substring(0,30) + " added to cart!", "fa-bag-shopping");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    if (window.LuxeAPI && window.LuxeAPI.Users && localStorage.getItem('luxemart_token')) {
        window.LuxeAPI.Users.updateCart(cart).catch(e=>console.log(e));
    }
}

// ================= AUTO SETUP FOR "FOR YOU" =================
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".for-you-card");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cards.forEach((card, index) => {
    const name = card.querySelector("p").innerText;
    const img = card.querySelector("img").src;
    const price = 500 + index * 100;
    const mrp = price + 400;
    const id = "foryou-" + (index + 1);

    const inCart = cart.some(item => item.id === id);

    // create button
    const btn = document.createElement("button");
    btn.className = "add-cart-btn";
    btn.style.marginTop = "auto";
    btn.style.width = "calc(100% - 20px)";
    btn.style.marginLeft = "10px";
    btn.style.marginBottom = "10px";

    if (inCart) {
        btn.classList.add('added');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add to Cart';
    }

    // click event
    btn.onclick = (e) => {
        e.stopPropagation();
        let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existsIndex = currentCart.findIndex(item => item.id === id);

        if (existsIndex !== -1) {
            currentCart.splice(existsIndex, 1);
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add to Cart';
            showToast("Removed from cart", "fa-trash");
        } else {
            currentCart.push({ id, name, price, img, mrp });
            btn.classList.add('added', 'cart-animate');
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            setTimeout(() => btn.classList.remove('cart-animate'), 400);
            showToast(name + " added!", "fa-bag-shopping");
        }
        localStorage.setItem("cart", JSON.stringify(currentCart));
        updateCartBadge();
        if (window.LuxeAPI && window.LuxeAPI.Users && localStorage.getItem('luxemart_token')) {
            window.LuxeAPI.Users.updateCart(currentCart).catch(e=>console.log(e));
        }
    };

    card.appendChild(btn);
  });

  updateCartBadge();
});

// ================= UI =================
function updateCartBadge(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let badge = document.getElementById("cartBadge");
  if (badge) badge.innerText = cart.length;
}

window.addEventListener("pageshow", updateCartBadge);
window.onload = function(){
  updateCartBadge();
  updateWishlistCount();
}

// ================= QUICK VIEW MODAL =================
let currentQvSize = 'M';

function openQuickView(pStr, id) {
  const p = JSON.parse(decodeURIComponent(pStr));
  const modal = document.getElementById('qvModal');
  const body = document.getElementById('qvBody');
  
  if(!modal || !body) return;
  
  const fPrice = parseInt(p.price).toLocaleString();
  const fOriginal = parseInt(p.original).toLocaleString();
  const fReviews = parseInt(p.reviews || 0).toLocaleString();
  const safeName = encodeURIComponent(p.name);
  
  currentQvSize = 'M'; // default size
  
  body.innerHTML = `
    <div class="qv-img-col">
      <img src="${p.img}" alt="${p.name}">
    </div>
    <div class="qv-info-col">
      <div class="qv-brand">${p.brand || 'LuxeMart'}</div>
      <div class="qv-title">${p.name}</div>
      <div class="qv-rating">
        <div class="stars">${starsHTML(parseFloat(p.rating || 4))}</div>
        <span>${p.rating || 4} (${fReviews} reviews)</span>
      </div>
      <div class="qv-price-row">
        <div class="qv-price">₹${fPrice}</div>
        <div class="qv-original">₹${fOriginal}</div>
        <div class="qv-discount">${p.discount || 0}% OFF</div>
      </div>
      
      <div class="qv-sizes">
        <h4>Select Size</h4>
        <div class="qv-size-grid">
          <button class="qv-size-btn" onclick="selectQvSize(this, 'XS')">XS</button>
          <button class="qv-size-btn" onclick="selectQvSize(this, 'S')">S</button>
          <button class="qv-size-btn active" onclick="selectQvSize(this, 'M')">M</button>
          <button class="qv-size-btn" onclick="selectQvSize(this, 'L')">L</button>
          <button class="qv-size-btn" onclick="selectQvSize(this, 'XL')">XL</button>
        </div>
      </div>
      
      <div class="qv-actions">
        <button class="qv-add-btn" onclick="qvAddToCart(decodeURIComponent('${safeName}'), '${id}', ${p.price}, '${p.img}')">
          <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
        <button class="qv-buy-btn" onclick="qvBuyNow(decodeURIComponent('${safeName}'), '${id}', ${p.price}, '${p.img}', ${p.original || p.price})">
          Place Order
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.getElementById('qvModal');
  if(modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function selectQvSize(btn, size) {
  currentQvSize = size;
  document.querySelectorAll('.qv-size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function qvAddToCart(name, id, price, img) {
  const finalName = `${name} (Size: ${currentQvSize})`;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  const cartId = id + '-' + currentQvSize;
  
  if(!cart.some(item => item.id === cartId)){
    cart.push({ id: cartId, name: finalName, price: parseInt(price), img, mrp: parseInt(price) });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    if (window.LuxeAPI && window.LuxeAPI.Users && localStorage.getItem('luxemart_token')) {
        window.LuxeAPI.Users.updateCart(cart).catch(e=>console.log(e));
    }
    showToast(finalName.substring(0,30) + " added to cart!", "fa-bag-shopping");
  } else {
    showToast("Already in cart", "fa-circle-info");
  }
}

function qvBuyNow(name, id, price, img, mrp) {
  // LOGIN GUARD
  let user = null;
  try { user = JSON.parse(localStorage.getItem('luxemart_user')); } catch {}
  if (!user) {
    closeQuickView();
    showToast('Please login to place an order', 'fa-lock');
    setTimeout(() => openAuth(), 600);
    return;
  }

  const finalName = `${name} (Size: ${currentQvSize})`;
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  
  orders.push({ id: id + '-' + currentQvSize, name: finalName, price: parseInt(price), img, mrp: parseInt(mrp) || parseInt(price), status:'processing', track:1, date: new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}), items:[{name:finalName, brand:'LuxeMart', size:currentQvSize, price:parseInt(price), img}], amount:parseInt(price) });
  localStorage.setItem("orders", JSON.stringify(orders));
  
  showToast("Order placed successfully! 🎉", "fa-check");
  closeQuickView();
  setTimeout(() => {
    window.location.href = "orders.html";
  }, 1000);
}

// Close modal when clicking outside content
document.addEventListener('click', function(e) {
  const modal = document.getElementById('qvModal');
  if(modal && e.target === modal) {
    closeQuickView();
  }
});