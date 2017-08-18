/*
 * Purpose: To illustrate 
 *          - Keywords: public, class, return
 *          - Grammar: method declaration, parameter declaration, single line comments
 *          - Other:
 *              - string data type
 *              - method overloading
 *              - Instance members
 */
namespace Topic.B.Examples
{
    public class Salutation
    {
        public string Greeting()
        {
            return "Hello World!";
        }

        public string Greeting(string name)
        {
            return "Hello " + name;
        }
    }
}