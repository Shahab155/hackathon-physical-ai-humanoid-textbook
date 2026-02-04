---
sidebar_position: 3
---

# Nodes, Topics, and Services: The Communication Protocols

In the previous chapter, we introduced nodes as the fundamental functional units of ROS 2. Now we'll explore how these nodes communicate with each other using two primary patterns: **topics** (for continuous data streams) and **services** (for request-response interactions).

## Communication Patterns Overview

ROS 2 implements two main communication paradigms that mirror common patterns in distributed systems:

1. **Publish/Subscribe (Topics)**: For continuous, asynchronous data broadcasting
2. **Request/Response (Services)**: For synchronous, discrete command and response interactions

Understanding these patterns is crucial for designing effective robotic systems, as they determine how information flows between different components of your robot.

## Publish/Subscribe Pattern: Topics

The publish/subscribe pattern is ideal for continuous data streams where multiple subscribers may be interested in the same data source.

### How Topics Work

- **Publisher**: A node sends messages to a specific topic
- **Subscriber**: A node receives messages from a specific topic
- **Topic**: A named channel for message transmission

Think of topics like a radio station - the publisher broadcasts to a specific frequency (topic name), and any subscriber tuned to that frequency receives the broadcast.

### Example: Camera Data Distribution

```python
# Publisher: Camera Driver Node
import rclpy
from sensor_msgs.msg import Image

def camera_publisher():
    publisher = node.create_publisher(Image, 'camera/image_raw', 10)
    # Continuously publish camera frames...
```

```python
# Subscriber: Image Processing Node
import rclpy
from sensor_msgs.msg import Image

def camera_subscriber_callback(msg):
    # Process the received image
    pass

subscriber = node.create_subscription(
    Image,
    'camera/image_raw',
    camera_subscriber_callback,
    10
)
```

In this example:
- Multiple nodes could subscribe to `'camera/image_raw'` (object detection, obstacle detection, visual servoing)
- The camera driver only needs to publish once for all interested subscribers
- Communication is decoupled - publisher doesn't need to know who subscribes

### Topic Characteristics

- **Asynchronous**: Publisher and subscriber don't need to be synchronized
- **Many-to-many**: Multiple publishers and/or subscribers can connect to the same topic
- **Unidirectional**: Data flows from publisher to subscriber
- **Lossy**: Messages can be dropped if the subscriber can't keep up (unless configured for reliability)
- **Best for**: Sensor data, robot state, continuous monitoring

## Request/Response Pattern: Services

The request/response pattern is ideal for discrete interactions where you need a specific response to a particular request.

### How Services Work

- **Client**: A node sends a request and waits for a response
- **Server**: A node receives requests and sends back responses
- **Service**: A named interface defining the request/response contract

Think of services like a customer service desk - you approach, make a specific request, wait for a response, and then proceed based on that response.

### Example: Navigation Goal Request

```python
# Service Server: Navigation Node
import rclpy
from geometry_msgs.msg import Point
from nav_msgs.srv import NavigateToPose

def navigate_to_pose_callback(request, response):
    # Process navigation request
    goal_pose = request.pose
    # Perform navigation
    response.result = "Navigation completed successfully"
    return response

service = node.create_service(NavigateToPose, 'navigate_to_pose', navigate_to_pose_callback)
```

```python
# Service Client: Mission Planner Node
import rclpy
from geometry_msgs.msg import Point
from nav_msgs.srv import NavigateToPose

def request_navigation(goal_x, goal_y):
    client = node.create_client(NavigateToPose, 'navigate_to_pose')

    request = NavigateToPose.Request()
    request.pose.position.x = goal_x
    request.pose.position.y = goal_y

    # Wait for service to be available
    while not client.wait_for_service(timeout_sec=1.0):
        print("Waiting for navigation service...")

    # Call the service
    future = client.call_async(request)
    return future
```

### Service Characteristics

- **Synchronous**: Client waits for server response
- **One-to-one**: Direct communication between client and server
- **Bidirectional**: Request goes one way, response goes the other
- **Reliable**: Requests and responses are guaranteed to be delivered
- **Best for**: Actions that require specific outcomes, calculations, state queries

## Data Flow Between Sensors, AI, and Controllers

In a typical robotic system, data flows through multiple layers:

### Sensor Layer
- Hardware drivers publish raw sensor data
- Examples: camera images, LIDAR scans, IMU readings, joint encoders
- Published continuously on topics

### Perception Layer (AI)
- Subscribes to sensor data
- Performs processing: object detection, SLAM, localization
- Publishes processed information: detected objects, map, robot pose
- May offer services: "detect_objects_here", "get_robot_pose"

### Planning Layer (AI)
- Subscribes to processed sensor data
- Plans actions: paths, trajectories, grasps
- Publishes plans: goal poses, trajectory points
- Offers services: "plan_path_to", "compute_grasp"

### Control Layer
- Subscribes to planned actions
- Executes on robot hardware
- Publishes execution status: progress, errors
- Offers services: "execute_trajectory", "stop_execution"

### Visualizing the Data Flow

```
Sensor Drivers ──────► Perception AI ──────► Planning AI ──────► Controllers
(Camera/LIDAR/IMU)     (Detection/Mapping)   (Path Planning)     (Joint Motors)
    │                       │                     │                   │
    │ raw data              │ processed data      │ plans             │ commands
    └───────────────────────┴─────────────────────┴───────────────────┘
                                    ┌─────────┐
                               ┌───►│ Service │◄──┐
                               │    └─────────┘   │
                               │   (Queries)      │
                               │                  │
                               └── Decision Making ┘
                                   (Behavior Tree/
                                    State Machine)
```

## rclpy: The Python Bridge

rclpy is the Python client library for ROS 2. It provides the Python bindings that allow you to create ROS 2 nodes and interact with the ROS 2 ecosystem using Python.

### Key Features of rclpy

- **Node Creation**: Create ROS 2 nodes using Python classes
- **Message Handling**: Send and receive ROS 2 messages
- **Service Interaction**: Create and call ROS 2 services
- **Parameter Management**: Handle configuration parameters
- **Timers**: Execute callbacks periodically
- **Lifecycle Management**: Properly initialize and shut down

### Basic Node Structure in Python

```python
import rclpy
from rclpy.node import Node

class MyNode(Node):
    def __init__(self):
        super().__init__('my_node_name')

        # Create publishers, subscribers, services, etc.
        self.publisher = self.create_publisher(StringMsg, 'topic_name', 10)
        self.subscriber = self.create_subscription(
            StringMsg, 'other_topic', self.callback, 10
        )

    def callback(self, msg):
        # Process incoming message
        self.get_logger().info(f'Received: {msg.data}')

def main(args=None):
    rclpy.init(args=args)
    node = MyNode()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Practical Python Examples

Let's look at a simple example that demonstrates both communication patterns:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String
from example_interfaces.srv import Trigger

class CommunicationDemoNode(Node):
    def __init__(self):
        super().__init__('communication_demo')

        # Topic publisher: Broadcast system status
        self.status_publisher = self.create_publisher(String, 'system_status', 10)

        # Topic subscriber: Listen for commands
        self.command_subscriber = self.create_subscription(
            String, 'robot_commands', self.command_callback, 10
        )

        # Service server: Respond to status requests
        self.status_service = self.create_service(
            Trigger, 'get_system_status', self.handle_status_request
        )

        # Timer to periodically broadcast status
        self.timer = self.create_timer(1.0, self.broadcast_status)

    def command_callback(self, msg):
        """Handle incoming commands via topic subscription"""
        self.get_logger().info(f'Received command: {msg.data}')

        # Process command and possibly trigger other actions
        if msg.data == 'activate':
            self.activate_system()

    def handle_status_request(self, request, response):
        """Handle status request via service call"""
        response.success = True
        response.message = "System is operational"
        self.get_logger().info('Status requested via service')
        return response

    def broadcast_status(self):
        """Broadcast system status via topic"""
        msg = String()
        msg.data = "System operational - " + str(self.get_clock().now())
        self.status_publisher.publish(msg)

    def activate_system(self):
        """Activate system functionality"""
        self.get_logger().info('System activated')

def main(args=None):
    rclpy.init(args=args)
    node = CommunicationDemoNode()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Choosing the Right Communication Pattern

| Situation | Use Topic | Use Service | Explanation |
|-----------|-----------|-------------|-------------|
| Sensor data streaming | ✓ | | Continuous data that multiple nodes might need |
| Requesting robot pose | | ✓ | Discrete query requiring specific response |
| Broadcasting warnings | ✓ | | Immediate notification to all interested parties |
| Executing action with feedback | | ✓ | Need confirmation of completion |
| Robot state monitoring | ✓ | | Continuous stream of robot status |
| Path planning request | | ✓ | Specific calculation with result |

## Key Takeaways

- Topics (publish/subscribe) are for continuous, asynchronous data streams
- Services (request/response) are for synchronous, discrete interactions requiring responses
- Data flows from sensors through AI processing to controllers in most robotic systems
- rclpy provides the Python bridge to access all ROS 2 capabilities
- Choose the right pattern based on your communication needs

In the next chapter, we'll explore how to describe robot structure using URDF (Unified Robot Description Format).