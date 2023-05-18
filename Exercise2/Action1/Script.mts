
Browser("Advantage Shopping").Page("Advantage Shopping").Link("TabletsCategoryTxt").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP Elite x2 1011 G1 Tablet").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("p_Quantity", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuCart").Click


Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Cart_Price").Output CheckPoint("Cart_Price_2")


Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Your shopping cart is").Check CheckPoint("Your shopping cart is empty") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Your shopping cart is")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link_ContinueShopping").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf12.xml_;_


