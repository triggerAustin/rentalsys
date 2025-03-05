-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 05, 2025 at 10:21 AM
-- Server version: 11.6.2-MariaDB
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infinite`
--

DELIMITER $$
--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `generate_house_id` () RETURNS VARCHAR(20) CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci DETERMINISTIC BEGIN
  DECLARE last_id VARCHAR(20);
  DECLARE new_id_number INT;

  SELECT house_id INTO last_id FROM houses ORDER BY house_id DESC LIMIT 1;

  IF last_id IS NULL THEN
    SET new_id_number = 1;
  ELSE
    SET new_id_number = CAST(SUBSTRING(last_id, 4) AS UNSIGNED) + 1; 
  END IF;

  RETURN CONCAT('hse0', new_id_number); 
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `generate_landlord_id` () RETURNS VARCHAR(20) CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci DETERMINISTIC BEGIN
  DECLARE last_id VARCHAR(20);
  DECLARE new_id_number INT;

  SELECT landlord_id INTO last_id FROM landlords ORDER BY landlord_id DESC LIMIT 1;

  IF last_id IS NULL THEN
    SET new_id_number = 1;
  ELSE
    SET new_id_number = CAST(SUBSTRING(last_id, 4) AS UNSIGNED) + 1;
  END IF;

  RETURN CONCAT('lnd0', new_id_number);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `houses`
--

CREATE TABLE `houses` (
  `house_id` varchar(20) NOT NULL,
  `house_name` varchar(100) NOT NULL,
  `lr_number` varchar(20) NOT NULL,
  `agreed_commission` decimal(10,2) NOT NULL,
  `water_bill` tinyint(1) DEFAULT NULL,
  `water_bill_price` decimal(10,2) DEFAULT NULL,
  `garbage_collection` tinyint(1) DEFAULT NULL,
  `garbage_collection_price` decimal(10,2) DEFAULT NULL,
  `electricity_bill` tinyint(1) DEFAULT NULL,
  `electricity_bill_price` decimal(10,2) DEFAULT NULL,
  `added_field_1_name` varchar(100) DEFAULT NULL,
  `added_field_1_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `added_field_2_name` varchar(100) DEFAULT NULL,
  `added_field_2_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `added_field_3_name` varchar(100) DEFAULT NULL,
  `added_field_3_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `added_field_4_name` varchar(100) DEFAULT NULL,
  `added_field_4_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `added_field_5_name` varchar(100) DEFAULT NULL,
  `added_field_5_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `added_field_6_name` varchar(100) DEFAULT NULL,
  `added_field_6_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `landlord_id` varchar(20) NOT NULL,
  `tenantsTenantId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `houses`
--

INSERT INTO `houses` (`house_id`, `house_name`, `lr_number`, `agreed_commission`, `water_bill`, `water_bill_price`, `garbage_collection`, `garbage_collection_price`, `electricity_bill`, `electricity_bill_price`, `added_field_1_name`, `added_field_1_price`, `added_field_2_name`, `added_field_2_price`, `added_field_3_name`, `added_field_3_price`, `added_field_4_name`, `added_field_4_price`, `added_field_5_name`, `added_field_5_price`, `added_field_6_name`, `added_field_6_price`, `created_at`, `landlord_id`, `tenantsTenantId`) VALUES
('hse01', 'Alemu', 'LR-12345', 5.50, 1, 100.00, 0, NULL, 1, 200.00, NULL, 0.00, NULL, 0.00, NULL, 0.00, NULL, 0.00, NULL, 0.00, NULL, 0.00, '2025-02-15 17:17:14.865711', 'lnd01', NULL),
('hse02', 'john\'S Villa', 'LR-12345', 5.50, 1, 100.00, 0, NULL, 1, 200.00, NULL, 0.00, NULL, 0.00, NULL, 0.00, NULL, 0.00, NULL, 0.00, NULL, 0.00, '2025-02-15 17:21:24.925618', 'lnd02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `landlords`
--

CREATE TABLE `landlords` (
  `landlord_name` varchar(100) NOT NULL,
  `landlord_contact` varchar(20) NOT NULL,
  `landlord_national_id` varchar(20) DEFAULT NULL,
  `landlord_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `landlords`
--

INSERT INTO `landlords` (`landlord_name`, `landlord_contact`, `landlord_national_id`, `landlord_id`) VALUES
('John Doe', '0712345678', '987654321', 'lnd01'),
('John Doe', '0712345678', '123456789', 'lnd02');

-- --------------------------------------------------------

--
-- Table structure for table `Payments`
--

CREATE TABLE `Payments` (
  `payment_id` varchar(255) NOT NULL,
  `tenant_id` varchar(255) DEFAULT NULL,
  `house_id` varchar(255) DEFAULT NULL,
  `unit_id` varchar(255) DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `amount_paid` decimal(10,2) DEFAULT NULL,
  `payment_form` varchar(50) DEFAULT NULL,
  `transaction_reference` varchar(255) DEFAULT NULL,
  `status` enum('paid','pending','partial') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `permission` varchar(255) NOT NULL,
  `desciption` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `permission`, `desciption`) VALUES
(1, 'create_house', NULL),
(2, 'create_user', NULL);

--
-- Triggers `permissions`
--
DELIMITER $$
CREATE TRIGGER `assign_new_permissions` AFTER INSERT ON `permissions` FOR EACH ROW BEGIN
    INSERT INTO user_permissions (user_id, permission_id)
    SELECT id, NEW.id FROM users WHERE username = 'paul';
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tenants`
--

CREATE TABLE `tenants` (
  `tenant_id` varchar(255) NOT NULL,
  `tenant_photo` varchar(255) DEFAULT NULL,
  `tenant_name` varchar(255) NOT NULL,
  `current_meter_reading` int(11) NOT NULL DEFAULT 0,
  `move_in_date` date DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `houseHouseId` varchar(20) DEFAULT NULL,
  `unitUnitId` varchar(255) DEFAULT NULL,
  `tenant_national_id` varchar(255) DEFAULT NULL,
  `tenant_contact` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tenants`
--

INSERT INTO `tenants` (`tenant_id`, `tenant_photo`, `tenant_name`, `current_meter_reading`, `move_in_date`, `created_on`, `houseHouseId`, `unitUnitId`, `tenant_national_id`, `tenant_contact`, `state`) VALUES
('hse01ut1t1', '', 'John Doe', 150, '2024-02-28', '2025-02-28 13:33:32', 'hse01', 'hse01ut1', '123456789', '+254712345678', 'In');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `unit_id` varchar(255) NOT NULL,
  `unit_number` varchar(255) NOT NULL,
  `unit_type` varchar(255) DEFAULT NULL,
  `payment_rate` decimal(10,2) NOT NULL,
  `added_description` text DEFAULT NULL,
  `added_amount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `state` varchar(255) DEFAULT NULL,
  `house_id` varchar(20) DEFAULT NULL,
  `tenantsTenantId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`unit_id`, `unit_number`, `unit_type`, `payment_rate`, `added_description`, `added_amount`, `state`, `house_id`, `tenantsTenantId`) VALUES
('hse01ut1', 'A1', '2-Bedroom', 15000.00, '', 0.00, 'vacant', 'hse01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`) VALUES
(1, 'paul', '$2b$10$ZHEHAMGwecQEPsTvxfjH0ufKqSofnK0K/gbcrGdDo0hT38bdkFkv2', 'admin', '2025-02-14 14:54:33.173511');

-- --------------------------------------------------------

--
-- Table structure for table `user_permissions`
--

CREATE TABLE `user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_permissions`
--

INSERT INTO `user_permissions` (`id`, `user_id`, `permission_id`) VALUES
(1, 1, 1),
(2, 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`house_id`),
  ADD KEY `FK_f4f39d12dd00750492d775b20b5` (`landlord_id`),
  ADD KEY `FK_782dc400c7797d5ecb294cf9dff` (`tenantsTenantId`);

--
-- Indexes for table `landlords`
--
ALTER TABLE `landlords`
  ADD PRIMARY KEY (`landlord_id`);

--
-- Indexes for table `Payments`
--
ALTER TABLE `Payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `tenant_id` (`tenant_id`),
  ADD KEY `house_id` (`house_id`),
  ADD KEY `unit_id` (`unit_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`permission`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `tenants`
--
ALTER TABLE `tenants`
  ADD PRIMARY KEY (`tenant_id`),
  ADD UNIQUE KEY `IDX_514d709763acaf84a50cc16ee1` (`tenant_national_id`),
  ADD KEY `FK_6c14156c8e2bd3a4bfbfeef571d` (`houseHouseId`),
  ADD KEY `FK_5e0af5df9d15615bb653f7811f7` (`unitUnitId`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`unit_id`),
  ADD KEY `FK_b82f3901388e6ece92eb874a6c0` (`house_id`),
  ADD KEY `FK_5cc9001b61541bb5428e1d386e4` (`tenantsTenantId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`);

--
-- Indexes for table `user_permissions`
--
ALTER TABLE `user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  ADD KEY `permission_id` (`permission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_permissions`
--
ALTER TABLE `user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `houses`
--
ALTER TABLE `houses`
  ADD CONSTRAINT `FK_782dc400c7797d5ecb294cf9dff` FOREIGN KEY (`tenantsTenantId`) REFERENCES `tenants` (`tenant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f4f39d12dd00750492d775b20b5` FOREIGN KEY (`landlord_id`) REFERENCES `landlords` (`landlord_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tenants`
--
ALTER TABLE `tenants`
  ADD CONSTRAINT `FK_5e0af5df9d15615bb653f7811f7` FOREIGN KEY (`unitUnitId`) REFERENCES `units` (`unit_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_6c14156c8e2bd3a4bfbfeef571d` FOREIGN KEY (`houseHouseId`) REFERENCES `houses` (`house_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `units`
--
ALTER TABLE `units`
  ADD CONSTRAINT `FK_5cc9001b61541bb5428e1d386e4` FOREIGN KEY (`tenantsTenantId`) REFERENCES `tenants` (`tenant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_b82f3901388e6ece92eb874a6c0` FOREIGN KEY (`house_id`) REFERENCES `houses` (`house_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `user_permissions`
--
ALTER TABLE `user_permissions`
  ADD CONSTRAINT `user_permissions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_permissions_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
