(function() {
    klp.init = function() {
        var $profileXHR = klp.api.authDo("users/profile");
        $profileXHR.done(function(data) {
            console.log("data", data);
            $('#firstName').val(data.first_name);
            $('#lastName').val(data.last_name);
            $('#email').val(data.email);
            $('#mobileNo').val(data.mobile_no);

            $('#userProfileForm').submit(function(e) {
                if (e) {
                    e.preventDefault();
                }
                var data = {
                    'first_name': $('#firstName').val(),
                    'last_name': $('#lastName').val(),
                    'email': $('#email').val(),
                    'mobile_no': $('#mobileNo').val()
                };
                //FIXME: do validations
                var editXHR = klp.api.authDo("users/profile", data, "PATCH");
                editXHR.done(function(response) {
                    console.log("saved", response);
                    klp.auth.loginUser(response);
                });
                editXHR.fail(function(err) {
                    console.log("error saving", err);
                });
            });

            $('#submitBtn').click(function(e) {
                e.preventDefault();
                $('#userProfileForm').submit();
            });
        });
    };
})();