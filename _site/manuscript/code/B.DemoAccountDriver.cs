namespace Topic.B.Examples
{
    public class DemoAccountDriver
    {
        public static void Main(string[] args)
        {
            Account myAccount; // declares a reference variable to an Account object
            myAccount = new Account(); // creates the Account object.

            myAccount.Balance = 500000.00;
            myAccount.OverdraftLimit = 1000000.00;
            myAccount.AccountNumber = 123456;
        }
    }
}