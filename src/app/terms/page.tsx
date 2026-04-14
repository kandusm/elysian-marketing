import { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Elysian Money',
  description: 'Terms governing your use of Elysian Money.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal-content">
        <h1>Terms of Service</h1>
        <p className="meta">
          Effective date: April 14, 2026<br />
          Last updated: April 14, 2026
        </p>

        <h2>1. Agreement to Terms</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Elysian Money (&ldquo;the Service&rdquo;),
          operated by CommVergent Automation LLC, a Texas limited liability company (&ldquo;CommVergent Automation,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), located at 3500 Brown Dipper Dr, Pflugerville, TX 78660.
        </p>
        <p>By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.</p>

        <hr />

        <h2>2. Description of Service</h2>
        <p>Elysian Money is a personal and household financial management platform that provides:</p>
        <ul>
          <li>A double-entry accounting ledger for tracking personal and household finances</li>
          <li>Bank account connectivity via Plaid Technologies, Inc.</li>
          <li>Transaction import and categorization tools</li>
          <li>Financial state calculations including net worth, burn rate, and runway</li>
          <li>Household financial visibility controls for multi-member use</li>
          <li>AI-powered financial analysis and Monte Carlo projection tools</li>
          <li>Notification and alert features</li>
        </ul>
        <p>
          <strong>Elysian Money is not a bank, financial institution, investment advisor, broker-dealer, or licensed financial planner.</strong> The Service provides financial data organization and analytical tools for informational purposes only. Nothing in the Service constitutes financial, investment, tax, or legal advice.
        </p>

        <hr />

        <h2>3. Eligibility</h2>
        <p>You must be at least 18 years of age to use the Service. By creating an account, you represent and warrant that:</p>
        <ul>
          <li>You are at least 18 years old</li>
          <li>You have the legal capacity to enter into these Terms</li>
          <li>You are not prohibited from using the Service under any applicable law</li>
          <li>The information you provide during registration is accurate and complete</li>
        </ul>

        <hr />

        <h2>4. Account Registration</h2>

        <h3>4.1 Account Creation</h3>
        <p>You must create an account to use the Service. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.</p>

        <h3>4.2 Account Security</h3>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately at <a href="mailto:security@commvergent.com">security@commvergent.com</a> if you suspect unauthorized access to your account.</p>

        <h3>4.3 One Account Per Person</h3>
        <p>Each person may maintain only one individual account. Household accounts may include multiple members as permitted by your subscription plan.</p>

        <hr />

        <h2>5. Subscription Plans and Payment</h2>

        <h3>5.1 Plans</h3>
        <p>The Service is offered under several subscription tiers. Current pricing and features for each tier are described at elysian.money/pricing. We reserve the right to modify pricing and plan features with reasonable notice.</p>

        <h3>5.2 Free Trial</h3>
        <p>Certain subscription plans include a free trial period. A valid payment method is required to begin a free trial. You will not be charged until the trial period ends. You may cancel at any time before the trial ends to avoid charges.</p>

        <h3>5.3 Billing</h3>
        <p>Subscriptions are billed in advance on a monthly or annual basis depending on your selected plan. All fees are in U.S. dollars and are non-refundable except as required by law or as explicitly stated in these Terms.</p>

        <h3>5.4 Cancellation</h3>
        <p>You may cancel your subscription at any time through the billing settings page in the application. Cancellation takes effect at the end of your current billing period. You will retain access to the Service until that date.</p>

        <h3>5.5 Payment Processing</h3>
        <p>Payments are processed by Stripe, Inc. By providing payment information, you agree to Stripe&apos;s terms of service. We do not store your full payment card information.</p>

        <h3>5.6 Price Changes</h3>
        <p>We may change subscription prices with at least 30 days&apos; notice. Notice will be provided by email and/or in-app notification. Continued use of the Service after a price change takes effect constitutes acceptance of the new pricing.</p>

        <hr />

        <h2>6. Bank Account Connectivity</h2>

        <h3>6.1 Plaid Integration</h3>
        <p>The Service uses Plaid Technologies, Inc. (&ldquo;Plaid&rdquo;) to connect your financial accounts. By connecting a bank account, you authorize Plaid to retrieve your account data on your behalf and you agree to Plaid&apos;s end user privacy policy available at <a href="https://plaid.com/legal" target="_blank" rel="noopener noreferrer">plaid.com/legal</a>.</p>

        <h3>6.2 Read-Only Access</h3>
        <p>Our use of Plaid is read-only. We retrieve your transaction history and account balances. We do not initiate payments, transfers, or any transactions on your behalf.</p>

        <h3>6.3 Credential Security</h3>
        <p>You authenticate directly with your financial institution through Plaid&apos;s secure interface. We never receive or store your bank login credentials.</p>

        <h3>6.4 Disconnecting Accounts</h3>
        <p>You may disconnect any connected financial account at any time through the Import page in the application. Upon disconnection, we will revoke the associated access token and stop retrieving new data from that account.</p>

        <hr />

        <h2>7. AI Features and Limitations</h2>

        <h3>7.1 Not Financial Advice</h3>
        <p>The AI CFO feature and all AI-powered analysis in the Service are provided for informational and educational purposes only. AI-generated content does not constitute financial, investment, tax, or legal advice. You should not make financial decisions based solely on AI-generated content without consulting qualified professionals.</p>

        <h3>7.2 Accuracy Limitations</h3>
        <p>AI-generated analysis is based on the data available in your account and may contain errors, omissions, or inaccuracies. Monte Carlo projections and financial simulations are probabilistic models based on historical assumptions and do not guarantee future outcomes.</p>

        <h3>7.3 No Ledger Writes</h3>
        <p>AI features in the Service are read-only. AI tools cannot modify your financial ledger, create transactions, or alter your financial records. All ledger changes require explicit user confirmation.</p>

        <hr />

        <h2>8. Household Features</h2>

        <h3>8.1 Household Creation</h3>
        <p>Users on eligible plans may create household entities and invite other users to join. The household owner is responsible for managing membership and visibility settings.</p>

        <h3>8.2 Privacy Within Households</h3>
        <p>Accounts marked as &ldquo;private&rdquo; are visible only to the account owner and are not shared with other household members. Visibility settings are described in our Privacy Policy.</p>

        <h3>8.3 Member Responsibility</h3>
        <p>By inviting another user to your household, you represent that you have their consent to share the financial information you choose to make visible. We are not responsible for disputes between household members regarding shared financial information.</p>

        <hr />

        <h2>9. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful purpose or in violation of any applicable law</li>
          <li>Attempt to gain unauthorized access to any part of the Service or another user&apos;s account</li>
          <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
          <li>Use automated tools to scrape, crawl, or extract data from the Service</li>
          <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
          <li>Upload or transmit malicious code, viruses, or any software designed to disrupt or damage the Service</li>
          <li>Use the Service to process data on behalf of third parties without their consent</li>
          <li>Attempt to circumvent any security or access control measures</li>
        </ul>

        <hr />

        <h2>10. Data and Privacy</h2>
        <p>Your use of the Service is subject to our Privacy Policy, available at <a href="/privacy">elysian.money/privacy</a>, which is incorporated into these Terms by reference. By using the Service, you consent to our collection and use of data as described in the Privacy Policy.</p>

        <hr />

        <h2>11. Intellectual Property</h2>

        <h3>11.1 Our Property</h3>
        <p>The Service, including its software, design, text, graphics, and all other content, is owned by CommVergent Automation LLC and is protected by copyright, trademark, and other intellectual property laws.</p>

        <h3>11.2 Your Data</h3>
        <p>You retain ownership of the financial data you enter into or connect to the Service. By using the Service, you grant us a limited license to process, store, and display your data solely for the purpose of providing the Service to you.</p>

        <h3>11.3 Feedback</h3>
        <p>If you provide feedback, suggestions, or ideas about the Service, you grant us the right to use that feedback without restriction or compensation.</p>

        <hr />

        <h2>12. Disclaimers</h2>
        <p>THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
        <p>WE DO NOT WARRANT THAT:</p>
        <ul>
          <li>THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE</li>
          <li>DATA PROVIDED THROUGH THE SERVICE WILL BE ACCURATE OR COMPLETE</li>
          <li>THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS</li>
          <li>ANY ERRORS IN THE SERVICE WILL BE CORRECTED</li>
        </ul>
        <p>FINANCIAL DATA OBTAINED THROUGH THIRD-PARTY CONNECTIONS (INCLUDING PLAID) IS PROVIDED BY THOSE THIRD PARTIES AND WE MAKE NO WARRANTY REGARDING ITS ACCURACY OR COMPLETENESS.</p>

        <hr />

        <h2>13. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COMMVERGENT AUTOMATION LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p>OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE MONTHS PRECEDING THE CLAIM.</p>
        <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES OR LIABILITY, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</p>

        <hr />

        <h2>14. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless CommVergent Automation LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with your use of the Service, your violation of these Terms, or your violation of any third-party rights.</p>

        <hr />

        <h2>15. Termination</h2>

        <h3>15.1 By You</h3>
        <p>You may terminate your account at any time by canceling your subscription and requesting account deletion through the application settings or by contacting <a href="mailto:privacy@commvergent.com">privacy@commvergent.com</a>.</p>

        <h3>15.2 By Us</h3>
        <p>We reserve the right to suspend or terminate your account and access to the Service at our discretion, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>

        <h3>15.3 Effect of Termination</h3>
        <p>Upon termination, your right to use the Service ceases immediately. We will handle your data in accordance with our Privacy Policy and data deletion procedures.</p>

        <hr />

        <h2>16. Governing Law and Dispute Resolution</h2>
        <p>These Terms are governed by the laws of the State of Texas, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Service shall be resolved in the state or federal courts located in Travis County, Texas, and you consent to the personal jurisdiction of such courts.</p>

        <hr />

        <h2>17. Changes to Terms</h2>
        <p>We may update these Terms from time to time. When we make material changes, we will notify you by email and update the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.</p>

        <hr />

        <h2>18. Entire Agreement</h2>
        <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and CommVergent Automation LLC regarding the Service and supersede all prior agreements and understandings.</p>

        <hr />

        <h2>19. Contact</h2>
        <p>For questions about these Terms:</p>
        <p>
          <strong>CommVergent Automation LLC</strong><br />
          3500 Brown Dipper Dr<br />
          Pflugerville, TX 78660<br />
          United States
        </p>
        <p><a href="mailto:legal@commvergent.com">legal@commvergent.com</a></p>
      </main>
      <Footer />
    </>
  )
}
