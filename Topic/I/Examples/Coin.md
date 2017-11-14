---
---
#Coin + CoinFace

The CoinFace enumeration helps to describe the tw  * sides of a Coin, which can then be used in a tossing game.

**Problem Statement**

Write the code needed to represent a coin that could be used in a coin-toss game. The solution must meet the following requirements.

* Should randomly generate the coin face that is showing when creating the coin
* Should get the side of the coin that is face showing
* Should allow the coin to be tossed to randomly generate a new coin face
* Should only support tw  * sides for a coin’s face: Heads and Tails

Use the following diagram when creating your solution.

![](I-Coin.png)

```csharp
public class Coin
{
    public enum CoinFace { HEADS, TAILS };

    public CoinFace FaceShowing { get; private set; }

    public Coin()
    {
        Toss();
    }

    public void Toss()
    {
        if (Rnd.Next(2) == 0)
            FaceShowing = CoinFace.HEADS;
        else
            FaceShowing = CoinFace.TAILS;
    }
}
```
