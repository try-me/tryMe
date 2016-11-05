function login() {
  $('#loginButton').click(function(e) {
  e.preventDefault();
  console.log("hello");
  $('#personalInfo').show();
  });
};

login();
