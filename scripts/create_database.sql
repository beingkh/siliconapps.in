-- Create database
CREATE DATABASE IF NOT EXISTS siliconapps_db;
USE siliconapps_db;

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    company VARCHAR(100),
    phone VARCHAR(20),
    service_interest VARCHAR(100),
    project_details TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create callback_requests table
CREATE TABLE IF NOT EXISTS callback_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    preferred_time VARCHAR(50),
    brief_notes TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create project_requests table
CREATE TABLE IF NOT EXISTS project_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    company VARCHAR(100),
    phone VARCHAR(20),
    project_type VARCHAR(100),
    budget_range VARCHAR(50),
    timeline VARCHAR(50),
    project_description TEXT NOT NULL,
    technical_requirements TEXT,
    target_audience TEXT,
    additional_notes TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create legal_content table
CREATE TABLE IF NOT EXISTS legal_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_type VARCHAR(50) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default legal content
INSERT IGNORE INTO legal_content (page_type, content) VALUES 
('privacy_policy', 'Default privacy policy content. Please update this through the admin panel.'),
('terms_of_service', 'Default terms of service content. Please update this through the admin panel.');
