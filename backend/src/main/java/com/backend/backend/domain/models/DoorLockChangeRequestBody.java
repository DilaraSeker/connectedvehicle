package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.Command;


public class DoorLockChangeRequestBody {
    Command command;

    public Command getCommand() {
        return command;
    }

    public void setCommand(Command command) {
        this.command = command;
    }
}
