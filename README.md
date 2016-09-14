# Marks And Spencer
This is the implementation of the test.
The Framework is written with Java, and its is cucumber and selenium webdriver
In order to run successfully 
SDK 1.8
Firefox version 43 
for Mac:https://ftp.mozilla.org/pub/firefox/releases/43.0/mac/en-GB/
for Windows:https://ftp.mozilla.org/pub/firefox/releases/43.0/win64-EME-free/en-GB/

The tests can be run by simply on the IDE right click on RunCukes class under cucumber package folder and select run
Alternatively one can use mvn clean install -U to run from command line

The tests have 3 pages ( Filter, Search and Results) the filter and search pages are used to perform a search using the search box and filters respectively. The results page display the results so they can be asserted.
