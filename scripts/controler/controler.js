$(#loginButton).on('click', function() {
  var email = $(#email).val();
  var pwd = $(password).val();

  for each(key in User) {
    if (this.passWord && this.email) {
      $(#createChallenge).show();
    } else {
      $(#registerButton).show();
    }
  };
})
