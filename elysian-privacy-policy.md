# Privacy Policy — Elysian Money
*Effective date: [INSERT DATE BEFORE PUBLISHING]*  
*Last updated: [INSERT DATE BEFORE PUBLISHING]*

---

## Overview

Elysian Money is a household financial intelligence platform operated by CommVergent Automation LLC, a Texas limited liability company ("CommVergent Automation," "we," "us," or "our"). This Privacy Policy describes how we collect, use, store, and protect your personal and financial information when you use Elysian Money ("the Service"), available at app.elysian.money.

By creating an account and using the Service, you agree to the practices described in this Privacy Policy.

---

## 1. Who We Are

**CommVergent Automation LLC**  
3500 Brown Dipper Dr  
Pflugerville, TX 78660  
United States  

Privacy inquiries: privacy@commvergent.com  
Security inquiries: security@commvergent.com

---

## 2. Information We Collect

### 2.1 Information You Provide Directly

- **Account information:** Your name and email address when you create an account.
- **Financial accounts:** When you connect a bank or financial institution, we use Plaid (a third-party financial data service) to establish that connection. We do not collect or store your bank login credentials. We receive and store transaction data, account names, account types, and balance information that Plaid retrieves on your behalf.
- **Manual entries:** Financial data you enter manually, including journal entries, accounts, and transactions.
- **Files you upload:** OFX, QFX, and CSV files you upload for transaction import.

### 2.2 Information Collected Automatically

- **Authentication data:** Session tokens and login events managed through Supabase Auth.
- **Usage data:** Actions taken within the application such as account creation, journal entry creation, and import events. This data is used solely to provide and improve the Service.
- **Audit logs:** A record of changes made to your financial ledger, including the timestamp and nature of each change. Audit logs exist to protect the integrity of your financial data.

### 2.3 Information We Do NOT Collect

- We do not collect your bank login credentials at any point.
- We do not collect payment card numbers (payment processing is handled by Stripe, which is PCI-compliant).
- We do not use advertising trackers or third-party analytics that profile your behavior for advertising purposes.
- We do not collect data from your device beyond what is necessary to operate the Service.

---

## 3. How We Use Your Information

We use the information we collect exclusively to provide, maintain, and improve the Elysian Money Service:

- To create and manage your account and financial entity
- To display your connected account balances, transactions, and financial summaries
- To calculate your net worth, account balances, and financial projections
- To power the AI CFO features that analyze your financial data and provide suggestions
- To import and normalize transactions from connected accounts and uploaded files
- To send transactional emails such as account verification and security alerts
- To maintain audit logs of ledger changes for data integrity purposes
- To process subscription payments via Stripe

We do not use your financial data to train AI models, benchmark against other users, or for any purpose other than providing the Service to you.

---

## 4. How We Share Your Information

**We do not sell your data. We do not share your financial data with third parties for advertising, marketing, or profiling purposes.**

We share data only in the following limited circumstances:

### 4.1 Service Providers
We work with the following third-party service providers who process data on our behalf under confidentiality obligations:

| Provider | Purpose | Data Shared |
|---|---|---|
| Plaid | Bank account connectivity | Account identifiers, access tokens |
| Supabase | Database and authentication infrastructure | All application data (encrypted at rest) |
| Vercel | Application hosting | Request logs |
| Stripe | Subscription billing | Name, email, payment information |

### 4.2 Legal Requirements
We may disclose your information if required by law, regulation, court order, or governmental authority, or if we believe in good faith that disclosure is necessary to protect the rights, property, or safety of CommVergent Automation, our users, or the public.

### 4.3 Business Transfers
If CommVergent Automation is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on the Service before your information is transferred and becomes subject to a different privacy policy.

---

## 5. Bank Account Connectivity (Plaid)

Elysian Money uses Plaid Technologies, Inc. to connect your financial accounts. When you connect a bank account:

- You authenticate directly with your financial institution through Plaid's secure interface. We never see your bank login credentials.
- Plaid provides us with an access token that allows us to retrieve your transaction history and account balances on your behalf.
- That access token is stored encrypted in our database and is never exposed in client-facing responses or logs.
- You can disconnect any connected account at any time from within the application. Upon disconnection, we revoke the Plaid access token and stop syncing data from that institution.

Plaid's privacy policy is available at https://plaid.com/legal.

---

## 6. Household and Multi-Member Accounts

Elysian Money supports household accounts where multiple members may share access to certain financial information. The following privacy principles govern household data:

- Each user has an individual financial entity that is **private by default**. No household member can see another member's private data unless visibility is explicitly set to shared.
- Visibility settings are controlled by the account owner. You choose what is shared at the account level.
- Visibility is enforced at the database level, not just the application interface.
- Household members with "viewer" roles cannot create or modify financial data.

---

## 7. Data Security

We implement and maintain technical and organizational security measures to protect your information:

- All data is encrypted in transit using TLS 1.2 or higher.
- All data is encrypted at rest in our database infrastructure.
- Database access is governed by Row-Level Security (RLS) policies enforced at the database layer.
- Production systems require multi-factor authentication for administrative access.
- Plaid access tokens are stored encrypted and are never logged or exposed to the client.
- All ledger mutations are recorded in an audit log.

No method of transmission or storage is 100% secure. If you believe your account has been compromised, contact us immediately at security@commvergent.com.

---

## 8. Data Retention and Deletion

**Retention:** We retain your data for as long as your account is active and as necessary to provide the Service.

**Deletion:** You may request deletion of your account and all associated data at any time by:
- Using the account deletion feature within the application settings, or
- Contacting us at privacy@commvergent.com

Upon a verified deletion request, we will permanently delete your personal information and financial data from our systems within 30 days, except where retention is required by law or for legitimate fraud prevention purposes.

Plaid connections are revoked at the time of account deletion. We will also request deletion of your data from Plaid in accordance with their data deletion policies.

---

## 9. Your Privacy Rights

Depending on your location, you may have the following rights regarding your personal information:

**For all users:**
- **Access:** Request a copy of the personal data we hold about you.
- **Correction:** Request correction of inaccurate personal data.
- **Deletion:** Request deletion of your personal data (see Section 8).
- **Portability:** Request an export of your financial data in a machine-readable format.

**For California residents (CCPA):**
You have the right to know what personal information we collect, disclose, and sell (we do not sell personal information). You have the right to opt out of the sale of personal information (not applicable — we do not sell data). You have the right to non-discrimination for exercising your privacy rights.

To exercise any of these rights, contact us at privacy@commvergent.com. We will respond within 30 days.

---

## 10. Children's Privacy

The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, contact us at privacy@commvergent.com and we will take steps to delete that information.

---

## 11. Changes to This Policy

We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email and update the "Last updated" date at the top of this page. Your continued use of the Service after changes become effective constitutes acceptance of the revised policy.

---

## 12. Contact Us

For privacy-related questions, requests, or concerns:

**CommVergent Automation LLC**  
3500 Brown Dipper Dr  
Pflugerville, TX 78660  
United States  

privacy@commvergent.com
