# クイックスタートガイド

## 🚀 5分で開発環境をセットアップ

### 1. リポジトリをクローン

```bash
git clone <your-repository-url>
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

ブラウザで以下のURLを開きます：
```
http://localhost:5173/testbridalSystem/
```

## ✅ 動作確認

ブラウザで以下が表示されれば成功です：

- ✓ ブライダルフェアのホームページ
- ✓ フェアカード（3つ）
- ✓ 「全てのフェアを見る」ボタン

## 📝 開発フロー

### コードを編集する

1. `src/app/components/` 内のファイルを編集
2. 保存すると自動的にブラウザが更新される（HMR）

### 新しいコンポーネントを追加する

```tsx
// src/app/components/MyComponent.tsx
export default function MyComponent() {
  return <div>Hello World</div>;
}
```

### スタイルを編集する

- `src/styles/theme.css` - カラーやフォントの設定
- `src/styles/fonts.css` - フォントの読み込み
- Tailwind CSS クラスをコンポーネント内で直接使用

## 🛠 便利なコマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## 🎨 主なファイル

```
src/
├── app/
│   ├── App.tsx                  # メインアプリ（ルーティング）
│   └── components/
│       ├── BridalHome.tsx       # トップページ
│       ├── BridalDetail.tsx     # 詳細ページ
│       ├── BridalArchive.tsx    # 検索ページ
│       ├── ContactForm.tsx      # お問い合わせフォーム
│       └── ThankYouPage.tsx     # サンクスページ
├── styles/
│   ├── fonts.css                # フォント設定
│   ├── theme.css                # テーマカラー
│   └── tailwind.css             # Tailwind設定
└── main.tsx                     # エントリーポイント
```

## 🐛 トラブルシューティング

### ポートが使用中

```bash
# 別のポートで起動
npm run dev -- --port 3000
```

### モジュールが見つからない

```bash
# 再インストール
rm -rf node_modules package-lock.json
npm install
```

### ページが真っ白

1. ブラウザのコンソールを開く（F12）
2. エラーメッセージを確認
3. URLが `http://localhost:5173/testbridalSystem/` になっているか確認

## 📚 次のステップ

- [README.md](./README.md) - プロジェクト全体の説明
- [DEPLOYMENT.md](./DEPLOYMENT.md) - デプロイ方法

---

問題が解決しない場合は、GitHubのIssueを作成してください。
