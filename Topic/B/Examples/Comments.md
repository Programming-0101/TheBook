---
---
# Comments

This class continues the illustration of the kinds of comments allowed in the programming language. This class builds on the previous example by showing comments for fields as well as methods.

```csharp
/*
 * File:    Comments.cs
 * Author:  Dan Gilleland
 * Date:    2010
 * Purpose: To illustrate multi-line, single-line, and XML comments.
 *          This is a multi-line comment.
 */
namespace Topic.B.Examples
{
    /// <summary>
    /// Comments illustrates multi-line, single-line, and XML comments.
    /// </summary>
    /// <remarks>
    /// This class is a stand-alone class used to illustrate comments.
    /// This particular XML comment is "attached" to the class as
    /// a whole, while other XML comments are for fields or methods
    /// in the class (a few methods and fields have been included for
    /// illustration purposes).
    /// </remarks>
    public class Comments
    {
        /// <summary>
        /// Here is a simple integer variable that is pre-set to the value 5.
        /// </summary>
        /// <remarks>
        /// This is an instance member (non-static) of the class.
        /// </remarks>
        private int _five = 5;

        /// <summary>
        /// Here is a whole number that is pre-set to the value 0.
        /// </summary>
        /// <remarks>
        /// This field is a static member of the class.
        /// </remarks>
        private static int _instanceCounter = 0;

        /// <summary>
        /// Here is a real number that is pre-set to the value 3.14159.
        /// </summary>
        /// <remarks>
        /// This field is a constant member of the class.
        /// </remarks>
        private const  double _PI = 3.14159;

        /* ****************** Methods ******************** */
        /// <summary>
        /// This is a method of <see cref="Comments"/>
        /// </summary>
        /// <returns>This method returns a string.</returns>
        public static string SimpleMethod()
        {
            return "Hello World!";
        } // end of SimpleMethod()

        /// <summary>
        /// This is a one-sentence description of the method.
        /// </summary>
        /// <param name="name">This is where I describe the purpose of this parameter</param>
        /// <returns>Here I describe what information is returned from this method.</returns>
        /// <remarks>
        /// This method has a single parameter.
        /// </remarks>
        public static int MethodWithParameter(string name)
        {
            return name.Length;
        } // end of MethodWithParameter(string)
    } // end of Comments class
}
```
