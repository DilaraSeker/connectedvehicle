package com.backend.backend.port.in;

import org.springframework.web.bind.annotation.RequestHeader;

public interface CarGeneralControllerPort {

    void aboutVehicle(@RequestHeader(value="authorization", required=false)String jwt);
    void distanceDriven(@RequestHeader(value="authorization", required=false)String jwt);
    void distanceDrivenResponse(@RequestHeader(value="authorization", required=false)String jwt);
    void doorLockChangedStatus(@RequestHeader(value="authorization", required=false)String jwt);
    void doorLockStatus(@RequestHeader(value="authorization", required=false)String jwt);
    void doorOpenStatus(@RequestHeader(value="authorization", required=false)String jwt);
    void doors(@RequestHeader(value="authorization", required=false)String jwt);
    void fuelLevel(@RequestHeader(value="authorization", required=false)String jwt);
    void location(@RequestHeader(value="authorization", required=false)String jwt);
    void locationCoordinate(@RequestHeader(value="authorization", required=false)String jwt);
    void stateOfCharge(@RequestHeader(value="authorization", required=false)String jwt);
    void tirePressureStatus(@RequestHeader(value="authorization", required=false)String jwt);
    void tires(@RequestHeader(value="authorization", required=false)String jwt);
    void vehicle(@RequestHeader(value="authorization", required=false)String jwt);





}
