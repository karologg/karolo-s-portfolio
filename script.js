document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('msg-form');
	const list = document.getElementById('msg-list');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const msg = document.getElementById('msg').value.trim();
		const sign = document.getElementById('sign').value.trim();
		if (!msg || !sign) return;

		const wrapper = document.createElement('div');
		wrapper.className = 'mural-item-icon';

		const img = document.createElement('img');
		img.src = 'img/post-it.webp';
		img.alt = 'post-it';

		const p = document.createElement('p');
		p.className = 'mural-temp';
		p.textContent = `${msg} — ${sign}`;

		wrapper.appendChild(img);
		wrapper.appendChild(p);

		list.appendChild(wrapper);

		form.reset();
	});
});

