/*
 * Purpose: To illustrate 
 *          - Keywords: public, class, static, void, new
 *          - Grammar: variable (object) declaration, object instantiation, method declaration, method call, multi-line comments
 *          - Other:
 *              - main - the entry level of every program
 *              - console output (println)
 *              - Instance vs. Class methods
 *              - instance method call
 *              - instance method call with argument
 *              - (optional) array declaration - string[]
 */
namespace Topic.B.Examples
{

    public class HelloWorld_Driver
    {
        public static void Main(string[] args)
        {
            Salutation app = new Salutation();

            System.Console.WriteLine(app.Greeting());
            System.Console.WriteLine(app.Greeting("Bob"));
        }
    }
}