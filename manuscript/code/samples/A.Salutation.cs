namespace Topic.A.Examples
{
    public class Salutation // Define a class called "Salutation"
    {
        public static string Greeting()
        {
            return "Hello World!";
        } // end of Greeting()

        public static string Greeting(string name)
        {
            return "Hello " + name;
        } // end of Greeting(string)

        public static string Farewell()
        {
            return "So long!";
        } // end of Farewell()
    } // end of Salutation class
}