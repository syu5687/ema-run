import{d as C,l as S,a as g}from"./admin.D9nlQRag.js";const E=()=>{const p=document.getElementById("plan-data"),r=document.querySelector("#plan-editor"),v=document.querySelector("#plan-add-btn"),y=document.querySelector("#plan-export-btn"),u=document.querySelector("#plan-status");if(!p||!r||!v||!y||!u)return;const i=JSON.parse(p.textContent??"[]"),s=(t,e)=>`[data-pi="${t}"][data-field="${e}"]`,o=t=>{const e=r.querySelector(t);return e?e.value.trim():""},m=t=>{const e=r.querySelector(t);return e?e.value:""},w=t=>{const e=r.querySelector(t);return e?e.checked:!1},d=(t,e)=>{const a=r.querySelector(t);a&&(a.value=e)},x=(t,e)=>{const a=r.querySelector(t);a&&(a.checked=e)},b=t=>{const e=o(t),a=Number(e);return e===""||Number.isNaN(a)?void 0:a},f=()=>{i.forEach((t,e)=>{t.id=o(s(e,"id")),t.title=o(s(e,"title")),t.description=m(s(e,"description")).trim(),t.thumbnail={src:o(s(e,"thumbnailSrc")),alt:o(s(e,"thumbnailAlt"))};const a=o(s(e,"priceFrom")),n=Number(a);t.priceFrom=a===""||Number.isNaN(n)?0:n,t.priceTo=b(s(e,"priceTo")),t.guestCountBase=b(s(e,"guestCountBase")),t.sortOrder=b(s(e,"sortOrder")),t.isPublished=w(s(e,"isPublished"));const l=S(m(s(e,"includes")));t.includes=l.length?l:void 0;const $=S(m(s(e,"styleIds")));t.styleIds=$.length?$:void 0})},k=()=>{i.forEach((t,e)=>{d(s(e,"id"),t.id),d(s(e,"title"),t.title),d(s(e,"description"),t.description),d(s(e,"thumbnailSrc"),t.thumbnail.src),d(s(e,"thumbnailAlt"),t.thumbnail.alt),d(s(e,"priceFrom"),String(t.priceFrom)),d(s(e,"priceTo"),t.priceTo===void 0?"":String(t.priceTo)),d(s(e,"guestCountBase"),t.guestCountBase===void 0?"":String(t.guestCountBase)),d(s(e,"sortOrder"),t.sortOrder===void 0?"":String(t.sortOrder)),x(s(e,"isPublished"),t.isPublished),d(s(e,"includes"),g(t.includes)),d(s(e,"styleIds"),g(t.styleIds))})},I=(t,e)=>`
      <section class="adm-card">
        <div class="adm-card__head">
          <h2>プラン ${e+1}</h2>
          <label class="adm-pub"><input type="checkbox" data-pi="${e}" data-field="isPublished" /> 公開する</label>
          <button type="button" class="adm-btn adm-btn--danger" data-action="del-plan" data-pi="${e}">プラン削除</button>
        </div>

        <label class="adm-field">ID（URLに使用・英数字とハイフン・重複不可）
          <input type="text" data-pi="${e}" data-field="id" placeholder="private-full" />
        </label>
        <label class="adm-field">タイトル
          <input type="text" data-pi="${e}" data-field="title" />
        </label>
        <label class="adm-field">説明文
          <textarea rows="3" data-pi="${e}" data-field="description"></textarea>
        </label>

        <div class="adm-row">
          <label class="adm-field">サムネイル画像パス
            <input type="text" data-pi="${e}" data-field="thumbnailSrc" placeholder="/images/plans/sample-plan-01.jpg" />
          </label>
          <label class="adm-field">サムネイル代替テキスト(alt)
            <input type="text" data-pi="${e}" data-field="thumbnailAlt" />
          </label>
        </div>

        <div class="adm-row">
          <label class="adm-field adm-field--narrow">最低価格（円・必須）
            <input type="number" data-pi="${e}" data-field="priceFrom" placeholder="1920000" />
          </label>
          <label class="adm-field adm-field--narrow">上限価格（円・任意）
            <input type="number" data-pi="${e}" data-field="priceTo" placeholder="3000000" />
          </label>
          <label class="adm-field adm-field--narrow">基準人数（任意）
            <input type="number" data-pi="${e}" data-field="guestCountBase" placeholder="100" />
          </label>
          <label class="adm-field adm-field--narrow">表示順
            <input type="number" data-pi="${e}" data-field="sortOrder" />
          </label>
        </div>
        <p class="adm-hint">価格は総額（円）。上限価格を入れると「価格帯」、空なら単価として表示されます（詳細ページの出し分け）。</p>

        <div class="adm-row">
          <label class="adm-field">含まれるもの（1行に1つ／任意）
            <textarea rows="4" data-pi="${e}" data-field="includes" placeholder="挙式&#10;披露宴&#10;コーディネート"></textarea>
          </label>
          <label class="adm-field">対象スタイルID（1行に1つ／任意）
            <textarea rows="4" data-pi="${e}" data-field="styleIds" placeholder="private&#10;small"></textarea>
          </label>
        </div>
        <p class="adm-hint">対象スタイルIDは styles.json の id（例: private / small）と一致させてください。一致しないと詳細ページのスタイルリンクが切れます。</p>
      </section>`,N=()=>i.map((t,e)=>I(t,e)).join(""),h=()=>{r.innerHTML=N(),k()},c=(t,e)=>{u.textContent=t,u.className="adm-status"+(e?" is-"+e:"")},O=()=>({id:"",title:"",description:"",thumbnail:{src:"",alt:""},priceFrom:0,isPublished:!1}),T=()=>{const t=[],e=new Set;return i.forEach((a,n)=>{const l=n+1;a.id===""?t.push(`${l}件目: ID が空です`):e.has(a.id)&&t.push(`${l}件目: ID「${a.id}」が重複しています`),e.add(a.id),a.title===""&&t.push(`${l}件目: タイトルが空です`),a.thumbnail.src===""&&t.push(`${l}件目: サムネイル画像パスが空です`),a.thumbnail.alt===""&&t.push(`${l}件目: サムネイルの alt が空です`),a.priceFrom<=0&&t.push(`${l}件目: 最低価格が未入力（または0）です`),a.priceTo!==void 0&&a.priceTo<a.priceFrom&&t.push(`${l}件目: 上限価格が最低価格より小さくなっています`)}),t};r.addEventListener("click",t=>{const e=t.target;if(!(e instanceof Element))return;const a=e.closest("button[data-action]");if(!a)return;const n=a.dataset.action??"",l=a.dataset.pi!==void 0?Number(a.dataset.pi):-1;f(),n==="del-plan"&&l>=0&&window.confirm("このプランを削除します。よろしいですか？")&&i.splice(l,1),h(),c("","")}),v.addEventListener("click",()=>{f(),i.push(O()),h(),c("新しいプランを末尾に追加しました。下までスクロールして入力してください。","ok")}),y.addEventListener("click",()=>{f();const t=T();if(t.length>0){if(c("確認ポイントがあります（このまま書き出すことも可能）","warn"),!window.confirm(`入力に確認ポイントがあります。それでも書き出しますか？

`+t.join(`
`)))return}else c("書き出しました。plans.json を src/data/ に置き換えてください。","ok");C("plans.json",i)}),h()};E();
