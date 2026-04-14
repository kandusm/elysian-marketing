# Security at CommVergent Automation
*For publication at automation.commvergent.com/security*

---

## Our Commitment to Security

CommVergent Automation LLC is a Texas-based software development and automation company. We build and operate multiple software platforms including Elysian Money, FigrOut, BildOut, and HackHunters. Security is a core operational requirement across all platforms we develop and maintain.

This page describes our security practices and controls. For security disclosures or inquiries, contact us at security@commvergent.com.

---

## Governance and Policy

CommVergent Automation maintains documented information security policies that govern how we design, develop, deploy, and maintain our software platforms. These policies cover:

- Access control and identity management
- Data classification and handling
- Incident response
- Vulnerability management
- Third-party vendor security
- Employee and contractor security requirements

Policies are reviewed and updated as our platforms and threat landscape evolve.

---

## Identity and Access Management

Access to production systems and sensitive data is controlled through the following practices:

**Role-Based Access Control (RBAC)**
All production systems enforce role-based access. Users and services are granted the minimum permissions required to perform their function. No shared credentials are used across systems or personnel.

**Multi-Factor Authentication (MFA)**
MFA is required for all personnel accessing production infrastructure including cloud consoles, database administration tools, source code repositories, and deployment pipelines.

**Least Privilege by Default**
Service accounts and API keys are scoped to the minimum required permissions. Production secrets are stored in environment variable systems and never committed to source control.

**Separation of Environments**
Development, staging, and production environments are isolated from one another. Production data is never used in development or staging environments.

---

## Infrastructure and Network Security

**Encryption in Transit**
All data transmitted between clients and our servers is encrypted using TLS 1.2 or higher. We enforce HTTPS across all platform domains with no unencrypted fallback.

**Encryption at Rest**
All consumer data stored on our platforms is encrypted at rest. Database storage, file storage, and backups are encrypted using industry-standard encryption.

**Cloud Infrastructure**
Our platforms are hosted on reputable cloud providers including Vercel (application hosting) and Supabase (database infrastructure). We leverage these providers' built-in security controls including network isolation, managed encryption, and access logging.

**Database Security**
Our applications enforce Row-Level Security (RLS) at the database layer. This means that data access is enforced at the database level — not just the application layer — ensuring that a bug in application code cannot expose one user's data to another.

---

## Development and Vulnerability Management

**Dependency Scanning**
All source code repositories are monitored for known vulnerabilities in third-party dependencies using automated scanning tools. Identified vulnerabilities are triaged and patched on a priority basis.

**Secure Development Practices**
Our development process includes:
- Code review prior to production deployment
- Input validation and output sanitization on all user-facing interfaces
- Zod schema validation on all API inputs
- No hardcoded credentials or secrets in source code

**Third-Party Integrations**
We carefully evaluate third-party APIs and services before integration. Where third-party services handle sensitive data (such as Plaid for bank account connectivity and Stripe for payment processing), we use their official SDKs and follow their published security guidance.

---

## Financial Data Security (Elysian Money)

Elysian Money handles sensitive personal financial data and is subject to additional controls:

- Bank account connections are established via Plaid, a regulated financial data platform. CommVergent Automation never directly handles or stores bank login credentials.
- Plaid access tokens are stored encrypted and are never logged, transmitted to the client, or exposed in API responses.
- All financial ledger operations are audit-logged with actor, timestamp, and action recorded for every mutation.
- Users may disconnect their bank accounts and request full data deletion at any time.

---

## Privacy

We maintain privacy policies for each platform we operate. Our data practices prioritize minimization — we collect only what is necessary to provide the service and do not sell or share user data with third parties for advertising or marketing purposes.

For Elysian Money's privacy policy, visit: https://elysian.money/privacy

---

## Incident Response

CommVergent Automation maintains an incident response process for security events. In the event of a confirmed breach affecting consumer data, we will notify affected users in accordance with applicable law and any contractual obligations.

---

## Security Disclosures

If you believe you have discovered a security vulnerability in any CommVergent Automation platform, please report it responsibly:

**Email:** security@commvergent.com  
**Response target:** We aim to acknowledge all security reports within 2 business days.

Please do not publicly disclose vulnerabilities before giving us reasonable time to investigate and remediate.

---

## Contact

**CommVergent Automation LLC**  
3500 Brown Dipper Dr  
Pflugerville, TX 78660  
United States  

security@commvergent.com
