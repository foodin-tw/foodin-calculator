// ============================================
// FoodIn Calculator - Main Application
// ============================================

// ---------------------------------------------------------------------------
// Data Definition (Updated with originalPrice)
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
let activeTab = 'photo';
let aiConsultantInput = '';
let aiConsultantResult = '';
let isAiLoading = false;

// ---------------------------------------------------------------------------
// DOM Elements
// ---------------------------------------------------------------------------
const navTabsEl = document.getElementById('navTabs');
const contentPanelEl = document.getElementById('contentPanel');
const summaryPanelEl = document.getElementById('summaryPanel');

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------
function formatNumber(num) {
  return num.toLocaleString('zh-TW');
}

function createIcon(name, size = 20) {
  return `<i data-lucide="${name}" style="width: ${size}px; height: ${size}px;"></i>`;
}

function refreshIcons() {
  lucide.createIcons();
}

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------
function updateQuantity(id, delta) {
  const current = quantities[id] || 0;
  const next = Math.max(0, current + delta);

  if (next === 0) {
    delete quantities[id];
  } else {
    quantities[id] = next;
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
      backgroundColor: '#111827',
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
  const apiKey = ""; // System provided - user should add their key

  if (!apiKey) {
    return "請設定 API Key 以啟用 AI 功能。您可以在 app.js 中設定 apiKey 變數。";
  }

  isAiLoading = true;
  renderContent();

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );
    const data = await response.json();
    isAiLoading = false;
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "抱歉，AI 暫時無法回應，請稍後再試。";
  } catch (error) {
    console.error("AI Error:", error);
    isAiLoading = false;
    return "連線錯誤，請檢查網路狀態。";
  }
}

async function handleConsultant() {
  const input = document.getElementById('aiConsultantInput');
  if (!input || !input.value.trim()) return;

  aiConsultantInput = input.value.trim();

  const serviceContext = categories.map(c =>
    `${c.title}: ${c.items.map(i => `${i.name} ($${i.price})`).join(', ')}`
  ).join('\n');

  const prompt = `
    你是一位 FoodIn 設計行銷公司的「智能預算顧問」。
    以下是我們提供的服務價目表：
    ${serviceContext}

    客戶的需求或情境是：
    "${aiConsultantInput}"

    請根據客戶的需求：
    1. 推薦最適合的 1-2 個方案組合。
    2. 估算大概的預算範圍。
    3. 語氣親切專業，並鼓勵他們聯絡客服 (LINE: @foodin)。
    4. 回答請控制在 150 字以內，條列式重點即可。
  `;

  aiConsultantResult = await callGemini(prompt);
  renderContent();
}

// ---------------------------------------------------------------------------
// Calculations
// ---------------------------------------------------------------------------
function calculateCart() {
  let subtotal = 0;
  const items = [];

  categories.forEach(cat => {
    cat.items.forEach(item => {
      const qty = quantities[item.id] || 0;
      if (qty > 0) {
        const itemTotal = qty * item.price;
        subtotal += itemTotal;
        items.push({
          ...item,
          qty,
          itemTotal,
          category: cat.title.split(' (')[0]
        });
      }
    });
  });

  const rushFee = isRush ? Math.round(subtotal * 0.3) : 0;
  const total = Math.max(0, subtotal + rushFee);

  return { cartItems: items, subtotal, rushFee, total };
}

// ---------------------------------------------------------------------------
// Render Functions
// ---------------------------------------------------------------------------
function renderNavTabs() {
  let html = `
    <button class="nav-tab ai-tab ${activeTab === 'ai' ? 'active' : ''}" onclick="setActiveTab('ai')">
      ${createIcon('bot', 16)}
      AI 預算顧問
    </button>
  `;

  categories.forEach(cat => {
    const shortTitle = cat.title.split(' ')[0];
    html += `
      <button class="nav-tab ${activeTab === cat.id ? 'active' : ''}" onclick="setActiveTab('${cat.id}')">
        ${createIcon(cat.icon, 16)}
        ${shortTitle}
      </button>
    `;
  });

  navTabsEl.innerHTML = html;
}

function renderAIPanel() {
  return `
    <div class="ai-panel">
      <div class="ai-header">
        ${createIcon('bot', 24)}
        <h3>FoodIn 智能預算顧問</h3>
      </div>

      <div class="ai-consultant-box">
        <h4 class="ai-consultant-title">
          ${createIcon('sparkles', 16)} 不知道該選哪個方案？
        </h4>
        <p class="ai-consultant-desc">
          請在下方告訴我您的需求，例如：<br>
          <span class="hint">「我是賣健康餐盒的，預算大約 2000 元」</span> 或 <span class="hint">「想要升級外送平台菜單，希望看起來高級一點」</span>。<br>
          我將為您推薦最適合的 FoodIn 服務組合！
        </p>
        <div class="ai-input-group">
          <input
            type="text"
            id="aiConsultantInput"
            value="${aiConsultantInput}"
            placeholder="請輸入您的需求與預算..."
            class="ai-input"
            onkeydown="if(event.key === 'Enter') handleConsultant()"
          >
          <button
            onclick="handleConsultant()"
            ${isAiLoading ? 'disabled' : ''}
            class="ai-submit-btn"
          >
            ${isAiLoading ? createIcon('loader-2', 18) + '<span class="spinner"></span>' : createIcon('send', 18)}
            諮詢
          </button>
        </div>
      </div>

      ${aiConsultantResult ? `
        <div class="ai-result">
          <div class="ai-result-inner">
            <div class="ai-avatar">
              ${createIcon('bot', 24)}
            </div>
            <div class="ai-result-content">
              <h5 class="ai-result-title">顧問建議方案</h5>
              <div class="ai-result-text">${aiConsultantResult}</div>
              <div class="ai-result-actions">
                <span class="ai-result-link" onclick="alert('建議您截圖此畫面，直接諮詢客服 LINE: @foodin')">
                  採納此建議並諮詢客服 →
                </span>
              </div>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderProductList() {
  const category = categories.find(c => c.id === activeTab);
  if (!category) return '';

  const featuresHtml = category.features.map(f => `
    <div class="feature-item">
      ${createIcon('check-circle-2', 16)}
      <span>${f}</span>
    </div>
  `).join('');

  const productsHtml = category.items.map(item => {
    const qty = quantities[item.id] || 0;
    const hasDiscount = !!item.originalPrice;

    return `
      <div class="product-item ${qty > 0 ? 'selected' : ''}">
        <div class="product-info">
          <div class="product-header">
            <h4 class="product-name">
              ${item.name}
              ${hasDiscount ? '<span class="discount-badge">優惠中</span>' : ''}
            </h4>
            <!-- Mobile Price -->
            <div class="product-price-mobile">
              ${hasDiscount ? `<span class="original-price">$${formatNumber(item.originalPrice)}</span>` : ''}
              <span class="current-price ${hasDiscount ? 'discounted' : ''}">$${formatNumber(item.price)}</span>
            </div>
          </div>
          <p class="product-desc">${item.desc}</p>
        </div>
        
        <div class="product-actions">
          <!-- Desktop Price -->
          <div class="product-price-desktop">
            ${hasDiscount ? `<span class="original-price">$${formatNumber(item.originalPrice)}</span>` : ''}
            <span class="current-price ${hasDiscount ? 'discounted' : ''}">$${formatNumber(item.price)}</span>
          </div>
          
          <div class="qty-control">
            <button 
              class="qty-btn"
              onclick="updateQuantity('${item.id}', -1)"
              ${qty === 0 ? 'disabled' : ''}
            >
              ${createIcon('minus', 16)}
            </button>
            <span class="qty-value">${qty}</span>
            <button 
              class="qty-btn add"
              onclick="updateQuantity('${item.id}', 1)"
            >
              ${createIcon('plus', 16)}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="category-header">
      <h3 class="category-title">
        ${createIcon(category.icon, 20)}
        ${category.title}
      </h3>
      
      <div class="features-box">
        <h4 class="features-label">服務內容包含</h4>
        <div class="features-grid">
          ${featuresHtml}
        </div>
      </div>
    </div>

    <div class="product-list">
      ${productsHtml}
    </div>
  `;
}

function renderContent() {
  if (activeTab === 'ai') {
    contentPanelEl.innerHTML = renderAIPanel();
  } else {
    contentPanelEl.innerHTML = renderProductList();
  }
  refreshIcons();
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

  const footerHtml = cartItems.length > 0 ? `
    <div class="summary-footer">
      <div class="summary-row subtotal">
        <span>小計</span>
        <span>$${formatNumber(subtotal)}</span>
      </div>

      <div class="rush-row">
        <label class="rush-label">
          <input 
            type="checkbox" 
            class="rush-checkbox"
            ${isRush ? 'checked' : ''}
            onchange="toggleRush(this.checked)"
          >
          <span class="rush-text">
            ${createIcon('zap', 14)}
            急件處理 (+30%)
          </span>
        </label>
        ${isRush ? `<span class="rush-fee">+$${formatNumber(rushFee)}</span>` : ''}
      </div>

      <div class="referral-box">
        ${createIcon('gift', 16)}
        <div>
          <span class="referral-title">🎁 推薦獎勵優惠</span>
          <p class="referral-desc">
            若您有推薦人，截圖私訊確認後可享 <span class="referral-highlight">$100 折扣</span>！
          </p>
        </div>
      </div>

      <div class="total-row">
        <span class="total-label">總計預估</span>
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
  ` : '';

  summaryPanelEl.innerHTML = `
    <div class="summary-header">
      <h2 class="summary-title">
        ${createIcon('file-check', 20)}
        透明報價單
      </h2>
      ${cartItems.length > 0 ? `
        <button class="clear-btn" onclick="resetCart()">
          ${createIcon('trash-2', 12)} 清空
        </button>
      ` : ''}
    </div>

    <div class="cart-items">
      ${cartHtml}
    </div>

    ${footerHtml}
  `;

  refreshIcons();
}

function renderAll() {
  renderNavTabs();
  renderContent();
  renderSummary();
}

// ---------------------------------------------------------------------------
// Initialize
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
});
