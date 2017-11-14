---
title: TBA
---
# BookFileAdapter

This reads a CSV text file to fill a list of Book data. Note that in this example, not every field in the record structure of CSV files is used in creating the required Book objects; unused fields are simply read and “discarded” by the BookFileAdapter. In addition, the Book class and text file used in this example allows for a book to have multiple authors.

* Record Structure in the file:
  a. Title : String
  b. Authors : String - delimited by semi-colons
  c. Publication year : Integer
  d. Publisher : String
  e. Format : String
  f. Dewey Decimal Number : String - could be empty in the file
  g. ISBN : String
  h. Number of Pages : Integer
  i. Cover Price : Money

```csharp
/// <summary>
/// BookFileAdapter provides a way to read and write
/// Book information to and from text files.
/// </summary>
/// <remarks>
/// This class requires that the file structure be in the following format:
/// <ol><li>Title : String
/// <li>Authors : String[]
/// <ol><li>The Author information is a semicolon (;) separated list of authors
/// </li></ol>
/// <li>Publication Year : Integer
/// <li>Publisher : String
/// <li>Format : String
/// <li>Dewey Decimal Number : String
/// <li>ISBN : String
/// <li>Number of Pages : Integer
/// <li>Cover Price : Money
/// </ol>
/// <para>
/// This method fills a List of Book data. Each Book only needs
/// the title, the authors (as an array of Strings), and the ISBN. 
/// Therefore, the other data in the file will simply be discarded as it
/// is read. In the file, the Author information is a semicolon (;)
/// separated list of authors.
/// </para>
/// </remarks>
public class BookFileAdapter
{
    #region Read from a file
    public static List<Book> LoadList(string filePath, FileFormat format)
    {
        List<Book> data;
        if (format == FileFormat.CSV)
            data = LoadList(new CSVFileIO(filePath));
        else
            data = LoadList(new XMLFileIO<Book>(filePath));
        return data;
    }

    private static List<Book> LoadList(CSVFileIO reader)
    {
        List<Book> data = new List<Book>();
        List<string> lines = reader.ReadAllLines();
        foreach (string individualLine in lines)
        {
            string title, authorList;
            ISBN bookUPC;
            // Parse the record
            string[] fields = individualLine.Split(',');
            title = fields[0];
            authorList = fields[1];
            // fields[2] Publication Year
            // fields[3] Publisher
            // fields[4] Format
            // fields[5] Dewey Decimal Number
            bookUPC = new ISBN(fields[6]);
            // fields[7] Number of Pages
            // fields[8] Cover Price

            // Parse the authorList
            string[] authors = null;
            authors = authorList.Split(';');

            // Create the book and add it to the array
            data.Add(new Book(title, authors, bookUPC));
        }
        return data;
    }

    private static List<Book> LoadList(XMLFileIO<Book> reader)
    {
        return reader.LoadAll();
    }
    #endregion

    #region Write to a file
    public static void SaveList(List<Book> data, string fileName, FileFormat format, bool append)
    {
        if (format == FileFormat.CSV)
            SaveList(new CSVFileIO(fileName), data, append);
        else
            SaveList(new XMLFileIO<Book>(fileName), data, append);
    }

    private static void SaveList(CSVFileIO writer, List<Book> data, bool append)
    {
        List<string> lines = new List<string>();
        foreach (Book item in data)
        {
            string formattedRecord;
            formattedRecord = item.Title;
            formattedRecord += string.Join(";", item.Authors);
            formattedRecord += item.Isbn.BarCode;

            lines.Add(formattedRecord);
        }
        writer.WriteAllLines(lines, append);
    }

    private static void SaveList(XMLFileIO<Book> writer, List<Book> data, bool append)
    {
        writer.SaveAll(data, append);
    }
    #endregion
}
```
