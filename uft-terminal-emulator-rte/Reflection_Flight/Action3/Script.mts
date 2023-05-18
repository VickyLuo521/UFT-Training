' Create Order
TeWindow("TeWindow").TeScreen("FR68 Flights").Sync
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").Set "1"
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").SetCursorPos 1
TeWindow("TeWindow").TeScreen("Flight Reservation System").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("Flight Reservation System").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Depart Date").Set DataTable("FlightDate", dtLocalSheet)
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Airline").Set "AA"
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("From City").Set "Denver"
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("To City").Set "San Francisco"
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Flight").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Customer").Set DataTable("PassengerName", dtLocalSheet)
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Class of Service").Set "First"
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Method of payment").Set "Cash"
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Order Number").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("OrderNumber(protected)").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("OrderNumber(protected)").Output CheckPoint("CreatedOrderNum")
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF3
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_ENTER

