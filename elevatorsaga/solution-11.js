/* eslint-disable no-useless-return */
/* eslint-disable array-callback-return */

const fn = {
  init: function (elevators, floors) {
    const getNearestFloors = (currentFloor, targetFloors, count = 1) => {
      const distances = targetFloors.map(floor => Math.abs(floor - currentFloor));
      const minDistances = Array.from(new Set(distances)).sort((a, b) => a - b).slice(0, count);

      const nearestFloors = [];
      minDistances.forEach(minDistance => {
        const minDistanceIndex = distances.findIndex(distance => distance === minDistance);
        nearestFloors.push(targetFloors[minDistanceIndex]);
      });

      return nearestFloors;
    };

    const getOptimalElevator = (currentFloor, elevators) => {
      const availableElevator = elevators.filter(elevator => elevator.destinationQueue.length === 0);
      if (availableElevator.length > 0) return availableElevator[0];
      // Choose nearest elevator
      return getNearestElevator(currentFloor, elevators);
    };

    const getNearestElevator = (currentFloor, elevators) => {
      const distances = elevators.map(elevator => {
        if (elevator.destinationQueue.length > 0) {
          return Math.abs(elevator.destinationQueue[elevator.destinationQueue.length - 1] - currentFloor);
        }
        return Math.abs(elevator.currentFloor() - currentFloor);
      });
      const minDistance = Math.min(...distances);
      const minDistanceIndex = distances.findIndex(distance => distance === minDistance);
      const nearestElevator = elevators[minDistanceIndex];
      return nearestElevator;
    };

    const isElevatorFull = (elevator) => {
      return elevator.loadFactor() > 0.4;
    };

    const isFloorEmpty = (floorNum) => {
      const floor = floors.find(floor => floor.level === floorNum);
      return floor.buttonStates.up === '' && floor.buttonStates.up === '';
    };

    const isThereToUnload = (targetFloorNum, elevator) => {
      return elevator.getPressedFloors().includes(targetFloorNum);
    };

    const sort = (array, dir) => {
      if (dir === 'asc') {
        return array.sort((a, b) => a - b);
      } else {
        return array.sort((a, b) => b - a);
      }
    };

    const ignore_num_stopped_at_floor_event = [];

    elevators.map((elevator, i) => {
      elevator.on('floor_button_pressed', function () {
        // elevator.goToFloor(floorNum);
      });

      elevator.on('stopped_at_floor', function (floorNum) {
        if (ignore_num_stopped_at_floor_event[i] > 0) {
          ignore_num_stopped_at_floor_event[i] -= 1;
          return;
        }
        if (elevator.destinationQueue.length > 0) {
          const nextFloorNumber = elevator.destinationQueue[0];
          if (isFloorEmpty(nextFloorNumber) && !isThereToUnload(nextFloorNumber, elevator)) {
            elevator.destinationQueue = elevator.destinationQueue.filter(floorNumber => floorNumber !== nextFloorNumber);
            elevator.checkDestinationQueue();
          }
        }
        if (isElevatorFull(elevator)) { // Time to prioritize unloading
          const unloadFloorsNum = elevator.getPressedFloors().length;
          let targets = getNearestFloors(floorNum, elevator.getPressedFloors(), unloadFloorsNum);
          if (floorNum - targets[0] > 0) {
            targets = sort(targets, 'asc');
          } else {
            targets = sort(targets, 'desc');
          }
          targets.forEach(target => elevator.goToFloor(target, true));
          ignore_num_stopped_at_floor_event[i] = unloadFloorsNum;
        }
      });

      elevator.on('idle', function () {
        elevator.goToFloor(0);
      });
    });

    floors.map(floor => {
      floor.on('up_button_pressed', function () {
        const elevator = getOptimalElevator(floor.level, elevators);
        elevator.goToFloor(floor.level);
      });

      floor.on('down_button_pressed', function () {
        const elevator = getOptimalElevator(floor.level, elevators);
        elevator.goToFloor(floor.level);
      });
    });
  },

  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  }
};
