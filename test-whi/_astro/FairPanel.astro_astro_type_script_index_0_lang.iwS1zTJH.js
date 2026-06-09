import{d as M,l as w,a as S}from"./admin.D9nlQRag.js";const U=()=>{const k=document.getElementById("fair-data"),r=document.querySelector("#fair-editor"),E=document.querySelector("#fair-add-btn"),I=document.querySelector("#fair-export-btn"),$=document.querySelector("#fair-status");if(!k||!r||!E||!I||!$)return;const u=JSON.parse(k.textContent??"[]"),s=(e,t)=>`[data-fi="${e}"][data-field="${t}"]`,O=(e,t,a)=>`[data-fi="${e}"][data-di="${t}"][data-sfield="${a}"]`,h=(e,t,a,d)=>`[data-fi="${e}"][data-di="${t}"][data-si="${a}"][data-sfield="${d}"]`,i=e=>{const t=r.querySelector(e);return t?t.value.trim():""},b=e=>{const t=r.querySelector(e);return t?t.value:""},L=e=>{const t=r.querySelector(e);return t?t.checked:!1},n=(e,t)=>{const a=r.querySelector(e);a&&(a.value=t)},F=(e,t)=>{const a=r.querySelector(e);a&&(a.checked=t)},P=e=>e.split(`
`).map(t=>t.trim()).filter(t=>t.length>0).map(t=>{const a=t.indexOf(",");return a===-1?{icon:"",label:t}:{icon:t.slice(0,a).trim(),label:t.slice(a+1).trim()}}),A=e=>(e??[]).map(t=>`${t.icon},${t.label}`).join(`
`),f=()=>{u.forEach((e,t)=>{e.id=i(s(t,"id")),e.title=i(s(t,"title"));const a=i(s(t,"catchCopy"));e.catchCopy=a===""?void 0:a,e.description=b(s(t,"description")).trim(),e.thumbnail={src:i(s(t,"thumbnailSrc")),alt:i(s(t,"thumbnailAlt"))};const d=i(s(t,"duration"));e.duration=d===""?void 0:d;const l=i(s(t,"reservationFormId"));e.reservationFormId=l===""?void 0:l;const o=i(s(t,"sortOrder")),p=Number(o);e.sortOrder=o===""||Number.isNaN(p)?void 0:p,e.isPublished=L(s(t,"isPublished"));const c=w(b(s(t,"tags")));e.tags=c.length?c:void 0;const m=w(b(s(t,"benefits")));e.benefits=m.length?m:void 0;const C=w(b(s(t,"contractBenefits")));e.contractBenefits=C.length?C:void 0;const N=P(b(s(t,"contents")));e.contents=N.length?N:void 0,e.schedule.forEach((q,x)=>{q.date=i(O(t,x,"date")),q.times.forEach((B,j)=>{B.time=i(h(t,x,j,"time"));const g=i(h(t,x,j,"status"));B.status=g==="few"||g==="full"?g:"available"})})})},D=()=>{u.forEach((e,t)=>{n(s(t,"id"),e.id),n(s(t,"title"),e.title),n(s(t,"catchCopy"),e.catchCopy??""),n(s(t,"description"),e.description),n(s(t,"thumbnailSrc"),e.thumbnail.src),n(s(t,"thumbnailAlt"),e.thumbnail.alt),n(s(t,"duration"),e.duration??""),n(s(t,"reservationFormId"),e.reservationFormId??""),n(s(t,"sortOrder"),e.sortOrder===void 0?"":String(e.sortOrder)),F(s(t,"isPublished"),e.isPublished),n(s(t,"tags"),S(e.tags)),n(s(t,"benefits"),S(e.benefits)),n(s(t,"contractBenefits"),S(e.contractBenefits)),n(s(t,"contents"),A(e.contents)),e.schedule.forEach((a,d)=>{n(O(t,d,"date"),a.date),a.times.forEach((l,o)=>{n(h(t,d,o,"time"),l.time),n(h(t,d,o,"status"),l.status)})})})},T=(e,t,a)=>`
      <div class="adm-slot">
        <input type="text" placeholder="10:00" data-fi="${e}" data-di="${t}" data-si="${a}" data-sfield="time" />
        <select data-fi="${e}" data-di="${t}" data-si="${a}" data-sfield="status">
          <option value="available">&#9678; 空きあり</option>
          <option value="few">&#9651; 残りわずか</option>
          <option value="full">&#10005; 満席</option>
        </select>
        <button type="button" class="adm-btn adm-btn--mini" data-action="del-slot" data-fi="${e}" data-di="${t}" data-si="${a}">削除</button>
      </div>`,_=(e,t,a)=>{const d=Array.from({length:a},(l,o)=>T(e,t,o)).join("");return`
      <div class="adm-day">
        <div class="adm-day__head">
          <label>開催日 <input type="date" data-fi="${e}" data-di="${t}" data-sfield="date" /></label>
          <button type="button" class="adm-btn adm-btn--mini" data-action="del-day" data-fi="${e}" data-di="${t}">この日を削除</button>
        </div>
        <div class="adm-slots">${d}</div>
        <button type="button" class="adm-btn adm-btn--mini" data-action="add-slot" data-fi="${e}" data-di="${t}">＋ 時間枠を追加</button>
      </div>`},H=(e,t)=>{const a=e.schedule.map((d,l)=>_(t,l,d.times.length)).join("");return`
      <section class="adm-card">
        <div class="adm-card__head">
          <h2>フェア ${t+1}</h2>
          <label class="adm-pub"><input type="checkbox" data-fi="${t}" data-field="isPublished" /> 公開する</label>
          <button type="button" class="adm-btn adm-btn--danger" data-action="del-fair" data-fi="${t}">フェア削除</button>
        </div>

        <label class="adm-field">ID（URLに使用・英数字とハイフン・重複不可）
          <input type="text" data-fi="${t}" data-field="id" placeholder="premium-tour-202606" />
        </label>
        <label class="adm-field">タイトル
          <input type="text" data-fi="${t}" data-field="title" />
        </label>
        <label class="adm-field">キャッチコピー（任意）
          <input type="text" data-fi="${t}" data-field="catchCopy" />
        </label>
        <label class="adm-field">説明文
          <textarea rows="3" data-fi="${t}" data-field="description"></textarea>
        </label>

        <div class="adm-row">
          <label class="adm-field">サムネイル画像パス
            <input type="text" data-fi="${t}" data-field="thumbnailSrc" placeholder="/images/fairs/sample-fair-01.jpg" />
          </label>
          <label class="adm-field">サムネイル代替テキスト(alt)
            <input type="text" data-fi="${t}" data-field="thumbnailAlt" />
          </label>
        </div>

        <div class="adm-row">
          <label class="adm-field">所要時間（任意）
            <input type="text" data-fi="${t}" data-field="duration" placeholder="約2時間30分" />
          </label>
          <label class="adm-field">予約フォームID（任意・未入力ならIDを使用）
            <input type="text" data-fi="${t}" data-field="reservationFormId" />
          </label>
          <label class="adm-field adm-field--narrow">表示順
            <input type="number" data-fi="${t}" data-field="sortOrder" />
          </label>
        </div>

        <div class="adm-row">
          <label class="adm-field">タグ（1行に1つ／任意）
            <textarea rows="3" data-fi="${t}" data-field="tags" placeholder="見学&#10;試食&#10;模擬挙式"></textarea>
          </label>
          <label class="adm-field">来館特典（1行に1つ／任意）
            <textarea rows="3" data-fi="${t}" data-field="benefits"></textarea>
          </label>
          <label class="adm-field">成約特典（1行に1つ／任意）
            <textarea rows="3" data-fi="${t}" data-field="contractBenefits"></textarea>
          </label>
        </div>

        <label class="adm-field">体験できること（1行に「アイコンキー,ラベル」／任意）
          <textarea rows="3" data-fi="${t}" data-field="contents" placeholder="ceremony,模擬挙式&#10;tasting,無料試食"></textarea>
        </label>
        <p class="adm-hint">アイコンキー例: ceremony / reception / tasting / tour / dress / estimate（未知キーは既定アイコン）</p>

        <div class="adm-sched">
          <h3>開催日程</h3>
          ${a}
          <button type="button" class="adm-btn" data-action="add-day" data-fi="${t}">＋ 開催日を追加</button>
        </div>
      </section>`},J=()=>u.map((e,t)=>H(e,t)).join(""),y=()=>{r.innerHTML=J(),D()},v=(e,t)=>{$.textContent=e,$.className="adm-status"+(t?" is-"+t:"")},R=()=>({id:"",title:"",description:"",thumbnail:{src:"",alt:""},schedule:[],isPublished:!1}),V=()=>{const e=[],t=new Set;return u.forEach((a,d)=>{const l=d+1;a.id===""?e.push(`${l}件目: ID が空です`):t.has(a.id)&&e.push(`${l}件目: ID「${a.id}」が重複しています`),t.add(a.id),a.title===""&&e.push(`${l}件目: タイトルが空です`),a.thumbnail.src===""&&e.push(`${l}件目: サムネイル画像パスが空です`),a.thumbnail.alt===""&&e.push(`${l}件目: サムネイルの alt が空です`)}),e};r.addEventListener("click",e=>{const t=e.target;if(!(t instanceof Element))return;const a=t.closest("button[data-action]");if(!a)return;const d=a.dataset.action??"",l=a.dataset.fi!==void 0?Number(a.dataset.fi):-1,o=a.dataset.di!==void 0?Number(a.dataset.di):-1,p=a.dataset.si!==void 0?Number(a.dataset.si):-1;f();const c=l>=0?u[l]:void 0;if(d==="del-fair")l>=0&&window.confirm("このフェアを削除します。よろしいですか？")&&u.splice(l,1);else if(d==="add-day"&&c)c.schedule.push({date:"",times:[]});else if(d==="del-day"&&c&&o>=0)c.schedule.splice(o,1);else if(d==="add-slot"&&c&&o>=0){const m=c.schedule[o];m&&m.times.push({time:"",status:"available"})}else if(d==="del-slot"&&c&&o>=0&&p>=0){const m=c.schedule[o];m&&m.times.splice(p,1)}y(),v("","")}),E.addEventListener("click",()=>{f(),u.push(R()),y(),v("新しいフェアを末尾に追加しました。下までスクロールして入力してください。","ok")}),I.addEventListener("click",()=>{f();const e=V();if(e.length>0){if(v("確認ポイントがあります（このまま書き出すことも可能）","warn"),!window.confirm(`入力に確認ポイントがあります。それでも書き出しますか？

`+e.join(`
`)))return}else v("書き出しました。fairs.json を src/data/ に置き換えてください。","ok");M("fairs.json",u)}),y()};U();
