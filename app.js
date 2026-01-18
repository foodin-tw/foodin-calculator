// ============================================
// FoodIn Calculator - Main Application
// ============================================

// ---------------------------------------------------------------------------
// Data Definition (Reordered 4-6-5-2-3-1-7)
// ---------------------------------------------------------------------------
const categories = [
  {
    id: 'photo',
    title: '專業餐點視覺設計 (單點)',
    icon: 'camera',
    features: [
      "專業餐點美學設計",
      "精緻後製調色",
      "高解析度圖檔 (適用印刷/社群)",
      "不含現場拍攝，需提供基礎素材或由 AI 生成"
    ],
    items: [
      { id: 'p1', name: '單品設計｜首張體驗', price: 450, originalPrice: 600, desc: '1 張成品 (原價 $600，現省 $150)' },
      { id: 'p3', name: '招牌精選｜3道設計', price: 1200, desc: '3 張成品 (平均 $400/張)' },
      { id: 'p5', name: '人氣主打｜5道設計', price: 1900, desc: '5 張成品 (平均 $380/張) ⭐' },
      { id: 'p10', name: '完整菜單｜10道設計', price: 3500, desc: '10 張成品 (平均 $350/張)' },
    ]
  },
  {
    id: 'copy',
    title: '美學文案撰寫',
    icon: 'file-text',
    features: [
      "強化食慾感描述",
      "針對平台特性優化",
      "提升點擊與轉換率"
    ],
    items: [
      { id: 'c1', name: '外送短文案 (30-50字)', price: 150, desc: '適合 UberEats/Panda 描述' },
      { id: 'c2', name: '社群故事文 (100字+)', price: 250, desc: '適合 FB / IG 貼文行銷' },
      { id: 'c3', name: '菜單全套文案 (5道)', price: 800, desc: '一次搞定招牌菜描述' },
    ]
  },
  {
    id: 'combo',
    title: '圖文懶人包 (超值)',
    icon: 'gift',
    features: [
      "視覺與文案一次搞定",
      "風格統一更具說服力",
      "適合：新品上市 / 招牌推廣"
    ],
    items: [
      { id: 'cb1', name: '圖文體驗組', price: 600, originalPrice: 750, desc: '1張設計圖 + 1則文案 (原價 $750，現省 $150)' },
      { id: 'cb3', name: '招牌圖文組', price: 1650, desc: '3張設計圖 + 3則文案' },
      { id: 'cb5', name: '人氣圖文組', price: 2600, desc: '5張設計圖 + 5則文案' },
    ]
  },
  {
    id: 'menu',
    title: '菜單設計',
    icon: 'book-open',
    features: [
      "專業排版與視覺設計",
      "搭配高質感餐點圖片",
      "提供印刷用高解析度檔案",
      "可配合品牌風格客製化"
    ],
    items: [
      { id: 'm1', name: '單頁菜單｜A4/A3', price: 2200, desc: '單面設計，含 5-8 道餐點排版' },
      { id: 'm2', name: '折頁菜單｜對折/三折', price: 3500, desc: '雙面設計，含 10-15 道餐點排版' },
      { id: 'm3', name: '精緻菜單本｜4-6頁', price: 5800, desc: '完整菜單本設計，含 20-30 道餐點' },
      { id: 'm4', name: '豪華菜單本｜8-12頁', price: 9800, desc: '大型餐廳完整菜單，含 40+ 道餐點' },
      { id: 'm5', name: '數位菜單｜QR Code版', price: 2800, desc: '手機瀏覽優化，含 QR Code 設計' },
      { id: 'm6', name: '電視牆菜單｜橫式看板', price: 3500, desc: '店內電視牆/LED 看板專用設計' },
    ]
  },
  {
    id: 'video',
    title: '動態短影片製作',
    icon: 'video',
    features: [
      "動態吸睛度高",
      "適合 IG Reels / 抖音 / 廣告",
      "增加顧客停留時間"
    ],
    items: [
      { id: 'v1', name: 'IG限動/Reels (5-10秒)', price: 888, originalPrice: 1200, desc: '基礎動態展示 (限時優惠)' },
      { id: 'v2', name: '社群廣告短片 (15秒)', price: 3000, desc: '3-4道菜 (適合投放廣告)' },
      { id: 'v3', name: '社群行銷短片 (30秒)', price: 4200, desc: '5-6道菜豐富呈現' },
      { id: 'v4', name: '店內電視牆版 (30秒)', price: 4800, desc: '含字幕設計 (5-6道菜)' },
      { id: 'v5', name: '店內電視牆版 (60秒)', price: 6500, desc: '含字幕設計 (7-10道菜)' },
      { id: 'v6', name: '品牌形象影片 (60秒)', price: 7200, desc: '含片頭片尾動畫 (8-10道菜)' },
    ]
  },
  {
    id: 'platform',
    title: '外送平台專用套餐',
    icon: 'shopping-cart',
    features: [
      "專為 UberEats / Foodpanda 設計",
      "含平台優化建議與標籤設定",
      "提升店鋪搜尋曝光度"
    ],
    items: [
      { id: 'pl1', name: '【熱銷】入門套餐', price: 2500, desc: '3圖+3文+優化建議+標籤 ⭐' },
      { id: 'pl2', name: '【菜單升級】完整套餐', price: 4500, desc: '6圖+6文+簡介+優化+標籤 🚀' },
    ]
  },
  {
    id: 'addon',
    title: '加購服務',
    icon: 'plus',
    features: [
      "客製化需求調整",
      "滿足更多元行銷用途"
    ],
    items: [
      { id: 'a1', name: '美編壓字設計', price: 100, desc: '加入菜名、價格 (每張)' },
      { id: 'a2', name: '追加菜品設計', price: 350, desc: '含單張設計圖+文案' },
      { id: 'a3', name: 'Logo 動態演繹', price: 500, desc: '片頭/片尾 Logo 動畫' },
      { id: 'a4', name: '多尺寸輸出', price: 300, desc: '直式+橫式原始檔' },
    ]
  }
];

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
let quantities = {};
let isRush = false;
let activeTab = 'photo'; // Default: First item (Photo)
let aiConsultantInput = '';
let aiConsultantResult = '';
let isAiLoading = false;

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createIcon(name, size = 16) {
  // Lucide icons are rendered by the script, but we can use helper
  return `<i data-lucide="${name}" width="${size}" height="${size}"></i>`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ---------------------------------------------------------------------------
// Render Functions
// ---------------------------------------------------------------------------
function renderNav() {
  const navContainer = document.getElementById('navTabs');

  // AI Tab (First)
  let html = `
    <button 
      class="nav-tab ai-tab ${activeTab === 'ai' ? 'active' : ''}"
      onclick="setActiveTab('ai')"
    >
      ${createIcon('bot')}
      AI 智能預算顧問
    </button>
  `;

  // Normal Tabs
  html += categories.map(cat => `
    <button 
      class="nav-tab ${activeTab === cat.id ? 'active' : ''}"
      onclick="setActiveTab('${cat.id}')"
    >
      ${createIcon(cat.icon)}
      ${cat.title.split('(')[0]}
    </button>
  `).join('');

  navContainer.innerHTML = html;
  refreshIcons();
}

function renderContent() {
  const container = document.getElementById('contentPanel');

  if (activeTab === 'ai') {
    renderAiPanel(container);
    return;
  }

  const category = categories.find(c => c.id === activeTab);
  if (!category) return;

  const featuresHtml = category.features.map(f => `
    <div class="feature-item">
      ${createIcon('check', 14)}
      <span>${f}</span>
    </div>
  `).join('');

  const itemsHtml = category.items.map(item => {
    const qty = quantities[item.id] || 0;
    const isSelected = qty > 0;
    const hasDiscount = item.originalPrice && item.originalPrice > item.price;

    return `
      <div class="product-item ${isSelected ? 'selected' : ''}">
        <div class="product-info">
          <div class="product-name">
            ${item.name}
            ${hasDiscount ? `<span class="discount-badge">省 $${item.originalPrice - item.price}</span>` : ''}
          </div>
          <div class="product-desc">${item.desc}</div>
        </div>
        
        <div class="product-actions">
           <!-- Price Display -->
          <div class="price-container">
            ${hasDiscount ? `<span class="original-price">$${formatNumber(item.originalPrice)}</span>` : ''}
            <span class="current-price ${hasDiscount ? 'discounted' : ''}">$${formatNumber(item.price)}</span>
          </div>

          <!-- Quantity Control -->
          <div class="qty-control">
            <button 
              class="qty-btn" 
              onclick="updateQty('${item.id}', -1)"
              ${qty === 0 ? 'disabled' : ''}
            >
              ${createIcon('minus', 14)}
            </button>
            <div class="qty-value">${qty}</div>
            <button 
              class="qty-btn add" 
              onclick="updateQty('${item.id}', 1)"
            >
              ${createIcon('plus', 14)}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="category-header">
      <h2 class="category-title">
        ${createIcon(category.icon, 24)}
        ${category.title}
      </h2>
      <div class="features-box">
        <span class="features-label">服務特色</span>
        <div class="features-grid">
          ${featuresHtml}
        </div>
      </div>
    </div>
    <div class="product-list">
      ${itemsHtml}
    </div>
  `;

  refreshIcons();
}

// ---------------------------------------------------------------------------
// Business Logic
// ---------------------------------------------------------------------------
function updateQty(itemId, delta) {
  const current = quantities[itemId] || 0;
  const next = Math.max(0, current + delta);

  if (next === 0) {
    delete quantities[itemId];
  } else {
    quantities[itemId] = next;
  }

  renderAll();
}

function resetCart() {
  quantities = {};
  isRush = false;
  renderAll();
}

function removeItem(id) {
  delete quantities[id];
  renderAll();
}

function setActiveTab(tabId) {
  activeTab = tabId;
  renderAll();
}

function toggleRush(checked) {
  isRush = checked;
  renderSummary();
}

// ---------------------------------------------------------------------------
// Screenshot Function
// ---------------------------------------------------------------------------
async function captureAndDownload() {
  const panel = document.getElementById('summaryPanel');
  if (!panel) return;

  // Show loading state
  const btn = document.querySelector('.submit-btn');
  const originalText = btn.innerHTML;
  btn.innerHTML = `<span class="spinner-icon">⏳</span> 擷取中...`;
  btn.disabled = true;

  try {
    // Wait a bit for any animations to complete
    await new Promise(resolve => setTimeout(resolve, 100));

    // Capture the summary panel
    const canvas = await html2canvas(panel, {
      backgroundColor: '#141414', // Match card background
      scale: 2, // Higher resolution
      useCORS: true,
      logging: false
    });

    // Convert to blob and download
    canvas.toBlob(function (blob) {
      const link = document.createElement('a');
      const date = new Date();
      const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
      const timeStr = `${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}`;
      link.download = `FoodIn報價單_${dateStr}_${timeStr}.png`;
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);

      // Show success message
      alert('📸 報價單已儲存！\n\n請將圖片傳送至 LINE: @foodin\n我們將為您確認最終報價與製作檔期！');
    }, 'image/png');

  } catch (error) {
    console.error('Screenshot error:', error);
    alert('截圖失敗，請手動截圖此畫面');
  } finally {
    // Restore button
    btn.innerHTML = originalText;
    btn.disabled = false;
    refreshIcons();
  }
}

// ---------------------------------------------------------------------------
// AI Integration (Gemini API)
// ---------------------------------------------------------------------------
async function callGemini(prompt) {
  const apiKey = "AIzaSyBjZpwvIzpxdktfJ4vwZcDX-ikEXbWj0fk";

  if (!apiKey) {
    return "請設定 API Key 以啟用 AI 功能。您可以在 app.js 中設定 apiKey 變數。";
  }

  const systemPrompt = `
    你現在是 FoodIn 的專業報價顧問。
    我們的服務項目包括：
    ${categories.map(c => `- ${c.title}`).join('\n')}
    
    請根據用戶的需求，推薦適合的服務組合。
    請用友善、專業的語氣回答。
    回答請包含：
    1. 分析用戶需求
    2. 推薦的具體方案 (從我們的清單中選擇)
    3. 預估預算範圍
    
    請保持回答簡潔有力，重點清晰。
  `;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${systemPrompt}\n\n用戶需求：${prompt}`
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "抱歉，AI 顧問目前忙碌中，請稍後再試，或直接聯繫客服人員。";
  }
}

async function handleAiSubmit() {
  if (!aiConsultantInput.trim()) return;

  isAiLoading = true;
  renderContent(); // Update loading state

  const result = await callGemini(aiConsultantInput);

  aiConsultantResult = result;
  isAiLoading = false;
  renderContent(); // Show result
}

function renderAiPanel(container) {
  container.innerHTML = `
    <div class="ai-panel">
      <div class="ai-header">
        ${createIcon('bot', 32)}
        <h3>FoodIn 智能預算顧問</h3>
      </div>
      
      <div class="ai-consultant-box">
        <div class="ai-consultant-title">
          ${createIcon('sparkles', 18)}
          不知道該選哪個方案？
        </div>
        <div class="ai-consultant-desc">
          請在下方告訴我您的需求，例如：<br>
          <span class="hint">「我是賣健康餐盒的，預算大約 2000 元」或「想要升級外送平台菜單，希望看起來高級一點」。</span><br>
          我將為您推薦最適合的 FoodIn 服務組合！
        </div>
        
        <div class="ai-input-group">
          <input 
            type="text" 
            class="ai-input" 
            placeholder="請輸入您的需求..." 
            value="${aiConsultantInput}"
            oninput="aiConsultantInput = this.value"
            onkeypress="if(event.key === 'Enter') handleAiSubmit()"
            ${isAiLoading ? 'disabled' : ''}
          >
          <button 
            class="ai-submit-btn" 
            onclick="handleAiSubmit()"
            ${isAiLoading ? 'disabled' : ''}
          >
            ${isAiLoading ? '思考中...' : '諮詢' + createIcon('send', 16)}
          </button>
        </div>
      </div>
      
      <div class="ai-result ${!aiConsultantResult && !isAiLoading ? 'hidden' : ''}">
        <div class="ai-result-inner">
          <div class="ai-avatar">
            ${createIcon('bot', 24)}
          </div>
          <div class="ai-result-content">
            <div class="ai-result-title">顧問建議方案</div>
            <div class="ai-result-text">
              ${isAiLoading ? 'AI 正在分析您的需求，請稍候...' : marked.parse(aiConsultantResult)}
            </div>
            ${!isAiLoading && aiConsultantResult ? `
              <div class="ai-result-actions">
                <a class="ai-result-link" onclick="setActiveTab('photo')">
                  採納此建議並諮詢客服 →
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `;

  refreshIcons();
}

// ---------------------------------------------------------------------------
// Cart Logic
// ---------------------------------------------------------------------------
function calculateCart() {
  let cartItems = [];
  let subtotal = 0;

  categories.forEach(cat => {
    cat.items.forEach(item => {
      const qty = quantities[item.id] || 0;
      if (qty > 0) {
        const itemTotal = item.price * qty;
        subtotal += itemTotal;
        cartItems.push({
          ...item,
          category: cat.title.split('(')[0],
          qty,
          itemTotal
        });
      }
    });
  });

  const rushFee = isRush ? Math.round(subtotal * 0.3) : 0;
  const total = subtotal + rushFee;

  return { cartItems, subtotal, rushFee, total };
}

function renderSummary() {
  const { cartItems, subtotal, rushFee, total } = calculateCart();

  let cartHtml = '';
  if (cartItems.length === 0) {
    cartHtml = `
      <div class="cart-empty">
        <p>尚未選擇項目</p>
        <p>請從左側選單點選服務項目</p>
      </div>
    `;
  } else {
    cartHtml = cartItems.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.category} - ${item.name.split('｜')[0]}</div>
          <div class="cart-item-detail">$${formatNumber(item.price)} x ${item.qty}</div>
        </div>
        <div class="cart-item-right">
          <div class="cart-item-total">$${formatNumber(item.itemTotal)}</div>
          <button class="cart-item-remove" onclick="removeItem('${item.id}')" title="移除此項目">
            ${createIcon('x', 14)}
          </button>
        </div>
      </div>
    `).join('');
  }

  const summaryPanel = document.getElementById('summaryPanel');
  summaryPanel.innerHTML = `
    <div class="summary-header">
      <div class="summary-title">
        ${createIcon('file-text', 20)}
        預估報價單
      </div>
      ${cartItems.length > 0 ? `
        <button class="clear-btn" onclick="resetCart()">
          ${createIcon('trash-2', 14)} 清空
        </button>
      ` : ''}
    </div>

    <div class="cart-items">
      ${cartHtml}
    </div>

    <div class="summary-footer">
      <div class="rush-row">
        <label class="rush-label">
          <input type="checkbox" class="rush-checkbox" onchange="toggleRush(this.checked)" ${isRush ? 'checked' : ''}>
          <div class="rush-text">
            ${createIcon('zap', 16, isRush ? 'active' : '')}
            <span>急件處理 (24h)</span>
          </div>
        </label>
        ${isRush ? `<span class="rush-fee">+$${formatNumber(rushFee)}</span>` : ''}
      </div>

      <div class="total-row">
        <span class="total-label">預估總計</span>
        <span class="total-value">$${formatNumber(total)}</span>
      </div>

      <button 
        class="submit-btn"
        onclick="captureAndDownload()"
      >
        ${createIcon('camera', 18)}
        一鍵截圖報價單
      </button>
      <p class="submit-note">點擊後自動下載報價單圖片</p>
    </div>
  `;

  refreshIcons();

  // Update Floating Quote Bar
  updateFloatingQuoteBar();
}

function updateFloatingQuoteBar() {
  const { cartItems, total } = calculateCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const countEl = document.getElementById('quoteBarCount');
  const totalEl = document.getElementById('quoteBarTotal');

  if (countEl) countEl.textContent = `已選 ${itemCount} 項`;
  if (totalEl) totalEl.textContent = `$${formatNumber(total)}`;

  refreshIcons();
}

// ---------------------------------------------------------------------------
// Quote Modal Functions
// ---------------------------------------------------------------------------
function openQuoteModal() {
  const overlay = document.getElementById('quoteModalOverlay');
  overlay.classList.remove('hidden');
  renderQuoteModalContent();
  refreshIcons();
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeQuoteModal() {
  const overlay = document.getElementById('quoteModalOverlay');
  overlay.classList.add('hidden');
  document.body.style.overflow = ''; // Restore scroll
}

function renderQuoteModalContent() {
  const { cartItems, subtotal, rushFee, total } = calculateCart();
  const modalBody = document.getElementById('quoteModalBody');

  if (cartItems.length === 0) {
    modalBody.innerHTML = `
      <div class="modal-cart-empty">
        <p>尚未選擇任何項目</p>
        <p>請從分類中選擇服務項目</p>
      </div>
    `;
    return;
  }

  let itemsHtml = cartItems.map(item => `
    <div class="modal-cart-item">
      <div>
        <div class="modal-item-name">${item.name.split('｜')[0]}</div>
        <div class="modal-item-detail">$${formatNumber(item.price)} × ${item.qty}</div>
      </div>
      <div class="modal-item-price">$${formatNumber(item.itemTotal)}</div>
    </div>
  `).join('');

  modalBody.innerHTML = `
    ${itemsHtml}
    
    ${isRush ? `
      <div class="modal-rush-row">
        <span>⚡ 急件處理 (+30%)</span>
        <span class="modal-item-price">+$${formatNumber(rushFee)}</span>
      </div>
    ` : ''}
    
    <div class="modal-total-row">
      <span class="modal-total-label">預估總計</span>
      <span class="modal-total-value">$${formatNumber(total)}</span>
    </div>
  `;
}

async function captureModalQuote() {
  const modal = document.querySelector('.quote-modal');
  if (!modal) return;

  try {
    const canvas = await html2canvas(modal, {
      backgroundColor: '#141414',
      scale: 2,
      useCORS: true,
      logging: false
    });

    canvas.toBlob(function (blob) {
      const link = document.createElement('a');
      const date = new Date();
      const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
      link.download = `FoodIn報價單_${dateStr}.png`;
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);

      alert('📸 報價單已儲存！\n\n請將圖片傳送至 LINE: @foodin');
    }, 'image/png');
  } catch (error) {
    console.error('Screenshot error:', error);
    alert('請使用手機或電腦的截圖功能保存此畫面');
  }
}

function renderAll() {
  renderNav();
  renderContent();
  renderSummary();
}

// ---------------------------------------------------------------------------
// Setup & Init
// ---------------------------------------------------------------------------
// Marked.js is loaded from CDN in HTML
// Lucide is loaded from CDN in HTML

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  refreshIcons();
});

