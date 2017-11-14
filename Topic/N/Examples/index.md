---
---
# Code Sample

1. CD - This class represents a CD of Songs. It supports a public method to get long songs (which are songs whose RunningTime is greater than the average running time). A private method called resizeArray() is created to “modularize” this public method’s behaviour.
2. RunningTime - This class represents an amount of time in minutes and seconds, and is used as the length of time for a Song. This class introduces the Scanner class for one of its constructors, which generates the running time from a string that is formatted as “minutes:seconds” (such as “5:39”, which would be 5 minutes and 30 seconds).
This class also uses an internal private method called paddZero()  that ensures the seconds whose values are less than 10 have a leading zero when converted to a string.
3. TextFormatter - This class provides static methods for common string formatting needs, such as right and left justifying strings.
4. MusicInfoFormatter - This class provides static methods for formatting CD information, such as the CD’s title and the information for a given Song. This kind of formatting is commonly seen, for example, in CD players that display the currently playing song.
