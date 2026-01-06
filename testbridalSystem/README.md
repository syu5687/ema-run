# ブライダルフェア Webアプリケーション

Figmaデザインから作成されたブライダルフェアのWebアプリケーションです。

## 🌐 本番環境

**公開URL**: https://ema-run-665477084949.asia-northeast1.run.app/testbridalSystem/index.html

Google Cloud Run上でホスティングされています。

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
- **Shippori Mincho** - 日本語フォント（Google Fonts）
- **Google Cloud Run** - ホスティング環境

## 📋 前提条件

以下がインストールされている必要があります：

- Node.js 18.x 以上
- npm 9.x 以上

## 🚀 セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/bridal-fair-app.git
cd bridal-fair-app
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173/testbridalSystem/` を開いてください。

### 4. プロダクションビルド

```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに出力されます。

### 5. ビルドのプレビュー

```bash
npm run preview
```

## 🌍 デプロイ方法

### Google Cloud Runへのデプロイ

本番環境はGoogle Cloud Run上で動作しています。

#### 手順

1. **ビルドを実行**
   ```bash
   npm run build
   ```

2. **distフォルダの内容を確認**
   ```bash
   ls -la dist/
   ```

3. **distフォルダをCloud Runの適切なディレクトリにアップロード**
   - distフォルダの内容を `/testbridalSystem/` ディレクトリにデプロイ
   - Cloud Runのデプロイ設定に従ってアップロード

#### ベースパス設定

`vite.config.ts` に以下の設定があります：

```typescript
base: '/testbridalSystem/'
```

このパスは本番環境のURLに合わせて設定されています。

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
│   │   ├── fonts.css              # フォント設定（Shippori Mincho）
│   │   ├── index.css              # メインCSS
│   │   ├── tailwind.css           # Tailwind設定
│   │   └── theme.css              # テーマ設定
│   └── main.tsx                    # エントリーポイント
├── index.html                      # HTMLテンプレート
├── vite.config.ts                  # Vite設定
├── tsconfig.json                   # TypeScript設定
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

### ローカル開発で画像が表示されない

Figmaからインポートされた画像は `figma:asset` スキームを使用しています。ローカル環境では正常に動作しますが、本番環境では実際の画像ファイルが必要です。

### ビルドエラー

```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

### パスが正しく解決されない

`vite.config.ts` の `base` パスが本番環境のパス `/testbridalSystem/` と一致していることを確認してください。

### 開発サーバーで404エラー

開発サーバーでは以下のURLにアクセスしてください：
```
http://localhost:5173/testbridalSystem/
```

## 📝 スクリプト

```json
{
  "scripts": {
    "dev": "vite",              // 開発サーバー起動
    "build": "vite build",      // プロダクションビルド
    "preview": "vite preview"   // ビルドのプレビュー
  }
}
```

## 🔒 セキュリティ

- フォーム入力のバリデーション実装済み
- XSS対策のためReactのエスケープ機能を使用
- HTTPS通信（Cloud Run標準）

## 📈 今後の改善予定

- [ ] フォームデータのバックエンド連携
- [ ] 実際のフェアデータベース接続
- [ ] ユーザー認証機能
- [ ] 予約管理システム
- [ ] メール通知機能

## 📄 ライセンス

このプロジェクトは教育目的で作成されています。

## 🤝 貢献

プルリクエストは歓迎します。大きな変更の場合は、まずissueを開いて変更内容を議論してください。

## 📧 お問い合わせ

質問や提案がある場合は、GitHubのIssueを作成してください。

---

**最終更新**: 2026年1月6日
