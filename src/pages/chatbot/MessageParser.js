class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    }

    else if (lowercase.includes("register") || lowercase.includes("rs")) {
      this.actionProvider.handleRegistration();
    }
    else if (lowercase.includes("about") || lowercase.includes("ab")) {
      this.actionProvider.handleAbout();
    }
   else if (lowercase.includes("login") || lowercase.includes("lg")) {
      this.actionProvider.handleLogin();
    }
    else if (lowercase.includes("write") || lowercase.includes("wr")) {
      this.actionProvider.handleWrite();
    }
    else if (lowercase.includes("bye") || lowercase.includes("tata")) {
      this.actionProvider.bye();
    }
    else{
      this.actionProvider.handleInvalid();
    }
  }
}

export default MessageParser;