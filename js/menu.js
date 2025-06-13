const menus = [
    { name: 'Dimsum Jamur', price: 4000, image: 'image/dimsumjamur.jpg' },
    { name: 'Dimsum Keju', price: 4000, image: 'image/dimsumkeju.jpg' },
    { name: 'Dimsum Wortel', price: 4000, image: 'image/dimsumwortel.jpg' },
    { name: 'Tahu Bakso Jamur', price: 5000, image: 'image/tahubaksojamur.jpg' },
    { name: 'Tahu Bakso Keju', price: 5000, image: 'image/tahubaksokeju.jpg' },
    { name: 'Tahu Bakso Mercon', price: 5000, image: 'image/tahubaksomercon.jpg' }
];

const menuContainer = document.getElementById('menuContainer');

menus.forEach(menu => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
        <div class="menu-item h-100">
          <img src="${menu.image}" alt="${menu.name}">
          <div class="menu-title">${menu.name}</div>
          <div class="menu-price">Rp ${menu.price.toLocaleString()}/per pcs</div>
          <a href="pembelian.html?name=${encodeURIComponent(menu.name)}&price=${menu.price}" class="btn btn-order">Pesan Sekarang</a>
        </div>
      `;

    menuContainer.appendChild(col);
});