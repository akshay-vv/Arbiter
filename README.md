# Arbiter
US/India market arbitrage
## Backend - Node
### Collect Data
1. From Trading View(BTC/USD)? Koinex(INR/BTC)
   Rest API query interval - 1 minute.
   Store Json in mongoDB : 
   ```
   [
      {"BTC/USD": [
                    {"price" : "$USD/unit"},
                    {"time"  : "UTC"}
                   ]
      },
      ...
   ]
   [
      {"BTC/INR": [
                    {"price" : "$INR/unit"},
                    {"time"  : "UTC"}
                   ]
      },
      ...
   ]
   ```
2. Calculate arbitrage and store in DB
   [ {"Arbitrage US/IND" : { "ratio" : "ratioValue" },
                           { "time" : "UTC" }
                           
3. Expose Rest API to be consumed by angular.

## FrontEnd - Angular
Display Graph from the data - current sys date as reference:
   Intervals : 1 min, 5 min, 1hr, 6hr, 1day
