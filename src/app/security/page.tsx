import { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Security — CommVergent Automation',
  description: 'Security practices and controls for CommVergent Automation platforms.',
}

export default function SecurityPage() {
  return (
    <>
      <Nav />
      <main className="legal-content">
        <h1>Security at CommVergent Automation</h1>
        <p className="meta">
          For all CommVergent Automation platforms including Elysian Money
        </p>

        <h2>Our Commitment to Security</h2>
        <p>
          CommVergent Automation LLC is a Texas-based software development and automation company.
          We build and operate multiple software platforms including Elysian Money, FigrOut, BildOut, and HackHunters.
          Security is a core operational requirement across all platforms we develop and maintain.
        </p>
        <p>
          This page describes our security practices and controls. For security disclosures or inquiries,
          contact us at <a href="mailto:security@commvergent.com">security@commvergent.com</a>.
        </p>

        <hr />

        <h2>Governance and Policy</h2>
        <p>CommVergent Automation maintains documented information security policies that govern how we design, develop, deploy, and maintain our software platforms. These policies cover:</p>
        <ul>
          <li>Access control and identity management</li>
          <li>Data classification and handling</li>
          <li>Incident response</li>
          <li>Vulnerability management</li>
          <li>Third-party vendor security</li>
          <li>Employee and contractor security requirements</li>
        </ul>
        <p>Policies are reviewed and updated as our platforms and threat landscape evolve.</p>

        <hr />

        <h2>Identity and Access Management</h2>
        <p>Access to production systems and sensitive data is controlled through the following practices:</p>

        <h3>Role-Based Access Control (RBAC)</h3>
        <p>All production systems enforce role-based access. Users and services are granted the minimum permissions required to perform their function. No shared credentials are used across systems or personnel.</p>

        <h3>Multi-Factor Authentication (MFA)</h3>
        <p>MFA is required for all personnel accessing production infrastructure including cloud consoles, database administration tools, source code repositories, and deployment pipelines.</p>

        <h3>Least Privilege by Default</h3>
        <p>Service accounts and API keys are scoped to the minimum required permissions. Production secrets are stored in environment variable systems and never committed to source control.</p>

        <h3>Separation of Environments</h3>
        <p>Development, staging, and production environments are isolated from one another. Production data is never used in development or staging environments.</p>

        <hr />

        <h2>Infrastructure and Network Security</h2>

        <h3>Encryption in Transit</h3>
        <p>All data transmitted between clients and our servers is encrypted using TLS 1.2 or higher. We enforce HTTPS across all platform domains with no unencrypted fallback.</p>

        <h3>Encryption at Rest</h3>
        <p>All consumer data stored on our platforms is encrypted at rest. Database storage, file storage, and backups are encrypted using industry-standard encryption.</p>

        <h3>Cloud Infrastructure</h3>
        <p>Our platforms are hosted on reputable cloud providers including Vercel (application hosting) and Supabase (database infrastructure). We leverage these providers&apos; built-in security controls including network isolation, managed encryption, and access logging.</p>

        <h3>Database Security</h3>
        <p>Our applications enforce Row-Level Security (RLS) at the database layer. This means that data access is enforced at the database level — not just the application layer — ensuring that a bug in application code cannot expose one user&apos;s data to another.</p>

        <hr />

        <h2>Development and Vulnerability Management</h2>

        <h3>Dependency Scanning</h3>
        <p>All source code repositories are monitored for known vulnerabilities in third-party dependencies using automated scanning tools. Identified vulnerabilities are triaged and patched on a priority basis.</p>

        <h3>Secure Development Practices</h3>
        <p>Our development process includes:</p>
        <ul>
          <li>Code review prior to production deployment</li>
          <li>Input validation and output sanitization on all user-facing interfaces</li>
          <li>Zod schema validation on all API inputs</li>
          <li>No hardcoded credentials or secrets in source code</li>
        </ul>

        <h3>Third-Party Integrations</h3>
        <p>We carefully evaluate third-party APIs and services before integration. Where third-party services handle sensitive data (such as Plaid for bank account connectivity and Stripe for payment processing), we use their official SDKs and follow their published security guidance.</p>

        <hr />

        <h2>Financial Data Security (Elysian Money)</h2>
        <p>Elysian Money handles sensitive personal financial data and is subject to additional controls:</p>
        <ul>
          <li>Bank account connections are established via Plaid, a regulated financial data platform. CommVergent Automation never directly handles or stores bank login credentials.</li>
          <li>Plaid access tokens are stored encrypted and are never logged, transmitted to the client, or exposed in API responses.</li>
          <li>All financial ledger operations are audit-logged with actor, timestamp, and action recorded for every mutation.</li>
          <li>Users may disconnect their bank accounts and request full data deletion at any time.</li>
        </ul>

        <hr />

        <h2>Privacy</h2>
        <p>We maintain privacy policies for each platform we operate. Our data practices prioritize minimization — we collect only what is necessary to provide the service and do not sell or share user data with third parties for advertising or marketing purposes.</p>
        <p>For Elysian Money&apos;s privacy policy, visit: <a href="/privacy">elysian.money/privacy</a></p>

        <hr />

        <h2>Incident Response</h2>
        <p>CommVergent Automation maintains an incident response process for security events. In the event of a confirmed breach affecting consumer data, we will notify affected users in accordance with applicable law and any contractual obligations.</p>

        <hr />

        <h2>Security Disclosures</h2>
        <p>If you believe you have discovered a security vulnerability in any CommVergent Automation platform, please report it responsibly:</p>
        <p>
          <strong>Email:</strong> <a href="mailto:security@commvergent.com">security@commvergent.com</a><br />
          <strong>Response target:</strong> We aim to acknowledge all security reports within 2 business days.
        </p>
        <p>Please do not publicly disclose vulnerabilities before giving us reasonable time to investigate and remediate.</p>

        <hr />

        <h2>Contact</h2>
        <p>
          <strong>CommVergent Automation LLC</strong><br />
          3500 Brown Dipper Dr<br />
          Pflugerville, TX 78660<br />
          United States
        </p>
        <p><a href="mailto:security@commvergent.com">security@commvergent.com</a></p>
      </main>
      <Footer />
    </>
  )
}
