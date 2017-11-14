---
---
# RunningTime

This class represents an amount of time in minutes and seconds, and is used as the length of time for a Song. This class introduces the Scanner class for one of its constructors, which generates the running time from a string that is formatted as “minutes:seconds” (such as “5:39”, which would be 5 minutes and 30 seconds).

This class also uses an internal private method called paddZero()  that ensures the seconds whose values are less than 10 have a leading zero when converted to a string.

* toString() - Refactor this method to use a new private method called paddZero. The paddZero method will return a string version of the integer value passed in and will ensure that the string has a leading zero character if the supplied value is less than ten.
