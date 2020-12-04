function setFormDefaults() {
    document.forms.subscribeForm.method = "post";
    document.forms.subscribeForm.target = "_blank";
    document.forms.subscribeForm.action = "http://";
    // Регистрация событий кнопки
    document.getElementById("btnSubscribe").addEventListener('click',submitForm);
    document.getElementById("btnReset").addEventListener('click',resetForm);
}
function submitForm() {
    document.forms.subscribeForm.submit();
}

function resetForm() {
    document.forms.subscribeForm.reset();
}