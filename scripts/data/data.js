function User(name, pwd, email, weight, gWeight, days, gDays, miles, gMiles, steps, gSteps) {
  this.userName = name;
  this.passWord = pwd;
  this.email = email;
  this.lastLogOn = lastLogOn;
  this.badges = []; //acheived badges
  this.points = 0;
  this.challenges = [] //recently done challenges does this have a timeframe?
  this.location = location; //current loc
  this.canChallenge = ; //bolean
  this.canLocate = ; //bolean
  this.level = ; //current level of comfort, set on login
  this.activities =  ; //types of activities willing to do, set on login
  this.streak = ; //latest streak
  this.challenged = ; //have you been challenged?
  this.dailyComp =  ; //is your daily challenge complete?
  this.dailyChallenge = ; //todays challenge
  this.bestStreak = ; //best streak ever
  this.weight = weight;
  this.gWeight = gWeight;
  this.days = days;
  this.gDays = gDays;
  this.miles = miles;
  this.gMiles = gMiles;
  this.steps = steps;
  this.gSteps = gSteps;
};

function Challenges(activity, level, distance) {
  this.activity = activity;
  this.level = level;
  this.distance = disctance;
  this.points = 50;
}

function Badges() {
  this.startBdg = ;
  this.goalBdg = ;
  this.mileBdg = ;
  this.inspoBdg = ; //all given challenges and received challenges completed
  this.leaderBdg = ;
  this.stepsBdg = ;
  this.ghostBdg = ;
  this.daysBdg = ;
}

var runLow = new Challenges("run", "low", 3);
var runMed = new Challenges("run", "med", 5);
var runHigh = new Challenges("run", "high", 10);
var walkLow = new Challenges("walk", "low", 15);
var walkMed = new Challenges("walk", "med", 30);
var walkHigh = new Challenges("walk", "high", 45);
var bikeLow = new Challenges("bike", "low", 5);
var bikeMed = new Challenges("bike", "med", 10);
var bikeHigh = new Challenges("bike", "high", 20);

var startBdg = new Badges("");
var inspoBdg = new Badges("");
var ghostBdg = new Badges("");

var charlie = new User("password", "text@email.com");
