const M=()=>{const k=document.getElementById("fairs-data"),r=document.querySelector("#fairs-editor"),E=document.querySelector("#add-fair-btn"),O=document.querySelector("#export-btn"),$=document.querySelector("#admin-status");if(!k||!r||!E||!O||!$)return;const u=JSON.parse(k.textContent??"[]"),s=(e,t)=>`[data-fi="${e}"][data-field="${t}"]`,j=(e,t,a)=>`[data-fi="${e}"][data-di="${t}"][data-sfield="${a}"]`,h=(e,t,a,d)=>`[data-fi="${e}"][data-di="${t}"][data-si="${a}"][data-sfield="${d}"]`,c=e=>{const t=r.querySelector(e);return t?t.value.trim():""},b=e=>{const t=r.querySelector(e);return t?t.value:""},q=e=>{const t=r.querySelector(e);return t?t.checked:!1},n=(e,t)=>{const a=r.querySelector(e);a&&(a.value=t)},F=(e,t)=>{const a=r.querySelector(e);a&&(a.checked=t)},y=e=>e.split(`
`).map(t=>t.trim()).filter(t=>t.length>0),f=e=>(e??[]).join(`
`),P=e=>e.split(`
`).map(t=>t.trim()).filter(t=>t.length>0).map(t=>{const a=t.indexOf(",");return a===-1?{icon:"",label:t}:{icon:t.slice(0,a).trim(),label:t.slice(a+1).trim()}}),R=e=>(e??[]).map(t=>`${t.icon},${t.label}`).join(`
`),g=()=>{u.forEach((e,t)=>{e.id=c(s(t,"id")),e.title=c(s(t,"title"));const a=c(s(t,"catchCopy"));e.catchCopy=a===""?void 0:a,e.description=b(s(t,"description")).trim(),e.thumbnail={src:c(s(t,"thumbnailSrc")),alt:c(s(t,"thumbnailAlt"))};const d=c(s(t,"duration"));e.duration=d===""?void 0:d;const l=c(s(t,"reservationFormId"));e.reservationFormId=l===""?void 0:l;const o=c(s(t,"sortOrder")),p=Number(o);e.sortOrder=o===""||Number.isNaN(p)?void 0:p,e.isPublished=q(s(t,"isPublished"));const i=y(b(s(t,"tags")));e.tags=i.length?i:void 0;const m=y(b(s(t,"benefits")));e.benefits=m.length?m:void 0;const C=y(b(s(t,"contractBenefits")));e.contractBenefits=C.length?C:void 0;const I=P(b(s(t,"contents")));e.contents=I.length?I:void 0,e.schedule.forEach((L,w)=>{L.date=c(j(t,w,"date")),L.times.forEach((N,B)=>{N.time=c(h(t,w,B,"time"));const S=c(h(t,w,B,"status"));N.status=S==="few"||S==="full"?S:"available"})})})},A=()=>{u.forEach((e,t)=>{n(s(t,"id"),e.id),n(s(t,"title"),e.title),n(s(t,"catchCopy"),e.catchCopy??""),n(s(t,"description"),e.description),n(s(t,"thumbnailSrc"),e.thumbnail.src),n(s(t,"thumbnailAlt"),e.thumbnail.alt),n(s(t,"duration"),e.duration??""),n(s(t,"reservationFormId"),e.reservationFormId??""),n(s(t,"sortOrder"),e.sortOrder===void 0?"":String(e.sortOrder)),F(s(t,"isPublished"),e.isPublished),n(s(t,"tags"),f(e.tags)),n(s(t,"benefits"),f(e.benefits)),n(s(t,"contractBenefits"),f(e.contractBenefits)),n(s(t,"contents"),R(e.contents)),e.schedule.forEach((a,d)=>{n(j(t,d,"date"),a.date),a.times.forEach((l,o)=>{n(h(t,d,o,"time"),l.time),n(h(t,d,o,"status"),l.status)})})})},D=(e,t,a)=>`
          <div class="adm-slot">
            <input type="text" placeholder="10:00" data-fi="${e}" data-di="${t}" data-si="${a}" data-sfield="time" />
            <select data-fi="${e}" data-di="${t}" data-si="${a}" data-sfield="status">
              <option value="available">&#9678; 空きあり</option>
              <option value="few">&#9651; 残りわずか</option>
              <option value="full">&#10005; 満席</option>
            </select>
            <button type="button" class="adm-btn adm-btn--mini" data-action="del-slot" data-fi="${e}" data-di="${t}" data-si="${a}">削除</button>
          </div>`,T=(e,t,a)=>{const d=Array.from({length:a},(l,o)=>D(e,t,o)).join("");return`
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
          </section>`},_=()=>u.map((e,t)=>U(e,t)).join(""),x=()=>{r.innerHTML=_(),A()},v=(e,t)=>{$.textContent=e,$.className="adm-status"+(t?" is-"+t:"")},H=()=>({id:"",title:"",description:"",thumbnail:{src:"",alt:""},schedule:[],isPublished:!1}),J=(e,t)=>{const a=new Blob([t],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(a),d.download=e,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(d.href)},V=()=>{const e=[],t=new Set;return u.forEach((a,d)=>{const l=d+1;a.id===""?e.push(`${l}件目: ID が空です`):t.has(a.id)&&e.push(`${l}件目: ID「${a.id}」が重複しています`),t.add(a.id),a.title===""&&e.push(`${l}件目: タイトルが空です`),a.thumbnail.src===""&&e.push(`${l}件目: サムネイル画像パスが空です`),a.thumbnail.alt===""&&e.push(`${l}件目: サムネイルの alt が空です`)}),e};r.addEventListener("click",e=>{const t=e.target;if(!(t instanceof Element))return;const a=t.closest("button[data-action]");if(!a)return;const d=a.dataset.action??"",l=a.dataset.fi!==void 0?Number(a.dataset.fi):-1,o=a.dataset.di!==void 0?Number(a.dataset.di):-1,p=a.dataset.si!==void 0?Number(a.dataset.si):-1;g();const i=l>=0?u[l]:void 0;if(d==="del-fair")l>=0&&window.confirm("このフェアを削除します。よろしいですか？")&&u.splice(l,1);else if(d==="add-day"&&i)i.schedule.push({date:"",times:[]});else if(d==="del-day"&&i&&o>=0)i.schedule.splice(o,1);else if(d==="add-slot"&&i&&o>=0){const m=i.schedule[o];m&&m.times.push({time:"",status:"available"})}else if(d==="del-slot"&&i&&o>=0&&p>=0){const m=i.schedule[o];m&&m.times.splice(p,1)}x(),v("","")}),E.addEventListener("click",()=>{g(),u.push(H()),x(),v("新しいフェアを末尾に追加しました。下までスクロールして入力してください。","ok")}),O.addEventListener("click",()=>{g();const e=V();if(e.length>0){if(v("確認ポイントがあります（このまま書き出すことも可能）","warn"),!window.confirm(`入力に確認ポイントがあります。それでも書き出しますか？

`+e.join(`
`)))return}else v("書き出しました。fairs.json を src/data/ に置き換えてください。","ok");J("fairs.json",JSON.stringify(u,null,2)+`
`)}),x()};M();
