package com.ucsc.mcs.beans;

public class User {
   String name;

    public User(String id) {
        this.id = id;
    }

    public String getName( ) {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId( ) {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    String id;

    public String getEmail( ) {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    String email;
}
