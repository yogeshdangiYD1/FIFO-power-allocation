MAX_CAPACITY = 100
SAFE_CAPACITY = 92
MAX_DEVICE_CAPACITY = 40

total_consumption = 0
device_queue = Queue()
device_power = Dictionary()

function connect_device(device_id):
    if device_id in device_power:
            return 

                available_power = SAFE_CAPACITY - total_consumption
                    allocated_power = min(MAX_DEVICE_CAPACITY, available_power)
                        
                            device_power[device_id] = allocated_power
                                device_queue.enqueue(device_id)
                                    total_consumption += allocated_power

                                        print("Device", device_id, "connected with", allocated_power, "units.")

                                        function disconnect_device(device_id):
                                            if device_id not in device_power:
                                                    return 

                                                        freed_power = device_power[device_id]
                                                            total_consumption -= freed_power
                                                                device_queue.remove(device_id)
                                                                    device_power.remove(device_id)

                                                                        redistribute_power()
                                                                            print("Device", device_id, "disconnected, freed", freed_power, "units.")

                                                                            function change_consumption(device_id, new_consumption):
                                                                                if device_id not in device_power:
                                                                                        return 

                                                                                            current_consumption = device_power[device_id]
                                                                                                new_consumption = min(MAX_DEVICE_CAPACITY, new_consumption)
                                                                                                    
                                                                                                        if new_consumption <= current_consumption:
                                                                                                                total_consumption -= (current_consumption - new_consumption)
                                                                                                                        device_power[device_id] = new_consumption
                                                                                                                                redistribute_power()
                                                                                                                                    else:
                                                                                                                                            required_additional_power = new_consumption - current_consumption
                                                                                                                                                    if total_consumption + required_additional_power <= SAFE_CAPACITY:
                                                                                                                                                                device_power[device_id] = new_consumption
                                                                                                                                                                            total_consumption += required_additional_power
                                                                                                                                                                                    else:
                                                                                                                                                                                                device_power[device_id] = current_consumption 
                                                                                                                                                                                                    
                                                                                                                                                                                                        print("Device", device_id, "consumption updated to", device_power[device_id], "units.")

                                                                                                                                                                                                        function redistribute_power():
                                                                                                                                                                                                            available_power = SAFE_CAPACITY - total_consumption
                                                                                                                                                                                                                
                                                                                                                                                                                                                    for device_id in device_queue:
                                                                                                                                                                                                                            current_power = device_power[device_id]
                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                            if current_power < MAX_DEVICE_CAPACITY:
                                                                                                                                                                                                                                                        additional_power = min(MAX_DEVICE_CAPACITY - current_power, available_power)
                                                                                                                                                                                                                                                                    device_power[device_id] += additional_power
                                                                                                                                                                                                                                                                                total_consumption += additional_power
                                                                                                                                                                                                                                                                                            available_power -= additional_power

                                                                                                                                                                                                                                                                                                    if available_power <= 0:
                                                                                                                                                                                                                                                                                                                break

                                                                                                                                                                                                                                                                                                                    print("Power redistribution completed:")
                                                                                                                                                                                                                                                                                                                        for device_id, power in device_power.items():
                                                                                                                                                                                                                                                                                                                                print("Device", device_id, "now has", power, "units.")
                                                                                                                                                                                                                                                                                                                                