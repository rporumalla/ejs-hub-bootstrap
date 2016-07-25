exports.loginPageHandler = function(req, res){
  req.session.destroy();
  console.log("Login Page");
  res.render('login.ejs', {});
}

exports.landingPageHandler = function(req, res){
  console.log("processing GET request for landing page. Req Param " + req.query.nm);

  var person;
  if (req.session.userName){
    console.log("User Name already in session. It is " + req.session.userName);
    person = req.session.userName;
  } else{
    person = req.query.nm;
    req.session.userName = person;
    console.log("User Name does not exist in session. Hence storing it in session");
  }
  res.render('landingPage.ejs', {welcomeMessage: person});
}

exports.cityPageHandler = function(req, res){
  var interest = req.body.interest;
  var cityName, tagLine;
  console.log("received interest as " + interest);

  if (interest === 'history'){
    cityName = 'Rome';
    tagLine = 'City of earliest civilization';
  } else if (interest === 'fashion'){
    cityName = 'Paris';
    tagLine = 'Fashion capital of the world';
  } else if (interest === 'finance'){
    cityName = 'New York';
    tagLine = 'Business capital of the world';
  }
  res.render('city.ejs', {cityName: cityName, tagLine: tagLine,
                          person: req.session.userName});
}
