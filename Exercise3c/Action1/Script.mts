SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "http://nimbusserver.aos.com:8000/#/"

For sendFeedback = 1 To 4 Step 1	
	Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping 2").Link("Link")_;_script infofile_;_ZIP::ssf2.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping_2").WebList("categoryListboxContactUs").Select "#" & sendFeedback @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping 2").WebList("categoryListboxContactUs")_;_script infofile_;_ZIP::ssf3.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping_2").WebList("productListboxContactUs").Select "#" & sendFeedback @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping 2").WebList("productListboxContactUs")_;_script infofile_;_ZIP::ssf4.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("emailContactUs").Set DataTable("emailContactUs_Text", dtGlobalSheet) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping 2").WebEdit("emailContactUs")_;_script infofile_;_ZIP::ssf5.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("subjectTextareaContactUs").Set DataTable("subjectTextareaContactUs_Text", dtGlobalSheet) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping 2").WebEdit("subjectTextareaContactUs")_;_script infofile_;_ZIP::ssf6.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping_2").WebButton("send_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping 2").WebButton("send btnundefined")_;_script infofile_;_ZIP::ssf7.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("CONTINUE SHOPPING").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping 2").Link("CONTINUE SHOPPING")_;_script infofile_;_ZIP::ssf8.xml_;_
Next

SystemUtil.CloseProcessByName "iexplore.exe"
