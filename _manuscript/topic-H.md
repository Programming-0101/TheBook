# Topic H – Case Structures

## Overview

This topic introduces the C# switch statement which is used to code case structures. The following new keywords are introduced.
* switch
* case
* default
* break

### LOGs

#### General Programming Concepts and Terms

* Describe the syntax of the switch statement
* Discuss the limitations of the switch statement in C# and the available alternatives for the times that we can't use a switch statement

## Code Samples

1. LetterGrade - Represents a letter grade as assigned in Quebec universities. Source: http://en.wikipedia.org/wiki/Letter_grade 
2. Rating – Represents a rating on a scale of 1 to 5, where 1 is "very bad", 2 is "bad", 3 is "average", 4 is "good", and 5 is "very good".

### LetterGrade

**Problem Statement**

Write the code for the LetterGrade class that represents a letter grade as assigned in Quebec universities (Source: http://en.wikipedia.org/wiki/Letter_grade). The solution must meet the following requirements (note – you do not need to perform validation for this sample):

* Should get and set the grade (as a single letter)
* Should ensure the grade is in upper-case
* Should get the appropriate descriptions for the grade, based on the following table:

Grade | Description
------|--------------------------------------
A     | A - 80-100% - Greatly Above Standards
B     | B - 70-79% - Above Standards
C     | C - 60-69% - At Government Standards
D     | D - 50-60% - Lower Standards
F     | F - 0-49% - Failure

Use the following class diagram when creating your solution.

![](H-LetterGrade.png)
 
```csharp
public class LetterGrade
{
    private char _Grade;

    public char Grade
    {
        get { return _Grade; }
        set { this._Grade = char.ToUpper(value); }
    }

    public LetterGrade(char grade)
    {
        Grade = grade;
    }


    public override string ToString()
    {
        string description;
        switch (_Grade)
        {
            case 'A':
                description = "A - 80-100% - Greatly Above Standards";
                break;
            case 'B':
                description = "B - 70-79% - Above Standards";
                break;
            case 'C':
                description = "C - 60-69% - At Government Standards";
                break;
            case 'D':
                description = "D - 50-60% - Lower Standards";
                break;
            case 'F':
                description = "F - 0-49% - Failure";
                break;
            default:
                description = "Invalid Letter Grade";
                break;
        }
        return description;
    }
}
```

### Rating

**Problem Statement**

Write the code for the Rating class that represents a rating on a survey where the rating is done using the values 1 through 5, inclusive. The solution must meet the following requirements (note – you do not need to perform validation for this sample):

* Should get and set the rating value
* Should get the appropriate string result when using the ToString() method, based on the following table:

Value | Description
------|------------
1     | very bad
2     | bad
3     | average
4     | good
5     | very good

Use the following class diagram when creating your solution.
 
![](H-Rating.png)

```csharp
public class Rating
{
    public int Value { get; set; }

    public Rating(int value)
    {
        Value = value;
    }


    public override string ToString()
    {
        string rating;
        switch (Value)
        {
            case 5:
                rating = "very good";
                break;
            case 4:
                rating = "good";
                break;
            case 3:
                rating = "average";
                break;
            case 2:
                rating = "bad";
                break;
            case 1:
                rating = "very bad";
                break;
            default:
                rating = "Invalid Rating";
                break;
        }
        return rating;
    }
}
```

## Practice Exercises

1. BahamaLetterGrade - Represents a letter grade as assigned in the Bahamas universities. Source: http://en.wikipedia.org/wiki/Letter_grade 
2. Feedback – Represents an opinion rating as feedback, where 1 is "no opinion", 2 is "strongly disagree", 3 is "disagree", 4 is "agree, and 5 is "strongly agree".
3. HazardousMaterial – Represents the six hazardous material codes of 'A' through 'F'.

### BahamaLetterGrade

**Problem Statement**

Write the code for the BahamaLetterGrade class that represents a letter grade as assigned in the Bahamas universities (Source: http://en.wikipedia.org/wiki/Letter_grade). Each letter grade is also associated with a grade value. The solution must meet the following requirements (note – you do not need to perform validation for this exercise):

* Should get and set the grade (as a single letter)
* Should ensure the grade is in upper-case
* Should get the appropriate descriptions for the grade, based on the following table:

Grade | Grade Value | Description
------|-------------|--------------
A     | 4           | A-4 - 90-100%
B     | 3           | B-3 - 71-89%
C     | 2           | C-2 - 56-70%
D     | 1           | D-1 - 46-55%
F     | 0           | F-0 - 0-45%

Use the following class diagram when creating your solution.

![](H-BahamaLetterGrade.png)
 
### Feedback

Represents an opinion rating as feedback, where 1 is "no opinion", 2 is "strongly disagree", 3 is "disagree", 4 is "agree, and 5 is "strongly agree".

**Problem Statement**

Write the code for the Feedback class that represents a rating on a survey where the feedback is given using the values 1 through 5, inclusive. The solution must meet the following requirements (note – you do not need to perform validation for this sample):

* Should get and set the feedback value
* Should get the appropriate string result when using the ToString() method, based on the following table:

Value | Description
------|------------------
1     | no opinion
2     | strongly disagree
3     | disagree
4     | agree
5     | strongly agree

Use the following class diagram when creating your solution.

![](H-Feedback.png)

### HazardousMaterial

The class code for the hazardous material can only be the letters 'A' through 'F', inclusive.

**Problem Statement**

Rewrite the code for the HazardousMaterial class to make use of the switch statement. The solution must meet the following requirements (new requirements are in **bold**):

* Should return the class code as the classification
* Should make sure only class codes 'A' through 'F' are allowed (in either upper or lower case)
* Should make sure the classification is stored in upper case
* Should get the description for the class, based on the following table
  **You must use a switch statement to get the results**

Class Code | Description
-----------|-----------------------------------
A          | Compressed Gas
B          | Flammable and Combustible Material
C          | Oxidizing Material
D          | Poisonous and Infectious Material
E          | Corrosive Material
F          | Dangerously Reactive Material

* Should override the ToString() method to get the full description and class code in the following format:
  * "Class ClassCode - Description"

Use the following class diagram when creating your solution.

![](H-HazardousMaterial.png)
 