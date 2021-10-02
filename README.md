# Sportsbook Tools

This site contains a collection of tools that I built to assist in making informed bets on sporting events. The tools on their own are useful, but together they create a framework for researching a matchup thoroughly. They are intended to be navigated sequentially like so:
1. Identify a matchup that may contain good betting opportunities
2. Compare the raw numbers of each team in a vacuum
3. Make adjustments to your view of the raw numbers based on the circumstances surrounding a game (i.e. is it a big game? Will one team have more to play for than the other? What will the weather be? etc.)
4. Log your results
5. Learn from your mistakes

<!-- Record a video explaining how you might analyze a game using these tools -->

## Tools
* [Odds Converter](#odds-converter)
* [Pros vs. Joes](#pros-vs-joes)
* [Two Game Theory](#two-game-theory)
* [Information Aggregator](#information-aggregator)
* [Bet Tracker](#bet-tracker)


### Odds Converter

I like to use decimal odds, but most sports books use American odds. It's nice for me to have a quick way to flip back and forth between the two.


### Pros vs. Joes

Shows what percentages of money is bet on which teams. This is a good starting place when determining which games you want to bet on in the first place. This tool will filter by sport and display games that are happening on that current day or week (in the case of the NFL) along with the percentages of how much money is bet on each side. Games that have a large amount of money on one side means that the public is heavily backing one side, and thus the lines will likely have to move for the sportsbooks to hedge their bets. If the line moves, there is likely opportunity for you to beat the sportsbooks at their own game.


### Two Game Theory

In any football game there are really two games happening at once - Team A's offense versus Team B's defense, and Team B's offense versus Team A's defense. You must account for other factors such as special teams, coaching, weather, etc., but the two game theory provides a starting point in trying to determine what the spread and total of a game will be. This tool compares the following factors for both matchups of the two game theory. The goal is to try and identify particular matchups to exploit in prop betting, as well as trying to predict what the overall score of the game will be.

Factors:
* Total Yards
* Passing Yards
* Rushing Yards
* Points
* Turnovers
* 3rd Down Percentage
* Red Zone Percentage
* Home/Road Success (break down the stats above by home/road?)


### Information Aggregator

Will utilize XHR to make http requests to multiple websites and compile them into one concise web page.

Websites:
* Weather for weather at the location of the game
* Injuries


### Bet Tracker

Will be able to parse images of screenshots that I provide to keep track of the bets I make. Over time it will create a filterable list various time periods to visualize graphs of my performance over time.

Filters:
* Bet Type (Prop vs. not prop?) (Spread, total, prop, etc.)
* Time Period (Beginning & Ending Dates)
* Sport (NFL, NBA, NCAAF, etc.)
* Unit (hidden from public view)
* Result of Bet (W/L/Push)


## Lessons Learned
In order to close out the feedback loop of this project it is important to keep track of the lessons learned along the way. When I make mistakes during my analysis I want to keep track of them to avoid making the same mistake twice.
* Always pay attention to weather and injuries
