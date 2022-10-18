var form = document.getElementById("my-form");

function handleSubmit(event) {
    event.preventDefault();
    
    var modal =  $('#exampleModal');
    var recipientEmailSubject = modal.find('#recipient-subject').val();
    var recipientEmail = modal.find('#recipient-email').val();
    var recipientname = modal.find('#recipient-name').val();
    var recipientPhone = modal.find('#recipient-phone').val();
    var recipientMessage = modal.find('#message-text').val();


    $.post("https://formspree.io/f/mrgdapko",
        {
            сервиз: recipientEmailSubject,
            имейл: recipientEmail,
            телефон: recipientPhone,
            име : recipientname,
            съобщение: recipientMessage
        },
        function (data, status) {
            if (status === "success") {
                $('#exampleModal').modal('hide');
                
            }
        },
        "json")
}
form.addEventListener("submit", handleSubmit)