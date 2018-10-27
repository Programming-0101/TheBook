---
title: TBA
---
# PhoneNumberFileAdapter

This reads a text file to fill a list of PhoneNumber data.

* Record Structure:
  a. Telephone Number : String
  b. Last Name : String
  c. First Name : String
 
```csharp
public class PhoneNumberFileAdapter
{
    #region Read from a file
    public static List<PhoneNumber> LoadList(string filePath, FileFormat format)
    {
        List<PhoneNumber> data;
        if (format == FileFormat.CSV)
            data = LoadList(new CSVFileIO(filePath));
        else
            data = LoadList(new XMLFileIO<PhoneNumber>(filePath));
        return data;
    }

    private static List<PhoneNumber> LoadList(CSVFileIO reader)
    {
        List<PhoneNumber> data = new List<PhoneNumber>();
        List<string> lines = reader.ReadAllLines();
        foreach (string individualLine in lines)
        {
            // code specifics here..
            string[] fields = individualLine.Split(',');
            string firstName = fields[0], lastName = fields[1], number = fields[2];
            data.Add(new PhoneNumber(firstName, lastName, number));
        }
        return data;
    }

    private static List<PhoneNumber> LoadList(XMLFileIO<PhoneNumber> reader)
    {
        return reader.LoadAll();
    }
    #endregion

    #region Write to a file
    public static void SaveList(List<PhoneNumber> data, string fileName, FileFormat format, bool append)
    {
        if (format == FileFormat.CSV)
            SaveList(new CSVFileIO(fileName), data, append);
        else
            SaveList(new XMLFileIO<PhoneNumber>(fileName), data, append);
    }

    private static void SaveList(CSVFileIO writer, List<PhoneNumber> data, bool append)
    {
        List<string> lines = new List<string>();
        foreach (PhoneNumber item in data)
        {
            lines.Add(item.FirstName + "," + item.LastName + "," + item.Number);
        }
        writer.WriteAllLines(lines, append);
    }

    private static void SaveList(XMLFileIO<PhoneNumber> writer, List<PhoneNumber> data, bool append)
    {
        writer.SaveAll(data, append);
    }
    #endregion
}
```
