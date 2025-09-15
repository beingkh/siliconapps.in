// Shared in-memory data store for demo purposes
// In production, this would be replaced with a proper database

export interface ContactMessage {
  id: number
  name: string
  email: string
  company?: string
  phone?: string
  service_interest?: string
  project_details: string
  is_read: boolean
  created_at: string
}

export interface CallbackRequest {
  id: number
  name: string
  phone: string
  preferred_time?: string
  brief_notes?: string
  is_read: boolean
  created_at: string
}

export interface ProjectRequest {
  id: number
  name: string
  email: string
  company?: string
  phone?: string
  project_type: string
  budget_range: string
  timeline: string
  project_description: string
  technical_requirements?: string
  target_audience?: string
  additional_features?: string
  is_read: boolean
  created_at: string
}

export interface LegalContent {
  privacy_policy: string
  terms_of_service: string
}

// Shared data storage
export const dataStore = {
  contactMessages: [] as ContactMessage[],
  callbackRequests: [] as CallbackRequest[],
  projectRequests: [] as ProjectRequest[],
  legalContent: {
    privacy_policy: `# Privacy Policy

## Information We Collect
We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us.

## How We Use Your Information
We use the information we collect to provide, maintain, and improve our services.

## Information Sharing
We do not sell, trade, or otherwise transfer your personal information to third parties.

## Data Security
We implement appropriate security measures to protect your personal information.

## Contact Us
If you have questions about this Privacy Policy, please contact us at business@siliconapps.in.`,
    terms_of_service: `# Terms of Service

## Acceptance of Terms
By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.

## Services
SiliconApps provides software development and consulting services.

## User Responsibilities
You are responsible for maintaining the confidentiality of your account information.

## Limitation of Liability
SiliconApps shall not be liable for any indirect, incidental, special, or consequential damages.

## Contact Information
For questions about these Terms of Service, contact us at business@siliconapps.in.`,
  } as LegalContent,
  counters: {
    contactMessageId: 1,
    callbackRequestId: 1,
    projectRequestId: 1,
  },
}
