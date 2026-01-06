# セットアップガイド

## 問題: GitHubで何も表示されない

この問題は以下の欠けているファイルが原因でした：

### ✅ 追加されたファイル

1. **index.html** - HTMLエントリーポイント
2. **src/main.tsx** - Reactアプリのマウントポイント
3. **tsconfig.json** - TypeScript設定
4. **tsconfig.node.json** - Vite用TypeScript設定
5. **.github/workflows/deploy.yml** - GitHub Actions CI/CD設定
6. **更新されたpackage.json** - dev/build/previewスクリプト追加

## 🚀 今すぐ実行すること

### 1. ローカルでテスト

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:5173 を開いて動作確認してください。

### 2. GitHubにプッシュ

```bash
# 変更をステージング
git add .

# コミット
git commit -m "Add missing files: index.html, main.tsx, tsconfig, and GitHub Actions workflow"

# GitHubにプッシュ
git push origin main
```

### 3. GitHub Pagesを有効化

1. GitHubリポジトリページに移動
2. **Settings** タブをクリック
3. 左サイドバーの **Pages** をクリック
4. **Source** で **GitHub Actions** を選択
5. 保存

### 4. デプロイを確認

1. リポジトリの **Actions** タブに移動
2. 最新のワークフローが実行中/完了しているか確認
3. 完了後、GitHub PagesのURLにアクセス:
   - `https://[your-username].github.io/[repo-name]/`

## 🔍 トラブルシューティング

### GitHub Actionsが失敗する場合

**原因**: GitHub Pagesが有効化されていない

**解決方法**:
1. Settings > Pages に移動
2. Source を "GitHub Actions" に設定

### 画像が表示されない場合

**原因**: `figma:asset` スキームはFigma Make環境でのみ動作

**解決方法**: 
- 実際の画像ファイルをプロジェクトに追加
- または、プレースホルダー画像を使用

```tsx
// 修正例
// import img from "figma:asset/xxx.png";
import img from "/path/to/actual/image.png";
```

### npm install でエラーが出る場合

```bash
# キャッシュをクリア
npm cache clean --force

# 再インストール
rm -rf node_modules package-lock.json
npm install
```

## 📋 チェックリスト

- [x] index.html 作成済み
- [x] src/main.tsx 作成済み
- [x] tsconfig.json 作成済み
- [x] package.json 更新済み（dev/build/previewスクリプト）
- [x] .github/workflows/deploy.yml 作成済み
- [x] vite.config.ts 更新済み（base: './'）
- [ ] ローカルで npm run dev を実行して動作確認
- [ ] GitHubにプッシュ
- [ ] GitHub Pages を有効化
- [ ] デプロイを確認

## 🎉 完了！

これで以下が可能になります：

1. **ローカル開発**: `npm run dev` で即座に開発開始
2. **プロダクションビルド**: `npm run build` で最適化されたビルド
3. **自動デプロイ**: mainブランチへのプッシュで自動的にGitHub Pagesにデプロイ
4. **プレビュー**: `npm run preview` でビルド後のプレビュー

## 📞 サポート

問題が解決しない場合は、以下の情報を含めてIssueを作成してください：

- エラーメッセージ
- 実行したコマンド
- Node.jsとnpmのバージョン (`node -v` と `npm -v`)
- OS情報
