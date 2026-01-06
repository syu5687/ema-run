# デプロイメントガイド

## 🌐 本番環境

**公開URL**: https://ema-run-665477084949.asia-northeast1.run.app/testbridalSystem/index.html

## 📦 デプロイ手順

### 1. ローカルでビルド

```bash
# 依存関係をインストール（初回のみ）
npm install

# プロダクションビルドを実行
npm run build
```

ビルドが成功すると、`dist` フォルダに以下のファイルが生成されます：
- `index.html`
- `assets/` フォルダ（JS、CSS、画像など）

### 2. ビルド内容の確認

```bash
# distフォルダの内容を確認
ls -la dist/

# ローカルでビルド結果をプレビュー
npm run preview
```

プレビューは以下のURLで確認できます：
```
http://localhost:4173/testbridalSystem/
```

### 3. Google Cloud Runへのデプロイ

#### distフォルダをアップロード

1. `dist` フォルダの内容をCloud Runの `/testbridalSystem/` ディレクトリにアップロード
2. Cloud Runの設定に従ってデプロイを実行

#### ベースパスの設定

`vite.config.ts` でベースパスを設定済み：

```typescript
export default defineConfig({
  base: '/testbridalSystem/', // 本番環境のパスに合わせる
  // ...
})
```

このパスは本番URLの構造と一致している必要があります。

## 🔄 更新フロー

### コードを更新した場合

```bash
# 1. 変更をコミット
git add .
git commit -m "Update: 変更内容の説明"

# 2. GitHubにプッシュ
git push origin main

# 3. ローカルでビルド
npm run build

# 4. distフォルダをCloud Runにアップロード
# （具体的な手順は運用環境により異なります）
```

## 🛠 設定ファイル

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/testbridalSystem/', // 重要: 本番環境のパス
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
```

### package.json スクリプト

```json
{
  "scripts": {
    "dev": "vite",              // 開発サーバー（http://localhost:5173/testbridalSystem/）
    "build": "vite build",      // プロダクションビルド
    "preview": "vite preview"   // ビルドのプレビュー
  }
}
```

## 🔍 トラブルシューティング

### 問題: ページが表示されない

**原因**: ベースパスの設定ミス

**解決方法**:
1. `vite.config.ts` の `base` が `/testbridalSystem/` になっているか確認
2. 再ビルドして確認
   ```bash
   npm run build
   npm run preview
   ```

### 問題: アセット（CSS/JS）が読み込まれない

**原因**: ビルド後のパスが正しくない

**解決方法**:
1. `dist/index.html` を開いて、アセットのパスを確認
2. パスが `/testbridalSystem/assets/...` で始まっているか確認
3. 正しくない場合は、`vite.config.ts` の `base` を修正して再ビルド

### 問題: 画像が表示されない

**原因**: Figmaの `figma:asset` スキームは本番環境では動作しない

**解決方法**:
実際の画像ファイルに置き換える必要があります。

```tsx
// 修正前
import img from "figma:asset/xxx.png";

// 修正後（実際の画像ファイルを使用）
import img from "/assets/images/xxx.png";
```

### 問題: ローカルで動作するが本番で動作しない

**チェックリスト**:
- [ ] `npm run build` が成功しているか
- [ ] `dist` フォルダが正しく生成されているか
- [ ] Cloud Runに正しくアップロードされているか
- [ ] Cloud Runの設定でパスが正しく設定されているか
- [ ] ブラウザのコンソールでエラーが出ていないか

## 📊 デプロイチェックリスト

デプロイ前に以下を確認してください：

- [ ] ローカルで `npm run dev` が動作する
- [ ] `npm run build` が成功する
- [ ] `npm run preview` でビルド結果が正しく表示される
- [ ] `dist/index.html` のパスが `/testbridalSystem/` で始まる
- [ ] コンソールにエラーがない
- [ ] レスポンシブデザインが正しく動作する
- [ ] 全てのページ遷移が動作する
- [ ] フォーム送信が動作する

## 🚀 本番環境の確認

デプロイ後、以下を確認してください：

1. **トップページ**
   - URL: https://ema-run-665477084949.asia-northeast1.run.app/testbridalSystem/index.html
   - フェアカードが表示されるか
   - 「全てのフェアを見る」ボタンが動作するか

2. **詳細ページ**
   - カードをクリックして詳細が表示されるか
   - 予約ボタンが動作するか

3. **アーカイブページ**
   - カレンダーが表示されるか
   - カテゴリー選択が動作するか
   - 検索機能が動作するか

4. **お問い合わせフォーム**
   - フォームが表示されるか
   - バリデーションが動作するか
   - 送信後にサンクスページに遷移するか

5. **レスポンシブ対応**
   - デスクトップ（1920px以上）
   - タブレット（768px〜1024px）
   - モバイル（375px〜768px）

## 📝 メモ

### ビルドサイズの最適化

現在のビルド設定で十分ですが、さらに最適化したい場合：

```typescript
// vite.config.ts
export default defineConfig({
  // ...
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser', // より強力な圧縮
    terserOptions: {
      compress: {
        drop_console: true, // console.logを削除
      },
    },
  },
})
```

### 環境変数の使用

異なる環境（開発、本番）で異なる設定を使用する場合：

```bash
# .env.production
VITE_API_URL=https://api.example.com
VITE_BASE_PATH=/testbridalSystem/
```

```typescript
// vite.config.ts
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  // ...
})
```

---

**最終更新**: 2026年1月6日
