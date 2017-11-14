---
---
# MultipleChoiceMarker

This class is used for marking multiple choice exams. It takes a collection of MultipleChoice objects as the answer key when it is first created. It provides a method to mark the student’s answers. The following methods must be coded to complete the solution.

* MarkExam() – This method takes the supplied exam answers and compares them against the answers in the marking key. It then constructs a Mark object, based on the earned marks and the possible marks (each answer is worth one mark). Before marking the exam, the method must ensure that
  * The supplied collection of multiple choice answers is not null
  * The supplied collection of multiple choice answers has the same number of answers as the MultipleChoiceMarker’s answer key

**MultipleChoice and Mark Classes**

![](K-MultipleChoice.png)

![](K-Mark.png)

**MultipleChoiceMarker**

![](K-MultipleChoiceMarker.png)

```csharp
public class MultipleChoiceMarker
{
    private List<MultipleChoice> Key { get; set; }

    public MultipleChoiceMarker(List<MultipleChoice> key)
    {
        if (key == null)
            throw new Exception("Answer key cannot be null");
        this.Key = key;
    }

    public Mark MarkExam(List<MultipleChoice> examAnswers)
    {
        if (examAnswers == null)
            throw new Exception("Cannot mark null answers");
        if (examAnswers.Count != Key.Count)
            throw new Exception(
                    "The number of student answers does not match the number of items in the answer key");
        int possible = Key.Count;
        int earned = 0;
        // Calculate earned marks
        for (int index = 0; index < Key.Count; index++)
        {
            if (examAnswers[index] != null)
                if (Key[index].Choice == examAnswers[index].Choice)
                    earned++;
        }
        Mark examMark = new Mark(possible, earned);
        return examMark;
    }

    public int Count
    {
        get
        {
            return Key.Count;
        }
    }
}
```
