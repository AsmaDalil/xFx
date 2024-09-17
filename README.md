# xFx
Reusing the RESTful service developed , and based on the background acquired in Part 4, develop a Browser-based HTML/JavaScript client that displays the screen of the remote system, each n seconds, n being an input parameter.

More specifically, the end user shall be able to:

input n in a text field
click a button to start receiving remote screen updates each n seconds
click the same button, whose caption should have changed from start to stop, to stop receiving remote screen updates
Technologies used:

# Protocol: HTTP

is an application layer protocol for sending hypermedia documents. HTTP is a stateless 

protocol that adheres to the conventional client-server model (MDN Web Docs).

# Provider side:

o	Provider programming language: Java (version: 1.8.0_281)

o	Spring Boot: a module of Spring framework which allows us to build a stand- alone application with minimal configurations.
o	Tools:

	Spring Initializer: The provider's code was put into a Spring Boot project by using an online tool called Spring Initializer.
	Gradle: Gradle is a build automation tool that may be used to make almost any type of software (Gradle documentation)
# Consumer side:

o	Consumer programming languages: Common consumer programming languages HTML/JavaScript

o	RxJS: stands for Reactive eXtension for JavaScript and is library for observable-based reactive programming.(observable)

o	Rx-http-request: Http client Request written in full Typescript | ES6 (compliant with RxJS) for client and server side.
o	Browserify: a tool for compiling node-flavored common js modules for the browser.
