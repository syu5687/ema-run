import{d as j,l as q,a as D}from"./admin.D9nlQRag.js";const L=()=>{const g=document.getElementById("report-data"),i=document.querySelector("#report-editor"),y=document.querySelector("#report-add-btn"),$=document.querySelector("#report-export-btn"),m=document.querySelector("#report-status");if(!g||!i||!y||!$||!m)return;const o=JSON.parse(g.textContent??"[]"),l=(e,t)=>`[data-ri="${e}"][data-field="${t}"]`,n=e=>{const t=i.querySelector(e);return t?t.value.trim():""},f=e=>{const t=i.querySelector(e);return t?t.value:""},w=e=>{const t=i.querySelector(e);return t?t.checked:!1},s=(e,t)=>{const a=i.querySelector(e);a&&(a.value=t)},x=(e,t)=>{const a=i.querySelector(e);a&&(a.checked=t)},v=e=>{if(e==="")return;const t=Number(e);return Number.isNaN(t)?void 0:t},S=e=>e.split(`
`).map(t=>t.trim()).filter(t=>t.length>0).map(t=>{const a=t.indexOf(",");return a===-1?{src:t,alt:""}:{src:t.slice(0,a).trim(),alt:t.slice(a+1).trim()}}),k=e=>(e??[]).map(t=>`${t.src},${t.alt}`).join(`
`),h=()=>{o.forEach((e,t)=>{e.id=n(l(t,"id")),e.title=n(l(t,"title"));const a=n(l(t,"coupleName"));e.coupleName=a===""?void 0:a;const c=n(l(t,"weddingDate"));e.weddingDate=c===""?void 0:c,e.guestCount=v(n(l(t,"guestCount"))),e.body=f(l(t,"body")).trim(),e.thumbnail={src:n(l(t,"thumbnailSrc")),alt:n(l(t,"thumbnailAlt"))};const d=S(f(l(t,"gallery")));e.gallery=d.length?d:void 0;const r=q(f(l(t,"tags")));e.tags=r.length?r:void 0,e.isPublished=w(l(t,"isPublished"));const b=n(l(t,"publishedAt"));e.publishedAt=b===""?void 0:b,e.sortOrder=v(n(l(t,"sortOrder")))})},N=()=>{o.forEach((e,t)=>{s(l(t,"id"),e.id),s(l(t,"title"),e.title),s(l(t,"coupleName"),e.coupleName??""),s(l(t,"weddingDate"),e.weddingDate??""),s(l(t,"guestCount"),e.guestCount===void 0?"":String(e.guestCount)),s(l(t,"body"),e.body),s(l(t,"thumbnailSrc"),e.thumbnail.src),s(l(t,"thumbnailAlt"),e.thumbnail.alt),s(l(t,"gallery"),k(e.gallery)),s(l(t,"tags"),D(e.tags)),x(l(t,"isPublished"),e.isPublished),s(l(t,"publishedAt"),e.publishedAt??""),s(l(t,"sortOrder"),e.sortOrder===void 0?"":String(e.sortOrder))})},O=(e,t)=>`
      <section class="adm-card">
        <div class="adm-card__head">
          <h2>レポート ${t+1}</h2>
          <label class="adm-pub"><input type="checkbox" data-ri="${t}" data-field="isPublished" /> 公開する</label>
          <button type="button" class="adm-btn adm-btn--danger" data-action="del-report" data-ri="${t}">レポート削除</button>
        </div>

        <label class="adm-field">ID（URLに使用・英数字とハイフン・重複不可）
          <input type="text" data-ri="${t}" data-field="id" placeholder="report-202606-01" />
        </label>
        <label class="adm-field">タイトル
          <input type="text" data-ri="${t}" data-field="title" />
        </label>

        <div class="adm-row">
          <label class="adm-field">カップル名（任意・イニシャル等）
            <input type="text" data-ri="${t}" data-field="coupleName" placeholder="K & A" />
          </label>
          <label class="adm-field">挙式日（任意）
            <input type="date" data-ri="${t}" data-field="weddingDate" />
          </label>
          <label class="adm-field adm-field--narrow">招待人数（任意）
            <input type="number" data-ri="${t}" data-field="guestCount" />
          </label>
        </div>

        <label class="adm-field">本文（改行はそのまま表示されます）
          <textarea rows="6" data-ri="${t}" data-field="body"></textarea>
        </label>

        <div class="adm-row">
          <label class="adm-field">サムネイル画像パス（一覧用）
            <input type="text" data-ri="${t}" data-field="thumbnailSrc" placeholder="/images/reports/sample-report-01.jpg" />
          </label>
          <label class="adm-field">サムネイル代替テキスト(alt)
            <input type="text" data-ri="${t}" data-field="thumbnailAlt" />
          </label>
        </div>

        <label class="adm-field">ギャラリー画像（1行に「画像パス,代替テキスト」／任意）
          <textarea rows="4" data-ri="${t}" data-field="gallery" placeholder="/images/reports/sample-report-01-01.jpg,挙式の様子&#10;/images/reports/sample-report-01-02.jpg,披露宴の様子"></textarea>
        </label>
        <p class="adm-hint">最初のカンマで「前＝画像パス」「後＝代替テキスト(alt)」に分けます。画像パスは .jpg で指定（同名の .webp も用意）。</p>

        <div class="adm-row">
          <label class="adm-field">タグ（1行に1つ／任意）
            <textarea rows="3" data-ri="${t}" data-field="tags" placeholder="少人数&#10;家族婚&#10;ガーデン"></textarea>
          </label>
          <label class="adm-field">公開日（任意・推奨）
            <input type="date" data-ri="${t}" data-field="publishedAt" />
          </label>
          <label class="adm-field adm-field--narrow">表示順
            <input type="number" data-ri="${t}" data-field="sortOrder" />
          </label>
        </div>
      </section>`,E=()=>o.map((e,t)=>O(e,t)).join(""),p=()=>{i.innerHTML=E(),N()},u=(e,t)=>{m.textContent=e,m.className="adm-status"+(t?" is-"+t:"")},A=()=>({id:"",title:"",body:"",thumbnail:{src:"",alt:""},isPublished:!1}),C=()=>{const e=[],t=new Set;return o.forEach((a,c)=>{const d=c+1;a.id===""?e.push(`${d}件目: ID が空です`):t.has(a.id)&&e.push(`${d}件目: ID「${a.id}」が重複しています`),t.add(a.id),a.title===""&&e.push(`${d}件目: タイトルが空です`),a.body===""&&e.push(`${d}件目: 本文が空です`),a.thumbnail.src===""&&e.push(`${d}件目: サムネイル画像パスが空です`),a.thumbnail.alt===""&&e.push(`${d}件目: サムネイルの alt が空です`),(a.gallery??[]).forEach((r,b)=>{r.src!==""&&r.alt===""&&e.push(`${d}件目: ギャラリー${b+1}枚目の alt が空です`)})}),e};i.addEventListener("click",e=>{const t=e.target;if(!(t instanceof Element))return;const a=t.closest("button[data-action]");if(!a)return;const c=a.dataset.action??"",d=a.dataset.ri!==void 0?Number(a.dataset.ri):-1;h(),c==="del-report"&&d>=0&&window.confirm("このレポートを削除します。よろしいですか？")&&o.splice(d,1),p(),u("","")}),y.addEventListener("click",()=>{h(),o.push(A()),p(),u("新しいレポートを末尾に追加しました。下までスクロールして入力してください。","ok")}),$.addEventListener("click",()=>{h();const e=C();if(e.length>0){if(u("確認ポイントがあります（このまま書き出すことも可能）","warn"),!window.confirm(`入力に確認ポイントがあります。それでも書き出しますか？

`+e.join(`
`)))return}else u("書き出しました。reports.json を src/data/ に置き換えてください。","ok");j("reports.json",o)}),p()};L();
