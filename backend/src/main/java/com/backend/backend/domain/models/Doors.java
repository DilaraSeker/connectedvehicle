package com.backend.backend.domain.models;

public class Doors {

    DoorOpenStatus doorStatusFrontLeft;
    DoorOpenStatus doorStatusFrontFight;
    DoorOpenStatus doorStatusRearLeft;
    DoorOpenStatus doorStatusRearRight;

    DoorLockStatus doorLockStatusFrontLeft;
    DoorLockStatus doorLockStatusFrontRight;
    DoorLockStatus doorLockStatusRearLeft;
    DoorLockStatus doorLockStatusRearRight;
    DoorLockStatus doorLockStatusDecklid;
    DoorLockStatus doorLockStatusGas;
    DoorLockStatus doorLockStatusVehicle;


    public DoorOpenStatus getDoorStatusFrontLeft() {
        return doorStatusFrontLeft;
    }

    public void setDoorStatusFrontLeft(DoorOpenStatus doorStatusFrontLeft) {
        this.doorStatusFrontLeft = doorStatusFrontLeft;
    }

    public DoorOpenStatus getDoorStatusFrontFight() {
        return doorStatusFrontFight;
    }

    public void setDoorStatusFrontFight(DoorOpenStatus doorStatusFrontFight) {
        this.doorStatusFrontFight = doorStatusFrontFight;
    }

    public DoorOpenStatus getDoorStatusRearLeft() {
        return doorStatusRearLeft;
    }

    public void setDoorStatusRearLeft(DoorOpenStatus doorStatusRearLeft) {
        this.doorStatusRearLeft = doorStatusRearLeft;
    }

    public DoorOpenStatus getDoorStatusRearRight() {
        return doorStatusRearRight;
    }

    public void setDoorStatusRearRight(DoorOpenStatus doorStatusRearRight) {
        this.doorStatusRearRight = doorStatusRearRight;
    }

    public DoorLockStatus getDoorLockStatusFrontLeft() {
        return doorLockStatusFrontLeft;
    }

    public void setDoorLockStatusFrontLeft(DoorLockStatus doorLockStatusFrontLeft) {
        this.doorLockStatusFrontLeft = doorLockStatusFrontLeft;
    }

    public DoorLockStatus getDoorLockStatusFrontRight() {
        return doorLockStatusFrontRight;
    }

    public void setDoorLockStatusFrontRight(DoorLockStatus doorLockStatusFrontRight) {
        this.doorLockStatusFrontRight = doorLockStatusFrontRight;
    }

    public DoorLockStatus getDoorLockStatusRearLeft() {
        return doorLockStatusRearLeft;
    }

    public void setDoorLockStatusRearLeft(DoorLockStatus doorLockStatusRearLeft) {
        this.doorLockStatusRearLeft = doorLockStatusRearLeft;
    }

    public DoorLockStatus getDoorLockStatusRearRight() {
        return doorLockStatusRearRight;
    }

    public void setDoorLockStatusRearRight(DoorLockStatus doorLockStatusRearRight) {
        this.doorLockStatusRearRight = doorLockStatusRearRight;
    }

    public DoorLockStatus getDoorLockStatusDecklid() {
        return doorLockStatusDecklid;
    }

    public void setDoorLockStatusDecklid(DoorLockStatus doorLockStatusDecklid) {
        this.doorLockStatusDecklid = doorLockStatusDecklid;
    }

    public DoorLockStatus getDoorLockStatusGas() {
        return doorLockStatusGas;
    }

    public void setDoorLockStatusGas(DoorLockStatus doorLockStatusGas) {
        this.doorLockStatusGas = doorLockStatusGas;
    }

    public DoorLockStatus getDoorLockStatusVehicle() {
        return doorLockStatusVehicle;
    }

    public void setDoorLockStatusVehicle(DoorLockStatus doorLockStatusVehicle) {
        this.doorLockStatusVehicle = doorLockStatusVehicle;
    }
}
