<style scoped>
#privacy {
  padding-left: 60px;
  padding-right: 60px;
  margin: auto;
  max-width: 1400px;
  counter-reset: section
}

#privacy p {
  margin-top: 1em;
}

#privacy h2 {
  margin-top: 1em;
  counter-reset: sub-section
}

#privacy h3 {
  margin-top: 1em;
  counter-reset: composite
}

#privacy h4 {
  margin-top: 1em;
  font-weight: bolder;
  counter-reset: detail
}

#privacy h2:before {
  counter-increment: section;
  content: counter(section) ". ";
}

#privacy h3:before {
  counter-increment: sub-section;
  content: counter(section) "." counter(sub-section) " ";
}

#privacy h4:before {
  counter-increment: composite;
  content: counter(section) "." counter(sub-section) "." counter(composite) " ";
}

#privacy h5:before {
  counter-increment: detail;
  content: counter(section) "." counter(sub-section) "." counter(composite) "." counter(detail) " ";
}

#privacy section {
  margin-bottom: 100px;
}

#privacy ol, ul {
  margin-top: 1em;
}

#privacy ol, ul {
  counter-reset: list;
}

#privacy ol > li {
  padding-left: 4rem;
  list-style: none;
  position: relative;
  margin-bottom: 6px;
}

#privacy ol > li:before {
  counter-increment: list;
  content: "(" counter(list, lower-alpha) ")";
  position: absolute;
  left: 0.1em;
}

#privacy ul > li {
  padding-left: 2.0em;
  list-style: none;
  position: relative;
  margin-bottom: 6px;
}

#privacy ul > li:before {
  content: "-";
  position: absolute;
  left: -2.0em;
}

#privacy dl {
  margin-top: 1em;
  text-indent: 0;
}

#privacy dl > dt {
  font-weight: bolder;
  padding-bottom: 8px;
}

#privacy dl > dt:after {
  content: ":";
}

#privacy dl > dd {
  padding-bottom: 8px;
  text-indent: 0;
}
</style>

<template>
  <div>
    <div id="privacy">
      <section id="policy">
        <h1>Privacy Policy</h1>
        <p>
          Protecting your privacy and the confidentiality of your personal information is extremely important to us.
          This
          Privacy Policy is for customers of Sandstone Ventures Pty Ltd <span>(<NuxtLink
            to="/">SANDSTONE</NuxtLink>)</span>.
          SANDSTONE is committed to protecting your privacy when you use our products and services and when you visit
          our
          website.
        </p>
        <p>
          The purpose of this Privacy Policy is to explain:
        </p>
        <ol>
          <li>Application of this Privacy Policy</li>
          <li>The kind of information SANDSTONE may collect about you, how we collect it, and how we use it</li>
          <li>How we may disclose that information</li>
          <li>How you can access the information we hold about you</li>
          <li>When we may use your information to contact you</li>
          <li>The protection of your personal information</li>
          <li>How you can make a complaint</li>
        </ol>
      </section>
      <section id="application">
        <h2>Application of this Privacy Policy</h2>
        <p>
          SANDSTONE’s Privacy Policy applies to personal information collected by SANDSTONE, whether we have asked for
          the
          information or not. SANDSTONE is governed by the Australian Privacy Principles (APPs) under the Privacy Act
          1988
          (Cth). SANDSTONE will review this policy regularly, and may update it from time to time. If we make changes,
          we
          will post those changes on the privacy page of SANDSTONE’s website.
        </p>
      </section>
      <section id="collection">
        <h2>Collection and use of personal information</h2>
        <h3>Why we collect personal information</h3>
        <p>
          SANDSTONE collects personal information about you because we need it to provide a product or service that you
          have requested, for example, if you have requested information from the SANDSTONE website, because you work
          for
          us, or apply to us for a job or work experience.
        </p>
        <h3>How we collect information</h3>
        <p>
          Broadly, there are two types of information or data we collect:
        </p>
        <h4>Information that you specifically give us</h4>
        <p>
          For example, you may provide information about yourself when you are filling in a form. This type of
          information may include your home address, business address, telephone number, business telephone number,
          email
          address and date of birth.
        </p>
        <p>
          The information that you give us may be:
        </p>
        <ol>
          <li>
            Personal information that is required. In some instances, you must provide personal information if you wish
            to
            use a particular service, purchase from us or participate in an activity.
          </li>
          <li>
            Personal information that is optional. You may choose to provide some personal information which is not
            required
            but is directly related to SANDSTONE’s functions or activities. Usually this type of information will enable
            SANDSTONE to improve or broaden the services we can offer you. If you choose not to provide this optional
            information, we would still be able to offer you the service, but perhaps with fewer options than if you had
            provided the optional information. For example, we may be able to provide you with specific SANDSTONE
            promotions
            that match your interests. If you provide us with unsolicited information that we do not require or which is
            not
            directly related to SANDSTONE’s functions or activities, SANDSTONE may be required to destroy or de-identify
            that information, provided it is lawful and reasonable to do so. Sometimes you will be asked to confirm that
            you
            agree to a particular activity. For example, you may need to expressly agree that you would like to receive
            a
            newsletter or to confirm that you agree to the terms and conditions of a competition. You may be able to
            make
            changes to the information you provided us (for example, if you change your email address) or withdraw the
            permission you gave us for a particular service. We will make it clear how you do that.
          </li>
        </ol>
      </section>
      <section id="disclosure">
        <h2>Disclosure of Personal Information</h2>
        <h3>Disclosure of personal information to third parties</h3>
        <p>
          SANDSTONE may exchange your personal information with other partner businesses so that SANDSTONE may provide
          an
          integrated service to its customers. SANDSTONE may use this information for any of the purposes mentioned in
          <a href="#collection">Section 2</a>. SANDSTONE may disclose your personal information to third parties for the
          following purposes:
        </p>
        <ol>
          <li>to provide the service you wish to use;</li>
          <li>to customise and promote SANDSTONE services which may be of interest to you;</li>
          <li>to provide technical support to you to use SANDSTONE’s services;</li>
          <li>if permitted or required by law;</li>
          <li>or otherwise with your consent.</li>
        </ol>
        <p>
          In many cases, SANDSTONE imposes contractual restrictions equivalent to those imposed on SANDSTONE under the
          Privacy Act in respect of collection and use of personal information by those third parties. In some cases,
          SANDSTONE’s ability to impose contractual restrictions is limited. In those circumstances, SANDSTONE will
          carefully consider the risks to the protection of personal information when entering into arrangements with
          third parties.
        </p>
        <p>
          These third parties may be located in Australia or overseas. We may share your email address and home address
          with third parties to deliver brochures, videos, information about promotions, news and other information
          about
          our website, products, services or special promotions on our behalf. SANDSTONE may also disclose your personal
          information (excluding sensitive information about you) to third parties for the purposes of direct marketing
          SANDSTONE’s services including brochures, videos, information about promotions, news and other information
          about
          our website, products, services or special promotions. You will be able to opt-out of direct marketing at any
          time if you so choose.
        </p>
        <p>
          Under no circumstances will SANDSTONE sell or receive payment for licensing or disclosing your personal
          information
        </p>
        <h4>Accessing your personal information</h4>
        <p>
          You have the right to request access to personal information that is held by SANDSTONE about you. You also
          have
          the right to request the correction of any of your personal information that SANDSTONE holds. SANDSTONE will
          take reasonable steps to make appropriate corrections to personal information so that it is accurate, complete
          and up-to-date. To seek access to, or correction of, your personal information please contact SANDSTONE as
          follows:
        </p>
        <dl>
          <dt>By email</dt>
          <dd><a href="mailto:policy@sandstone.io">policy@sandstone.io</a></dd>
          <dt>By post</dt>
          <dd>
            <address>
              Privacy Officer, Sandstone Ventures Pty Ltd<br>
              C/O Palermo Chartered Accountants<br>
              Level 1, 284 Oxford Street<br>
              LEEDERVILLE, WA 6007
            </address>
          </dd>
        </dl>
        <h4>Use of your personal information to contact you</h4>
        <p>
          We will never knowingly send you unsolicited commercial electronic messages. More information on the Spam Act
          2003 is available from the regulator’s website:
          <a target="_blank" href="https://www.acma.gov.au/spam">www.acma.gov.au/spam</a>. We may use information
          that we know about your likes and interests to tell you about other SANDSTONE programs, products and services.
          We
          may know about your likes and interests because you have provided that information.
        </p>
        <h4>Protection of your personal information</h4>
        <p>
          SANDSTONE has implemented appropriate physical, electronic and managerial security procedures in order to
          protect personal information from loss, misuse, alteration or destruction. SANDSTONE regularly reviews
          security
          and encryption technologies and will strive to protect information to the fullest extent possible. We
          encourage
          you to be vigilant about the protection of your own personal information when using third party digital
          services.
        </p>
        <h4>Making a complaint</h4>
        <p>
          If you have a complaint about the way we handle your personal information, you may contact the Office of the
          Australian Information Commissioner by calling them at <a href="tel:1300-363-992">1300 363 992</a>, making a
          complaint online at
          <a target="_blank" href="https://www.oaic.gov.au">www.oaic.gov.au</a> or writing to the Office of the
          Australian
          Information Commissioner, GPO Box 5218 Sydney, NSW 2001.
        </p>
        <h4>Privacy and Change of Control</h4>
        <p>
          In the event SANDSTONE goes through a business transition, such as a merger, being acquired by another
          company,
          or selling a portion of its assets, users' personal information will, in most instances, be part of the assets
          transferred.
        </p>
        <h4>Linked sites</h4>
        <p>
          Our website may contain links to other sites. We are not responsible for the privacy practices or the content
          of such web sites. We encourage you to read the privacy statements of any linked sites as their privacy policy
          may differ from ours.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
onMounted(() => scrollTo(0, 0))

const navigation = inject('navigation')
navigation.value = []
</script>