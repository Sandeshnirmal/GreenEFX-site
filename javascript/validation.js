(function () {
    "use strict";

    // Function to display error messages
    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }

    // Function to submit form data
    function php_email_form_submit(thisForm, action, formData) {
        console.log('Submitting form with data:', Array.from(formData.entries()));

        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
        .then(response => {
            console.log('Response status:', response.status);
            if (response.ok) {
                return response.text();
            } else {
                throw new Error(`${response.status} ${response.statusText} ${response.url}`);
            }
        })
        .then(data => {
            console.log('Server response:', data);
            thisForm.querySelector('.loading').classList.remove('d-block');
            if (data.trim() === 'OK') {
                thisForm.querySelector('.sent-message').classList.add('d-block');
                thisForm.reset();
            } else {
                displayError(thisForm, "Something went wrong.");
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            displayError(thisForm, error);
        });
    }

    // Get all forms with class 'email-form'
    let forms = document.querySelectorAll('.email-form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let thisForm = this;
            let action = thisForm.getAttribute('action');
            let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

            if (!action) {
                displayError(thisForm, 'The form action property is not set!');
                return;
            }

            thisForm.querySelector('.loading').classList.add('d-block');
            thisForm.querySelector('.error-message').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.remove('d-block');

            let formData = new FormData(thisForm);

            if (recaptcha) {
                if (typeof grecaptcha !== "undefined") {
                    grecaptcha.ready(() => {
                        grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
                        .then(token => {
                            formData.set('recaptcha-response', token);
                            php_email_form_submit(thisForm, action, formData);
                        })
                        .catch(error => {
                            displayError(thisForm, 'reCAPTCHA error: ' + error);
                        });
                    });
                } else {
                    displayError(thisForm, 'The reCAPTCHA JavaScript API URL is not loaded!');
                }
            } else {
                php_email_form_submit(thisForm, action, formData);
            }
        });
    });
})();
