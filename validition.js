
(function () {
    "use strict";



    let forms = document.querySelectorAll('.email-form');
        // Define displayError function outside the forEach loop
        function displayError(thisForm, error) {
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.error-message').innerHTML = error;
            thisForm.querySelector('.error-message').classList.add('d-block');
        }

    forms.forEach(function(e) {
        e.addEventListener('submit', function(event) {
            event.preventDefault();

            let thisForm = this;

            let action = thisForm.getAttribute('action');
            let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

            if (!action) {
                console.log("dssf");
                displayError(thisForm, 'The form action property is not set!');
                return;
            }
            thisForm.querySelector('.loading').classList.add('d-block');
            thisForm.querySelector('.error-message').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.remove('d-block');

            let formData = new FormData(thisForm);

            if (recaptcha) {
                if (typeof grecaptcha !== "undefined") {
                    grecaptcha.ready(function() {
                        try {
                            grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
                            .then(token => {
                                formData.set('recaptcha-response', token);
                                php_email_form_submit(thisForm, action, formData);
                            })
                        } catch(error) {
                            displayError(thisForm, error);
                        }
                    });
                } else {
                    displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
                }
            } else {
                php_email_form_submit(thisForm, action, formData);
            }
        });
    });

    function php_email_form_submit(thisForm, action, formData) {
        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
        .then(response => {
            if (response.ok) {
                // console.log(response);
                // console.log(response.text());
                // var data=response.statusText;
                //  console.log(data);
                return response.text();
                
            } else {
                throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
            }
        })
        .then(data => {
            thisForm.querySelector('.loading').classList.remove('d-block');
            // console.log(data);
            if (data.trim() == 'OK') {
                // console.log("working");

                thisForm.querySelector('.sent-message').classList.add('d-block');
                thisForm.reset(); 
            } else {
                // console.log("not working ");
                displayError(thisForm,"something went wrong .");
            }
        })
        .catch((error) => {
            displayError(thisForm,error);
        });
    }
})();
