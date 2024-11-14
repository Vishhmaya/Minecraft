// Basic product data stored in a JavaScript object
games = [
  {
    id: 0,
    name: "Minecraft: Java Version",
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.p28SwSfeKFV-TD7OuszdPgHaEK&pid=Api&rs=1&c=1&qlt=95&w=211&h=118",
      "http://wallpapercave.com/wp/auJMeHt.jpg",
      "https://img.redbull.com/images/c_fill,w_1500,h_1000,g_auto,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft",
    ],
    rating: `Minecraft is rated E10+.
    This means the game is suitable
    for players aged 10 and above,
    due to Mild fantasy violence
    and Interactive elements Parental
    discretion advised.`,
    price: "$29.99 USD ",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    btnlink:
      "https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc",
  },

  {
    id: 1,
    name: "Minecraft: Legends",
    images: [
      "https://www.minecraft.net/content/dam/games/badger/screenshots/Minecraft%20Legends%20Official%20Launch%20Trailer%20Thumbnail%2016_9_logo.png",
      "https://staticc.sportskeeda.com/editor/2022/10/7b91e-16660708289750-1920.jpg",
      "https://cdn.mos.cms.futurecdn.net/dmYxgXT976yb8Fbky7brfm.jpg",
    ],
    rating: `Minecraft is rated E10+.
    This means the game is suitable
    for players aged 10 and above,
    due to Mild fantasy violence
    and Interactive elements Parental
    discretion advised.`,
    price: "$39.99 USD ",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    btnlink: "https://www.minecraft.net/en-us/about-legends",
  },
  {
    id: 2,
    name: "Minecraft: Dungeons",
    images: [
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000021401/59686225dba24636062a421593effdb4fe136bbfd67b11c621fe92ed36a65734",
      "https://i.redd.it/k0spa33xyrr71.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReln4HbitIL0CouQxcg0_juRetquYI8SezNQ&s",
    ],
    rating: `Minecraft is rated E10+.
    This means the game is suitable
    for players aged 10 and above,
    due to Mild fantasy violence
    and Interactive elements Parental
    discretion advised.`,
    price: "$25.99 ",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    btnlink: "https://www.minecraft.net/en-us/about-dungeons",
  },
  {
    id: 3,
    name: "Minecraft: Education",
    images: [
      "https://cdn.mos.cms.futurecdn.net/mEgH3Mdp6uyBLixzxPfFQh.jpg",
      "https://education.minecraft.net/lessonimages/8992388631885311-Image%20(41).png",
      "https://i.ytimg.com/vi/T2NsS3DH9TY/maxresdefault.jpg",
    ],
    rating: `Minecraft is rated E10+.
    This means the game is suitable
    for players aged 10 and above,
    due to Mild fantasy violence
    and Interactive elements Parental
    discretion advised.`,
    price: "Free",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    btnlink: "https://education.minecraft.net/en-us",
  },
];

// Get product ID from the URL
const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");
// Load product details if the ID is found
if (gameId && games[gameId]) {
  const game = games[gameId];
  document.getElementById("gamename").textContent = game.name;
  document.getElementById("productPrice").textContent = game.price;
  document.getElementById("img1").src = game.images[0];
  document.getElementById("img2").src = game.images[1];
  document.getElementById("img3").src = game.images[2];
  document.getElementById("pre-purchase").href = game.btnlink;
}
