
		const form = document.querySelector('form');
		const successMessage = document.querySelector('.success-message');

		form.addEventListener('submit', function(event) {
			event.preventDefault(); // default elküldés megakadályozása

			// szervernek adatküldés AJAX-szal
			const xhr = new XMLHttpRequest();
			xhr.open('GET', 'action.php');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onreadystatechange = function() {
				// a readyState a dokumentum betöltési állapotát írja le
				// A 4-es állapot azt jelenti, hogy a kérést elküldték, a szerver befejezte a válasz visszaküldését, 
				// és a böngésző befejezte a választartalom letöltését, azaz az AJAX hívás befejeződött.
				if (xhr.readyState === 4 && xhr.status === 200) {
					// siker esetén megmutatja az üzenetet
					successMessage.style.display = 'block';
				}
			};
			xhr.send(new FormData(form));
		});
