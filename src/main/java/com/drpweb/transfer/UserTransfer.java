package com.drpweb.transfer;

import java.util.Map;

/**
 * Created by Asus on 7/8/2559.
 */
public class UserTransfer {
    private final String name;
    private final Map<String, Boolean> roles;


    public UserTransfer(String name, Map<String, Boolean> roles) {
        this.name = name;
        this.roles = roles;
    }

    public String getName() {
        return name;
    }

    public Map<String, Boolean> getRoles() {
        return roles;
    }
}