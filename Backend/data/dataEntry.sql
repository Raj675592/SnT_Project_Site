-- Insert into Clubs
INSERT INTO Clubs (ClubID, ClubName) VALUES
(1, 'Aeromodelling Club'),
(2, 'Astronomy Club'),
(3, 'Brain and Cognitive Science Club'),
(4, 'Electronics Club'),
(5, 'Finance and Analytics Club'),
(6, 'Game Development Club'),
(7, 'Programming Club'),
(8, 'Robotics Club'),
(9, 'SciMathsSoc');

-- Insert into Tags
INSERT INTO Tags (TagID, Tag) VALUES
(1, 'Python'),
(2, 'OpenCV'),
(3, 'Machine Learning'),
(4, 'ROS');

-- Insert into Projects
INSERT INTO Projects (
    ProjectID, Title, Duration, ClubID, Description, Difficulty,
    Objective, Methodology, CoverImage, FutureProspects
) VALUES (
    1,
    'Autonomous Drone Navigation',
    8,
    8,
    'Build an AI-powered drone that can navigate using computer vision and machine learning algorithms',
    'Advanced',
    'Understand the basics of drone mechanics and flight control. Integrate sensors for obstacle detection. Implement real-time computer vision-based navigation. Train machine learning models for autonomous decisions. Deploy code on onboard systems',
    'This project combines robotics, computer vision, and machine learning. The drone is equipped with sensors and a camera. It processes visual input using OpenCV and makes navigation decisions based on trained models. The Robot Operating System (ROS) is used for real-time control and data management',
    'https://domain.com/uploads/cover-drone.jpg',
    'This project lays the groundwork for fully autonomous UAV systems in environments like warehouses, disaster zones, and precision agriculture. Future work can involve swarm coordination, real-time cloud communication, and deployment in GPS-denied areas'
);

-- Insert into ProjectTags
INSERT INTO ProjectTags (ProjectID, TagID) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4);

-- Insert into WeekWisePlan
INSERT INTO WeekWisePlan (WeekID, ProjectID, Week, Title, Plan, Resources) VALUES
(1, 1, 1, 'Introduction to drone architecture and control systems', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', '["https://dronetutorials.com/architecture","https://youtube.com/intro-to-drones"]'),
(2, 1, 2, 'Sensor integration and calibration (e.g., LiDAR, IMU).', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', '["https://dronetutorials.com/architecture","https://youtube.com/intro-to-drones"]'),
(3, 1, 3, 'Setting up onboard computing environment and ROS basics.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', '["https://dronetutorials.com/architecture","https://youtube.com/intro-to-drones"]'),
(4, 1, 4, 'Implementing basic object detection using OpenCV.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', '["https://dronetutorials.com/architecture","https://youtube.com/intro-to-drones"]'),
(5, 1, 5, 'Integrating vision with control for obstacle avoidance.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', '["https://dronetutorials.com/architecture","https://youtube.com/intro-to-drones"]'),
(6, 1, 6, 'Training ML models for autonomous flight decisions.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', '["https://dronetutorials.com/architecture","https://youtube.com/intro-to-drones"]'),
(7, 1, 7, 'Testing and debugging in simulated environments.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', '["https://dronetutorials.com/architecture","https://youtube.com/intro-to-drones"]'),
(8, 1, 8, 'Final integration and real-world testing.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', '["https://dronetutorials.com/architecture","https://youtube.com/intro-to-drones"]');
