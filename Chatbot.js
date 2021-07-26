module.exports = 
{

	ChatbotReply:function(message)
	{
		// Bot's data
		this.Bot_Age = 1;
		this.Bot_Name = "Hiro";
		this.Bot_Creator = "Kaleb W";
		this.Bot_University = "Wake-Tech";
		this.Bot_Country = "United States";
		// User data
		this.User_Age;
		this.User_Name;
		this.User_University;
		// Message processing... 
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || message.indexOf("hello") > -1 || message.indexOf("welcome") > -1 || message.indexOf("yo") > -1 || message.indexOf("sup") > -1 || message.indexOf("hey") > -1)
		{
			return "Hi!";
		} 
		else if(message.indexOf("age") > -1 && message.indexOf("your"))
		{
			return "I'm " + this.Bot_Age;
		}
		else if (message.indexOf("how") > -1 && message.indexOf("are") && message.indexOf("you"))
		{
			return "I'm fine, thank you for asking! :)"
		}
		else if(message.indexOf("where") > -1 && message.indexOf("live") && message.indexOf("you"))
		{
			return "I live in " + this.Bot_Country;
		}
		else if(message.indexOf("who") > -1 && message.indexOf("made") && message.indexOf("you"))
		{
			return "I was made by " + this.Bot_Creator;
		}
		return "Sorry, I didn't get it :( ";
	}


};