---
---
# MusicInfoFormatter

This class provides static methods for formatting CD information, such as the CD's title and the information for a given Song. This kind of formatting is commonly seen, for example, in CD players that display the currently playing song.

* formatTitleInfo() - This method generates a string that has title information for a CD that includes the CDs title and the name of the performing artist. The title name must be shortened with an ellipsis to a maximum length of 30 characters. The generated string must use the following overall format:
  Title: 'CD Title'  (Artist: Performing Artist Name)
* formatSongInfo() - This method generates a string that follows specific formatting for a given song. It must use the following format:
 Track Number: Song Title [Running Time] (by Song Writer)
  The running time must be in the format of MM:SS.
