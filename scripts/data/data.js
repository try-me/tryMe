function User (name, pwd, email, badges, points, challenges, location, activities, ) {
  userName: this.name,
  passWord: this.pwd,
  email: this.email,
  badges: this.badges, //acheived badges
  points: this.points,
  challenges: this.challenges, //recently done challenges does this have a timeframe?
  location: this.location, //current loc
  can_challenge: this.canChallenge,
  can_locate: this.canLocate,
  level: this.level, //current level of comfort
  activities: this.activities, //types of activities willing to do
  streak: this.streak, //latest streak
  challenged: this.challenged, //have you been challenged?
  daily_comp: this.dailyComp, //is your daily challenge complete?
  daily_challenge: this.dailyChallenge, //todays challenge
  best_streak: this.bestStreak, //best streak ever
  weight: this.weight,
  g_weight: this.gWeight,
  days: this.days,
  g_days: this.gDays,
  miles: this.miles,
  g_miles: this.gMiles,
  steps: this.steps,
  g_steps: this.gSteps
};

function Challenges () {
  sun_low: ,
  sun_med: ,
  sun_high: ,
  mon_low: ,
  mon_med: ,
  mon_high: ,
  tues_low: ,
  tues_med: ,
  tues_high: ,
  weds_low: ,
  weds_med: ,
  weds_high: ,
  thurs_low: ,
  thurs_med: ,
  thurs_high: ,
  fri_low: ,
  fri_med: ,
  fri_high: ,
  sat_low: ,
  sat_med: ,
  sat_high:
}

function Badges () {
  start_bdg: ,
  goal_bdg: ,
  mile_bdg: ,
  inspo_bdg: , //all given challenges and received challenges completed
  leader_bdg: ,
  steps_bdg: ,
  ghost_bdg: ,
  days_bdg:
}
