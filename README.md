# FoodIn 透明報價單計算器

## 📁 檔案結構

```
calculator/
├── index.html      # 主頁面 HTML
├── styles.css      # 所有樣式
├── app.js          # 應用邏輯與資料
└── README.md       # 本說明文件
```

## 🚀 快速部署

### 方式一：獨立頁面
直接將整個 `calculator/` 資料夾放到網站根目錄，訪問 `/calculator/` 即可使用。

### 方式二：整合到現有網站

#### 1. 複製檔案
將以下檔案複製到您的網站：
- `styles.css` → 放到 CSS 資料夾
- `app.js` → 放到 JS 資料夾
- `index.html` 內容整合到您的頁面模板

#### 2. 引入依賴
在 `<head>` 中加入：
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- html2canvas (截圖功能) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

<!-- 報價單樣式 -->
<link rel="stylesheet" href="path/to/styles.css">
```

在 `</body>` 前加入：
```html
<script src="path/to/app.js"></script>
```

#### 3. HTML 結構
將 `index.html` 中 `<body>` 內的內容複製到您的頁面中。
主要需要以下元素：
```html
<nav class="nav-tabs" id="navTabs"></nav>
<div class="content-panel" id="contentPanel"></div>
<div class="summary-panel" id="summaryPanel"></div>
```

## ⚙️ 自訂設定

### 修改價格/服務項目
編輯 `app.js` 開頭的 `categories` 陣列：
```javascript
const categories = [
  {
    id: 'photo',
    title: '專業餐點視覺設計 (單點)',
    icon: 'camera',  // Lucide icon 名稱
    features: [...],
    items: [
      { 
        id: 'p1', 
        name: '單品設計｜首張體驗', 
        price: 450,           // 售價
        originalPrice: 600,   // 原價（可選，有則顯示折扣）
        desc: '1 張成品'      // 商品描述
      },
      // ...更多商品
    ]
  },
  // ...更多分類
];
```

### 啟用 AI 顧問功能
編輯 `app.js` 第 224 行，填入您的 Gemini API Key：
```javascript
const apiKey = "YOUR_GEMINI_API_KEY";
```

### 修改 LINE ID
搜尋 `@foodin` 並替換為您的 LINE ID。

## 🎨 樣式客製化

### CSS 變數
`styles.css` 開頭定義了所有設計變數：
```css
:root {
  --orange-500: #f97316;  /* 主題色 */
  --blue-600: #2563eb;    /* AI 功能色 */
  --green-600: #16a34a;   /* 按鈕色 */
  /* ...更多顏色 */
}
```

### 響應式斷點
- 手機：< 640px
- 平板：640px - 1024px
- 桌面：> 1024px

## 📱 功能說明

1. **分類導航** - 點擊切換不同服務類別
2. **數量調整** - +/- 按鈕調整購買數量
3. **即時計算** - 右側報價單即時更新
4. **急件加價** - 勾選後加收 30%
5. **一鍵截圖** - 自動擷取報價單並下載 PNG
6. **AI 顧問** - 智能推薦服務組合（需 API Key）

## 🔧 技術規格

- 純前端，無需後端
- 無框架依賴（Vanilla JS）
- 使用 Lucide Icons
- 使用 html2canvas 實現截圖
- 響應式設計，支援手機/平板/桌面

## 📞 聯絡方式

如有整合問題，請聯繫 FoodIn 團隊。
LINE: @foodin
