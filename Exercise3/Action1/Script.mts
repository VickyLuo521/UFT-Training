

Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").WaitProperty "innerhtml",9.3,10000
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist (20) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf5.xml_;_
currentScore = cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml"))
desiredScore = 9.5
If currentScore >= desiredScore Then
	Reporter.ReportEvent micPass, "checkScore", "Score exceedsed the desired value of 9"
Else	
	Reporter.ReportEvent micFail, "checkScore", "Score is too low. "
End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf6.xml_;_
