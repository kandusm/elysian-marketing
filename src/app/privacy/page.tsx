import { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Elysian Money',
  description: 'How Elysian Money collects, uses, and protects your personal and financial data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="meta">
          Effective date: April 14, 2026<br />
          Last updated: April 14, 2026
        </p>

        <h2>Overview</h2>
        <p>
          Elysian Money is a household financial intelligence platform operated by CommVergent Automation LLC,
          a Texas limited liability company (&ldquo;CommVergent Automation,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          This Privacy Policy describes how we collect, use, store, and protect your personal and financial
          information when you use Elysian Money (&ldquo;the Service&rdquo;), available at app.elysian.money.
        </p>
        <p>
          By creating an account and using the Service, you agree to the practices described in this Privacy Policy.
        </p>

        <hr />

        <h2>1. Who We Are</h2>
        <p>
          <strong>CommVergent Automation LLC</strong><br />
          3500 Brown Dipper Dr<br />
          Pflugerville, TX 78660<br />
          United States
        </p>
        <p>
          Privacy inquiries: <a href="mailto:privacy@commvergent.com">privacy@commvergent.com</a><br />
          Security inquiries: <a href="mailto:security@commvergent.com">security@commvergent.com</a>
        </p>

        <hr />

        <h2>2. Information We Collect</h2>

        <h3>2.1 Information You Provide Directly</h3>
        <ul>
          <li><strong>Account information:</strong> Your name and email address when you create an account.</li>
          <li><strong>Financial accounts:</strong> When you connect a bank or financial institution, we use Plaid (a third-party financial data service) to establish that connection. We do not collect or store your bank login credentials. We receive and store transaction data, account names, account types, and balance information that Plaid retrieves on your behalf.</li>
          <li><strong>Manual entries:</strong> Financial data you enter manually, including journal entries, accounts, and transactions.</li>
          <li><strong>Files you upload:</strong> OFX, QFX, and CSV files you upload for transaction import.</li>
        </ul>

        <h3>2.2 Information Collected Automatically</h3>
        <ul>
          <li><strong>Authentication data:</strong> Session tokens and login events managed through Supabase Auth.</li>
          <li><strong>Usage data:</strong> Actions taken within the application such as account creation, journal entry creation, and import events. This data is used solely to provide and improve the Service.</li>
          <li><strong>Audit logs:</strong> A record of changes made to your financial ledger, including the timestamp and nature of each change. Audit logs exist to protect the integrity of your financial data.</li>
        </ul>

        <h3>2.3 Information We Do NOT Collect</h3>
        <ul>
          <li>We do not collect your bank login credentials at any point.</li>
          <li>We do not collect payment card numbers (payment processing is handled by Stripe, which is PCI-compliant).</li>
          <li>We do not use advertising trackers or third-party analytics that profile your behavior for advertising purposes.</li>
          <li>We do not collect data from your device beyond what is necessary to operate the Service.</li>
        </ul>

        <hr />

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect exclusively to provide, maintain, and improve the Elysian Money Service:</p>
        <ul>
          <li>To create and manage your account and financial entity</li>
          <li>To display your connected account balances, transactions, and financial summaries</li>
          <li>To calculate your net worth, account balances, and financial projections</li>
          <li>To power the AI CFO features that analyze your financial data and provide suggestions</li>
          <li>To import and normalize transactions from connected accounts and uploaded files</li>
          <li>To send transactional emails such as account verification and security alerts</li>
          <li>To maintain audit logs of ledger changes for data integrity purposes</li>
          <li>To process subscription payments via Stripe</li>
        </ul>
        <p>We do not use your financial data to train AI models, benchmark against other users, or for any purpose other than providing the Service to you.</p>

        <hr />

        <h2>4. How We Share Your Information</h2>
        <p><strong>We do not sell your data. We do not share your financial data with third parties for advertising, marketing, or profiling purposes.</strong></p>
        <p>We share data only in the following limited circumstances:</p>

        <h3>4.1 Service Providers</h3>
        <p>We work with the following third-party service providers who process data on our behalf under confidentiality obligations:</p>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Data Shared</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plaid</td>
              <td>Bank account connectivity</td>
              <td>Account identifiers, access tokens</td>
            </tr>
            <tr>
              <td>Supabase</td>
              <td>Database and authentication infrastructure</td>
              <td>All application data (encrypted at rest)</td>
            </tr>
            <tr>
              <td>Vercel</td>
              <td>Application hosting</td>
              <td>Request logs</td>
            </tr>
            <tr>
              <td>Stripe</td>
              <td>Subscription billing</td>
              <td>Name, email, payment information</td>
            </tr>
          </tbody>
        </table>

        <h3>4.2 Legal Requirements</h3>
        <p>We may disclose your information if required by law, regulation, court order, or governmental authority, or if we believe in good faith that disclosure is necessary to protect the rights, property, or safety of CommVergent Automation, our users, or the public.</p>

        <h3>4.3 Business Transfers</h3>
        <p>If CommVergent Automation is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on the Service before your information is transferred and becomes subject to a different privacy policy.</p>

        <hr />

        <h2>5. Bank Account Connectivity (Plaid)</h2>
        <p>Elysian Money uses Plaid Technologies, Inc. to connect your financial accounts. When you connect a bank account:</p>
        <ul>
          <li>You authenticate directly with your financial institution through Plaid&apos;s secure interface. We never see your bank login credentials.</li>
          <li>Plaid provides us with an access token that allows us to retrieve your transaction history and account balances on your behalf.</li>
          <li>That access token is stored encrypted in our database and is never exposed in client-facing responses or logs.</li>
          <li>You can disconnect any connected account at any time from within the application. Upon disconnection, we revoke the Plaid access token and stop syncing data from that institution.</li>
        </ul>
        <p>Plaid&apos;s privacy policy is available at <a href="https://plaid.com/legal" target="_blank" rel="noopener noreferrer">https://plaid.com/legal</a>.</p>

        <hr />

        <h2>6. Household and Multi-Member Accounts</h2>
        <p>Elysian Money supports household accounts where multiple members may share access to certain financial information. The following privacy principles govern household data:</p>
        <ul>
          <li>Each user has an individual financial entity that is <strong>private by default</strong>. No household member can see another member&apos;s private data unless visibility is explicitly set to shared.</li>
          <li>Visibility settings are controlled by the account owner. You choose what is shared at the account level.</li>
          <li>Visibility is enforced at the database level, not just the application interface.</li>
          <li>Household members with &ldquo;viewer&rdquo; roles cannot create or modify financial data.</li>
        </ul>

        <hr />

        <h2>7. Data Security</h2>
        <p>We implement and maintain technical and organizational security measures to protect your information:</p>
        <ul>
          <li>All data is encrypted in transit using TLS 1.2 or higher.</li>
          <li>All data is encrypted at rest in our database infrastructure.</li>
          <li>Database access is governed by Row-Level Security (RLS) policies enforced at the database layer.</li>
          <li>Production systems require multi-factor authentication for administrative access.</li>
          <li>Plaid access tokens are stored encrypted and are never logged or exposed to the client.</li>
          <li>All ledger mutations are recorded in an audit log.</li>
        </ul>
        <p>No method of transmission or storage is 100% secure. If you believe your account has been compromised, contact us immediately at <a href="mailto:security@commvergent.com">security@commvergent.com</a>.</p>

        <hr />

        <h2>8. Data Retention and Deletion</h2>
        <p><strong>Retention:</strong> We retain your data for as long as your account is active and as necessary to provide the Service.</p>
        <p><strong>Deletion:</strong> You may request deletion of your account and all associated data at any time by:</p>
        <ul>
          <li>Using the account deletion feature within the application settings, or</li>
          <li>Contacting us at <a href="mailto:privacy@commvergent.com">privacy@commvergent.com</a></li>
        </ul>
        <p>Upon a verified deletion request, we will permanently delete your personal information and financial data from our systems within 30 days, except where retention is required by law or for legitimate fraud prevention purposes.</p>
        <p>Plaid connections are revoked at the time of account deletion. We will also request deletion of your data from Plaid in accordance with their data deletion policies.</p>

        <hr />

        <h2>9. Your Privacy Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <p><strong>For all users:</strong></p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate personal data.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data (see Section 8).</li>
          <li><strong>Portability:</strong> Request an export of your financial data in a machine-readable format.</li>
        </ul>
        <p><strong>For California residents (CCPA):</strong></p>
        <p>You have the right to know what personal information we collect, disclose, and sell (we do not sell personal information). You have the right to opt out of the sale of personal information (not applicable — we do not sell data). You have the right to non-discrimination for exercising your privacy rights.</p>
        <p>To exercise any of these rights, contact us at <a href="mailto:privacy@commvergent.com">privacy@commvergent.com</a>. We will respond within 30 days.</p>

        <hr />

        <h2>10. Children&apos;s Privacy</h2>
        <p>The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, contact us at <a href="mailto:privacy@commvergent.com">privacy@commvergent.com</a> and we will take steps to delete that information.</p>

        <hr />

        <h2>11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email and update the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the Service after changes become effective constitutes acceptance of the revised policy.</p>

        <hr />

        <h2>12. Contact Us</h2>
        <p>For privacy-related questions, requests, or concerns:</p>
        <p>
          <strong>CommVergent Automation LLC</strong><br />
          3500 Brown Dipper Dr<br />
          Pflugerville, TX 78660<br />
          United States
        </p>
        <p><a href="mailto:privacy@commvergent.com">privacy@commvergent.com</a></p>
      </main>
      <Footer />
    </>
  )
}
