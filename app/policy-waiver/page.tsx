// app/policy-waiver/page.tsx

export default function PolicyWaiverPage() {
  return (
    <div className="space-y-32">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Waste Driver Inc. — User &amp; Driver Terms of Use, Liability Waiver, and Platform Participation Agreement
          </h1>

          <p className="mt-6 text-base font-semibold uppercase tracking-wide text-emerald-700">
            Effective Date: May 27, 2026
          </p>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            This page contains the full legal agreement governing participation in the Waste Driver platform.
            Users and Drivers must review and understand these terms before using the platform.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 space-y-16 text-slate-800">

        {/* TABLE OF CONTENTS — Uber-style */}
        <div className="border border-slate-200 rounded-2xl bg-white/70 px-6 py-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-2 text-sm md:text-base text-slate-700">
            <li><a href="#section-1" className="hover:text-emerald-700">1. Definitions</a></li>
            <li><a href="#section-2" className="hover:text-emerald-700">2. Nature of the Platform</a></li>
            <li><a href="#section-3" className="hover:text-emerald-700">3. Independent Contractor Status</a></li>
            <li><a href="#section-4" className="hover:text-emerald-700">4. User Responsibilities</a></li>
            <li><a href="#section-5" className="hover:text-emerald-700">5. Driver Responsibilities</a></li>
            <li><a href="#section-6" className="hover:text-emerald-700">6. No Warranties</a></li>
            <li><a href="#section-7" className="hover:text-emerald-700">7. Release of Liability</a></li>
            <li><a href="#section-8" className="hover:text-emerald-700">8. Indemnification</a></li>
            <li><a href="#section-9" className="hover:text-emerald-700">9. Insurance Requirements</a></li>
            <li><a href="#section-10" className="hover:text-emerald-700">10. Prohibited Materials</a></li>
            <li><a href="#section-11" className="hover:text-emerald-700">11. Environmental Compliance</a></li>
            <li><a href="#section-12" className="hover:text-emerald-700">12. Payment Disputes</a></li>
            <li><a href="#section-13" className="hover:text-emerald-700">13. Limitation of Liability</a></li>
            <li><a href="#section-14" className="hover:text-emerald-700">14. Account Termination</a></li>
            <li><a href="#section-15" className="hover:text-emerald-700">15. Privacy</a></li>
            <li><a href="#section-16" className="hover:text-emerald-700">16. Governing Law</a></li>
            <li><a href="#section-17" className="hover:text-emerald-700">17. Severability</a></li>
            <li><a href="#section-18" className="hover:text-emerald-700">18. Electronic Acceptance</a></li>
            <li><a href="#section-19" className="hover:text-emerald-700">19. User Sign-Off Acknowledgement</a></li>
            <li><a href="#section-20" className="hover:text-emerald-700">20. Driver Sign-Off Acknowledgement</a></li>
            <li><a href="#section-21" className="hover:text-emerald-700">Important Legal Recommendation</a></li>
          </ol>
        </div>

        {/* IMPORTANT NOTICE */}
        <section aria-labelledby="important-notice">
          <h2 id="important-notice" className="text-2xl font-bold text-slate-900">
            Important Notice
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            This document contains legal rights, obligations, releases, disclaimers, limitations of liability, assumptions of risk,
            and indemnities. By creating an account, accessing, using, or participating in the Waste Driver Inc. platform,
            you agree to be bound by these terms.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. strongly recommends that all Users and Drivers obtain independent legal advice prior to using the Platform.
          </p>
        </section>

        {/* 1. DEFINITIONS */}
        <section id="section-1" aria-labelledby="section-1-heading">
          <h2 id="section-1-heading" className="text-2xl font-bold text-slate-900">
            1. Definitions
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            For the purposes of this Agreement:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
            <li>
              <span className="font-semibold">“Waste Driver Inc.”, “Company”, “Platform”, “we”, or “us”</span> means Waste Driver Inc.,
              an Alberta corporation, including its directors, officers, employees, contractors, shareholders, affiliates,
              successors, and assigns.
            </li>
            <li>
              <span className="font-semibold">“User”</span> means any individual, corporation, business, municipality, organization,
              or entity requesting junk removal, waste hauling, transport, disposal, recycling, contaminated soil movement,
              demolition debris hauling, or any related service through the Platform.
            </li>
            <li>
              <span className="font-semibold">“Driver”</span> means any independent contractor, sole proprietor, corporation,
              hauling company, vehicle owner, operator, subcontractor, or service provider who accepts or performs hauling,
              pickup, transport, disposal, recycling, or waste management services through the Platform.
            </li>
            <li>
              <span className="font-semibold">“Services”</span> means any waste hauling, junk removal, transportation, disposal,
              recycling, material movement, loading, unloading, landfill disposal, transfer station delivery, contaminated soil
              handling, construction debris hauling, or related services arranged through the Platform.
            </li>
            <li>
              <span className="font-semibold">“Hazardous Materials”</span> means any material regulated under federal, provincial,
              or municipal law including but not limited to hazardous waste, dangerous goods, asbestos, hydrocarbons, chemicals,
              biomedical waste, batteries, explosives, propane cylinders, fuels, solvents, contaminated soils, PFAS materials,
              radioactive materials, toxic substances, controlled substances, illegal substances, or environmentally regulated materials.
            </li>
          </ul>
        </section>

        {/* 2. NATURE OF THE PLATFORM */}
        <section id="section-2" aria-labelledby="section-2-heading">
          <h2 id="section-2-heading" className="text-2xl font-bold text-slate-900">
            2. Nature of the Platform
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. operates solely as a technology platform that facilitates introductions and communications between
            independent Users and independent Drivers.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc.:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
            <li>Does not own or operate hauling vehicles;</li>
            <li>Does not employ Drivers;</li>
            <li>Does not supervise transportation activities;</li>
            <li>Does not inspect waste materials;</li>
            <li>Does not verify the legality, safety, classification, or contamination status of any material being transported;</li>
            <li>Does not direct disposal locations;</li>
            <li>Does not control Driver conduct;</li>
            <li>Does not provide transportation services;</li>
            <li>Does not provide environmental consulting services;</li>
            <li>Does not guarantee compliance with transportation, landfill, environmental, occupational health and safety,
              or dangerous goods legislation.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            All contracts for hauling or disposal services are strictly between the User and the Driver. Waste Driver Inc. is not
            a party to any hauling agreement between Users and Drivers.
          </p>
        </section>

        {/* 3. INDEPENDENT CONTRACTOR STATUS */}
        <section id="section-3" aria-labelledby="section-3-heading">
          <h2 id="section-3-heading" className="text-2xl font-bold text-slate-900">
            3. Independent Contractor Status
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            All Drivers using the Platform are independent contractors.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Nothing in this Agreement shall be interpreted as creating:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
            <li>an employer-employee relationship;</li>
            <li>a joint venture;</li>
            <li>a partnership;</li>
            <li>an agency relationship; or</li>
            <li>a franchise relationship</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            between Waste Driver Inc. and any Driver.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Drivers are solely responsible for:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
            <li>licensing;</li>
            <li>vehicle registration;</li>
            <li>insurance;</li>
            <li>commercial operating authority;</li>
            <li>workers compensation obligations;</li>
            <li>taxes;</li>
            <li>safety compliance;</li>
            <li>environmental compliance;</li>
            <li>transportation compliance;</li>
            <li>landfill compliance;</li>
            <li>dangerous goods compliance;</li>
            <li>vehicle maintenance;</li>
            <li>securing loads;</li>
            <li>spill prevention;</li>
            <li>traffic violations;</li>
            <li>accidents;</li>
            <li>injuries;</li>
            <li>damages;</li>
            <li>contamination;</li>
            <li>unlawful dumping;</li>
            <li>improper disposal;</li>
            <li>regulatory fines; and</li>
            <li>all acts or omissions arising from Services performed.</li>
          </ul>
        </section>

        {/* 4. USER RESPONSIBILITIES */}
        <section id="section-4" aria-labelledby="section-4-heading">
          <h2 id="section-4-heading" className="text-2xl font-bold text-slate-900">
            4. User Responsibilities
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            By using the Platform, each User represents, warrants, and agrees that:
          </p>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
            <li>
              The User is legally authorized to arrange for transportation and disposal of the materials submitted through the Platform.
            </li>
            <li>
              The User will accurately disclose the nature of all waste, junk, debris, soils, materials, and items requiring transport.
            </li>
            <li>
              The User will not knowingly submit, load, tender, or request transport of:
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>hazardous waste;</li>
                <li>dangerous goods;</li>
                <li>illegal substances;</li>
                <li>contaminated materials;</li>
                <li>explosives;</li>
                <li>toxic substances;</li>
                <li>regulated waste;</li>
                <li>asbestos-containing materials;</li>
                <li>biomedical waste; or</li>
                <li>any material prohibited by law,</li>
              </ul>
              <span className="mt-2 block">
                unless explicitly permitted by applicable law and separately agreed to in writing by a properly licensed Driver.
              </span>
            </li>
            <li>
              The User is solely responsible for determining whether materials are hazardous, contaminated, illegal, or regulated.
            </li>
            <li>
              The User is solely responsible for obtaining all required permits, manifests, approvals, and regulatory authorizations.
            </li>
            <li>
              The User assumes all risks associated with the loading, transportation, handling, disposal, classification, and legality
              of the materials.
            </li>
            <li>
              The User releases Waste Driver Inc. from all liability arising from Services obtained through the Platform.
            </li>
          </ol>
        </section>

        {/* 5. DRIVER RESPONSIBILITIES */}
        <section id="section-5" aria-labelledby="section-5-heading">
          <h2 id="section-5-heading" className="text-2xl font-bold text-slate-900">
            5. Driver Responsibilities
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            By using the Platform, each Driver represents, warrants, and agrees that:
          </p>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
            <li>
              The Driver is legally authorized to provide hauling and transportation services in the applicable jurisdiction.
            </li>
            <li>
              The Driver maintains all required:
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>driver’s licenses;</li>
                <li>registrations;</li>
                <li>permits;</li>
                <li>commercial operating authorities;</li>
                <li>environmental approvals;</li>
                <li>insurance coverage; and</li>
                <li>safety certifications.</li>
              </ul>
            </li>
            <li>
              The Driver is solely responsible for:
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>inspecting loads;</li>
                <li>refusing unsafe or unlawful loads;</li>
                <li>determining whether materials may be hazardous or contaminated;</li>
                <li>complying with dangerous goods laws;</li>
                <li>complying with environmental laws;</li>
                <li>ensuring vehicles and trailers are roadworthy;</li>
                <li>safe driving practices;</li>
                <li>securing loads;</li>
                <li>spill prevention and spill response;</li>
                <li>lawful disposal;</li>
                <li>landfill compliance;</li>
                <li>payment of tipping fees;</li>
                <li>taxes; and</li>
                <li>all operational decisions.</li>
              </ul>
            </li>
            <li>
              The Driver shall not rely on Waste Driver Inc. for legal, environmental, transportation, or safety guidance.
            </li>
            <li>
              The Driver assumes all risks associated with transportation, hauling, loading, unloading, disposal, and operation of
              vehicles and equipment.
            </li>
            <li>
              The Driver releases Waste Driver Inc. from all liability associated with the Services.
            </li>
          </ol>
        </section>

        {/* 6. NO WARRANTIES */}
        <section id="section-6" aria-labelledby="section-6-heading">
          <h2 id="section-6-heading" className="text-2xl font-bold text-slate-900">
            6. No Warranties
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The Platform and Services are provided on an “as is” and “as available” basis.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. makes no representations or warranties of any kind, express or implied, including but not limited to:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>safety;</li>
            <li>legality;</li>
            <li>compliance;</li>
            <li>reliability;</li>
            <li>suitability;</li>
            <li>fitness for purpose;</li>
            <li>Driver qualifications;</li>
            <li>User accuracy;</li>
            <li>material classification;</li>
            <li>disposal legality;</li>
            <li>environmental compliance; or</li>
            <li>uninterrupted Platform access.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. expressly disclaims all implied warranties to the maximum extent permitted by law.
          </p>
        </section>

        {/* 7. RELEASE OF LIABILITY */}
        <section id="section-7" aria-labelledby="section-7-heading">
          <h2 id="section-7-heading" className="text-2xl font-bold text-slate-900">
            7. Release of Liability
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            To the maximum extent permitted by law, Users and Drivers release, waive, and forever discharge Waste Driver Inc. from
            any and all claims, demands, damages, actions, losses, costs, expenses, penalties, fines, liabilities, or causes of
            action of any kind arising directly or indirectly from:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>vehicle accidents;</li>
            <li>injuries;</li>
            <li>death;</li>
            <li>property damage;</li>
            <li>spills;</li>
            <li>environmental contamination;</li>
            <li>unlawful disposal;</li>
            <li>hazardous materials;</li>
            <li>landfill rejection;</li>
            <li>transportation violations;</li>
            <li>regulatory enforcement;</li>
            <li>load shifting;</li>
            <li>equipment failure;</li>
            <li>criminal acts;</li>
            <li>unlawful conduct;</li>
            <li>negligence of Drivers or Users;</li>
            <li>waste classification errors;</li>
            <li>contamination;</li>
            <li>dangerous goods incidents;</li>
            <li>disposal fees;</li>
            <li>service disputes;</li>
            <li>delays; or</li>
            <li>any Services arranged through the Platform.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            This release applies whether claims arise in contract, tort, negligence, strict liability, statute, equity, or otherwise.
          </p>
        </section>

        {/* 8. INDEMNIFICATION */}
        <section id="section-8" aria-labelledby="section-8-heading">
          <h2 id="section-8-heading" className="text-2xl font-bold text-slate-900">
            8. Indemnification
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Each User and Driver agrees to defend, indemnify, and hold harmless Waste Driver Inc. from and against any and all claims,
            losses, liabilities, damages, penalties, fines, environmental orders, remediation costs, legal fees, expert fees,
            judgments, and expenses arising from:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>breach of this Agreement;</li>
            <li>transportation activities;</li>
            <li>environmental contamination;</li>
            <li>hazardous materials;</li>
            <li>unlawful waste disposal;</li>
            <li>regulatory non-compliance;</li>
            <li>accidents;</li>
            <li>injuries;</li>
            <li>death;</li>
            <li>property damage;</li>
            <li>dangerous goods violations;</li>
            <li>taxes;</li>
            <li>employment claims;</li>
            <li>contractor claims; or</li>
            <li>any act or omission of the User or Driver.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            This indemnity survives account termination and continued use of the Platform.
          </p>
        </section>

        {/* 9. INSURANCE REQUIREMENTS */}
        <section id="section-9" aria-labelledby="section-9-heading">
          <h2 id="section-9-heading" className="text-2xl font-bold text-slate-900">
            9. Insurance Requirements
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Drivers are solely responsible for maintaining appropriate insurance coverage, including but not limited to:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>automobile liability insurance;</li>
            <li>commercial general liability insurance;</li>
            <li>cargo insurance;</li>
            <li>pollution liability insurance;</li>
            <li>environmental impairment liability insurance;</li>
            <li>workers compensation coverage; and</li>
            <li>any other legally required coverage.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. does not provide insurance coverage for Drivers, Users, vehicles, cargo, or transported materials.
          </p>
        </section>

        {/* 10. PROHIBITED MATERIALS */}
        <section id="section-10" aria-labelledby="section-10-heading">
          <h2 id="section-10-heading" className="text-2xl font-bold text-slate-900">
            10. Prohibited Materials
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Unless expressly authorized by law and by appropriately licensed parties, the following materials are prohibited from
            transport through the Platform:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>asbestos;</li>
            <li>biomedical waste;</li>
            <li>radioactive materials;</li>
            <li>explosives;</li>
            <li>firearms;</li>
            <li>ammunition;</li>
            <li>propane tanks;</li>
            <li>fuel tanks containing residue;</li>
            <li>chemicals;</li>
            <li>pesticides;</li>
            <li>hazardous waste;</li>
            <li>controlled substances;</li>
            <li>illegal substances;</li>
            <li>toxic waste;</li>
            <li>hydrocarbons;</li>
            <li>contaminated soils;</li>
            <li>batteries;</li>
            <li>paints and solvents;</li>
            <li>infectious waste; and</li>
            <li>any material prohibited by applicable law.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Users and Drivers remain solely responsible for determining whether materials are prohibited.
          </p>
        </section>

        {/* 11. ENVIRONMENTAL COMPLIANCE */}
        <section id="section-11" aria-labelledby="section-11-heading">
          <h2 id="section-11-heading" className="text-2xl font-bold text-slate-900">
            11. Environmental Compliance
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Users and Drivers acknowledge that environmental and waste transportation laws vary by province, territory, municipality,
            landfill operator, and regulator.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. does not guarantee compliance with:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>Alberta Environment and Protected Areas requirements;</li>
            <li>provincial waste regulations;</li>
            <li>Transportation of Dangerous Goods legislation;</li>
            <li>environmental protection laws;</li>
            <li>landfill acceptance criteria;</li>
            <li>municipal bylaws; or</li>
            <li>federal environmental legislation.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Users and Drivers are solely responsible for legal compliance.
          </p>
        </section>

        {/* 12. PAYMENT DISPUTES */}
        <section id="section-12" aria-labelledby="section-12-heading">
          <h2 id="section-12-heading" className="text-2xl font-bold text-slate-900">
            12. Payment Disputes
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. may facilitate payment processing but is not responsible for disputes between Users and Drivers regarding:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>pricing;</li>
            <li>service quality;</li>
            <li>damages;</li>
            <li>delays;</li>
            <li>disposal costs;</li>
            <li>tipping fees;</li>
            <li>refunds; or</li>
            <li>contract performance.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Any dispute regarding Services is solely between the User and the Driver.
          </p>
        </section>

        {/* 13. LIMITATION OF LIABILITY */}
        <section id="section-13" aria-labelledby="section-13-heading">
          <h2 id="section-13-heading" className="text-2xl font-bold text-slate-900">
            13. Limitation of Liability
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            To the maximum extent permitted by law, Waste Driver Inc.’s total liability arising from or related to the Platform or
            Services shall not exceed the greater of:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>CAD $100; or</li>
            <li>the total Platform fees paid to Waste Driver Inc. in the three (3) months preceding the claim.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. shall not be liable for any:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>indirect damages;</li>
            <li>consequential damages;</li>
            <li>special damages;</li>
            <li>punitive damages;</li>
            <li>environmental damages;</li>
            <li>cleanup costs;</li>
            <li>business interruption;</li>
            <li>lost profits;</li>
            <li>regulatory penalties; or</li>
            <li>reputational damages.</li>
          </ul>
        </section>

        {/* 14. ACCOUNT TERMINATION */}
        <section id="section-14" aria-labelledby="section-14-heading">
          <h2 id="section-14-heading" className="text-2xl font-bold text-slate-900">
            14. Account Termination
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. reserves the right to suspend or terminate any account at its sole discretion, including where:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>unlawful conduct is suspected;</li>
            <li>prohibited materials are identified;</li>
            <li>unsafe activity occurs;</li>
            <li>fraudulent activity is suspected; or</li>
            <li>these Terms are breached.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Termination does not waive or limit any rights or remedies available to Waste Driver Inc.
          </p>
        </section>

        {/* 15. PRIVACY */}
        <section id="section-15" aria-labelledby="section-15-heading">
          <h2 id="section-15-heading" className="text-2xl font-bold text-slate-900">
            15. Privacy
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Users and Drivers consent to the collection, storage, use, and disclosure of information necessary for operation of the
            Platform, payment processing, regulatory compliance, dispute management, and legal enforcement.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. may disclose information where required by law, court order, law enforcement request, or regulatory
            authority.
          </p>
        </section>

        {/* 16. GOVERNING LAW */}
        <section id="section-16" aria-labelledby="section-16-heading">
          <h2 id="section-16-heading" className="text-2xl font-bold text-slate-900">
            16. Governing Law
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            This Agreement shall be governed by and interpreted in accordance with the laws of the Province of Alberta and the
            federal laws of Canada applicable therein.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Any dispute arising from this Agreement shall be brought exclusively before the courts of Alberta.
          </p>
        </section>

        {/* 17. SEVERABILITY */}
        <section id="section-17" aria-labelledby="section-17-heading">
          <h2 id="section-17-heading" className="text-2xl font-bold text-slate-900">
            17. Severability
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            If any provision of this Agreement is determined to be invalid or unenforceable, the remaining provisions shall remain
            in full force and effect.
          </p>
        </section>

        {/* 18. ELECTRONIC ACCEPTANCE */}
        <section id="section-18" aria-labelledby="section-18-heading">
          <h2 id="section-18-heading" className="text-2xl font-bold text-slate-900">
            18. Electronic Acceptance
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            By creating an account, clicking “I Agree,” accessing the Platform, or using the Services, Users and Drivers:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>acknowledge they have read and understood this Agreement;</li>
            <li>voluntarily accept all risks associated with participation;</li>
            <li>agree to be legally bound by these Terms; and</li>
            <li>consent to electronic execution and recordkeeping.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Electronic acceptance shall have the same force and effect as a handwritten signature.
          </p>
        </section>

        {/* 19. USER SIGN-OFF ACKNOWLEDGEMENT */}
        <section id="section-19" aria-labelledby="section-19-heading">
          <h2 id="section-19-heading" className="text-2xl font-bold text-slate-900">
            19. User Sign-Off Acknowledgement
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I acknowledge and agree that:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>Waste Driver Inc. is only a technology platform;</li>
            <li>Waste Driver Inc. is not responsible for hauling, transportation, disposal, or environmental compliance;</li>
            <li>I am solely responsible for the legality and classification of materials submitted for transport;</li>
            <li>I release Waste Driver Inc. from liability related to Services arranged through the Platform; and</li>
            <li>I agree to all Terms of this Agreement.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            <span className="block">User Name: ____________________________</span>
            <span className="block">Company (if applicable): ____________________________</span>
            <span className="block">Date: ____________________________</span>
            <span className="block">Electronic Signature: ____________________________</span>
          </p>
        </section>

        {/* 20. DRIVER SIGN-OFF ACKNOWLEDGEMENT */}
        <section id="section-20" aria-labelledby="section-20-heading">
          <h2 id="section-20-heading" className="text-2xl font-bold text-slate-900">
            20. Driver Sign-Off Acknowledgement
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I acknowledge and agree that:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>I am an independent contractor and not an employee of Waste Driver Inc.;</li>
            <li>I am solely responsible for all hauling, transportation, environmental, and legal compliance obligations;</li>
            <li>I am solely responsible for my vehicle, trailer, insurance, permits, and safety practices;</li>
            <li>I assume all risks associated with Services performed through the Platform;</li>
            <li>I release Waste Driver Inc. from liability related to Services arranged through the Platform; and</li>
            <li>I agree to all Terms of this Agreement.</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            <span className="block">Driver Name: ____________________________</span>
            <span className="block">Business Name (if applicable): ____________________________</span>
            <span className="block">Date: ____________________________</span>
            <span className="block">Electronic Signature: ____________________________</span>
          </p>
        </section>

        {/* IMPORTANT LEGAL RECOMMENDATION */}
        <section id="section-21" aria-labelledby="section-21-heading">
          <h2 id="section-21-heading" className="text-2xl font-bold text-slate-900">
            Important Legal Recommendation
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Waste Driver Inc. should have this document reviewed by:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>an Alberta transportation lawyer;</li>
            <li>an environmental lawyer;</li>
            <li>a privacy lawyer; and</li>
            <li>an insurance advisor</li>
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            prior to implementation within the App or commercial operations.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Additional recommended documents include:
          </p>
          <ol className="mt-4 list-decimal list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>Privacy Policy</li>
            <li>Driver Insurance Verification Policy</li>
            <li>Hazardous Materials Prohibition Policy</li>
            <li>App Terms of Service</li>
            <li>Payment Terms and Refund Policy</li>
            <li>Corporate Independent Contractor Agreement</li>
            <li>Emergency Spill Reporting Policy</li>
            <li>Commercial Vehicle Compliance Policy</li>
            <li>Environmental Incident Reporting Procedure</li>
            <li>Municipal and Landfill Compliance Policy</li>
          </ol>
        </section>

      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <a
          href="/download"
          className="inline-block rounded-xl bg-emerald-600 px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-emerald-700 transition"
        >
          Download the Waste Driver App
        </a>
      </section>
    </div>
  );
}
