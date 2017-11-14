---
---
# Topic O - File I/O

## Overview

All of the File I/O examples follow the same design pattern. This pattern is a form of what is called the Adapter Pattern. Each class has the following characteristics.

All of the text files used in this topic have their records delimited by carriage returns and their fields delimited by commas. File input is achieved through use of the Scanner class. The Scanner is also used to parse each record by specifying the use of the comma delimiter.

File Input/Output (IO) is all about using files for storing and retrieving data. These files exist “outside” of your program, and code is required to transfer the data between the file and the objects/variables in your program.

Data inside of files can be stored in either a binary or a text format. All of these examples will deal with text files. When using text files, the text itself needs to follow some pattern in order to distinguish the individual pieces of data from each other.

An old and traditional way of storing the text is to use a CSV (Comma-Separated Values) format. In this format, each row of information (also known as a “record” of data) is broken down into individual pieces of data by separating each piece (or “field”) by a comma. Rows are separated by a new line (or “carriage return”) marker. This format has had the advantage of being easy for humans to read and edit directly; it is also fairly flexible and programmers can easily adapt the form to fit the shape of the data they wish to store.

A more modern approach is to store the textual information in XML (eXtensible Markup Language) format. While also being human-readable and easy to format, XML has the advantage of making it easier for computer programs to read and save data that is both relational and complex. XML format uses “tags” (or “mark-up”) to wrap data. For example, if information on a person (“Bob Smith”) is stored in an XML file, it might look like this.

```xml
<Person>
  <FirstName>Bob</FirstName>
  <LastName>Smith</LastName>
</Person>
```

File Input/Output is best performed by having one class (or object) deal with formatting the data and a separate class to deal with directly accessing the file. In the following examples, the CSVFileIO and XMLFileIO classes read and write directly to the files, while the other classes (which end with “Adapter”) are concerned with determining the format of the data.

#### CSVFileIO

```csharp
/// <summary>
/// The CSVFileStorage class provides simple reading of all the lines of text of a CSV (Comma-Separated-Values) file.
/// </summary>
public class CSVFileIO
{
    public string FilePath { get; private set; }

    /// <summary>
    /// Initializes a new instance of the CSVFileStorage class.
    /// </summary>
    public CSVFileIO(string filePath)
    {
        FilePath = filePath;
    }

    public List<string> ReadAllLines()
    {
        List<string> lines = new List<string>();
        using (TextReader reader = new StreamReader(FilePath))
        {
            string aSingleLine = reader.ReadLine();
            while (aSingleLine != null)
            {
                lines.Add(aSingleLine);
                aSingleLine = reader.ReadLine();
            }
        }
        return lines;
    }

    public void WriteAllLines(List<string> lines, bool append)
    {
        using (TextWriter writer = new StreamWriter(FilePath, append))
        {
            foreach (string line in lines)
            {
                writer.WriteLine(line);
            }
        }
    }
}
```

#### XMLFileIO

```csharp
/// <summary>
/// The XMLFileIO class manages loading and saving any type to an XML file.
/// </summary>
public class XMLFileIO<T>
{
    public string FilePath { get; private set; }

    public XMLFileIO(string filePath)
    {
        FilePath = filePath;
    }

    public List<T> LoadAll()
    {
        XmlSerializer deserializer = new XmlSerializer(typeof(List<T>));
        List<T> data;
        using (TextReader textReader = new StreamReader(FilePath))
        {
            data = (List<T>)deserializer.Deserialize(textReader);
            textReader.Close();
        }
        return data;
    }

    public void SaveAll(List<T> data, bool append)
    {
        if (append && File.Exists(FilePath))
        {
            List<T> existingData = LoadAll();
            existingData.AddRange(data);
            data = existingData;
        }
        using (Stream stream = File.Open(FilePath, FileMode.OpenOrCreate))
        {
            XmlSerializer serializer = new XmlSerializer(typeof(List<T>));
            using (TextWriter writer = new StreamWriter(stream))
            {
                serializer.Serialize(writer, data);
                writer.Close();
            }
        }
    }
}
```

### LOGs

* A constructor that takes a valid File object
* A method called fill() that takes an array as the parameter and returns the number of entries created in the array from having read the file.
