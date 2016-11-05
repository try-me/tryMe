function User () {
  userName: ,
  passWord: ,
  email: ,
  badges: , //acheived badges
  points: ,
  challenges: , //recently done challenges does this have a timeframe?
  location: , //current loc
  canChallenge: ,
  canLocate: ,
  level: , //current level of comfort
  activities: , //types of activities willing to do
  streak: , //latest streak
  challenged: , //have you been challenged?
  dailyComp: , //is your daily challenge complete?
  dailyChallenge: , //todays challenge
  bestStreak: , //best streak ever
  weight: ,
  gWeight: ,
  days: ,
  gDays: ,
  miles: ,
  gMiles: ,
  steps: ,
  gSteps:
};

function Challenges () {
  activity: ,
  level: ,
  distance: ,
  points:
}

function Badges () {
  startBdg: ,
  goalBdg: ,
  mileBdg: ,
  inspoBdg: , //all given challenges and received challenges completed
  leaderBdg: ,
  stepsBdg: ,
  ghostBdg: ,
  daysBdg:
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
