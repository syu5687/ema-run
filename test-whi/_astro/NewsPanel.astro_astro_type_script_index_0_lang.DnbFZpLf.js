import{d as A}from"./admin.D9nlQRag.js";const E=()=>{const m=document.getElementById("news-data"),s=document.querySelector("#news-editor"),f=document.querySelector("#news-add-btn"),p=document.querySelector("#news-export-btn"),u=document.querySelector("#news-status");if(!m||!s||!f||!p||!u)return;const n=JSON.parse(m.textContent??"[]"),l=(e,t)=>`[data-ni="${e}"][data-field="${t}"]`,c=e=>{const t=s.querySelector(e);return t?t.value.trim():""},y=e=>{const t=s.querySelector(e);return t?t.value:""},w=e=>{const t=s.querySelector(e);return t?t.checked:!1},i=(e,t)=>{const a=s.querySelector(e);a&&(a.value=t)},$=(e,t)=>{const a=s.querySelector(e);a&&(a.checked=t)},b=()=>{n.forEach((e,t)=>{e.id=c(l(t,"id")),e.title=c(l(t,"title")),e.body=y(l(t,"body")).trim(),e.publishedAt=c(l(t,"publishedAt")),e.isPublished=w(l(t,"isPublished"));const a=c(l(t,"category"));e.category=a===""?void 0:a;const o=c(l(t,"thumbnailSrc")),d=c(l(t,"thumbnailAlt"));e.thumbnail=o===""&&d===""?void 0:{src:o,alt:d}})},v=()=>{n.forEach((e,t)=>{i(l(t,"id"),e.id),i(l(t,"title"),e.title),i(l(t,"body"),e.body),i(l(t,"publishedAt"),e.publishedAt),i(l(t,"category"),e.category??""),$(l(t,"isPublished"),e.isPublished),i(l(t,"thumbnailSrc"),e.thumbnail?.src??""),i(l(t,"thumbnailAlt"),e.thumbnail?.alt??"")})},S=(e,t)=>`
      <section class="adm-card">
        <div class="adm-card__head">
          <h2>お知らせ ${t+1}</h2>
          <label class="adm-pub"><input type="checkbox" data-ni="${t}" data-field="isPublished" /> 公開する</label>
          <button type="button" class="adm-btn adm-btn--danger" data-action="del-news" data-ni="${t}">お知らせ削除</button>
        </div>

        <label class="adm-field">ID（URLに使用・英数字とハイフン・重複不可）
          <input type="text" data-ni="${t}" data-field="id" placeholder="news-202606-01" />
        </label>
        <label class="adm-field">タイトル
          <input type="text" data-ni="${t}" data-field="title" />
        </label>

        <div class="adm-row">
          <label class="adm-field adm-field--narrow">公開日（必須）
            <input type="date" data-ni="${t}" data-field="publishedAt" />
          </label>
          <label class="adm-field">カテゴリ（任意）
            <input type="text" data-ni="${t}" data-field="category" list="news-category-options" placeholder="お知らせ" />
          </label>
        </div>
        <p class="adm-hint">公開日は記事の構造化データ（公開日時）に使うため必須です。カテゴリは候補から選ぶか自由入力できます。</p>

        <label class="adm-field">本文
          <textarea rows="6" data-ni="${t}" data-field="body"></textarea>
        </label>
        <p class="adm-hint">本文の改行はそのまま表示されます（詳細ページで white-space: pre-line で保持）。</p>

        <div class="adm-row">
          <label class="adm-field">キャッチ画像パス（任意）
            <input type="text" data-ni="${t}" data-field="thumbnailSrc" placeholder="/images/news/news-202606-01.jpg" />
          </label>
          <label class="adm-field">キャッチ画像の代替テキスト(alt)
            <input type="text" data-ni="${t}" data-field="thumbnailAlt" />
          </label>
        </div>
        <p class="adm-hint">画像は任意。使う場合は public/images/news/ に同名で .jpg と .webp を置きます。画像を入れるなら alt も入れてください。</p>
      </section>`,g=()=>n.map((e,t)=>S(e,t)).join(""),h=()=>{s.innerHTML=g(),v()},r=(e,t)=>{u.textContent=e,u.className="adm-status"+(t?" is-"+t:"")},k=()=>({id:"",title:"",body:"",publishedAt:"",isPublished:!1}),x=()=>{const e=[],t=new Set;return n.forEach((a,o)=>{const d=o+1;a.id===""?e.push(`${d}件目: ID が空です`):t.has(a.id)&&e.push(`${d}件目: ID「${a.id}」が重複しています`),t.add(a.id),a.title===""&&e.push(`${d}件目: タイトルが空です`),a.publishedAt===""&&e.push(`${d}件目: 公開日が未入力です（構造化データに必要）`),a.thumbnail&&a.thumbnail.src!==""&&a.thumbnail.alt===""&&e.push(`${d}件目: 画像パスがあるのに alt が空です`),a.thumbnail&&a.thumbnail.src===""&&a.thumbnail.alt!==""&&e.push(`${d}件目: alt があるのに画像パスが空です`)}),e};s.addEventListener("click",e=>{const t=e.target;if(!(t instanceof Element))return;const a=t.closest("button[data-action]");if(!a)return;const o=a.dataset.action??"",d=a.dataset.ni!==void 0?Number(a.dataset.ni):-1;b(),o==="del-news"&&d>=0&&window.confirm("このお知らせを削除します。よろしいですか？")&&n.splice(d,1),h(),r("","")}),f.addEventListener("click",()=>{b(),n.push(k()),h(),r("新しいお知らせを末尾に追加しました。下までスクロールして入力してください。","ok")}),p.addEventListener("click",()=>{b();const e=x();if(e.length>0){if(r("確認ポイントがあります（このまま書き出すことも可能）","warn"),!window.confirm(`入力に確認ポイントがあります。それでも書き出しますか？

`+e.join(`
`)))return}else r("書き出しました。posts.json を src/data/ に置き換えてください。","ok");A("posts.json",n)}),h()};E();
