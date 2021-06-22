package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.Status;

public class DoorLockChangedStatus {
    Status status;

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
