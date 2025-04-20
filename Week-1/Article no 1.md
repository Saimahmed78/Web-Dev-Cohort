 ### Working of Internet
 In today’s daily life , we visit many websites . But we do not know how these websites open by a single click. So in this article we will know about this. So lets start by understanding the internet.

## Internet
Internet is a global network of billions of devices connected over the world. Using internet we can send any data or information to any part of world ( where internet is accessible). Internet is very common in our daily life.

## Internet - a Global Village
We can say internet is global village. Because in village an information is spread very fast , same is with internet , on internet information spread very fast. Social media is very good example of it.

## Working of Internet
Have you ever imagined how does internet works. In this section, We will try to learn about key components of internet and what are the protocols used for exchanging the data between browser and server and how is data transferred over the internet. When we type a URL , Our browser search for IP address from DNS and make a request to server. Then server finds the website and set the webpage files like (HTML, CSS, JS) to browser. Then browser displayed these files in the form of page.

# Diagram 
 ![Working of internet](/Week%201/Images/Working%20of%20internet.png)



## Key components of Internet
Client and Server : Client is the Browser and Server are the computers on which website lives. These computers remain online 24/7. Whenever se type any URL on browser, Our browser make a request to server for the website.

# Protocols : 
Protocol is defined as a set of rules. Whenever we say protocol, it means we are referring to pre-defined rules. In terms of internet. Protocols are set of rules that controls how data is transferred over the internet. Because , if there are no rules, than it is great chance that data will not transfer in correct way .Now we will know about some protocols of internet.

# HTTP : 
HTTP is abbreviation of Hyper Text Transfer Protocol. In simpler words , it is the set of rules that controls how hyper text will be transferred over the internet. Hyper text are text documents that contain link to other document. Using these hyper link we can visit other documents .HTTP is stateless. It does not track our sessions. Example : When we open a webpage , it is displayed using HTTP.

HTTP is stateless but did you notice that many websites do not ask our login information every time even if we close the browser like Facebook and Youtube and some website offer a option “Remember me”. These websites uses cookies.

# Cookies: 
HTTP uses cookies to store information that is required for interaction of user with websites. This is small text file that store our login information, location and other information.

## Stateless and Stateful: 
Stateless means that it does not maintain a state. Stateless means it maintains a state.

# Example : 
When we watch a movie on a Netflix , and close the app during watching the movie. if on opening the app, the movie starts from where we closed the app. It means it has maintained the state.

## FTP : 
It is File transfer Protocol that is used for transferring files between Client and Server. It is stateful. it requires login and Track session.

# Example: 
When we download or upload file using Google drive.

## TCP: 
TCP is Transmission control protocol. It ensures that data is transferred reliably .if a file is transferred using TCP than it will ensures that all data packets are sent and received in correct order. But it is slow because it takes time to ensure delivery of all packets and resend a packet if it is lost or damaged.

Working of TCP

![Working of TCP](/Week%201/Images/Working%20of%20TCP.png) 


## 3-way acknowledgement: 
To transfer data reliable. TCP uses 3 way acknowledgement, In this browser sends a Sync , like the browser says “Hi”. Then server sends Sync- Ack , like the browser says “Hi, Can you hear me ?”. Then browser sends a Ack , like the browser says “Yes, I can hear you”.

# Example: 
When we send a recorded voice message , then it is sent using TCP.

## UDP: 
UDP is User Datagram Protocol. It ensures that data is transferred very fast. To send data fast, it divides the large file into small datagrams. It does not ensure that all datagrams are sent.

Diagram to show Working of UDP
![Working of UDP](/Week%201/Images/Working%20of%20UDP.png) 

Difference between TCP and UDP:

![Working of UDP](/Week%201/Images/TCP%20and%20UDP.png) 


# Packets : 
When data is transferred across internet , then it is divided into small packets.

## Journey of Data - From Servers to Browser.
In this section , we will know what is the process happens in backend when we click a link and a webpage is displayed. We will step by step Process of how data travel from Server to Browser.

+ When we type “www. google.com” in the browser. The google.com does not make any sense for browser to make a request to Server.

+ So the browser have to know IP address of that website. At this step first Browser make a DNS query to find the IP address.

+ D.N.S(Domain Name System): DNS is a phone book of the Internet. It translate the Domain name(like www. google.com) into its corresponding IP address (like 192.168.150.00).DNS do not store Domain names. It only store IP addresses.

+ Before this step , First Browser check its Cache, if the IP address has been cached. If the IP address has not been found . Then Browser make a Query to DNS. This step is called DNS Resolution. In this step, DNS provides IP address.

+ Then Browser makes an HTTP request at this specific IP address of server.

+ Then server finds requested website at this IP, if found then browser sends web content files to requested Ip( like HTML, CSS, JS) to browser with status code 200(OK).

+ If not found then Browser sends status code 404( not found).

+ If there is error in Server. Then Browser sends status code 500(Internal Server Error).

## Real Life Analogy to demonstrate this Journey
In this example , I will try to simplify the journey of data from browsers to server using a real life example. I will relate the whole process with how we order pizza and it is delivered.

+ My friend(User) ask (types a URL)me (browser)to order Pizza ( for a website). I(Browser) do not know the phone number(do not know the IP address) of Pizza shop( of website) .

+ First I (browser)will try to remember the Phone number (Check the Browser’s Cache) .

+ If I do not remember, then I (browser)will try to find the phone number(find IP address) in my Phone’s contacts list (do DNS resolution- send a query to DNS server). Then, after finding the Phone number (finding the Ip address).I will make a call to Pizza Shop’s reception( Web server) And order the Pizza( makes an HTTP request).

+ The Pizza shop(Server ) will check its kitchen(Database) if the desired pizza is available in the kitchen(server will check for website).

+ If yes , then they will confirm the address (In case of server and browser, browser send headers which contains Ip address )and deliver the pizza( Server will send web content files with status code 200).

+ If not available, they will reply that Pizza is not available( Server will send status code 404).

+ If their service is closed they will say “Sorry, we do not deliver pizza at this time”(Server will send status code 503 ,Service unavailable)

+ If there is any problem in their kitchen(Any problem in server , they will say “Sorry , there is any issue in the kitchen(Server will send status code 500, internal server error).
+ Now think as in case of Pizza , the Pizza shop offer us any other options , if our desired pizza is not available. What does the server do will it also recommend us other options if it not finds our website? like if i search for pepperoni pizza website, will server recommend me any other pizza website if it does not find not find my desired website and what status code browser will send?
# Diagram to show step by step process step by step process
![alt text](/Week%201/Images/Transfer%20of%20data.png) 
Summary :
In this Article, I have written about what is internet ,working of internet and how a webpage is displayed when we click a link. I have used real life analogies to simplify these topics. If anyone finds mistakes in this article , please let me Know, so i will remove them. Please give your kind remarks on this article.
### Note
This article is also uploaded on Hashnode.The link mentioned below will navigate you to Hashnode.
Link: https://working-ofinternet.hashnode.dev/working-of-internet