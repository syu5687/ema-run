document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.hamburger-btn');
	const mobileNav = document.querySelector('.mobile-nav');

	hamburger.addEventListener('click', function() {
		// ハンバーガーボタンとナビゲーションメニューに 'is-active' クラスを付け外しする
		this.classList.toggle('is-active');
		mobileNav.classList.toggle('is-active');
	});
});