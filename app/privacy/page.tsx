import Link from 'next/link'
import { POLICY_EMAIL } from '@/lib/utils/constants'
import './privacy.css'

export const metadata = {
  title: 'Privacy Policy - Sandstone Stake Pool',
  description: 'Privacy Policy for Sandstone Ventures Pty Ltd - Cardano Stake Pool',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-indigo-50/30 to-purple-50/30 -z-10" />

      <div id="privacy" className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl shadow-lg">
          <section id="policy" className="p-4 sm:p-6 lg:p-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Protecting your privacy and the confidentiality of your personal information is extremely important to us.
            This Privacy Policy is for customers of Sandstone Ventures Pty Ltd{' '}
            (<Link href="/" className="font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all">SANDSTONE</Link>).
            SANDSTONE is committed to protecting your privacy when you use our products and services and when you visit
            our website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The purpose of this Privacy Policy is to explain:
          </p>
          <ol className="text-gray-700 leading-relaxed">
            <li>Application of this Privacy Policy</li>
            <li>The kind of information SANDSTONE may collect about you, how we collect it, and how we use it</li>
            <li>How we may disclose that information</li>
            <li>How you can access the information we hold about you</li>
            <li>When we may use your information to contact you</li>
            <li>The protection of your personal information</li>
            <li>How you can make a complaint</li>
          </ol>
          </section>

          <section id="application" className="p-4 sm:p-6 lg:p-8 border-t border-white/30">
          <h2><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Application of this Privacy Policy</span></h2>
          <p className="text-gray-700 leading-relaxed">
            SANDSTONE&apos;s Privacy Policy applies to personal information collected by SANDSTONE, whether we have asked for
            the information or not. SANDSTONE is governed by the Australian Privacy Principles (APPs) under the Privacy Act
            1988 (Cth). SANDSTONE will review this policy regularly, and may update it from time to time. If we make changes,
            we will post those changes on the privacy page of SANDSTONE&apos;s website.
          </p>
          </section>

          <section id="collection" className="p-4 sm:p-6 lg:p-8 border-t border-white/30">
          <h2><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Collection and use of personal information</span></h2>
          <h3><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Why we collect personal information</span></h3>
          <p className="text-gray-700 leading-relaxed">
            SANDSTONE collects personal information about you because we need it to provide a product or service that you
            have requested, for example, if you have requested information from the SANDSTONE website, because you work
            for us, or apply to us for a job or work experience.
          </p>

          <h3><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">How we collect information</span></h3>
          <p className="text-gray-700 leading-relaxed">
            Broadly, there are two types of information or data we collect:
          </p>

          <h4><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Information that you specifically give us</span></h4>
          <p className="text-gray-700 leading-relaxed">
            For example, you may provide information about yourself when you are filling in a form. This type of
            information may include your home address, business address, telephone number, business telephone number,
            email address and date of birth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The information that you give us may be:
          </p>
          <ol className="text-gray-700 leading-relaxed">
            <li>
              Personal information that is required. In some instances, you must provide personal information if you wish
              to use a particular service, purchase from us or participate in an activity.
            </li>
            <li>
              Personal information that is optional. You may choose to provide some personal information which is not
              required but is directly related to SANDSTONE&apos;s functions or activities. Usually this type of information will enable
              SANDSTONE to improve or broaden the services we can offer you. If you choose not to provide this optional
              information, we would still be able to offer you the service, but perhaps with fewer options than if you had
              provided the optional information. For example, we may be able to provide you with specific SANDSTONE
              promotions that match your interests. If you provide us with unsolicited information that we do not require or which is
              not directly related to SANDSTONE&apos;s functions or activities, SANDSTONE may be required to destroy or de-identify
              that information, provided it is lawful and reasonable to do so. Sometimes you will be asked to confirm that
              you agree to a particular activity. For example, you may need to expressly agree that you would like to receive
              a newsletter or to confirm that you agree to the terms and conditions of a competition. You may be able to
              make changes to the information you provided us (for example, if you change your email address) or withdraw the
              permission you gave us for a particular service. We will make it clear how you do that.
            </li>
          </ol>
          </section>

          <section id="disclosure" className="p-4 sm:p-6 lg:p-8 border-t border-white/30">
          <h2><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Disclosure of Personal Information</span></h2>
          <h3><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Disclosure of personal information to third parties</span></h3>
          <p className="text-gray-700 leading-relaxed">
            SANDSTONE may exchange your personal information with other partner businesses so that SANDSTONE may provide
            an integrated service to its customers. SANDSTONE may use this information for any of the purposes mentioned in
            Section 2. SANDSTONE may disclose your personal information to third parties for the
            following purposes:
          </p>
          <ol className="text-gray-700 leading-relaxed">
            <li>to provide the service you wish to use;</li>
            <li>to customise and promote SANDSTONE services which may be of interest to you;</li>
            <li>to provide technical support to you to use SANDSTONE&apos;s services;</li>
            <li>if permitted or required by law;</li>
            <li>or otherwise with your consent.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed">
            In many cases, SANDSTONE imposes contractual restrictions equivalent to those imposed on SANDSTONE under the
            Privacy Act in respect of collection and use of personal information by those third parties. In some cases,
            SANDSTONE&apos;s ability to impose contractual restrictions is limited. In those circumstances, SANDSTONE will
            carefully consider the risks to the protection of personal information when entering into arrangements with
            third parties.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These third parties may be located in Australia or overseas. We may share your email address and home address
            with third parties to deliver brochures, videos, information about promotions, news and other information
            about our website, products, services or special promotions on our behalf. SANDSTONE may also disclose your personal
            information (excluding sensitive information about you) to third parties for the purposes of direct marketing
            SANDSTONE&apos;s services including brochures, videos, information about promotions, news and other information
            about our website, products, services or special promotions. You will be able to opt-out of direct marketing at any
            time if you so choose.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Under no circumstances will SANDSTONE sell or receive payment for licensing or disclosing your personal
            information
          </p>

          <h4><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Accessing your personal information</span></h4>
          <p className="text-gray-700 leading-relaxed">
            You have the right to request access to personal information that is held by SANDSTONE about you. You also
            have the right to request the correction of any of your personal information that SANDSTONE holds. SANDSTONE will
            take reasonable steps to make appropriate corrections to personal information so that it is accurate, complete
            and up-to-date. To seek access to, or correction of, your personal information please contact SANDSTONE as
            follows:
          </p>
          <dl className="text-gray-700">
            <dt>By email</dt>
            <dd><a href={`mailto:${POLICY_EMAIL}`} className="font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all">{POLICY_EMAIL}</a></dd>
            <dt>By post</dt>
            <dd>
              <address className="not-italic">
                Privacy Officer, Sandstone Ventures Pty Ltd<br />
                PO Box 2011<br />
                SUBIACO, WA 6904<br />
              </address>
            </dd>
          </dl>

          <h4><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Use of your personal information to contact you</span></h4>
          <p className="text-gray-700 leading-relaxed">
            We will never knowingly send you unsolicited commercial electronic messages. More information on the Spam Act
            2003 is available from the regulator&apos;s website:{' '}
            <a href="https://www.acma.gov.au/spam" rel="noopener" target="_blank" className="font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all">
              www.acma.gov.au/spam
            </a>. We may use information
            that we know about your likes and interests to tell you about other SANDSTONE programs, products and services.
            We may know about your likes and interests because you have provided that information.
          </p>

          <h4><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Protection of your personal information</span></h4>
          <p className="text-gray-700 leading-relaxed">
            SANDSTONE has implemented appropriate physical, electronic and managerial security procedures in order to
            protect personal information from loss, misuse, alteration or destruction. SANDSTONE regularly reviews
            security and encryption technologies and will strive to protect information to the fullest extent possible. We
            encourage you to be vigilant about the protection of your own personal information when using third party digital
            services.
          </p>

          <h4><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Making a complaint</span></h4>
          <p className="text-gray-700 leading-relaxed">
            If you have a complaint about the way we handle your personal information, you may contact the Office of the
            Australian Information Commissioner by calling them at <a href="tel:1300-363-992" className="font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all">1300 363 992</a>, making a
            complaint online at{' '}
            <a href="https://www.oaic.gov.au" rel="noopener" target="_blank" className="font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all">www.oaic.gov.au</a> or writing to the Office of the
            Australian Information Commissioner, GPO Box 5218 Sydney, NSW 2001.
          </p>

          <h4><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Privacy and Change of Control</span></h4>
          <p className="text-gray-700 leading-relaxed">
            In the event SANDSTONE goes through a business transition, such as a merger, being acquired by another
            company, or selling a portion of its assets, users&apos; personal information will, in most instances, be part of the assets
            transferred.
          </p>

          <h4><span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Linked sites</span></h4>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to other sites. We are not responsible for the privacy practices or the content
            of such web sites. We encourage you to read the privacy statements of any linked sites as their privacy policy
            may differ from ours.
          </p>
          </section>
        </div>
      </div>
    </div>
  )
}
