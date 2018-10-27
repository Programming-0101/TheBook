---
title: TBA
---
# MemoryAddress

This class represents a single memory address in both its base 10 and hexadecimal value.

**Base ten** is the common number system that we use in every day life. Base ten uses the digits 0-9 and the concept of the *position* of a digit occupying some multiple of ten. Thus, for the number 129 there is a hundreds-position (10^2), a tens-position (10^1) and a ones-position (10^0).

```plaintext
129 base 10
||\
|\ \_ 10^0 * 9 =>   9
| \
\  \_ 10^2 * 2 =>  20
 \
  \
   \_ 10^3 * 1 => 100
                 ====
                  129
```

Converting a value from one base to another (such as base-10 to base-16) involves thinking about the digit positions of the target base. Base 16 uses the digits 0-9 along with the letters A through F for the range of hex values zero to fifteen. Each digit position in a base-16 number can hold a value of 0 to F. Thus, a digit in the ones position is worth 1 times the digit. A two-digit hex value would have the sixteens-position (16^1) and a ones-position (16^0). A three-digit hex value would add onto that a two-hundred-and-fifty-sixth-position (16^2). For example, to convert the number 679 base 10 to a base 16, you would follow these steps.

* Divide the original number by the two-hundred-and-fifty-sixth-position (16^2). Then use the remainder in calculating the next position (16^1). `\include{longdiv} \longdiv{679}{256}`$
* Dividing the previous steps remainder (167) by 16 gives the result of 10, which is the hex-digit of `A`. `\include{longdiv} \longdiv{167}{16}`$
* The remainder of that last step is the ones-position
* Thus, the base-10 value 679 is `2B9` in base-16.

```plaintext
2B9 base 16
||\
|\ \_ 16^0 * 9  =>    9
| \
\  \_ 16^2 * 11 =>  176
 \
  \
   \_ 16^3 * 2  =>  512
                   ====
                    679 base 10
```

The following class demonstrates a small memory address (up to four hexadecimal digits) as a `short` and a string representation of hexadecimal.

```csharp
    public class MemoryAddress
    {
        public short Base10Value { get; private set; }
        public string HexValue
        {
            get
            {
                string hex = "0x";
                // A short number in hexadecimal 
                // will be at most 4 digits
                //    FFFF
                //    ||||
                //    |||- 16^0 =>    1
                //    ||-- 16^1 =>   16
                //    |--- 16^2 =>  256
                //    ---- 16^3 => 4096
                int value = Base10Value;
                int portion = value / 4096;
                hex += ToHexDigit(portion);
                value -= portion;
                portion = value / 256;
                hex += ToHexDigit(portion);
                value -= portion;
                portion = value / 16;
                hex += ToHexDigit(portion);
                portion = value % 16;
                hex += ToHexDigit(portion);
                return hex;
            }
        }

        public MemoryAddress(short address)
        {
            Base10Value = address;
        }

        private static string ToHexDigit(int number)
        {
            string result;
            if (number < 10)
                result = number.ToString();
            else if (number == 10)
                result = "A";
            else if (number == 11)
                result = "B";
            else if (number == 12)
                result = "C";
            else if (number == 13)
                result = "D";
            else if (number == 14)
                result = "E";
            else if (number == 15)
                result = "F";
            else // Should never happen...
                result = "";

            return result;
        }
    }
```
