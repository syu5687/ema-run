# 変更履歴

## 2026年1月6日 - Google Cloud Run対応

### ✅ 実施した変更

#### 1. Vite設定の更新
- **ファイル**: `vite.config.ts`
- **変更内容**: ベースパスを `/testbridalSystem/` に変更
- **理由**: Google Cloud Runの本番URLに合わせるため

```typescript
// 変更前
base: './',

// 変更後
base: '/testbridalSystem/',
```

#### 2. .gitignore の作成
- **ファイル**: `.gitignore`
- **内容**: 
  - node_modules
  - dist
  - ログファイル
  - 環境変数ファイル
  - エディタ設定

#### 3. ドキュメントの更新・作成

**README.md**
- Google Cloud Runの本番URLを追加
- デプロイ手順を更新
- トラブルシューティングセクションを更新

**DEPLOYMENT.md（新規作成）**
- 詳細なデプロイ手順
- ビルドとプレビューの方法
- トラブルシューティング
- チェックリスト

**QUICKSTART.md（新規作成）**
- 5分でセットアップできるガイド
- 基本的な開発フロー
- よく使うコマンド

**SETUP.md（削除）**
- 内容が古くなったため削除
- QUICKSTART.mdとDEPLOYMENT.mdに分割

### 📋 本番環境の情報

- **URL**: https://ema-run-665477084949.asia-northeast1.run.app/testbridalSystem/index.html
- **ホスティング**: Google Cloud Run
- **ベースパス**: `/testbridalSystem/`

### 🎯 開発ワークフロー

#### ローカル開発
```bash
npm install
npm run dev
# http://localhost:5173/testbridalSystem/ でアクセス
```

#### プロダクションビルド
```bash
npm run build
# dist フォルダが生成される
```

#### ビルドのプレビュー
```bash
npm run preview
# http://localhost:4173/testbridalSystem/ でアクセス
```

#### デプロイ
1. `npm run build` でビルド
2. `dist` フォルダの内容をCloud Runにアップロード

### ⚠️ 注意事項

#### パスの重要性
- `vite.config.ts` の `base` パスは本番環境のパスと**完全に一致**させる必要があります
- パスが異なると、CSS/JSファイルが読み込まれません

#### 画像ファイル
- Figmaの `figma:asset` スキームはローカル開発環境でのみ動作
- 本番環境では実際の画像ファイルが必要

#### レスポンシブ対応
- デスクトップ: 1920px以上
- タブレット: 768px〜1024px
- モバイル: 375px〜768px

### 🔄 今後の作業

#### すぐに実行すること
1. ✅ `vite.config.ts` のbaseパスを `/testbridalSystem/` に設定（完了）
2. ✅ `.gitignore` を作成（完了）
3. ✅ ドキュメントを更新（完了）
4. ⏳ コードをGitHubにプッシュ
5. ⏳ ローカルでビルドをテスト
6. ⏳ Cloud Runにデプロイ

#### 将来的な改善
- [ ] 画像ファイルを実際のファイルに置き換え
- [ ] バックエンドAPI連携
- [ ] フォームデータの保存機能
- [ ] ユーザー認証
- [ ] SEO最適化
- [ ] パフォーマンス最適化

### 📝 技術スタック（確定版）

- **フロントエンド**: React 18.3 + TypeScript
- **ビルドツール**: Vite 6.3
- **スタイリング**: Tailwind CSS v4
- **フォント**: Shippori Mincho（Google Fonts）
- **ホスティング**: Google Cloud Run
- **バージョン管理**: Git + GitHub

### 🔗 関連ドキュメント

- [README.md](./README.md) - プロジェクト概要
- [QUICKSTART.md](./QUICKSTART.md) - クイックスタート
- [DEPLOYMENT.md](./DEPLOYMENT.md) - デプロイ手順

---

**変更者**: AI Assistant  
**日付**: 2026年1月6日  
**バージョン**: 1.0.0
