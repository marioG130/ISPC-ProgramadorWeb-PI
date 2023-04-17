
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    // Recorrer todos los forms que necesiten validacion
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()
