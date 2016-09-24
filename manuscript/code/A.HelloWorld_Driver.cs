namespace Topic.A.Examples
{
    public class HelloWorld_Driver
    {
        public static void Main(string[] args)
        {
            System.Console.WriteLine(Salutation.Greeting());
            System.Console.WriteLine(Salutation.Greeting("Bob"));
            System.Console.WriteLine(); // print a blank line
            System.Console.WriteLine(Salutation.Farewell());
        }
    }
}