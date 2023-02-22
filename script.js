

const products = [
    { name: 'Wrought Iron Banana Leaf Wall Art In Green', category: 'Wall Decor', image: ['https://ii1.pepperfry.com/media/catalog/product/g/r/1600x1760/green--iron-banana-leaf-wall-art-by-the-shining-rays-green--iron-banana-leaf-wall-art-by-the-shining-tmzwen.jpg', 'https://ii1.pepperfry.com/media/catalog/product/g/r/1600x1760/green--iron-banana-leaf-wall-art-by-the-shining-rays-green--iron-banana-leaf-wall-art-by-the-shining-tmzwen.jpg'], shop: 'Fabindia', price: "Rs. 1,299", price2: "Rs. 999" },
    { name: 'Coloured Fish Handmade & Hand-Painted Wall Hanging', category: 'Wall Decor', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-002-127_A_1800x1800.jpg?v=1568953176', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-002-127_A_1800x1800.jpg?v=1568953176'], price: "Rs. 999", price2: "Rs. 765" },
    { name: 'Warli Handpainted Pots With Sheesham Wooden Frame Wall Hanging', category: 'Wall Decor', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-002-001_a_3_1800x1800.jpg?v=1570516510', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-002-001_a_3_1800x1800.jpg?v=1570516510'], shop: 'Fabindia', price: "Rs. 3,052", price2: "Rs. 2999" },
    { name: 'Iron Framed Butterfly Queen Wall Art With LED In Gold', category: 'Wall Decor', image: ['https://ii1.pepperfry.com/media/catalog/product/b/u/1600x1760/butterfly-queen-with-led-by-the-shining-rays-butterfly-queen-with-led-by-the-shining-rays-hpgk9m.jpg', 'https://ii1.pepperfry.com/media/catalog/product/b/u/1600x1760/butterfly-queen-with-led-by-the-shining-rays-butterfly-queen-with-led-by-the-shining-rays-hpgk9m.jpg'], price: "Rs. 2,899", price2: "Rs. 2499" },
    { name: 'Madhubani Hand-Painted Key Holder In Sheesham & Teak Wood (6 Hooks)', category: 'Wall Decor', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-012-057_a_1800x1800.jpg?v=1570516277', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-012-057_a_1800x1800.jpg?v=1570516277'], price: "Rs. 1,799", price2: "Rs. 1200" },
    { name: 'Shaped Warli & Dhokra Wooden Name Plate With Handwritten Fonts', category: 'Wall Decor', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-002-084_a_1800x1800.jpg?v=1570516288', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-002-084_a_1800x1800.jpg?v=1570516288'], shop: 'Fabindia', price: "Rs. 3,788", price2: "Rs. 2,999" },
    { name: 'Dhokra And Warli Handpainted Wall Hanging Set', category: 'Wall Decor', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-002-018_a_4_1800x1800.jpg?v=1570516491', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-002-018_a_4_1800x1800.jpg?v=1570516491'], price: "Rs. 3,999", price2: "Rs. 3,666" },
    { name: 'Glories of Ganesha Handmade & Hand-painted Wall Hanging In Iron', category: 'Wall Decor', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/glories-of-ganesha-handmade-_-hand-painted-wall-hanging-in-iron_1_1800x1800.jpg?v=1650013776', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/glories-of-ganesha-handmade-_-hand-painted-wall-hanging-in-iron_1_1800x1800.jpg?v=1650013776'], shop: 'Fabindia', price: "Rs. 2,349", price2: "Rs. 2,199" },
    { name: 'Handpainted tribal couple ', category: 'Desk Decor', image: ['https://ii1.pepperfry.com/media/catalog/product/h/a/800x880/handpainted-tribal-couple-metallic-showpieceby-craft-tree-handpainted-tribal-couple-metallic-showpie-qj3hrc.jpg', 'https://ii1.pepperfry.com/media/catalog/product/h/a/1100x1210/handpainted-tribal-couple-metallic-showpieceby-craft-tree-handpainted-tribal-couple-metallic-showpie-ykjrcg.jpg'], shop: 'The Bombay Store', price: "Rs. 599", price2: "Rs. 449" },
    { name: 'Handcrafted Recycled Material Elephant', category: 'Desk Decor', image: ['https://m.media-amazon.com/images/I/81PxikOZzqL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/71bQTAviJyL._SL1500_.jpg'], shop: 'The Bombay Store', price: "Rs. 1,499", price2: "Rs. 1,399" },
    { name: 'Handmade Camel Cart', category: 'Desk Decor', image: ['https://m.media-amazon.com/images/I/61CJFHpj9CL._SL1000_.jpg', 'https://m.media-amazon.com/images/I/81PQQmRftCL._SL1500_.jpg'], shop: 'Anokhi', price: "Rs. 1,899", price2: "Rs. 1,799" },
    { name: 'Handemade "Village Farmer and his Wife', category: 'Desk Decor', image: ['https://m.media-amazon.com/images/I/61DBeGkU4+L._SL1080_.jpg', 'https://m.media-amazon.com/images/I/612wFHLV2kL._SL1500_.jpg'], shop: 'The Bombay Store', price: "Rs. 879", price2: "Rs. 799" },
    { name: 'Ganesh Decorative Showpiece ', category: 'Desk Decor', image: ['https://rukminim1.flixcart.com/image/416/416/xif0q/showpiece-figurine/m/j/r/dq-1007-01-dequera-original-imaghdzchpww2cht.jpeg?q=70', 'https://rukminim1.flixcart.com/image/416/416/xif0q/showpiece-figurine/l/c/g/dq-1007-01-dequera-original-imaghdzcyffvgfg3.jpeg?q=70'], shop: 'The Bombay Store', price: "Rs. 722", price2: "Rs. 699" },
    { name: 'Tribal rustic Pot-faces', category: 'Desk Decor', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-004-016_A_1800x1800.jpg?v=1598086298', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-004-016_D_1800x1800.jpg?v=1598086297'], shop: 'Fabindia', price: "Rs. 999", price2: "Rs. 799" },
    { name: 'Shankh Shaped Terracotta Handpainted Tea Light Holder', category: 'Lighting', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-008-050_a_4_1800x1800.jpg?v=1570516403', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-008-050_e_4_1800x1800.jpg?v=1570516403'], shop: 'The Bombay Store', price: "Rs. 775", price2: "Rs. 699" },
    { name: 'Dhokra And Warli Handpainted Wooden Lamp Brown', category: 'Lighting', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-003-038_a_3_1800x1800.jpg?v=1570516474', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-003-038_b_2_1800x1800.jpg?v=1570516475'], shop: 'The Bombay Store', price: "Rs. 4,209", price2: "Rs. 3,999" },
    { name: 'Hanging Bottle Shaped Handapinted Terracotta Tea Light Holder', category: 'Lighting', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-008-047_a_1800x1800.jpg?v=1570516428', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-008-047_c_1800x1800.jpg?v=1570516428'], shop: 'Fabindia', price: "Rs. 799 ", price2: "Rs. 649" },
    { name: 'Handcrafted Warli Dhokra Art Wall Lamp', category: 'Lighting', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-003-120_a_2_1800x1800.jpg?v=1570516357', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-003-120_c_1800x1800.jpg?v=1570516357'], shop: 'The Bombay Store', price: "Rs. 876", price2: "Rs. 799" },
    { name: 'Moroccan Shimmer Hand Etched Iron Table Lamp', category: 'Lighting', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-003-185_A_1800x1800.jpg?v=1583559927', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-003-185_B_1800x1800.jpg?v=1583559927'], shop: 'The Bombay Store', price: "Rs. 1,675", price2: "Rs. 1,599" },
    { name: 'Glowing Curved Handcrafted Wall Sconce Tea-Light Holders In Iron', category: 'Lighting', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-008-237_A_1800x1800.jpg?v=1583559595', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-008-237_B_1800x1800.jpg?v=1583559595'], shop: 'Anokhi', price: "Rs. 1,870", price2: "Rs. 1,699" },
    { name: 'Tribal Dhokra Lady Bohemian Brass Necklace Handmade In Dhokra Art', category: 'jewellery', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-031-039_A_1800x1800.jpg?v=1601457609', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-031-039_B_1800x1800.jpg?v=1601457609'], shop: 'jaypore', price: "Rs. 1069", price2: "Rs. 999" },
    { name: 'Dramatic Kundan Chandbali Earrings', category: 'jewellery', image: ['https://worldartcommunity.com/images/item-images/item_image_a8c38867d3a30dc13c648d5d0a3003f7.jpg', 'https://worldartcommunity.com/images/item-images/item_image_75260850055395bb515273825a0c80f1.jpg'], shop: 'jaypore', price: "Rs. 1,125", price2: "Rs. 1,049" },
    { name: 'GREEN MEENAKARI INDIAN ENAMEL JHUMKA', category: 'jewellery', image: ['https://worldartcommunity.com/images/item-images/item_image_7d53a1238e6fd9ff9e12c752ae9ea283.JPG', 'https://worldartcommunity.com/images/item-images/item_image_a1362b50146c7a965c834e791c31a3a4.JPG'], shop: 'jaypore', price: "Rs. 899", price2: "Rs. 799" },
    { name: '"Tribal Men Trio" Bohemian Brass Necklace Handcrafted In Dhokra Art', category: 'jewellery', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-031-023_A_1800x1800.jpg?v=1580469361', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-031-023_D_1800x1800.jpg?v=1580469361'], shop: 'Fabindia', price: "Rs. 1,021", price2: "Rs. 949" },
    { name: 'Symphony of Owls ohemian Handpainted Necklace In Recycled Wood', category: 'jewellery', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-031-044_A_1800x1800.jpg?v=1633422967', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-031-044_B_1800x1800.jpg?v=1633422967'], shop: 'Anokhi', price: "Rs. 1,069 ", price2: "Rs. 999" },
    { name: 'Symphony of Owls Bohemian Handpainted Earrings In Recycled Wood', category: 'jewellery', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-030-067_A_1800x1800.jpg?v=1633422833', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-030-067_B_1800x1800.jpg?v=1633422833'], shop: 'Anokhi', price: "Rs. 522", price2: "Rs. 449" },
    { name: 'Familyhood Memories Hand-Carved & Hand-Painted Wood Figurine Showpiece', category: 'show-piece', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/familyhood-memories-hand-carved-_-hand-painted-wood-figurine-showpiece_1_1800x1800.jpg?v=1653633485', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/familyhood-memories-hand-carved-_-hand-painted-wood-figurine-showpiece_2_1800x1800.jpg?v=1653633485'], shop: 'The Bombay Store', price: "Rs. 700", price2: "Rs. 649" },
    { name: 'The Ever Wise Owl Hand Carved Showpiece In Wood', category: 'show-piece', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-025-147_A_1800x1800.jpg?v=1650693618', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-025-147_B_1800x1800.jpg?v=1650693618'], shop: 'Anokhi', price: "Rs. 399", price2: "Rs. 349" },
    { name: 'Meenakari Royal Blue Elephant Family Handenamelled In Metal', category: 'show-piece', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-025-004_a_2_1800x1800.jpg?v=1570516416', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-025-004_b_2_1800x1800.jpg?v=1570516416'], shop: 'Fabindia', price: "Rs. 1,022", price2: "Rs. 999" },
    { name: 'Folk Music Mahotsav Handpainted Decorative Showpieces', category: 'show-piece', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-025-114_A_1800x1800.jpg?v=1629786224', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-025-114_B_1800x1800.jpg?v=1629786224'], shop: 'Anokhi', price: "Rs. 1,249", price2: "Rs. 1,199" },
    { name: 'Rajasthani Tribal Majdoor Ladies Hand-painted Tea Light Holder Cum Showpiece', category: 'show-piece', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-008-274_A_1800x1800.jpg?v=1626164442', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-008-274_B_1800x1800.jpg?v=1626164443'], shop: 'Anokhi', price: "Rs. 2,341", price2: "Rs. 2149" },
    { name: 'Meditating Face" Hand Carved Wooden Sculpture Showpiece', category: 'show-piece', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-025-083_A_1800x1800.jpg?v=1592559197', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-025-083_B_1800x1800.jpg?v=1592559198'], shop: 'The Bombay Store', price: "Rs. 900", price2: "Rs. 799" },
    { name: 'Rajasthani Folk Artist Hand-painted Decorative Showpiece', category: 'show-piece', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-025-094_A_1800x1800.jpg?v=1626163355', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-025-094_B_1800x1800.jpg?v=1626163354'], shop: 'Fabindia', price: "Rs. 999", price2: "Rs. 899" },
    { name: 'Rajasthani Kalbeliya Folk Dance Girl Handpainted Decorative Showpiece In Iron ', category: 'show-piece', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/rajasthani-kalbeliya-folk-dance-girl-handpainted-decorative-showpiece-in-iron-14_1_1800x1800.jpg?v=1650015381', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/rajasthani-kalbeliya-folk-dance-girl-handpainted-decorative-showpiece-in-iron-14_3_900x.jpg?v=1650015381'], shop: 'The Bombay Store', price: "Rs. 1199", price2: "Rs. 999" },
    { name: 'Floral Block Hand Carved Towel Ring Holder In Sheesham Wood', category: 'Bath', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-022-066_A_1800x1800.jpg?v=1604379457', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-022-066_B_1800x1800.jpg?v=1604379457'], shop: 'Anokhi', price: "Rs. 1499", price2: "Rs. 1,249" },
    { name: 'The Hut Essentials Hand-Painted Ceramic Bathroom Accessory', category: 'Bath', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-022-025_a_1800x1800.jpg?v=1570516049', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-022-025_b_1800x1800.jpg?v=1570516049'], shop: 'The Bombay Store', price: "Rs.1,599", price2: "Rs.1,399" },
    { name: 'Moroccan Essentials Handpainted Ceramic Bathroom Accessory', category: 'Bath', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-022-015_b_1800x1800.jpg?v=1570516180', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-022-015_a_1800x1800.jpg?v=1570516180'], price: "Rs. 899", price2: "Rs. 799" },
    { name: 'Owl On A Roll  Toilet Roll Holder With Hand Carved Owl Motif In Sheesham Wood', category: 'Bath', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-022-056_A_1800x1800.jpg?v=1591009947', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-022-056_A_1800x1800.jpg?v=1591009947'], shop: 'Fabindia', price: "Rs. 899", price2: "Rs. 799" },
    { name: '"The Blushing Flamingo" Rustic Aluminium Wall Decor & Wall Hook', category: 'Bath', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-002-115_A_1800x1800.jpg?v=1570515795', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-002-115_B_1800x1800.jpg?v=1570515795'], shop: 'Anokhi', price: "Rs. 500", price2: "Rs. 449" },
    { name: 'Owl Motif Towel Holder', category: 'Bath', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-022-023_a_1_1800x1800.jpg?v=1570516090', 'https://exclusivelane.com/collections/bath/products/owl-motif-towel-holder-upto-3-towels-el-022-023'], shop: 'Anokhi', price: "Rs. 549", price2: "Rs. 499" },
    { name: 'Owl Motif Tissue Roll Holder', category: 'Bath', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-022-024_a_1800x1800.jpg?v=1570516091', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-022-023_a_1_1800x1800.jpg?v=1570516090'], shop: 'Fabindia', price: "Rs. 899", price2: "Rs. 799" },
    { name: 'Motherly Owl Handcrafted Towel Holder in Gular Wood', category: 'Bath', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-022-074_A_1800x1800.jpg?v=1622535500', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-022-074_B_1800x1800.jpg?v=1622535500'], shop: 'Anokhi', price: "Rs. 1,000", price2: "Rs. 949" },
    { name: '"Twisted Tribal Warli" Bohemian Earrings Hand-painted In Warli Art', category: 'jewellery', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-030-024_A_1800x1800.jpg?v=1579778210', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-030-024_B_1800x1800.jpg?v=1579778210'], shop: 'jaypore', price: "Rs. 599", price2: "Rs. 555" },
    { name: '"Tribal Men Faces" Bohemain Brass & Cane Earrings Handcrafted In Dhokra Art', category: 'jewellery', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-030-022_A_1800x1800.jpg?v=1579776971', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-030-022_B_1800x1800.jpg?v=1579776971'], shop: 'jaypore', price: "Rs. 2,999", price2: "Rs. 2,499" },
    { name: 'Amber & Teal Studio Pottery Candle Holder In Ceramic', category: 'Lighting', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-008-228_A_9119bcf6-5566-403c-a6f8-79a246868e22_1800x1800.jpg?v=1584681646', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-008-228_B_d7f361b2-f60b-485d-8af6-971ecc567e3f_1800x1800.jpg?v=1584681646'], shop: 'Anokhi', price: "Rs. 699", price2: "Rs. 555" },
    { name: 'Tamatina Kalamkari Art', category: 'Desk Decor', image: ['https://m.media-amazon.com/images/I/91jLk1AT1HL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/713ckpnAWDL._SL1152_.jpg'], shop: 'Fabindia', price: "Rs. 4999", price2: "Rs. 3599" },
    { name: 'Ruchit Handicraft Planter Pot', category: 'Desk Decor', image: ['https://m.media-amazon.com/images/I/51lbHoO7XcL.jpg', 'https://m.media-amazon.com/images/I/51+n+CT6ejL.jpg'], shop: 'The Bombay Store', price: "Rs. 1299", price2: "Rs. 999" },
    { name: '"Rustic Mughal Door" Handcrafted Tea-Light Holder & Hanging Pillar Candle In Iron', category: 'Lighting', image: ['https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-008-182_A_1800x1800.jpg?v=1569909829', 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-008-182_C_1800x1800.jpg?v=1569909829'], shop: 'Fabindia', price: "Rs. 650", price2: "Rs. 599" },
];

function showProductsByCategory(category) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';
    const categoryProducts = products.filter(product => product.category === category);
    for (const product of categoryProducts) {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <div id="imgbox">
                <img id="image1" src="${product.image[0]}" alt="${product.name}">
                <img id="image2" src="${product.image[1]}" alt="${product.name}">
            </div>
            <div id="detbox">
            <h3 id="pname">${product.name}</h3>
            <p>by ${product.shop}</p>
            <div id="price">
            <span id="rrs">${product.price}</span>
            <span id="grs">${product.price2}</span>
            </div>
            </div>
          `;
        productElement.addEventListener('click', () => {
            const productPageUrl = `product.html?name=${encodeURIComponent(product.name)}`;
            window.location.href = productPageUrl;
        });
        productContainer.appendChild(productElement);
    }
    const productNames = document.querySelectorAll('#pname');

    productNames.forEach(name => {
        const words = name.innerText.split(' ');
        const limitedWords = words.slice(0, 3); // Limit to 3 words
        const limitedName = limitedWords.join(' ');
        name.innerText = limitedName;
    });
}
const shops = [
    { name: "Fabindia", image: ["https://images.unsplash.com/photo-1627237071420-a0875e1c421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80", "https://images.unsplash.com/photo-1627237072145-d66843b1616b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80"], desc: "This is a popular chain of stores that sells a wide range of Indian handicrafts, including clothing, home decor, and personal care products." },
    { name: "Anokhi", image: ["https://images.pexels.com/photos/6118897/pexels-photo-6118897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/6118896/pexels-photo-6118896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"], desc: "Anokhi is another well-known brand that specializes in block-printed textiles, clothing, and home furnishings." },
    { name: "Good Earth", image: ["https://images.unsplash.com/photo-1641582163466-e4d573078f98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1641582163456-c3123a3f8063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"], desc: "Good Earth is a luxury home decor and lifestyle brand that features a range of handmade Indian products, including textiles, ceramics, and furniture." },
    { name: "Jaypore", image: ["https://images.unsplash.com/photo-1629212191994-76eccd4aeb17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80", "https://images.unsplash.com/photo-1608793733118-ee3f16002251?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1393&q=80"], desc: " Jaypore is an online store that features a carefully curated collection of handmade products from across India, jewelry, and home decor." },
    { name: "The Bombay Store", image: ["https://images.unsplash.com/photo-1615640325967-af4cfa4c0c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", "https://images.unsplash.com/photo-1629140877328-77e5a10019e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"], desc: "The Bombay Store is a chain of stores that sells a range of Indian handicrafts, including clothing, home decor, and souvenirs." },
    { name: "Kama Ayurveda", image: ["https://images.pexels.com/photos/3760983/pexels-photo-3760983.jpeg", "https://images.unsplash.com/photo-1671167051711-1fcc8ddd7d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"], desc: "Kama Ayurveda is a brand that specializes in natural and organic beauty and personal care products based on traditional Ayurvedic principles." },
    
]
shops.forEach(shop => {
    const { name, image, desc } = shop;
    const shopHTML = `
    <div id="shopcard">
        <div id="imgbox">
            <img src="${image[0]}" alt="${name}">
        </div>
        <div id="detbox">
            <h3>${name}</h3>
            <p>${desc} </p>
            <button id="str">Visit Store</button>

        </div>
    </div>
    `;
    const cardContainer = document.querySelector('#shops');
    cardContainer.innerHTML += shopHTML;
});

function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#sections"),
        smooth: true,

        tablet: { smooth: true },

        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#sections", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init();





document.querySelectorAll("#middle").forEach((container) => {
    const items = container.querySelectorAll("#ban1"),
        itemsMax = items.length - 1;
    const next = container.querySelector(".next"),
        prev = container.querySelector(".prev"),
        dots = container.querySelector(".dots");
    let index = 0;
    const move = 100;
    const timer = 3500;
    const duration = 1;
    let autoplay;
    
    function init() {
        
        items.forEach((item, index) => {
            const dot = document.createElement("li");
            if (index === 0) dot.classList.add("active"); 
         
            dot.addEventListener("click", () => {
                slideLogic(false, index);
            });

            if (dots) dots.appendChild(dot);
        });
      
        gsap.set(items, { autoAlpha: 0 });
        gsap.set(["#middle", items[index]], { autoAlpha: 1 });
        gsap.from(items[index], { autoAlpha: 0, x: move });
        autoplay = window.setTimeout(slideLogic, timer);
    }
  
    init();
    
    if (window.Draggable) {
        Draggable.create(items, {
            type: "x", 
            zIndexBoost: false,
            onDragStart: function () {
                window.clearTimeout(autoplay);
                slideLogic(this.getDirection() === "right" ? true : false);
            }
        });
    }
 
    function dotActive(index) {
        const dotsAll = dots.querySelectorAll("li");
        dotsAll.forEach((dot) => {
            dot.classList.remove("active");
        });
        dotsAll[index].classList.add("active");
    }
   
    function slideAnimation(index, moveIn, outIn) {
  
        gsap.set(items, { xPercent: 0, scale: 1 });
        gsap.set(items[moveIn], { autoAlpha: 1 });

        const tl = gsap.timeline({
            defaults: {
                duration: duration
            },
            onStart: animationStart,
            onComplete: animationDone
        });
        
        tl.to(items[index], { scale: 0.4, autoAlpha: 0 });
        tl.set(items[index], { autoAlpha: 0 });
        tl.from(items[moveIn], { scale: 0.4, autoAlpha: 0 });
      
    }
    function animationStart() {
        container.classList.add("running");
    }
    function animationDone() {
        toggleButtons();
        autoplay = window.setTimeout(slideLogic, timer);
        container.classList.remove("running");
        gsap.set(items, { x: 0 });
    }
  
    function slideLogic(prev, customMoveIn) {
        toggleButtons(); // Disable buttons
        window.clearTimeout(autoplay); // disable autoplay
        let outIn = [-move, move];
        if (prev) outIn.reverse();
        let moveIn;
        // Check if moveIn is passed with the function
        if (typeof customMoveIn === "undefined") {
            if (prev) {
                moveIn = index === 0 ? itemsMax : index - 1;
            } else {
                moveIn = index === itemsMax ? 0 : index + 1;
            }
        } else {
            moveIn = customMoveIn;
        }
        if (dots) dotActive(moveIn);
        slideAnimation(index, moveIn, outIn);
        if (typeof customMoveIn === "undefined") {
            if (prev) {
                index === 0 ? (index = itemsMax) : index--;
            } else {
                index === itemsMax ? (index = 0) : index++;
            }
        } else {
            index === itemsMax ? (index = 0) : (index = customMoveIn++);
        }
    }

    function toggleButtons() {
        if (next) next.disabled = !next.disabled;
        if (prev) prev.disabled = !prev.disabled;
    }
    if (next) next.addEventListener("click", () => slideLogic());
    if (prev) prev.addEventListener("click", () => slideLogic(true));
    
});

const load = gsap.timeline({
    paused: "true"
})
load.to("#percent , #bar", {
    duration: .2,
    opacity: 0,
    zIndex: -1
})
load.to(".progress", {
    duration: 1,
    width: "0%"
})
load.from("#main", {
    duration: .8,
    opacity: 0,
    ease: "Power4.out"
}, "-=.5")
load.from("#nav", {
    duration: .5,
    y: 50,
    skewY: 10,
    opacity: 0
}, "-=1")
load.to("#horas",{
    x: 1700,
    ease:"none",
    duration: 8,
})
load.from(".ppp6",{
    x:-500,
    opacity:0,
    delay:-8,
    duration:4,
    ease: Expo.easeInOut

})
load.to(".ppp6",{
    x:0,
    opacity:1,
    duration:3,
    delay:-6,

})
load.to(".ppp5",{
    height:"25vh",
    opacity:1,
    duration: 0.1,
    delay: -5.3,
    ease: "Power4.out"
    
})
load.to(".ppp4",{
    height: "25vh",
    opacity:1,
    duration: 0.1,
    delay: -4.5,
    ease: "Power4.out"

})
load.to(".ppp3",{
    height: "25vh",
    opacity:1,
    duration: 0.1,
    delay: -3.8,
    ease: "Power4.out"

})
load.to(".ppp2",{
    height: "25vh",
    opacity:1,
    duration: 0.1,
    delay: -3.0,
    ease: "Power4.out"

})
load.to(".ppp1",{
    height: "25vh",
    opacity:1,
    duration: 0.1,
    delay: -2.2,
    ease: "Power4.out"

})

var id, width = 1;
function loading() {
    id = setInterval(frame, 25);
}
function frame() {
    if (width >= 100) {
        clearInterval(id)
        load.play();
    }
    else {
        width++;
        document.getElementById("barconfirm").style.width = width + '%';
        document.getElementById("percent").innerHTML = width + '%';
    }
}

    document.addEventListener("DOMContentLoaded", function () {
        
    loading();
    })
    


let FollowBox = "#Wrap .FollowBox";
gsap.set(FollowBox, {
    xPercent: -50,
    yPercent: -50,
    scale: 0
});


window.addEventListener("mousemove", (e) => {

    let mapper = gsap.utils.mapRange(0, 30, 0, 1);
    let speed = Math.abs(e.movementX) + Math.abs(e.movementY)
    let mappedSpeed = mapper(speed);
    let clamp = gsap.utils.clamp(0, 1)


    gsap.to(FollowBox, {
        duration: 0.5,
        overwrite: "auto",
        x: e.clientX,
        y: e.clientY,
        stagger: 0.2,
        ease: "none"
    });

    gsap.to(FollowBox, {
        ease: 'none',
        duration: 0.3,
        overwrite: "auto",
        stagger: 0.2,
        scale: clamp(mappedSpeed),
    });
});

var index = 0;
var slides = document.querySelectorAll(".slides");

function changeSlide() {

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index > slides.length - 1) {
        index = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";

    index++;

    setTimeout(changeSlide, 2000);

}

changeSlide();













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

var params = { alpha: false, depth: false, stencil: false, antialias: false };
var gl = canvas.getContext('webgl2', params);
var isWebGL2 = !!gl;
if (!isWebGL2) {
    gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);
}
gl.clearColor(0.0, 0.0, 0.0, 1.0);

var halfFloat = gl.getExtension('OES_texture_half_float');
var support_linear_float = gl.getExtension('OES_texture_half_float_linear');
if (isWebGL2) {
    gl.getExtension('EXT_color_buffer_float');
    support_linear_float = gl.getExtension('OES_texture_float_linear');
}

var TEXTURE_DOWNSAMPLE = 1;
var DENSITY_DISSIPATION = 0.98;
var VELOCITY_DISSIPATION = 0.99;
var SPLAT_RADIUS = 0.005;
var CURL = 30;
var PRESSURE_ITERATIONS = 25;

var GLProgram = function () {
    function GLProgram(vertexShader, fragmentShader) {
        _classCallCheck(this, GLProgram);

        this.uniforms = {};
        this.program = gl.createProgram();

        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) throw gl.getProgramInfoLog(this.program);

        var uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
        for (var i = 0; i < uniformCount; i++) {
            var uniformName = gl.getActiveUniform(this.program, i).name;
            this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName);
        }
    }

    GLProgram.prototype.bind = function bind() {
        gl.useProgram(this.program);
    };

    return GLProgram;
}();

function compileShader(type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(shader);

    return shader;
};

var baseVertexShader = compileShader(gl.VERTEX_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n');

var displayShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n\n    void main () {\n        gl_FragColor = texture2D(uTexture, vUv);\n    }\n');

var splatShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n');

var advectionManualFilteringShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    vec4 bilerp (in sampler2D sam, in vec2 p) {\n        vec4 st;\n        st.xy = floor(p - 0.5) + 0.5;\n        st.zw = st.xy + 1.0;\n        vec4 uv = st * texelSize.xyxy;\n        vec4 a = texture2D(sam, uv.xy);\n        vec4 b = texture2D(sam, uv.zy);\n        vec4 c = texture2D(sam, uv.xw);\n        vec4 d = texture2D(sam, uv.zw);\n        vec2 f = p - st.xy;\n        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n    }\n\n    void main () {\n        vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;\n        gl_FragColor = dissipation * bilerp(uSource, coord);\n        gl_FragColor.a = 1.0;\n    }\n');

var advectionShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    void main () {\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        gl_FragColor = dissipation * texture2D(uSource, coord);\n    }\n');

var divergenceShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n\n    vec2 sampleVelocity (in vec2 uv) {\n        vec2 multiplier = vec2(1.0, 1.0);\n        if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }\n        if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }\n        if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }\n        if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }\n        return multiplier * texture2D(uVelocity, uv).xy;\n    }\n\n    void main () {\n        float L = sampleVelocity(vL).x;\n        float R = sampleVelocity(vR).x;\n        float T = sampleVelocity(vT).y;\n        float B = sampleVelocity(vB).y;\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n');

var curlShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);\n    }\n');

var vorticityShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n\n    void main () {\n        float L = texture2D(uCurl, vL).y;\n        float R = texture2D(uCurl, vR).y;\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n        vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L));\n        force *= 1.0 / length(force + 0.00001) * curl * C;\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n');

var pressureShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n\n    vec2 boundary (in vec2 uv) {\n        uv = min(max(uv, 0.0), 1.0);\n        return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n');

var gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, '\n    precision highp float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n\n    vec2 boundary (in vec2 uv) {\n        uv = min(max(uv, 0.0), 1.0);\n        return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n');

var blit = function () {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    return function (destination) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    };
}();

function clear(target) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, target);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function createFBO(texId, w, h, internalFormat, format, type, param) {
    gl.activeTexture(gl.TEXTURE0 + texId);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

    var fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);

    return [texture, fbo, texId];
}

function createDoubleFBO(texId, w, h, internalFormat, format, type, param) {
    var fbo1 = createFBO(texId, w, h, internalFormat, format, type, param);
    var fbo2 = createFBO(texId + 1, w, h, internalFormat, format, type, param);

    return {
        get first() {
            return fbo1;
        },
        get second() {
            return fbo2;
        },
        swap: function swap() {
            var temp = fbo1;
            fbo1 = fbo2;
            fbo2 = temp;
        }
    };
}

var textureWidth = undefined;
var textureHeight = undefined;
var density = undefined;
var velocity = undefined;
var divergence = undefined;
var curl = undefined;
var pressure = undefined;

function initFramebuffers() {
    textureWidth = gl.drawingBufferWidth >> TEXTURE_DOWNSAMPLE;
    textureHeight = gl.drawingBufferHeight >> TEXTURE_DOWNSAMPLE;

    var internalFormat = isWebGL2 ? gl.RGBA16F : gl.RGBA;
    var internalFormatRG = isWebGL2 ? gl.RG16F : gl.RGBA;
    var formatRG = isWebGL2 ? gl.RG : gl.RGBA;
    var texType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;

    density = createDoubleFBO(0, textureWidth, textureHeight, internalFormat, gl.RGBA, texType, support_linear_float ? gl.LINEAR : gl.NEAREST);
    velocity = createDoubleFBO(2, textureWidth, textureHeight, internalFormatRG, formatRG, texType, support_linear_float ? gl.LINEAR : gl.NEAREST);
    divergence = createFBO(4, textureWidth, textureHeight, internalFormatRG, formatRG, texType, gl.NEAREST);
    curl = createFBO(5, textureWidth, textureHeight, internalFormatRG, formatRG, texType, gl.NEAREST);
    pressure = createDoubleFBO(6, textureWidth, textureHeight, internalFormatRG, formatRG, texType, gl.NEAREST);
}

initFramebuffers();

var displayProgram = new GLProgram(baseVertexShader, displayShader);
var splatProgram = new GLProgram(baseVertexShader, splatShader);
var advectionProgram = new GLProgram(baseVertexShader, support_linear_float ? advectionShader : advectionManualFilteringShader);
var divergenceProgram = new GLProgram(baseVertexShader, divergenceShader);
var curlProgram = new GLProgram(baseVertexShader, curlShader);
var vorticityProgram = new GLProgram(baseVertexShader, vorticityShader);
var pressureProgram = new GLProgram(baseVertexShader, pressureShader);
var gradienSubtractProgram = new GLProgram(baseVertexShader, gradientSubtractShader);

function pointerPrototype() {
    this.id = -1;
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
    this.down = false;
    this.moved = false;
    this.color = [30, 0, 300];
}

var pointers = [];
pointers.push(new pointerPrototype());

for (var i = 0; i < 10; i++) {
    var color = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
    var x = canvas.width * Math.random();
    var y = canvas.height * Math.random();
    var dx = 1000 * (Math.random() - 0.5);
    var dy = 1000 * (Math.random() - 0.5);
    splat(x, y, dx, dy, color);
}

var lastTime = Date.now();
Update();

function Update() {
    resizeCanvas();

    var dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
    lastTime = Date.now();

    gl.viewport(0, 0, textureWidth, textureHeight);

    advectionProgram.bind();
    gl.uniform2f(advectionProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2]);
    gl.uniform1i(advectionProgram.uniforms.uSource, velocity.first[2]);
    gl.uniform1f(advectionProgram.uniforms.dt, dt);
    gl.uniform1f(advectionProgram.uniforms.dissipation, VELOCITY_DISSIPATION);
    blit(velocity.second[1]);
    velocity.swap();

    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2]);
    gl.uniform1i(advectionProgram.uniforms.uSource, density.first[2]);
    gl.uniform1f(advectionProgram.uniforms.dissipation, DENSITY_DISSIPATION);
    blit(density.second[1]);
    density.swap();

    for (var i = 0; i < pointers.length; i++) {
        var pointer = pointers[i];
        if (pointer.moved) {
            splat(pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color);
            pointer.moved = false;
        }
    }

    curlProgram.bind();
    gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
    gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.first[2]);
    blit(curl[1]);

    vorticityProgram.bind();
    gl.uniform2f(vorticityProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
    gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.first[2]);
    gl.uniform1i(vorticityProgram.uniforms.uCurl, curl[2]);
    gl.uniform1f(vorticityProgram.uniforms.curl, CURL);
    gl.uniform1f(vorticityProgram.uniforms.dt, dt);
    blit(velocity.second[1]);
    velocity.swap();

    divergenceProgram.bind();
    gl.uniform2f(divergenceProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
    gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.first[2]);
    blit(divergence[1]);

    clear(pressure.first[1]);
    pressureProgram.bind();
    gl.uniform2f(pressureProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
    gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence[2]);
    for (var i = 0; i < PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.first[2]);
        blit(pressure.second[1]);
        pressure.swap();
    }

    gradienSubtractProgram.bind();
    gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
    gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.first[2]);
    gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.first[2]);
    blit(velocity.second[1]);
    velocity.swap();

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    displayProgram.bind();
    gl.uniform1i(displayProgram.uniforms.uTexture, density.first[2]);
    blit(null);

    requestAnimationFrame(Update);
}

function splat(x, y, dx, dy, color) {
    splatProgram.bind();
    gl.uniform1i(splatProgram.uniforms.uTarget, velocity.first[2]);
    gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    gl.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
    gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
    gl.uniform1f(splatProgram.uniforms.radius, SPLAT_RADIUS);
    blit(velocity.second[1]);
    velocity.swap();

    gl.uniform1i(splatProgram.uniforms.uTarget, density.first[2]);
    gl.uniform3f(splatProgram.uniforms.color, color[0] * 0.3, color[1] * 0.3, color[2] * 0.3);
    blit(density.second[1]);
    density.swap();
}

function resizeCanvas() {
    if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        initFramebuffers();
    }
}

canvas.addEventListener('mousemove', function (e) {
    pointers[0].moved = pointers[0].down;
    pointers[0].dx = (e.offsetX - pointers[0].x) * 10.0;
    pointers[0].dy = (e.offsetY - pointers[0].y) * 10.0;
    pointers[0].x = e.offsetX;
    pointers[0].y = e.offsetY;
    pointers[0].down = true;
});

canvas.addEventListener('touchmove', function (e) {
    e.preventDefault();
    var touches = e.targetTouches;
    for (var i = 0; i < e.touches.length; i++) {
        var pointer = pointers[i];
        pointer.moved = pointer.down;
        pointer.dx = (touches[i].pageX - pointer.x) * 10.0;
        pointer.dy = (touches[i].pageY - pointer.y) * 10.0;
        pointer.x = touches[i].pageX;
        pointer.y = touches[i].pageY;
    }
}, false);

canvas.addEventListener('mousedown', function () {
    pointers[0].down = true;
    pointers[0].color = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2];
});

canvas.addEventListener('touchstart', function (e) {
    var touches = e.targetTouches;
    for (var i = 0; i < touches.length; i++) {
        if (i >= pointers.length) pointers.push(new pointerPrototype());

        pointers[i].id = touches[i].identifier;
        pointers[i].down = true;
        pointers[i].x = touches[i].pageX;
        pointers[i].y = touches[i].pageY;
        pointers[i].color = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2];
    }
});

window.addEventListener('mouseup', function () {
    pointers[0].down = true;
});

window.addEventListener('touchend', function (e) {
    var touches = e.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        for (var j = 0; j < pointers.length; j++) {
            if (touches[i].identifier == pointers[j].id) pointers[j].down = false;
        }
    }
});