# ブライダルフェア Webアプリケーション

Figmaデザインから作成されたブライダルフェアのWebアプリケーションです。

## 🌐 デモ

GitHub Pagesでホスティング: [デモを見る](https://your-username.github.io/your-repo-name/)

## ✨ 概要

このアプリケーションは、ブライダルフェアの情報を提供し、ユーザーがフェアを検索・予約できる機能を持っています。

### 主な機能

- **ホームページ**: フェア一覧の表示
- **詳細ページ**: 個別フェアの詳細情報
- **アーカイブページ**: 
  - カレンダーによる日付選択（December 2025）
  - カテゴリー別フィルタリング（平日開催、土日祝開催、試食会、ギフト券つき、ドレス試着、相談会）
  - フェアの検索機能
- **お問い合わせフォーム**: フェア予約のための問い合わせ
- **サンクスページ**: 予約完了後の確認ページ

## 🛠 技術スタック

- **React 18.3** - UIフレームワーク
- **TypeScript** - 型安全な開発
- **Vite** - ビルドツール
- **Tailwind CSS v4** - スタイリング
- **Shippori Mincho** - 日本語フォント

## 📋 前提条件

以下がインストールされている必要があります：

- Node.js 18.x 以上
- npm 9.x 以上

## 🚀 セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### 4. プロダクションビルド

```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに出力されます。

### 5. プレビュー

```bash
npm run preview
```

## 🌍 GitHub Pagesへのデプロイ

### 自動デプロイ（推奨）

このリポジトリにはGitHub Actionsの設定が含まれています。以下の手順でセットアップしてください：

1. GitHubリポジトリの **Settings** > **Pages** に移動
2. **Source** を **GitHub Actions** に設定
3. `main` ブランチにプッシュすると自動的にデプロイされます

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 手動デプロイ

```bash
npm run build
# distフォルダの内容をGitHub Pagesにデプロイ
```

## 📂 プロジェクト構造

```
├── src/
│   ├── app/
│   │   ├── App.tsx                 # メインアプリケーション
│   │   └── components/
│   │       ├── BridalHome.tsx      # ホームページ
│   │       ├── BridalDetail.tsx    # 詳細ページ
│   │       ├── BridalArchive.tsx   # アーカイブ・検索ページ
│   │       ├── ContactForm.tsx     # お問い合わせフォーム
│   │       ├── ThankYouPage.tsx    # サンクスページ
│   │       └── BridalPopup.tsx     # ポップアップ
│   ├── imports/                    # Figmaインポートファイル
│   ├── styles/                     # CSSファイル
│   │   ├── fonts.css              # フォント設定
│   │   ├── index.css              # メインCSS
│   │   ├── tailwind.css           # Tailwind設定
│   │   └── theme.css              # テーマ設定
│   └── main.tsx                    # エントリーポイント
├── index.html                      # HTMLテンプレート
├── vite.config.ts                  # Vite設定
├── package.json                    # 依存関係
└── README.md                       # このファイル
```

## 🎨 デザイン仕様

- **レスポンシブデザイン**: デスクトップ、タブレット、モバイル対応
- **フォント**: Shippori Mincho（Google Fonts）
- **カラースキーム**: 
  - プライマリー: #a72727（赤）
  - アクセント: #9f941d（ゴールド）
  - 背景: #ececec（ライトグレー）

## 🔧 トラブルシューティング

### 画像が表示されない

Figmaからインポートされた画像は `figma:asset` スキームを使用しています。ローカル環境では正常に動作しますが、デプロイ時には画像ファイルが必要になる場合があります。

### ビルドエラー

```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

### GitHub Pagesで表示されない

1. リポジトリの Settings > Pages で GitHub Actions が有効になっているか確認
2. Actions タブでビルドが成功しているか確認
3. vite.config.ts の `base` パスが正しいか確認

## 📝 ライセンス

このプロジェクトは教育目的で作成されています。

## 🤝 貢献

プルリクエストは歓迎します。大きな変更の場合は、まずissueを開いて変更内容を議論してください。

## 📧 お問い合わせ

質問や提案がある場合は、GitHubのIssueを作成してください。
