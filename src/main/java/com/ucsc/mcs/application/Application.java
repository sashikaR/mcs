package com.ucsc.mcs.application;

//import org.apache.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication(scanBasePackages = {"com.ucsc.mcs"})
public class Application {
//    final static Logger logger = Logger.getLogger(Application.class);


    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
//        logger.info("Process executed...!");

    }
}
