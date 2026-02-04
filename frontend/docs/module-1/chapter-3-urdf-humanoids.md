---
sidebar_position: 4
---

# URDF for Humanoids: Describing Robot Structure

## Understanding URDF

URDF (Unified Robot Description Format) is an XML-based format used in ROS 2 to describe robot structure and kinematics. It defines the physical composition of a robot including its links, joints, and their spatial relationships.

### What URDF Solves

Building a robot requires understanding:
- How different parts connect physically
- How joints move and constrain motion
- Where sensors and actuators are located
- The geometric shapes for visualization and collision detection
- Mass properties for dynamics simulation

URDF provides a standardized way to capture all of this information in a single, comprehensive file.

## URDF Components: Links, Joints, and Frames

URDF describes robots using three fundamental components that work together to define the robot's structure and motion capabilities.

### Links

A **link** represents a rigid body part of the robot. Think of it as a single solid piece like:

- A robot arm segment
- A wheel
- A torso
- A head
- A foot

#### Link Properties

Each link defines several characteristics:

- **Visual**: How the link appears in visualizations
- **Collision**: How the link behaves in collision detection
- **Inertial**: Mass properties for physics simulation

```xml
<link name="base_link">
  <visual>
    <geometry>
      <cylinder length="0.6" radius="0.2"/>
    </geometry>
    <material name="blue">
      <color rgba="0 0 0.8 1"/>
    </material>
  </visual>
  <collision>
    <geometry>
      <cylinder length="0.6" radius="0.2"/>
    </geometry>
  </collision>
  <inertial>
    <mass value="10"/>
    <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
  </inertial>
</link>
```

### Joints

A **joint** defines the connection between two links, specifying how they can move relative to each other.

#### Joint Types

- **Revolute**: Rotational motion around a single axis (like an elbow or knee)
- **Continuous**: Like revolute but unlimited rotation (like a swivel)
- **Prismatic**: Linear sliding motion (like a linear actuator)
- **Fixed**: No motion between links (rigid connection)
- **Floating**: 6 degrees of freedom (free floating body)
- **Planar**: Motion in a plane

```xml
<joint name="wheel_joint" type="continuous">
  <parent link="base_link"/>
  <child link="wheel_link"/>
  <origin xyz="0.3 0 0" rpy="0 0 0"/>
  <axis xyz="0 1 0"/>
</joint>
```

### Frames

URDF uses coordinate frames to define spatial relationships. Each link has its own coordinate frame (usually centered on the link), and joints define the transformation between parent and child frames.

The frame relationship is crucial for:
- Transforming coordinates between different parts of the robot
- Understanding sensor positions relative to other parts
- Planning coordinated movements

## Humanoid Structure Basics

Humanoid robots have specific structural requirements that differ from other robot types:

### Key Structural Elements

1. **Torso/Body**: Central trunk that connects limbs
2. **Head**: Contains cameras, sensors, sometimes processing units
3. **Arms**: Typically with shoulders, elbows, wrists, and hands
4. **Legs**: With hips, knees, ankles, and feet
5. **Hands**: For manipulation tasks (optional but common)

### Typical Joint Arrangement

Humanoid robots typically have joints arranged similarly to humans:

- **6DOF** at the shoulder (3 rotational axes)
- **1DOF** at the elbow (flexion/extension)
- **1-3DOF** at the wrist
- **3DOF** at the hip
- **1DOF** at the knee
- **1-2DOF** at the ankle

### Example Humanoid URDF Structure

```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">

  <!-- Base/Body -->
  <link name="torso">
    <visual>
      <geometry>
        <capsule length="0.5" radius="0.15"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <capsule length="0.5" radius="0.15"/>
      </geometry>
    </collision>
  </link>

  <!-- Head -->
  <joint name="neck_joint" type="revolute">
    <parent link="torso"/>
    <child link="head"/>
    <origin xyz="0 0 0.4" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
    <limit lower="-0.5" upper="0.5" effort="100" velocity="1"/>
  </joint>

  <link name="head">
    <visual>
      <geometry>
        <sphere radius="0.1"/>
      </geometry>
    </visual>
  </link>

  <!-- Left Arm -->
  <joint name="left_shoulder_joint" type="revolute">
    <parent link="torso"/>
    <child link="left_upper_arm"/>
    <origin xyz="0.1 0.15 0.2" rpy="0 0 0"/>
    <axis xyz="1 0 0"/>
    <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
  </joint>

  <link name="left_upper_arm">
    <visual>
      <geometry>
        <capsule length="0.3" radius="0.05"/>
      </geometry>
    </visual>
  </link>

  <!-- Similar structure for other limbs... -->

</robot>
```

## Working with URDF

### URDF Best Practices

1. **Consistent Naming**: Use clear, descriptive names that follow a convention
2. **Proper Origins**: Ensure joints connect at the right physical locations
3. **Correct Axes**: Make sure joint axes align with intended motion
4. **Chain Integrity**: Ensure all parts are connected in proper kinematic chains
5. **Realistic Limits**: Set appropriate limits for joint angles and velocities

### URDF Validation

ROS 2 provides tools to validate URDF files:

```bash
# Check URDF validity
check_urdf my_robot.urdf

# Visualize robot structure
ros2 run rviz2 rviz2
```

### Loading URDF in ROS 2

```python
import rclpy
from rclpy.node import Node
from urdf_parser_py.urdf import URDF

class URDFProcessor(Node):
    def __init__(self):
        super().__init__('urdf_processor')

        # Load robot description from parameter or file
        robot_desc = self.declare_parameter(
            'robot_description',
            descriptor=rclpy.ParameterDescriptor()
        )

        # Parse the URDF
        robot = URDF.from_xml_string(robot_desc.value)

        # Access robot structure
        for link in robot.links:
            self.get_logger().info(f'Link: {link.name}')

        for joint in robot.joints:
            self.get_logger().info(f'Joint: {joint.name} connects {joint.parent} to {joint.child}')
```

## URDF in Humanoid Robotics Context

For humanoid robots specifically, URDF serves additional purposes:

### Balance and Locomotion

- Defines the center of mass location for balance algorithms
- Provides kinematic structure for inverse kinematics solvers
- Helps calculate Zero-Moment Point (ZMP) for stable walking

### Manipulation Planning

- Enables forward and inverse kinematics calculations
- Defines workspace boundaries for arms and hands
- Supports grasp planning by defining hand geometry

### Simulation Integration

- Provides collision geometry for physics simulation
- Supplies mass properties for dynamic simulation
- Defines visual appearance for rendering

## Important Limitations (What URDF Does NOT Cover)

According to our requirements, URDF does NOT cover:

- **CAD models**: URDF describes simplified geometric shapes, not detailed CAD drawings
- **Meshes**: While URDF can reference mesh files, it doesn't contain the actual mesh data
- **Simulation physics**: URDF describes structure but requires additional plugins for complex physics behaviors
- **Material properties**: Beyond visual appearance, URDF doesn't specify material characteristics

## Reading a Basic Humanoid URDF

When reading a humanoid URDF file, look for:

1. **Kinematic Chain Structure**: How parts connect from base to end effectors
2. **Joint Limits**: What motions are possible and constrained
3. **Coordinate Frames**: Where sensors and attachment points are located
4. **Geometric Shapes**: How the robot appears and interacts with the world
5. **Mass Properties**: For dynamics calculations

## Key Takeaways

- URDF defines robot structure using links (rigid bodies) and joints (connections)
- Links define shape, collision, and mass properties
- Joints define motion constraints and connections between links
- Humanoid robots have characteristic structures mimicking human anatomy
- URDF provides the geometric and kinematic foundation for robot operation
- Focus on basic concepts rather than complex modeling or simulation physics

You now understand how to interpret URDF files and recognize their role in describing humanoid robot structure for ROS 2 systems.