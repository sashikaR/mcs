# System Requirements
1. openjdk version "1.8.0_222"
2. Apache Maven 3.6.0
3. Python 2.7.15+
4. Apache Jmeter 5.1.1
5. Tested and verified in Ubuntu 18.04 operating system

# Build steps - Java Program

1. mvn clean install

# Build steps - Python Program

pip install Flask

# Program executions - Java
1. cd target
2. java -jar mcs-1.0-SNAPSHOT.jar

# Program executions - Python
1. cd src/native/python/
2. ./api.py
3. ./parallel_api.py

# Start Load Test

1. Open JMX file from Jmeter : src/test/jmeter/mcs.jmx and execte.



