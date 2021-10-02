# Sportsbook Tools

This site contains a collection of tools that I built to assist in making informed bets on sporting events.

## Tools
* [Odds Converter](#odds-converter)
* [Information Aggregator](#information-aggregator)
* [Bet Tracker](#bet-tracker)
* [Two Game Theory](#two-game-theory)


### Odds Converter

I like to use decimal odds, but most sports books use American odds. It's nice for me to have a quick way to flip back and forth between the two.


### Information Aggregator

Will utilize XHR to make http requests to multiple websites and compile them into one concise web page.

Websites:
* Weather for weather at the location of the game


### Bet Tracker

Will be able to parse images of screenshots that I provide to keep track of the bets I make. Over time it will create a filterable list various time periods to visualize graphs of my performance over time.

Filters:
* Bet Type (Prop vs. not prop?) (Spread, total, prop, etc.)
* Time Period (Beginning & Ending Dates)
* Sport (NFL, NBA, NCAAF, etc.)
* Unit (hidden from public view)
* Result of Bet (W/L/Push)


### Two Game Theory

In any football game there are really two games happening at once - Team A's offense versus Team B's defense, and Team B's offense versus Team A's defense. You must account for other factors such as special teams, coaching, weather, etc., but the two game theory provides a starting point in trying to determine what the spread and total of a game will be.


### Lessons Learned
