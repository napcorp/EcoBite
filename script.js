(function () {
  'use strict';

  var PRODUCTS = [
    {
      id: 1,
      name: 'Organic Heirloom Tomatoes',
      price: 89,
      originalPrice: 89,
      co2Saved: 120,
      plasticSaved: 45,
      producer: 'Sahyadri Organic Farm',
      producerType: 'Organic Farm',
      distance: 12,
      category: 'farm-fresh',
      tags: ['organic', 'seasonal', 'farm-fresh'],
      imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80',
      description: 'Vine-ripened heirloom varieties (Cherokee Purple and Green Zebra) grown in mineral-rich volcanic soil without synthetic inputs. Hand-picked at peak ripeness for natural sweetness and balanced acidity.',
      actionLabel: 'Harvested Today',
      timestamp: '6:30 AM',
      batchNote: 'Hand-picked at dawn for maximum firm texture and nutrient density.',
      isRescue: false,
      rescueType: null,
      rescueDiscount: 0
    },
    {
      id: 2,
      name: 'Pasture-Raised Country Eggs',
      price: 149,
      originalPrice: 149,
      co2Saved: 90,
      plasticSaved: 60,
      producer: 'Green Meadows Pastures',
      producerType: 'Regenerative Pasture',
      distance: 8,
      category: 'farm-fresh',
      tags: ['pasture-raised', 'protein', 'farm-fresh'],
      imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=700&q=80',
      description: 'Dozen farm-fresh eggs from heritage breeds allowed to forage freely on open grasslands. Vibrant amber yolks naturally rich in omega-3 fatty acids, zero prophylactic antibiotics or caged containment.',
      actionLabel: 'Gathered Today',
      timestamp: '5:45 AM',
      batchNote: 'Collected directly from open pasture nesting boxes before sunrise.',
      isRescue: false,
      rescueType: null,
      rescueDiscount: 0
    },
    {
      id: 3,
      name: 'Sourdough Country Loaf',
      price: 180,
      originalPrice: 180,
      co2Saved: 75,
      plasticSaved: 30,
      producer: 'Stone & Crust Bakehouse',
      producerType: 'Artisan Bakehouse',
      distance: 3,
      category: 'artisan-pantry',
      tags: ['artisan', 'fermented', 'zero-waste'],
      imageUrl: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=700&q=80',
      description: 'Naturally leavened using a 12-year-old sourdough culture and 100% stoneground heritage wheat. Fermented slowly over 48 hours for deep crust caramelisation, an open custard-like crumb, and easy digestion.',
      actionLabel: 'Baked Today',
      timestamp: '4:15 AM',
      batchNote: 'Pulled from stone hearth deck ovens this morning, wrapped in reusable unbleached wax paper.',
      isRescue: false,
      rescueType: null,
      rescueDiscount: 0
    },
    {
      id: 4,
      name: 'Cold-Pressed Virgin Coconut Oil',
      price: 320,
      originalPrice: 320,
      co2Saved: 200,
      plasticSaved: 150,
      producer: 'Kerala Coastal Collective',
      producerType: 'Fair-Trade Estate',
      distance: 42,
      category: 'artisan-pantry',
      tags: ['cold-pressed', 'zero-waste', 'organic'],
      imageUrl: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=700&q=80',
      description: 'Single-estate virgin coconut oil extracted with traditional wood presses (Chekku) at temperatures below 40°C. Raw, unbleached, and packed in heavy reusable glass deposit jars for circular return.',
      actionLabel: 'Cold-Pressed Batch',
      timestamp: '7:00 AM',
      batchNote: 'Extracted within three hours of coconut grating to retain natural medium-chain triglycerides.',
      isRescue: false,
      rescueType: null,
      rescueDiscount: 0
    },
    {
      id: 5,
      name: 'Field-Sorted Wonky Carrots',
      price: 45,
      originalPrice: 65,
      co2Saved: 180,
      plasticSaved: 35,
      producer: 'Riverdale Organics',
      producerType: 'Organic Farm',
      distance: 15,
      category: 'rescue-basket',
      tags: ['rescue', 'organic', 'zero-waste'],
      imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5c731?auto=format&fit=crop&w=700&q=80',
      description: 'Naturally crooked, forked, or twin-grown carrots saved from commercial cosmetic sorting. Grown in deep sandy loam without chemical pesticides; 100% sweet, crisp, and packed with beta-carotene.',
      actionLabel: 'Harvested Today',
      timestamp: '6:00 AM',
      batchNote: 'Harvested and sorted at dawn; rescued from standard supermarket aesthetic rejection.',
      isRescue: true,
      rescueType: 'wonky',
      rescueDiscount: 30
    },
    {
      id: 6,
      name: 'Day-Bake French Butter Croissants',
      price: 75,
      originalPrice: 150,
      co2Saved: 95,
      plasticSaved: 20,
      producer: 'Stone & Crust Bakehouse',
      producerType: 'Artisan Bakehouse',
      distance: 3,
      category: 'rescue-basket',
      tags: ['rescue', 'artisan', 'bakery'],
      imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
      description: 'Laminated with pure cultured butter and unbleached grain flour. Freshly baked at first light; offered at a 50% rescue incentive to ensure zero food waste by end of day.',
      actionLabel: 'Baked Today',
      timestamp: '5:00 AM',
      batchNote: 'Morning bake batch; recommended for same-day breakfast or afternoon reheating.',
      isRescue: true,
      rescueType: 'flash-expiry',
      rescueDiscount: 50
    },
    {
      id: 7,
      name: 'Wild Forest Blossom Honey',
      price: 450,
      originalPrice: 450,
      co2Saved: 250,
      plasticSaved: 180,
      producer: 'Nilgiri Biosphere Apiaries',
      producerType: 'Ethical Apiary',
      distance: 56,
      category: 'artisan-pantry',
      tags: ['wild-harvested', 'organic', 'zero-waste'],
      imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=80',
      description: 'Raw, unheated floral nectar sustainably gathered by indigenous beekeepers from mountain flora. Retains all living enzymes, bee pollen, and propolis in a reusable airtight glass jar.',
      actionLabel: 'Bottled Batch',
      timestamp: '8:00 AM',
      batchNote: 'Decanted directly from gravity mesh filters without heat processing.',
      isRescue: false,
      rescueType: null,
      rescueDiscount: 0
    },
    {
      id: 8,
      name: 'Tender Baby Spinach Microgreens',
      price: 65,
      originalPrice: 65,
      co2Saved: 110,
      plasticSaved: 40,
      producer: 'UrbanLeaf Vertical Farm',
      producerType: 'Zero-Pesticide Indoor Farm',
      distance: 2,
      category: 'farm-fresh',
      tags: ['microgreens', 'urban-farm', 'organic'],
      imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=700&q=80',
      description: 'Living baby spinach shoots grown hydroponically using closed-loop rainwater recycling. Located 2 km away, cutting traditional transit time from 4 days to under 45 minutes.',
      actionLabel: 'Harvested Today',
      timestamp: '7:30 AM',
      batchNote: 'Cut and packed to order this morning with moist root bases intact.',
      isRescue: false,
      rescueType: null,
      rescueDiscount: 0
    },
    {
      id: 9,
      name: 'Rescued Banana Walnut Loaf',
      price: 95,
      originalPrice: 190,
      co2Saved: 160,
      plasticSaved: 25,
      producer: 'The Good Loaf Bakery',
      producerType: 'Community Bakery',
      distance: 5,
      category: 'rescue-basket',
      tags: ['rescue', 'zero-waste', 'bakery'],
      imageUrl: 'https://images.unsplash.com/photo-1605698802004-94444583160e?auto=format&fit=crop&w=700&q=80',
      description: 'Rich, moist tea loaf baked using fully ripe surplus bananas diverted from local mandis. Naturally sweet, scented with Ceylon cinnamon, and topped with whole Kashmiri walnuts.',
      actionLabel: 'Baked Today',
      timestamp: '6:15 AM',
      batchNote: 'Each loaf directly diverts 4 ripe bananas from organic municipal composting.',
      isRescue: true,
      rescueType: 'flash-expiry',
      rescueDiscount: 50
    },
    {
      id: 10,
      name: 'Aged Heritage Basmati Rice',
      price: 280,
      originalPrice: 280,
      co2Saved: 140,
      plasticSaved: 200,
      producer: 'Dehradun Valley Grain Trust',
      producerType: 'Heritage Farm Collective',
      distance: 38,
      category: 'artisan-pantry',
      tags: ['heritage', 'organic', 'zero-waste'],
      imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80',
      description: 'Traditional Dehraduni basmati aged for 18 months in aerated grain silos to deepen fragrance and reduce starch moisture. Grains expand cleanly with distinct floral notes.',
      actionLabel: 'Milled Batch',
      timestamp: '9:00 AM',
      batchNote: 'De-husked on small stone mills and packaged in breathable compostable cotton sacks.',
      isRescue: false,
      rescueType: null,
      rescueDiscount: 0
    },
    {
      id: 11,
      name: 'Surplus Bell Peppers Trio',
      price: 55,
      originalPrice: 79,
      co2Saved: 130,
      plasticSaved: 30,
      producer: 'Riverdale Organics',
      producerType: 'Organic Farm',
      distance: 15,
      category: 'rescue-basket',
      tags: ['rescue', 'organic', 'seasonal'],
      imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=700&q=80',
      description: 'A crisp selection of red, amber, and green bell peppers with minor size variances. Completely firm, thick-walled, and juicy, perfect for roasting, curries, or raw salads.',
      actionLabel: 'Harvested Today',
      timestamp: '6:45 AM',
      batchNote: 'Sorted out by automated supermarket caliber cameras despite pristine freshness.',
      isRescue: true,
      rescueType: 'wonky',
      rescueDiscount: 30
    },
    {
      id: 12,
      name: 'A2 Cultured Spiced Buttermilk',
      price: 60,
      originalPrice: 60,
      co2Saved: 85,
      plasticSaved: 50,
      producer: 'Gir Meadows Dairy',
      producerType: 'Indigenous Cattle Dairy',
      distance: 22,
      category: 'farm-fresh',
      tags: ['a2-milk', 'probiotic', 'farm-fresh'],
      imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80',
      description: 'Artisanal probiotic chaas cultured overnight from whole A2 milk of free-grazing indigenous Gir cows. Infused with slow-roasted cumin, curry leaves, ginger, and pink Himalayan rock salt.',
      actionLabel: 'Slow-Churned Today',
      timestamp: '5:30 AM',
      batchNote: 'Churned at sunrise in earthen pots and poured into reusable deposit glass bottles.',
      isRescue: false,
      rescueType: null,
      rescueDiscount: 0
    }
  ];

  var ECO_ZONES = [
    '560001', '560002', '560003', '560004', '560005',
    '560008', '560010', '560011', '560017', '560020',
    '560025', '560030', '560034', '560037', '560038',
    '560040', '560041', '560043', '560045', '560047',
    '560048', '560050', '560055', '560060', '560066',
    '560068', '560070', '560076', '560078', '560080',
    '560085', '560090', '560095', '560100', '560102',
    '400001', '400002', '400003', '400004', '400005',
    '400050', '400051', '400053', '400055', '400058',
    '110001', '110002', '110003', '110005', '110006',
    '600001', '600002', '600004', '600006', '600008',
    '500001', '500002', '500003', '500004', '500005'
  ];

  var state = {
    cart: [],
    jarBack: false,
    activeCategory: 'all',
    searchQuery: '',
    inventory: {},
    drawerProductId: null
  };

  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return document.querySelectorAll(sel); };

  function init() {
    generateInventory();
    loadCart();
    renderProducts();
    bindEvents();
    updateCartUI();
    updateImpactBar();
  }

  function generateInventory() {
    PRODUCTS.forEach(function (p) {
      var rand = Math.random();
      if (rand < 0.4) {
        state.inventory[p.id] = Math.floor(Math.random() * 4) + 1;
      } else {
        state.inventory[p.id] = 50;
      }
    });
  }

  function saveCart() {
    localStorage.setItem('ecobite_cart', JSON.stringify(state.cart));
    localStorage.setItem('ecobite_jarback', JSON.stringify(state.jarBack));
  }

  function loadCart() {
    try {
      var saved = localStorage.getItem('ecobite_cart');
      var jarBack = localStorage.getItem('ecobite_jarback');
      if (saved) state.cart = JSON.parse(saved);
      if (jarBack) state.jarBack = JSON.parse(jarBack);
    } catch (e) {
      state.cart = [];
      state.jarBack = false;
    }
  }

  function getProduct(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
  }

  function getCartItem(id) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === id) return state.cart[i];
    }
    return null;
  }

  function getCartQty(id) {
    var item = getCartItem(id);
    return item ? item.qty : 0;
  }

  function cartTotals() {
    var price = 0, co2 = 0, plastic = 0;
    state.cart.forEach(function (item) {
      var p = getProduct(item.id);
      if (p) {
        price += p.price * item.qty;
        co2 += p.co2Saved * item.qty;
        plastic += p.plasticSaved * item.qty;
      }
    });
    if (state.jarBack && state.cart.length > 0) {
      price = Math.max(0, price - 30);
    }
    return { price: price, co2: co2, plastic: plastic };
  }

  function cartCount() {
    var count = 0;
    state.cart.forEach(function (item) { count += item.qty; });
    return count;
  }

  function filterProducts() {
    var q = state.searchQuery.toLowerCase().trim();
    var cat = state.activeCategory;
    return PRODUCTS.filter(function (p) {
      var matchCat = cat === 'all' || p.category === cat;
      if (!matchCat) return false;
      if (!q) return true;
      if (p.name.toLowerCase().indexOf(q) !== -1) return true;
      if (p.producer.toLowerCase().indexOf(q) !== -1) return true;
      if (p.producerType.toLowerCase().indexOf(q) !== -1) return true;
      for (var i = 0; i < p.tags.length; i++) {
        if (p.tags[i].toLowerCase().indexOf(q) !== -1) return true;
      }
      return false;
    });
  }

  function renderProducts() {
    var grid = $('#products-grid');
    var noResults = $('#no-results');
    var title = $('#section-title');
    var filtered = filterProducts();

    var catNames = {
      'all': 'All Provisions',
      'farm-fresh': 'Farm Fresh Produce & Dairy',
      'artisan-pantry': 'Artisan Pantry & Bakery',
      'rescue-basket': 'Surplus & Rescue Basket'
    };
    title.textContent = catNames[state.activeCategory] || 'All Provisions';

    if (filtered.length === 0) {
      grid.innerHTML = '';
      noResults.style.display = 'block';
      return;
    }

    noResults.style.display = 'none';
    var html = '';

    filtered.forEach(function (p) {
      var inv = state.inventory[p.id];
      var invHtml = '';
      if (inv <= 5) {
        invHtml = '<span class="product-inventory">Only ' + inv + ' units left today</span>';
      }

      var ribbonHtml = '';
      if (p.isRescue) {
        ribbonHtml = '<span class="rescue-ribbon">Rescue · ' + p.rescueDiscount + '% Off</span>';
      }

      var priceHtml = '₹' + p.price;
      if (p.isRescue && p.originalPrice > p.price) {
        priceHtml += '<span class="original-price">₹' + p.originalPrice + '</span>';
      }

      var tagsHtml = '';
      p.tags.forEach(function (t) {
        tagsHtml += '<span class="tag">' + t + '</span>';
      });

      html += '<article class="product-card" data-id="' + p.id + '">' +
        '<div class="product-image">' +
          ribbonHtml +
          '<img src="' + p.imageUrl + '" alt="' + p.name + '" class="product-img" loading="lazy" onerror="this.style.opacity=0.3;">' +
        '</div>' +
        '<div class="product-body">' +
          '<div class="product-tags">' + tagsHtml + '</div>' +
          (invHtml ? '<div class="inventory-row">' + invHtml + '</div>' : '') +
          '<h2 class="product-name">' + p.name + '</h2>' +
          '<p class="product-farm">' + p.producer + ' · ' + p.distance + ' km</p>' +
          '<div class="product-meta">' +
            '<span class="product-eco">' + p.co2Saved + 'g CO₂ offset</span>' +
            '<span class="product-eco-dot">·</span>' +
            '<span class="product-eco">' + p.plasticSaved + 'g plastic saved</span>' +
          '</div>' +
          '<div class="product-bottom">' +
            '<div class="price-container">' +
              '<span class="product-price">' + priceHtml + '</span>' +
            '</div>' +
            '<button class="add-to-cart-btn" data-id="' + p.id + '" onclick="event.stopPropagation()">Add to Basket</button>' +
          '</div>' +
        '</div>' +
      '</article>';
    });

    grid.innerHTML = html;
  }

  function updateCartUI() {
    var badge = $('#cart-badge');
    var count = cartCount();
    badge.textContent = count;
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');

    var cartItems = $('#cart-items');
    var cartEmpty = $('#cart-empty');
    var cartFooter = $('#cart-footer');
    var jarToggle = $('#jar-back-toggle');
    var cashbackBadge = $('#cashback-badge');

    jarToggle.checked = state.jarBack;
    if (state.jarBack && state.cart.length > 0) {
      cashbackBadge.classList.add('visible');
    } else {
      cashbackBadge.classList.remove('visible');
    }

    if (state.cart.length === 0) {
      cartItems.innerHTML = '';
      cartItems.style.display = 'none';
      cartEmpty.classList.add('visible');
      cartFooter.classList.remove('visible');
      return;
    }

    cartEmpty.classList.remove('visible');
    cartItems.style.display = 'block';
    cartFooter.classList.add('visible');

    var totals = cartTotals();

    var html = '';
    state.cart.forEach(function (item) {
      var p = getProduct(item.id);
      if (!p) return;
      html += '<div class="cart-item" data-id="' + item.id + '">' +
        '<div class="cart-item-thumb">' +
          '<img src="' + p.imageUrl + '" alt="' + p.name + '" class="cart-item-img">' +
        '</div>' +
        '<div class="cart-item-info">' +
          '<div class="cart-item-name">' + p.name + '</div>' +
          '<div class="cart-item-price">₹' + (p.price * item.qty) + ' <span class="unit-price">(₹' + p.price + ' ea)</span></div>' +
          '<div class="cart-item-eco">' + (p.co2Saved * item.qty) + 'g CO₂ offset</div>' +
        '</div>' +
        '<div class="cart-item-controls">' +
          '<button class="qty-btn cart-dec" data-id="' + item.id + '" aria-label="Decrease quantity">−</button>' +
          '<span class="cart-item-qty">' + item.qty + '</span>' +
          '<button class="qty-btn cart-inc" data-id="' + item.id + '" aria-label="Increase quantity">+</button>' +
        '</div>' +
      '</div>';
    });

    cartItems.innerHTML = html;

    $('#cart-co2').textContent = totals.co2 + 'g';
    $('#cart-plastic').textContent = totals.plastic + 'g';
    $('#cart-total-price').textContent = '₹' + totals.price;

    updateImpactBar();
  }

  function updateImpactBar() {
    var totals = cartTotals();
    var maxCo2 = 1800;
    var pct = Math.min(100, (totals.co2 / maxCo2) * 100);
    var fill = $('#impact-fill');
    var text = $('#impact-text');

    fill.style.width = pct + '%';

    if (totals.co2 === 0) {
      text.textContent = 'Add provisions to calculate your real-time carbon offset';
    } else if (pct < 25) {
      text.textContent = 'Verified offset: ' + totals.co2 + 'g CO₂ · Tier 1 (Local Sourcing)';
    } else if (pct < 55) {
      text.textContent = 'Verified offset: ' + totals.co2 + 'g CO₂ · Tier 2 (Regenerative Impact)';
    } else if (pct < 85) {
      text.textContent = 'Verified offset: ' + totals.co2 + 'g CO₂ · Tier 3 (High-Impact Steward)';
    } else {
      text.textContent = 'Verified offset: ' + totals.co2 + 'g CO₂ · Tier 4 (Climate Champion)';
    }
  }

  function addToCart(id) {
    var p = getProduct(id);
    if (!p) return;

    var inv = state.inventory[p.id];
    var currentQty = getCartQty(id);

    if (currentQty >= inv) {
      showToast('warning', 'Only ' + inv + ' available for ' + p.name + ' today.');
      return;
    }

    var existing = getCartItem(id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({ id: id, qty: 1 });
    }

    saveCart();
    updateCartUI();
    showToast('success', p.name + ' added to your Green Receipt');

    var btn = document.querySelector('.add-to-cart-btn[data-id="' + id + '"]');
    if (btn) {
      btn.classList.add('added');
      btn.textContent = 'Added';
      setTimeout(function () {
        btn.classList.remove('added');
        btn.textContent = 'Add to Basket';
      }, 700);
    }
  }

  function changeQty(id, delta) {
    var item = getCartItem(id);
    if (!item) return;

    var p = getProduct(id);
    var newQty = item.qty + delta;

    if (newQty <= 0) {
      state.cart = state.cart.filter(function (c) { return c.id !== id; });
      saveCart();
      updateCartUI();
      return;
    }

    var inv = state.inventory[id];
    if (newQty > inv) {
      showToast('warning', 'Only ' + inv + ' available for ' + p.name + ' today.');
      return;
    }

    item.qty = newQty;
    saveCart();
    updateCartUI();
  }

  function openCart() {
    $('#cart-sidebar').classList.add('open');
    $('#overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    $('#cart-sidebar').classList.remove('open');
    $('#overlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  function openDrawer(id) {
    var p = getProduct(id);
    if (!p) return;

    state.drawerProductId = id;
    var content = $('#drawer-content');

    var ribbonHtml = '';
    if (p.isRescue) {
      ribbonHtml = '<span class="rescue-ribbon">Rescue · ' + p.rescueDiscount + '% Off</span>';
    }

    var priceHtml = '₹' + p.price;
    if (p.isRescue && p.originalPrice > p.price) {
      priceHtml = '₹' + p.price + ' <span class="original-price">₹' + p.originalPrice + '</span>';
    }

    var now = new Date();
    var todayStr = now.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });

    var foodMilesExplanation = p.distance <= 10
      ? 'Ultra-local provenance: Sourced just ' + p.distance + ' km away from your neighborhood. Delivered via cargo e-bike with 0.00g tailpipe emissions (conventional supermarket provisions travel 800–1,800 km on diesel transit).'
      : 'Regional provenance: Transited ' + p.distance + ' km directly from regional growers to our local micro-hub. This represents a 96% reduction in transport emissions compared to conventional supply-chain consolidation.';

    content.innerHTML =
      '<div class="drawer-image">' +
        ribbonHtml +
        '<img src="' + p.imageUrl + '" alt="' + p.name + '" class="drawer-img">' +
      '</div>' +
      '<div class="drawer-body">' +
        '<div class="drawer-header">' +
          '<span class="drawer-category">' + p.producerType + '</span>' +
          '<h2>' + p.name + '</h2>' +
          '<p class="drawer-farm">' + p.producer + ' · ' + p.distance + ' km transit radius</p>' +
        '</div>' +
        '<p class="drawer-description">' + p.description + '</p>' +
        '<div class="drawer-details">' +
          '<div class="drawer-detail">' +
            '<div class="drawer-detail-badge">' +
              '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
            '</div>' +
            '<div class="drawer-detail-text">' +
              '<h4>' + p.actionLabel + ' at ' + p.timestamp + '</h4>' +
              '<p>' + p.batchNote + ' (' + todayStr + ').</p>' +
            '</div>' +
          '</div>' +
          '<div class="drawer-detail">' +
            '<div class="drawer-detail-badge">' +
              '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>' +
            '</div>' +
            '<div class="drawer-detail-text">' +
              '<h4>Food Miles Calculator</h4>' +
              '<p>' + foodMilesExplanation + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="drawer-eco-grid">' +
          '<div class="drawer-eco-card">' +
            '<span class="eco-val">' + p.co2Saved + 'g</span>' +
            '<span class="eco-label">CO₂ Offset</span>' +
          '</div>' +
          '<div class="drawer-eco-card">' +
            '<span class="eco-val">' + p.plasticSaved + 'g</span>' +
            '<span class="eco-label">Plastic Diverted</span>' +
          '</div>' +
        '</div>' +
        '<div class="drawer-price-row">' +
          '<div class="drawer-price-block">' +
            '<span class="drawer-price-label">Price per pack</span>' +
            '<span class="drawer-price">' + priceHtml + '</span>' +
          '</div>' +
          '<button class="drawer-add-btn" data-id="' + p.id + '">Add to Basket</button>' +
        '</div>' +
      '</div>';

    $('#product-drawer').classList.add('open');
    $('#overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    $('#product-drawer').classList.remove('open');
    $('#overlay').classList.remove('active');
    document.body.style.overflow = '';
    state.drawerProductId = null;
  }

  function closeAll() {
    closeCart();
    closeDrawer();
  }

  function validatePincode() {
    var input = $('#pincode-input');
    var result = $('#pincode-result');
    var code = input.value.trim();

    if (code.length !== 6 || !/^\d{6}$/.test(code)) {
      result.textContent = 'Please enter a valid 6-digit postal code.';
      result.className = 'pincode-result fail';
      return;
    }

    if (ECO_ZONES.indexOf(code) !== -1) {
      result.textContent = 'Active Zone: Your address is within our zero-emission cargo bicycle radius. Complimentary delivery on orders above ₹299.';
      result.className = 'pincode-result success';
    } else {
      result.textContent = 'Upcoming Zone: Our cargo fleet has not reached this sector yet. We are steadily expanding our charging hubs.';
      result.className = 'pincode-result fail';
    }
  }

  function showToast(type, message) {
    var container = $('#toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML = '<span class="toast-indicator"></span><span>' + message + '</span>';
    container.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('exit');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  }

  function startTracking() {
    var totals = cartTotals();

    if (state.cart.length === 0) {
      showToast('warning', 'Your basket is empty. Please select provisions first.');
      return;
    }

    closeCart();

    var trackingView = $('#tracking-view');
    var storeView = $('#store-view');
    var header = $('header');

    storeView.style.display = 'none';
    header.style.display = 'none';
    trackingView.classList.add('active');

    var metricsDiv = $('#tracking-metrics');
    metricsDiv.innerHTML =
      '<div class="tracking-metric-card">' +
        '<span class="tm-value">₹' + totals.price + '</span>' +
        '<span class="tm-label">Order Total</span>' +
      '</div>' +
      '<div class="tracking-metric-card">' +
        '<span class="tm-value">' + totals.co2 + 'g</span>' +
        '<span class="tm-label">CO₂ Offset</span>' +
      '</div>' +
      '<div class="tracking-metric-card">' +
        '<span class="tm-value">' + totals.plastic + 'g</span>' +
        '<span class="tm-label">Plastic Diverted</span>' +
      '</div>';

    animateTracking();
  }

  function animateTracking() {
    var path = document.querySelector('#tracking-svg path:first-of-type');
    var progressPath = $('#track-progress');
    var bikeIcon = $('#bike-icon');

    var pathLength = path.getTotalLength();
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = pathLength;

    var now = new Date();
    $('#phase-1-time').textContent = formatTime(now);

    setTimeout(function () {
      progressPath.style.strokeDashoffset = pathLength * 0.5;
      var pt1 = path.getPointAtLength(pathLength * 0.5);
      bikeIcon.setAttribute('transform', 'translate(' + pt1.x + ',' + pt1.y + ')');
      $('#phase-1').classList.remove('active');
      $('#phase-1').classList.add('completed');
      $('#phase-2').classList.add('active');
      var t2 = new Date(now.getTime() + 120000);
      $('#phase-2-time').textContent = formatTime(t2);
    }, 2000);

    setTimeout(function () {
      progressPath.style.strokeDashoffset = 0;
      var pt2 = path.getPointAtLength(pathLength);
      bikeIcon.setAttribute('transform', 'translate(' + pt2.x + ',' + pt2.y + ')');
      $('#phase-2').classList.remove('active');
      $('#phase-2').classList.add('completed');
      $('#phase-3').classList.add('active');
      var t3 = new Date(now.getTime() + 540000);
      $('#phase-3-time').textContent = formatTime(t3) + ' (approx.)';
    }, 5000);

    var startPt = path.getPointAtLength(0);
    bikeIcon.setAttribute('transform', 'translate(' + startPt.x + ',' + startPt.y + ')');

    setTimeout(function () {
      var pt05 = path.getPointAtLength(pathLength * 0.15);
      bikeIcon.setAttribute('transform', 'translate(' + pt05.x + ',' + pt05.y + ')');
      progressPath.style.strokeDashoffset = pathLength * 0.85;
    }, 500);
  }

  function formatTime(d) {
    var h = d.getHours();
    var m = d.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + ':' + String(m).padStart(2, '0') + ' ' + ampm;
  }

  function backToStore() {
    var trackingView = $('#tracking-view');
    var storeView = $('#store-view');
    var header = $('header');

    trackingView.classList.remove('active');
    storeView.style.display = '';
    header.style.display = '';

    state.cart = [];
    state.jarBack = false;
    saveCart();
    updateCartUI();

    $('#phase-1').className = 'phase active';
    $('#phase-2').className = 'phase';
    $('#phase-3').className = 'phase';
    $('#phase-1-time').textContent = '';
    $('#phase-2-time').textContent = '';
    $('#phase-3-time').textContent = '7 mins left';

    showToast('success', 'Order complete. Zero tailpipe emissions generated.');
  }

  function bindEvents() {
    $('#search-input').addEventListener('input', function () {
      state.searchQuery = this.value;
      renderProducts();
    });

    $('#category-pills').addEventListener('click', function (e) {
      var pill = e.target.closest('.pill');
      if (!pill) return;
      $$('.pill').forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      state.activeCategory = pill.dataset.category;
      renderProducts();
    });

    $('#products-grid').addEventListener('click', function (e) {
      var addBtn = e.target.closest('.add-to-cart-btn');
      if (addBtn) {
        e.stopPropagation();
        addToCart(parseInt(addBtn.dataset.id, 10));
        return;
      }
      var card = e.target.closest('.product-card');
      if (card) {
        openDrawer(parseInt(card.dataset.id, 10));
      }
    });

    $('#cart-toggle').addEventListener('click', openCart);
    $('#cart-close').addEventListener('click', closeCart);
    $('#overlay').addEventListener('click', closeAll);
    $('#drawer-close').addEventListener('click', closeDrawer);

    $('#cart-items').addEventListener('click', function (e) {
      var dec = e.target.closest('.cart-dec');
      var inc = e.target.closest('.cart-inc');
      if (dec) changeQty(parseInt(dec.dataset.id, 10), -1);
      if (inc) changeQty(parseInt(inc.dataset.id, 10), 1);
    });

    $('#jar-back-toggle').addEventListener('change', function () {
      state.jarBack = this.checked;
      saveCart();
      updateCartUI();
      if (state.jarBack) {
        showToast('success', 'Deposit refund of ₹30 applied for 2 return jars');
      }
    });

    $('#place-order-btn').addEventListener('click', startTracking);
    $('#back-to-store').addEventListener('click', backToStore);

    $('#pincode-check').addEventListener('click', validatePincode);
    $('#pincode-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') validatePincode();
    });

    document.addEventListener('click', function (e) {
      var drawerAddBtn = e.target.closest('.drawer-add-btn');
      if (drawerAddBtn) {
        addToCart(parseInt(drawerAddBtn.dataset.id, 10));
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
