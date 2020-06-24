$(function() {
    $('1').click(function(even) {
        even.preventDefault();
        var data = {};
        data.user = document.getElementById("username").value;
        data.pass = document.getElementById("password").value;
        if (user == " ") {
            document.getElementById("erruser").innerHTML = "Please enter your account";
        }
        if (pass.length < 8 || pass.length > 30) {
            document.getElementById("errpass").innerHTML = "Password contains from 5 - 30 characters";
        }


        $.ajax({

            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:3000/login',
            success: function(data) {
                console.log('success');
                console.log(data);
            }
        })
    })
})