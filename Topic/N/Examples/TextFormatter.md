---
---
# TextFormatter

This class provides static methods for common string formatting.

* leftJustify() - This static method will append spaces after the supplied text until the supplied text is at least the required length. Note that this method will not trim the supplied text if it is longer than the required length.
* rightJustify() - This static method will prepend spaces before the supplied text until the supplied text is at least the required length. Note that this method will not trim the supplied text if it is longer than the required length.
* shortenWithEllipsis() - This static method will check the length of the supplied text against the desired length. If the supplied text is longer, it will trim off trailing characters and append an ellipsis (…) , while ensuring that the resulting text is the desired length.
