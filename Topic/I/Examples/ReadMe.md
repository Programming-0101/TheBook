---
title: Examples
---
# Code Samples

### Enumerations:

1. [Coin + CoinFace](Coin.md) – The CoinFace enumeration helps to describe the two sides of a Coin, which can then be used in a tossing game.
2. [Account + AccountType](Account.md) – The Account's account type is no longer being represented as a string, but is its own enumeration: AccountType.
3. [LetterGrade + QuebecLetterGrade](LetterGrade.md) – The QuebecLetterGrade uses the simple LetterGrade enumeration and assigns specific ranges of percentage marks for the possible LetterGrade values.

4. [CampsiteFacility](Campsite.md) - Introduces the idea of the `[Flags]` attribute on the enumeration.

### Composition:

1. [Address + Student + GenderType](Address.md) – This revised version of the Student class now has an Address field. The address field is new; although similar to the CanadianAddress class, the Address class is simpler and more "generic" (having "State" instead of "Province" and "ZipCode" instead of "PostalCode").
2. [ImproperFraction + MixedNumber + ProperFraction](ImproperFraction.md) – In this sample, the idea of a Fraction class is made more specific by replacing it with three more specific types of numbers: MixedNumber, ProperFraction, and ImproperFraction. A MixedNumber is made up of a whole number and a ProperFraction. A MixedNumber can also be expressed as or derived from an ImproperFraction. The reciprocal of a ProperFraction is an ImproperFraction and the reciprocal of an ImproperFraction is a ProperFraction.

### Console Application

1. [Insect](Insect.md) - Create a program that uses the [ConsoleKey](https://docs.microsoft.com/en-us/dotnet/api/system.consolekey?view=netcore-3.1) enum while checking keystroke inputs to move an "insect" (a butteryfly `>-<`) around the screen based on the arrow keys or the WASD keys. Stop the program with a ESC key.

