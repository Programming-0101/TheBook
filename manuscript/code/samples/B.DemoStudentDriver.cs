/**
 * Purpose: To illustrate 
 *          Highlights:
 *          - Keywords: public, class, static, void, new
 *          - Grammar: 
 */
namespace Topic.B.Examples
{
    public class DemoStudentDriver
    {
        public static void Main(string[] args)
        {
            Student bob, mary, joe, susan, frank;
            bob = new Student();
            mary = new Student();
            joe = new Student();
            susan = new Student();
            frank = new Student();

            bob.Name = "Bob McNalley";
            bob.Gender = 'M';
            bob.Program = "CST";
            bob.StudentId = 200765789;
            bob.GradePointAverage = 6.76;

            mary.Name = "Mary McTavishski";
            mary.Gender = 'F';
            mary.Program = "CST";
            mary.StudentId = 200765790;
            mary.GradePointAverage = 5.76;

            joe.Name = "Joe Jetson";
            joe.Gender = 'M';
            joe.Program = "CST";
            joe.StudentId = 200765792;
            joe.GradePointAverage = 4.66;

            susan.Name = "Susan Orlando";
            susan.Gender = 'F';
            susan.Program = "CST";
            susan.StudentId = 200765795;
            susan.GradePointAverage = 8.54;

            frank.Name = "Frank Smith";
            frank.Gender = 'M';
            frank.Program = "CST";
            frank.StudentId = 200765797;
            frank.GradePointAverage = 8.52;

            displayStudentInformation(bob);
        }

        public static void displayStudentInformation(Student someStudent)
        {
            System.Console.WriteLine(someStudent.Name);
            System.Console.WriteLine(someStudent.Gender);
            System.Console.WriteLine(someStudent.Program);
            System.Console.WriteLine(someStudent.StudentId);
            System.Console.WriteLine(someStudent.GradePointAverage);
        }
    }
}