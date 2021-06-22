package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.RetrievalStatus;
import com.backend.backend.domain.enums.ValueOfLock;


public class DoorLockStatus {
    ValueOfLock valueOfLock;
    RetrievalStatus retrievalStatus;
    int timeStamp;

    public ValueOfLock getValueOfLock() {
        return valueOfLock;
    }

    public void setValueOfLock(ValueOfLock valueOfLock) {
        this.valueOfLock = valueOfLock;
    }

    public RetrievalStatus getRetrievalStatus() {
        return retrievalStatus;
    }

    public void setRetrievalStatus(RetrievalStatus retrievalStatus) {
        this.retrievalStatus = retrievalStatus;
    }

    public int getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(int timeStamp) {
        this.timeStamp = timeStamp;
    }
}
