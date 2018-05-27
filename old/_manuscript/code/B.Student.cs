/**
 * Purpose: To illustrate 
 *          Highlights:
 *          - Keywords: char, int, double
 *          - Grammar: variable declaration (fields)
 *          - Other:
 *              - Instance members
 */
namespace Topic.B.Examples
{
    public class Student
    {
        public string Name;                 // The full name of the student
        public char Gender;                 // Gender can be 'M' or 'F'
        public int StudentId;               // The school-provided student ID
        public string Program;              // The course program; e.g.: "CST"
        public double GradePointAverage;    // GPA is from 1.0 to 9.0
        public bool FullTime;               // If the student is enrolled full-time
    }
}