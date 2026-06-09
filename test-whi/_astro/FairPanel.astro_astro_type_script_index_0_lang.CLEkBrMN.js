const V=(m,o)=>{const $=JSON.stringify(o,null,2)+`
`,f=new Blob([$],{type:"application/json"}),u=document.createElement("a");u.href=URL.createObjectURL(f),u.download=m,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(u.href)},E=m=>m.split(`
`).map(o=>o.trim()).filter(o=>o.length>0),O=m=>(m??[]).join(`
`),M=()=>{const m=document.getElementById("fair-data"),o=document.querySelector("#fair-editor"),$=document.querySelector("#fair-add-btn"),f=document.querySelector("#fair-export-btn"),u=document.querySelector("#fair-status");if(!m||!o||!$||!f||!u)return;const b=JSON.parse(m.textContent??"[]"),s=(e,t)=>`[data-fi="${e}"][data-field="${t}"]`,j=(e,t,a)=>`[data-fi="${e}"][data-di="${t}"][data-sfield="${a}"]`,y=(e,t,a,d)=>`[data-fi="${e}"][data-di="${t}"][data-si="${a}"][data-sfield="${d}"]`,i=e=>{const t=o.querySelector(e);return t?t.value.trim():""},h=e=>{const t=o.querySelector(e);return t?t.value:""},q=e=>{const t=o.querySelector(e);return t?t.checked:!1},n=(e,t)=>{const a=o.querySelector(e);a&&(a.value=t)},F=(e,t)=>{const a=o.querySelector(e);a&&(a.checked=t)},P=e=>e.split(`
`).map(t=>t.trim()).filter(t=>t.length>0).map(t=>{const a=t.indexOf(",");return a===-1?{icon:"",label:t}:{icon:t.slice(0,a).trim(),label:t.slice(a+1).trim()}}),R=e=>(e??[]).map(t=>`${t.icon},${t.label}`).join(`
`),g=()=>{b.forEach((e,t)=>{e.id=i(s(t,"id")),e.title=i(s(t,"title"));const a=i(s(t,"catchCopy"));e.catchCopy=a===""?void 0:a,e.description=h(s(t,"description")).trim(),e.thumbnail={src:i(s(t,"thumbnailSrc")),alt:i(s(t,"thumbnailAlt"))};const d=i(s(t,"duration"));e.duration=d===""?void 0:d;const l=i(s(t,"reservationFormId"));e.reservationFormId=l===""?void 0:l;const c=i(s(t,"sortOrder")),v=Number(c);e.sortOrder=c===""||Number.isNaN(v)?void 0:v,e.isPublished=q(s(t,"isPublished"));const r=E(h(s(t,"tags")));e.tags=r.length?r:void 0;const p=E(h(s(t,"benefits")));e.benefits=p.length?p:void 0;const C=E(h(s(t,"contractBenefits")));e.contractBenefits=C.length?C:void 0;const I=P(h(s(t,"contents")));e.contents=I.length?I:void 0,e.schedule.forEach((L,S)=>{L.date=i(j(t,S,"date")),L.times.forEach((N,B)=>{N.time=i(y(t,S,B,"time"));const k=i(y(t,S,B,"status"));N.status=k==="few"||k==="full"?k:"available"})})})},A=()=>{b.forEach((e,t)=>{n(s(t,"id"),e.id),n(s(t,"title"),e.title),n(s(t,"catchCopy"),e.catchCopy??""),n(s(t,"description"),e.description),n(s(t,"thumbnailSrc"),e.thumbnail.src),n(s(t,"thumbnailAlt"),e.thumbnail.alt),n(s(t,"duration"),e.duration??""),n(s(t,"reservationFormId"),e.reservationFormId??""),n(s(t,"sortOrder"),e.sortOrder===void 0?"":String(e.sortOrder)),F(s(t,"isPublished"),e.isPublished),n(s(t,"tags"),O(e.tags)),n(s(t,"benefits"),O(e.benefits)),n(s(t,"contractBenefits"),O(e.contractBenefits)),n(s(t,"contents"),R(e.contents)),e.schedule.forEach((a,d)=>{n(j(t,d,"date"),a.date),a.times.forEach((l,c)=>{n(y(t,d,c,"time"),l.time),n(y(t,d,c,"status"),l.status)})})})},D=(e,t,a)=>`
      <div class="adm-slot">
        <input type="text" placeholder="10:00" data-fi="${e}" data-di="${t}" data-si="${a}" data-sfield="time" />
        <select data-fi="${e}" data-di="${t}" data-si="${a}" data-sfield="status">
          <option value="available">&#9678; 空きあり</option>
          <option value="few">&#9651; 残りわずか</option>
          <option value="full">&#10005; 満席</option>
        </select>
        <button type="button" class="adm-btn adm-btn--mini" data-action="del-slot" data-fi="${e}" data-di="${t}" data-si="${a}">削除</button>
      </div>`,T=(e,t,a)=>{const d=Array.from({length:a},(l,c)=>D(e,t,c)).join("");return`
      <div class="adm-day">
        <div class="adm-day__head">
          <label>開催日 <input type="date" data-fi="${e}" data-di="${t}" data-sfield="date" /></label>
          <button type="button" class="adm-btn adm-btn--mini" data-action="del-day" data-fi="${e}" data-di="${t}">この日を削除</button>
        </div>
        <div class="adm-slots">${d}</div>
        <button type="button" class="adm-btn adm-btn--mini" data-action="add-slot" data-fi="${e}" data-di="${t}">＋ 時間枠を追加</button>
      </div>`},U=(e,t)=>{const a=e.schedule.map((d,l)=>T(t,l,d.times.length)).join("");return`
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
      </section>`},_=()=>b.map((e,t)=>U(e,t)).join(""),w=()=>{o.innerHTML=_(),A()},x=(e,t)=>{u.textContent=e,u.className="adm-status"+(t?" is-"+t:"")},J=()=>({id:"",title:"",description:"",thumbnail:{src:"",alt:""},schedule:[],isPublished:!1}),H=()=>{const e=[],t=new Set;return b.forEach((a,d)=>{const l=d+1;a.id===""?e.push(`${l}件目: ID が空です`):t.has(a.id)&&e.push(`${l}件目: ID「${a.id}」が重複しています`),t.add(a.id),a.title===""&&e.push(`${l}件目: タイトルが空です`),a.thumbnail.src===""&&e.push(`${l}件目: サムネイル画像パスが空です`),a.thumbnail.alt===""&&e.push(`${l}件目: サムネイルの alt が空です`)}),e};o.addEventListener("click",e=>{const t=e.target;if(!(t instanceof Element))return;const a=t.closest("button[data-action]");if(!a)return;const d=a.dataset.action??"",l=a.dataset.fi!==void 0?Number(a.dataset.fi):-1,c=a.dataset.di!==void 0?Number(a.dataset.di):-1,v=a.dataset.si!==void 0?Number(a.dataset.si):-1;g();const r=l>=0?b[l]:void 0;if(d==="del-fair")l>=0&&window.confirm("このフェアを削除します。よろしいですか？")&&b.splice(l,1);else if(d==="add-day"&&r)r.schedule.push({date:"",times:[]});else if(d==="del-day"&&r&&c>=0)r.schedule.splice(c,1);else if(d==="add-slot"&&r&&c>=0){const p=r.schedule[c];p&&p.times.push({time:"",status:"available"})}else if(d==="del-slot"&&r&&c>=0&&v>=0){const p=r.schedule[c];p&&p.times.splice(v,1)}w(),x("","")}),$.addEventListener("click",()=>{g(),b.push(J()),w(),x("新しいフェアを末尾に追加しました。下までスクロールして入力してください。","ok")}),f.addEventListener("click",()=>{g();const e=H();if(e.length>0){if(x("確認ポイントがあります（このまま書き出すことも可能）","warn"),!window.confirm(`入力に確認ポイントがあります。それでも書き出しますか？

`+e.join(`
`)))return}else x("書き出しました。fairs.json を src/data/ に置き換えてください。","ok");V("fairs.json",b)}),w()};M();
