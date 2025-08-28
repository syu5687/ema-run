// _assets/js/embed.js  (launcher + iframe toggle)
(function () {
  var d = document, s = document.currentScript;

  // 施設ID（chat1/chat2/…）: 未指定は chat1
  var facility = (s.getAttribute('data-facility') || 'chat1').replace(/[^a-z0-9_-]/gi, '');
  var src = 'https://ema-run-665477084949.asia-northeast1.run.app/' + facility + '/index.html?v=1.3';

  // 位置やサイズ（必要なら data-xxx で上書き可）
  var right     = s.getAttribute('data-right')      || '20px';
  var bottom    = s.getAttribute('data-bottom')     || '96px';
  var width     = s.getAttribute('data-width')      || 'min(420px, calc(100vw - 40px))';
  var height    = s.getAttribute('data-height')     || '70vh';
  var maxHeight = s.getAttribute('data-max-height') || '620px';
  var z         = s.getAttribute('data-z')          || '2147483000';

  // --- ランチャーボタン
  var btn = d.createElement('button');
  btn.setAttribute('type','button');
  btn.setAttribute('aria-label','チャットを開く');
  btn.style.cssText = [
	'position:fixed','right:'+right,'bottom:20px',
	'width:64px','height:64px','border-radius:50%',
	'background:#0e7490','color:#fff','border:0',
	'box-shadow:0 10px 24px rgba(0,0,0,.25)',
	'cursor:pointer','z-index:'+z,'display:grid','place-items:center'
  ].join(';');
  btn.textContent = '💬';

  // --- iframe（最初は非表示）
  var frame = d.createElement('iframe');
  frame.src = src;
  frame.title = 'ご相談チャット';
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer';
  frame.style.cssText = [
	'position:fixed','right:'+right,'bottom:'+bottom,
	'width:'+width,'height:'+height,'max-height:'+maxHeight,
	'border:0','border-radius:16px','box-shadow:0 20px 40px rgba(0,0,0,.25)',
	'z-index:'+z,'background:#fff','display:none'
  ].join(';');

  // --- 開閉ロジック
  function toggle(open){
	var willOpen = (open!==undefined) ? open : (frame.style.display==='none');
	frame.style.display = willOpen ? 'block' : 'none';
	btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  }
  btn.addEventListener('click', function(){ toggle(); });
  d.addEventListener('keydown', function(e){ if(e.key==='Escape') toggle(false); });

  // DOM に追加（DOMReady待ち）
  function mount(){
	(d.body ? d.body : d.documentElement).appendChild(frame);
	(d.body ? d.body : d.documentElement).appendChild(btn);
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();