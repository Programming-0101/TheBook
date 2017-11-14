---
---
# Code Samples

1. Fraction – The fraction class avoid the division by zero error by ensuring that the supplied denominator is not zero.
2. Square – Only accepts positive, non-zero lengths for the side.
3. Circle – Only accepts positive, non-zero diameters.
4. Die – Only accepts from 4 to 20 sides for a die.
5. Person – First and last names cannot be empty and the birth date cannot be in the future. This illustrates putting the validation on the setters and calling the setters from the constructor (to reduce the duplication of code).
6. Student – Gender must be 'M' or 'F' (and will be converted to upper-case). The student name and program cannot be empty. The student ID must be 9 digits. The GPA must be between 0.0 and 9.0 (inclusive).
7. ParkingCounter – Only accepts positive, non-zero counts for available parking spaces and number of cars. Also, the number of cars must not exceed the number of parking spaces. The rules for the number of cars must also apply for cars entering and leaving the parking lot.
8. StockItem – Represents an inventory item that is kept in stock. The item's description, cost and profit margin are all part of the class design. Empty descriptions and zero or negative costs, as well as profit margins less than -100, are not allowed.
9. Account – The following account information is now verified when the class is created:
  a. Bank name and account type cannot be empty
  b. The opening balance must be greater than zero
  c. The overdraft limit cannot be negative
  d. The institution number must be 3 digits
  e. The branch number must be 6 digits
  f. Attempts to withdraw amounts beyond the overdraft limit should throw an "Insufficient Funds" exception
